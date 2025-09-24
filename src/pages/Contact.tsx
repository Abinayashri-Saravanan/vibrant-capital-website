import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Mail, MessageCircle } from "lucide-react";
import { useState, useMemo } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { isArabic } = useLanguage();
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
  
  const maxWords = 1000;
  const wordCount = useMemo(() => {
    return formData.message.trim().split(/\s+/).filter(word => word.length > 0).length;
  }, [formData.message]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    
    // For message field, check word count
    if (id === 'message') {
      const words = value.trim().split(/\s+/).filter(word => word.length > 0);
      if (words.length > maxWords) {
        return; // Don't update if exceeds word limit
      }
    }
    
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
    <div className="min-h-screen bg-background" dir={isArabic ? 'rtl' : 'ltr'}>
      <Navigation />
      
      <div className="pt-32 pb-8">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className={`${isArabic ? 'text-right' : 'text-center'} mb-8`}>
              <h1 className="text-4xl font-bold mb-4">{isArabic ? "ابدأ مع فايبرانت كابيتال" : "Get Started with Vibrant Capital"}</h1>
              <p className={`text-lg text-muted-foreground max-w-2xl ${isArabic ? '' : 'mx-auto'}`}>
                {isArabic ? "دعونا نناقش كيف يمكن لفايبرانت كابيتال إدماج الذكاء في عملياتكم وتسريع تحولكم." : "Let's discuss how Vibrant Capital can embed intelligence into your operations and accelerate your transformation."}
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
                          <Label htmlFor="fullName">{isArabic ? "الاسم الكامل *" : "Full Name *"}</Label>
                          <Input 
                            id="fullName" 
                            placeholder={isArabic ? "الاسم الكامل" : "John Smith"} 
                            value={formData.fullName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">{isArabic ? "البريد الإلكتروني *" : "Email Address *"}</Label>
                          <Input 
                            id="email" 
                            type="email" 
                            placeholder={isArabic ? "name@company.com" : "john@company.com"} 
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                      
                      {/* Row 2: Company and Phone */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="company">{isArabic ? "الشركة *" : "Company *"}</Label>
                          <Input 
                            id="company" 
                            placeholder={isArabic ? "اسم الشركة" : "Your Company"} 
                            value={formData.company}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">{isArabic ? "رقم الهاتف *" : "Phone Number *"}</Label>
                          <Input 
                            id="phone" 
                            placeholder={isArabic ? "+966 5X XXX XXXX" : "+1 (555) 123-4567"} 
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      {/* Row 3: Company Size and Industry */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="companySize">{isArabic ? "حجم الشركة" : "Company Size"}</Label>
                          <Select onValueChange={(value) => handleSelectChange('companySize', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder={isArabic ? "اختر الحجم" : "Select size"} />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="startup">{isArabic ? "شركة ناشئة (1-10)" : "Startup (1-10)"}</SelectItem>
                              <SelectItem value="small">{isArabic ? "صغيرة (11-50)" : "Small (11-50)"}</SelectItem>
                              <SelectItem value="medium">{isArabic ? "متوسطة (51-200)" : "Medium (51-200)"}</SelectItem>
                              <SelectItem value="large">{isArabic ? "كبيرة (201-1000)" : "Large (201-1000)"}</SelectItem>
                              <SelectItem value="enterprise">{isArabic ? "مؤسسة (1000+)" : "Enterprise (1000+)"}</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="industry">{isArabic ? "القطاع" : "Industry"}</Label>
                          <Select onValueChange={(value) => handleSelectChange('industry', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder={isArabic ? "اختر القطاع" : "Select industry"} />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="banking">{isArabic ? "الخدمات المصرفية والمالية" : "Banking & Financial"}</SelectItem>
                              <SelectItem value="healthcare">{isArabic ? "الرعاية الصحية" : "Healthcare"}</SelectItem>
                              <SelectItem value="manufacturing">{isArabic ? "التصنيع" : "Manufacturing"}</SelectItem>
                              <SelectItem value="retail">{isArabic ? "التجزئة والتجارة الإلكترونية" : "Retail & E-commerce"}</SelectItem>
                              <SelectItem value="energy">{isArabic ? "الطاقة والمرافق" : "Energy & Utilities"}</SelectItem>
                              <SelectItem value="transportation">{isArabic ? "النقل" : "Transportation"}</SelectItem>
                              <SelectItem value="telecom">{isArabic ? "الاتصالات" : "Telecommunications"}</SelectItem>
                              <SelectItem value="insurance">{isArabic ? "التأمين" : "Insurance"}</SelectItem>
                              <SelectItem value="public">{isArabic ? "القطاع العام" : "Public Sector"}</SelectItem>
                              <SelectItem value="technology">{isArabic ? "التقنية" : "Technology"}</SelectItem>
                              <SelectItem value="other">{isArabic ? "أخرى" : "Other"}</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      {/* Row 4: Interest and Message */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="yourInterest">{isArabic ? "اهتمامك" : "Your Interest"}</Label>
                          <Select onValueChange={(value) => handleSelectChange('yourInterest', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder={isArabic ? "اختر الاهتمام" : "Select interest"} />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="potential-investor">{isArabic ? "مستثمر محتمل" : "Potential Investor"}</SelectItem>
                              <SelectItem value="strategic-partner">{isArabic ? "شريك استراتيجي" : "Strategic Partner"}</SelectItem>
                              <SelectItem value="ai-strategy">{isArabic ? "جلسة استراتيجية للذكاء" : "AI Strategy Session"}</SelectItem>
                              <SelectItem value="ai-assessment">{isArabic ? "تقييم الذكاء" : "AI Assessment"}</SelectItem>
                              <SelectItem value="pilot-project">{isArabic ? "مشروع تجريبي" : "Pilot Project"}</SelectItem>
                              <SelectItem value="full-implementation">{isArabic ? "تنفيذ" : "Implementation"}</SelectItem>
                              <SelectItem value="consultation">{isArabic ? "استشارة عامة" : "General Consultation"}</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <Label htmlFor="message">{isArabic ? "رسالتك" : "Message"}</Label>
                            {wordCount > maxWords * 0.8 && (
                              <span className={`text-xs ${wordCount > maxWords * 0.95 ? 'text-destructive' : 'text-muted-foreground'}`}>
                                {isArabic ? `${wordCount}/${maxWords} كلمة` : `${wordCount}/${maxWords} words`}
                              </span>
                            )}
                          </div>
                          <Textarea 
                            id="message" 
                            placeholder={isArabic ? "أخبرنا عن احتياجاتك المحددة..." : "Tell us about your specific needs..."}
                            className="min-h-[120px] resize-none"
                            value={formData.message}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      
                      {/* Submit Button */}
                      <div className="pt-4">
                        <Button type="submit" className="w-full md:w-auto px-8" disabled={isSubmitting}>
                          {isArabic ? (isSubmitting ? "جارٍ الإرسال..." : "إرسال الطلب") : (isSubmitting ? "Submitting..." : "Submit Request")}
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
                        <h3 className="font-semibold text-lg">{isArabic ? "اتصال مباشر" : "Direct Contact"}</h3>
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
                        <h3 className="font-semibold">{isArabic ? "تحول بالذكاء الاصطناعي" : "AI Transformation"}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {isArabic ? "هل أنت مستعد لاستكشاف كيف يمكن للذكاء الاصطناعي التطبيقي إحداث ثورة في قطاعك؟ نساعدك على استكشاف الإمكانيات وخلق قيمة استراتيجية عبر تبنٍّ عملي وآمن وقابل للقياس." : "Ready to explore how Applied AI can revolutionize your industry? We help you navigate possibilities and create strategic value through practical, secure, and measurable AI adoption."}
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