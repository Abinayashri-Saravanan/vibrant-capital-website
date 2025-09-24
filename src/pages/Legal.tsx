import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const Legal = () => {
  const { isArabic } = useLanguage();
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className={`${isArabic ? 'text-right' : 'text-center'} mb-16`}>
              <h1 className="text-4xl md:text-5xl font-black mb-8 text-foreground">
                {isArabic ? (
                  <>الإشعارات القانونية و<span className="text-spacex-gradient block">شروط الاستخدام</span></>
                ) : (
                  <>Legal Notices &<span className="text-spacex-gradient block">Terms of Use</span></>
                )}
              </h1>
              <p className="text-lg text-muted-foreground">
                {isArabic ? "تاريخ النفاذ: 20 سبتمبر 2025" : "Effective Date: September 20, 2025"}
              </p>
            </div>

            <Card className="card-spacex border-none bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8 md:p-12">
                <div className="prose prose-lg max-w-none">
                  <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-foreground">{isArabic ? "شروط الاستخدام" : "Terms of Use"}</h2>
                    <p className="text-muted-foreground mb-4">
                      {isArabic ? (
                        <>مرحبًا بكم في موقع فايبرانت كابيتال ("نحن" أو "لنا" أو "خاصتنا")، المتاح على{" "}
                        <span className="text-primary">www.vibrantcapital.ai</span> ("الموقع"). استخدامكم لهذا الموقع، بما في ذلك المحتوى والمواد والمعلومات المتاحة عليه أو من خلاله (معًا، "المواد")، محكوم بشروط الاستخدام هذه ("الشروط"). بالوصول إلى هذا الموقع أو استخدامه، تقرون بأنكم قرأتم وفهمتم ووافقتم على الالتزام بهذه الشروط.</>
                      ) : (
                        <>Welcome to the website of Vibrant Capital ("we," "us," or "our"), available at{" "}
                        <span className="text-primary">www.vibrantcapital.ai</span> (the "Website"). Your use of this Website, including the content, materials, and information available on or through it (together, the "Materials"), is governed by these Terms of Use (these "Terms"). By accessing or using this Website, you acknowledge that you have read, understood, and agree to be bound by these Terms.</>
                      )}
                    </p>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-foreground">{isArabic ? "من نحن" : "Who We Are"}</h2>
                    <p className="text-muted-foreground mb-4">
                      {isArabic ? "هذا الموقع محتفظ به ومُشغل من قبل فايبرانت كابيتال، شركة رأس مال خاص تستثمر وتشغل شركات تجعل تبني الذكاء الاصطناعي التطبيقي عمليًا وآمنًا وقابلًا للقياس. وفقًا للعرف الصناعي، قد تشير المصطلحات في هذا الموقع أحيانًا إلى أن فايبرانت كابيتال تعمل ككيان موحد واحد. ومع ذلك، لكل كيان في فايبرانت كابيتال وجود قانوني منفصل." : "This Website is maintained and operated by Vibrant Capital, a private equity firm investing in and operating companies that make Applied AI adoption practical, secure, and measurable. In accordance with industry custom, terminology on this Website may sometimes suggest that Vibrant Capital operates as a single unified entity. However, each Vibrant Capital entity has its own separate legal existence."}
                    </p>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-foreground">Materials</h2>
                    <p className="text-muted-foreground mb-4">
                      Except for certain Materials made available through any password-protected areas of this Website:
                    </p>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                      <li>All Materials are provided "as is" and may not be relied upon for any purpose.</li>
                      <li>We make no representations or warranties as to the accuracy, completeness, non-infringement, or fitness for purpose of the Materials.</li>
                      <li>Some Materials may originate from third parties and may not have been independently verified.</li>
                      <li>In connection with our investment activities, we are often subject to confidentiality obligations that may limit the disclosures we can make.</li>
                      <li>You are responsible for ensuring that your own computer security is up to date. We accept no responsibility for viruses, malware, or other harmful code contained in or arising from use of the Materials.</li>
                    </ul>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-foreground">Third-Party Sites</h2>
                    <p className="text-muted-foreground mb-4">
                      This Website may include links to third-party websites. We accept no responsibility for the content, 
                      accuracy, or operation of third-party sites. Your use of such sites is entirely at your own risk 
                      and subject to their terms of use.
                    </p>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-foreground">Password-Protected Areas</h2>
                    <p className="text-muted-foreground mb-4">
                      Some Materials may be available only through password-protected areas of this Website. Access to 
                      such areas is limited to authorized individuals or entities. Passwords are confidential and may 
                      not be shared. Materials in these areas are generally confidential and subject to additional 
                      written agreements governing their use.
                    </p>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-foreground">No Offer, Solicitation, or Advice</h2>
                    <p className="text-muted-foreground mb-4">
                      Except as expressly set forth in Materials provided through a password-protected area:
                    </p>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                      <li>Nothing on this Website constitutes an offer to sell or a solicitation to buy any security, asset, or service.</li>
                      <li>Nothing on this Website constitutes investment, legal, tax, or business advice.</li>
                      <li>The Materials are provided for informational purposes only to acquaint entrepreneurs, prospective portfolio companies, and partners with our activities.</li>
                      <li>The Materials are not directed toward any existing or prospective investor in any Vibrant Capital fund.</li>
                    </ul>
                    <p className="text-muted-foreground mb-4">
                      Past performance is not indicative of future results, and there is no assurance that future 
                      investments will be profitable. Any forward-looking statements are based on assumptions that may 
                      not prove correct. Vibrant Capital has no obligation to update or revise such statements.
                    </p>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-foreground">Restrictions on Use</h2>
                    <p className="text-muted-foreground mb-4">
                      You may not misappropriate, alter, deface, or otherwise misuse the design, content, or functionality 
                      of this Website. Nothing on this Website grants any license to use Vibrant Capital's intellectual 
                      property except as expressly allowed under applicable law.
                    </p>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-foreground">Ownership of Intellectual Property</h2>
                    <p className="text-muted-foreground mb-4">
                      All text, graphics, logos, and other Materials on this Website are protected by copyright, trademark, 
                      and other intellectual property laws. All rights are reserved. You may not reproduce, distribute, 
                      or otherwise use any Materials without our prior written consent.
                    </p>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-foreground">Submitting Business Plans or Information</h2>
                    <p className="text-muted-foreground mb-4">
                      We review many business plans and materials. Due to this volume and the similarity of many submissions, 
                      we cannot agree to protect against misuse or disclosure of information submitted via this Website 
                      unless expressly covered by a separate written agreement. By submitting any materials, you acknowledge 
                      and agree that Vibrant Capital may use or disclose them for any purpose, in its sole discretion.
                    </p>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-foreground">AI Avatar Disclaimer</h2>
                    <p className="text-muted-foreground mb-4">
                      Vibrant Capital may use AI-generated avatars, voices, or digital representations of its leadership 
                      and team members on this Website. These avatars are synthetic and are intended for communication, 
                      storytelling, and illustrative purposes only.
                    </p>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                      <li>They should not be construed as live appearances, recorded statements, or legally binding communications from the individuals represented.</li>
                      <li>Any messages delivered by AI avatars are for illustrative and informational purposes only and should not be interpreted as direct personal statements.</li>
                      <li>This disclaimer applies to all AI-generated content on this Website.</li>
                    </ul>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-foreground">Limitation of Liability</h2>
                    <p className="text-muted-foreground mb-4">
                      To the fullest extent permitted by law, Vibrant Capital and its affiliates disclaim any liability 
                      arising from your use of this Website or the Materials. Certain jurisdictions may limit our ability 
                      to disclaim liability; in such cases, our liability shall be limited to the maximum extent permitted by law.
                    </p>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-foreground">Modification of Terms</h2>
                    <p className="text-muted-foreground mb-4">
                      We may update these Terms at any time without prior notice. Changes will be effective when posted 
                      on this page. Your continued use of the Website after changes are posted constitutes acceptance 
                      of the revised Terms.
                    </p>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-foreground">Miscellaneous</h2>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                      <li>This Website is controlled and operated from the United States. Access outside the U.S. is at your own initiative and risk.</li>
                      <li>These Terms are governed by the laws of the State of Delaware, without regard to conflict of laws principles.</li>
                      <li>Any disputes relating to these Terms shall be resolved exclusively in the federal or state courts located in Delaware.</li>
                      <li>If any provision of these Terms is found invalid, the remainder shall remain enforceable.</li>
                    </ul>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-foreground">Contact</h2>
                    <p className="text-muted-foreground mb-4">
                      For any questions about these Legal Notices and Terms of Use, please contact us at:
                    </p>
                    <p className="text-muted-foreground">
                      📧 <a href="mailto:info@haiintel.com" className="text-primary hover:underline">info@haiintel.com</a>
                    </p>
                  </section>

                  <div className={`border-t border-border pt-8 mt-12 ${isArabic ? 'text-right' : 'text-center'}` }>
                    <p className="text-muted-foreground">
                      © 2025 Vibrant Capital. All Rights Reserved.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Legal;