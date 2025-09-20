import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Mail, MessageCircle } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    companySize: "",
    industry: "",
    yourInterest: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSelectChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) {
        throw error;
      }

      toast({
        title: "Message sent!",
        description: "Thank you for your message! We'll get back to you soon.",
      });

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        company: "",
        phone: "",
        companySize: "",
        industry: "",
        yourInterest: "",
        message: ""
      });
    } catch (error: any) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-8">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4">Get Started with Vibrant Capital</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Let's discuss how Vibrant Capital can embed intelligence into your operations and accelerate your transformation.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Row 1: Name and Email */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="fullName">Full Name *</Label>
                          <Input 
                            id="fullName" 
                            placeholder="John Smith" 
                            value={formData.fullName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input 
                            id="email" 
                            type="email" 
                            placeholder="john@company.com" 
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                      
                      {/* Row 2: Company and Phone */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="company">Company *</Label>
                          <Input 
                            id="company" 
                            placeholder="Your Company" 
                            value={formData.company}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input 
                            id="phone" 
                            placeholder="+1 (555) 123-4567" 
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      {/* Row 3: Company Size and Industry */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="companySize">Company Size</Label>
                          <Select onValueChange={(value) => handleSelectChange('companySize', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select size" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="startup">Startup (1-10)</SelectItem>
                              <SelectItem value="small">Small (11-50)</SelectItem>
                              <SelectItem value="medium">Medium (51-200)</SelectItem>
                              <SelectItem value="large">Large (201-1000)</SelectItem>
                              <SelectItem value="enterprise">Enterprise (1000+)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="industry">Industry</Label>
                          <Select onValueChange={(value) => handleSelectChange('industry', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select industry" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="banking">Banking & Financial</SelectItem>
                              <SelectItem value="healthcare">Healthcare</SelectItem>
                              <SelectItem value="manufacturing">Manufacturing</SelectItem>
                              <SelectItem value="retail">Retail & E-commerce</SelectItem>
                              <SelectItem value="energy">Energy & Utilities</SelectItem>
                              <SelectItem value="transportation">Transportation</SelectItem>
                              <SelectItem value="telecom">Telecommunications</SelectItem>
                              <SelectItem value="insurance">Insurance</SelectItem>
                              <SelectItem value="public">Public Sector</SelectItem>
                              <SelectItem value="technology">Technology</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      {/* Row 4: Interest and Message */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="yourInterest">Your Interest</Label>
                          <Select onValueChange={(value) => handleSelectChange('yourInterest', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select interest" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="potential-investor">Potential Investor</SelectItem>
                              <SelectItem value="strategic-partner">Strategic Partner</SelectItem>
                              <SelectItem value="ai-strategy">AI Strategy Session</SelectItem>
                              <SelectItem value="ai-assessment">AI Assessment</SelectItem>
                              <SelectItem value="pilot-project">Pilot Project</SelectItem>
                              <SelectItem value="full-implementation">Implementation</SelectItem>
                              <SelectItem value="consultation">General Consultation</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="message">Message</Label>
                          <Textarea 
                            id="message" 
                            placeholder="Tell us about your specific needs..."
                            className="min-h-[80px] resize-none"
                            value={formData.message}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      
                      {/* Submit Button */}
                      <div className="pt-4">
                        <Button type="submit" className="w-full md:w-auto px-8" disabled={isSubmitting}>
                          {isSubmitting ? "Submitting..." : "Submit Request"}
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information Sidebar */}
              <div className="space-y-6">
                {/* Email Contact */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Direct Contact</h3>
                        <a 
                          href="mailto:info@haiintel.com"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          info@haiintel.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* AI Transformation Info */}
                <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <MessageCircle className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="font-semibold">AI Transformation</h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Ready to explore how Applied AI can revolutionize your industry? We help you navigate possibilities and create strategic value through practical, secure, and measurable AI adoption.
                      </p>
                    </div>
                  </CardContent>
                </Card>

              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;