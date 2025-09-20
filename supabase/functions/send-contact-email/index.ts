import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.57.4'
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const airtableToken = Deno.env.get("AIRTABLE_PERSONAL_ACCESS_TOKEN");
const airtableBaseId = Deno.env.get("AIRTABLE_BASE_ID");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Max-Age": "86400",
};

interface ContactRequest {
  fullName: string;
  email: string;
  company?: string;
  phone?: string;
  companySize?: string;
  industry?: string;
  yourInterest: string;
  message?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { fullName, email, company, phone, companySize, industry, yourInterest, message }: ContactRequest = await req.json();

    // Initialize Supabase client
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Split full name into first and last name
    const nameParts = fullName.trim().split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    // Save to database
    const { data, error: dbError } = await supabaseClient
      .from('contacts')
      .insert({
        first_name: firstName,
        last_name: lastName,
        email,
        company,
        phone,
        company_size: companySize,
        industry,
        your_interest: yourInterest,
        subject: yourInterest, // Use yourInterest as subject for backward compatibility
        message: message || ''
      })
      .select()
      .single();

    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error("Failed to save contact form");
    }

    console.log("Contact saved to database:", data);

    // Save to Airtable
    if (airtableToken && airtableBaseId) {
      try {
        const airtableResponse = await fetch(`https://api.airtable.com/v0/${airtableBaseId}/Contacts`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${airtableToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fields: {
              'First Name': firstName,
              'Last Name': lastName,
              'Email': email,
              'Company': company || '',
              'Phone': phone || '',
              'Company Size': companySize || '',
              'Industry': industry || '',
              'Interest': yourInterest,
              'Message': message || '',
              'Submitted At': new Date().toISOString()
            }
          })
        });

        if (airtableResponse.ok) {
          const airtableData = await airtableResponse.json();
          console.log("Contact saved to Airtable:", airtableData);
        } else {
          const airtableError = await airtableResponse.text();
          console.error("Airtable error:", airtableError);
        }
      } catch (airtableError) {
        console.error("Failed to save to Airtable:", airtableError);
        // Don't throw error here - we don't want Airtable issues to break the email flow
      }
    } else {
      console.log("Airtable credentials not configured, skipping Airtable save");
    }

    // Send email to company
    const emailResponse = await resend.emails.send({
      from: "Vibrant Capital <onboarding@resend.dev>",
      to: ["info@haiintel.com"],
      subject: `New Contact Request: ${yourInterest}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        ${companySize ? `<p><strong>Company Size:</strong> ${companySize}</p>` : ''}
        ${industry ? `<p><strong>Industry:</strong> ${industry}</p>` : ''}
        <p><strong>Interest:</strong> ${yourInterest}</p>
        ${message ? `<p><strong>Message:</strong></p><p>${message.replace(/\n/g, '<br>')}</p>` : ''}
        <hr>
        <p><em>Submitted on: ${new Date().toLocaleString()}</em></p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ 
      success: true, 
      message: "Thank you for your message! We'll get back to you soon." 
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);