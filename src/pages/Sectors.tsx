import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { useLanguage } from "@/contexts/LanguageContext";
import bankingImg from "@/assets/sector-banking.jpg";
import insuranceImg from "@/assets/sector-insurance.jpg";
import healthcareImg from "@/assets/sector-healthcare.jpg";
import retailImg from "@/assets/sector-retail.jpg";
import energyImg from "@/assets/sector-energy.jpg";
import manufacturingImg from "@/assets/sector-manufacturing.jpg";
import publicImg from "@/assets/sector-public.jpg";
import telecomImg from "@/assets/sector-telecom.jpg";
import bankingIcon from "@/assets/sector-icons/banking-icon.jpg";
import insuranceIcon from "@/assets/sector-icons/insurance-icon.jpg";
import healthcareIcon from "@/assets/sector-icons/healthcare-icon.jpg";
import retailIcon from "@/assets/sector-icons/retail-icon.jpg";
import energyIcon from "@/assets/sector-icons/energy-icon.jpg";
import manufacturingIcon from "@/assets/sector-icons/manufacturing-icon.jpg";
import publicIcon from "@/assets/sector-icons/public-icon.jpg";
import telecomIcon from "@/assets/sector-icons/telecom-icon.jpg";

const Sectors = () => {
  const { isArabic } = useLanguage();
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className={`max-w-5xl mx-auto ${isArabic ? 'text-right' : 'text-center'}`}>
            <h1 className="text-6xl md:text-7xl font-black mb-8 leading-none">
              {isArabic ? (
                <>القطاعات<br /><span className="text-spacex-gradient">المستهدفة</span></>
              ) : (
                <>TARGET<br /><span className="text-spacex-gradient">SECTORS</span></>
              )}
            </h1>
            <p className="text-2xl text-muted-foreground leading-relaxed font-light mb-12">
              {isArabic ? "نركز على الصناعات حيث البيانات وفيرة والتنظيم صارم وعدم الكفاءة مكلف. هذه هي القطاعات حيث يمكن للذكاء الاصطناعي خلق تأثير تحولي." : "We focus on industries where data is abundant, regulation is strict, and inefficiency is costly. These are the sectors where AI can create transformational impact."}
            </p>
            
            {/* Quick Navigation */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
              <a href="#banking" className="group">
                <div className="relative overflow-hidden rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                  <img src={bankingImg} alt="Banking" className="w-full h-24 object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <h3 className="font-bold text-xs text-white text-center">{isArabic ? "الخدمات المصرفية" : "Banking &"}</h3>
                    <h3 className="font-bold text-xs text-white text-center">{isArabic ? "وأسواق رأس المال" : "Capital Markets"}</h3>
                  </div>
                </div>
              </a>
              <a href="#insurance" className="group">
                <div className="relative overflow-hidden rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                  <img src={insuranceImg} alt="Insurance" className="w-full h-24 object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <h3 className="font-bold text-xs text-white text-center">{isArabic ? "التأمين" : "Insurance"}</h3>
                  </div>
                </div>
              </a>
              <a href="#healthcare" className="group">
                <div className="relative overflow-hidden rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                  <img src={healthcareImg} alt="Healthcare" className="w-full h-24 object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <h3 className="font-bold text-xs text-white text-center">{isArabic ? "الرعاية الصحية" : "Healthcare &"}</h3>
                    <h3 className="font-bold text-xs text-white text-center">{isArabic ? "والعلوم الحياتية" : "Life Sciences"}</h3>
                  </div>
                </div>
              </a>
              <a href="#retail" className="group">
                <div className="relative overflow-hidden rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                  <img src={retailImg} alt="Retail" className="w-full h-24 object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <h3 className="font-bold text-xs text-white text-center">{isArabic ? "التجارة" : "Retail &"}</h3>
                    <h3 className="font-bold text-xs text-white text-center">{isArabic ? "وسلع المستهلك" : "Consumer Goods"}</h3>
                  </div>
                </div>
              </a>
              <a href="#energy" className="group">
                <div className="relative overflow-hidden rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                  <img src={energyImg} alt="Energy" className="w-full h-24 object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <h3 className="font-bold text-xs text-white text-center">{isArabic ? "الطاقة" : "Energy &"}</h3>
                    <h3 className="font-bold text-xs text-white text-center">{isArabic ? "والمرافق" : "Utilities"}</h3>
                  </div>
                </div>
              </a>
              <a href="#manufacturing" className="group">
                <div className="relative overflow-hidden rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                  <img src={manufacturingImg} alt="Manufacturing" className="w-full h-24 object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <h3 className="font-bold text-xs text-white text-center">{isArabic ? "التصنيع" : "Manufacturing"}</h3>
                  </div>
                </div>
              </a>
              <a href="#telecom" className="group">
                <div className="relative overflow-hidden rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                  <img src={telecomImg} alt="Telecom" className="w-full h-24 object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <h3 className="font-bold text-xs text-white text-center">{isArabic ? "الاتصالات" : "Telecom"}</h3>
                  </div>
                </div>
              </a>
              <a href="#public" className="group">
                <div className="relative overflow-hidden rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                  <img src={publicImg} alt="Public Sector" className="w-full h-24 object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <h3 className="font-bold text-xs text-white text-center">{isArabic ? "القطاع العام" : "Public Sector"}</h3>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Banking & Capital Markets */}
      <section id="banking" className="py-16 section-spacex">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <Card className="card-spacex card-spacex-glow mb-16 overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={bankingImg} 
                  alt="Banking & Capital Markets"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 flex items-center">
                  <div className="pl-8">
                    <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-wider">
                      {isArabic ? (
                        <>الخدمات المصرفية<br />وأسواق رأس المال</>
                      ) : (
                        <>BANKING &<br />CAPITAL MARKETS</>
                      )}
                    </h2>
                  </div>
                </div>
              </div>
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-primary uppercase tracking-wider">{isArabic ? "التحديات" : "CHALLENGES"}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                      {isArabic ? "CIOs المصرفيون محاصرون بين أنظمة أساسية قديمة وتوقعات تنظيمية متزايدة باستمرار. الوظائف الحرجة مثل KYC وAML وكشف الاحتيال تتطلب جيوشًا من المحللين. الملفات التنظيمية بطيئة ومكلفة وعرضة للأخطاء. كان دمج الذكاء الاصطناعي صعبًا لأن معظم الحلول تفشل في تلبية متطلبات القابلية للتفسير، ولا تتناسب مع تقنية المعلومات من عصر الحاسوب المركزي، وتخلق تعرضات مخاطر جديدة يرفضها المنظمون." : "Banking CIOs are trapped between aging core systems and ever‑increasing regulatory expectations. Critical functions like KYC, AML, and fraud detection require armies of analysts. Regulatory filings are slow, costly, and error‑prone. Integration of AI has been hard because most solutions fail to meet explainability requirements, don't mesh with mainframe‑era IT, and create new risk exposures regulators reject."}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-primary uppercase tracking-wider">{isArabic ? "حلول الذكاء الاصطناعي التطبيقي" : "APPLIED AI SOLUTIONS"}</h3>
                    <div className="space-y-4">
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-lg">{isArabic ? "أتمتة KYC/AML" : "KYC/AML AUTOMATION"}</h4>
                        <p className="text-muted-foreground">{isArabic ? "أتمتة إدماج KYC/AML مع مسارات تدقيق قابلة للقراءة آليًا" : "Automate KYC/AML onboarding with machine‑readable audit trails"}</p>
                      </div>
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-lg">{isArabic ? "كشف الاحتيال" : "FRAUD DETECTION"}</h4>
                        <p className="text-muted-foreground">{isArabic ? "أنظمة كشف الاحتيال التي تشرح الشذوذات بلغة يفهمها المنظمون" : "Fraud detection systems that explain anomalies in language regulators understand"}</p>
                      </div>
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-lg">{isArabic ? "مساعدو الامتثال" : "COMPLIANCE COPILOTS"}</h4>
                        <p className="text-muted-foreground">{isArabic ? "مساعدون يحررون فرق الامتثال من مراجعة المستندات المتكررة" : "Copilots that free compliance teams from repetitive document review"}</p>
                      </div>
                    </div>
                    <div className="mt-6 p-6 bg-primary/10 border border-primary/20 rounded-lg">
                      <h4 className="font-bold text-primary mb-3 text-xl uppercase tracking-wider">{isArabic ? "النتائج المتوقعة" : "PROJECTED OUTCOMES"}</h4>
                      <ul className="space-y-2 font-semibold">
                        <li>{isArabic ? "• إدماج العملاء في ساعات بدلاً من أيام" : "• Customer onboarding in hours instead of days"}</li>
                        <li>{isArabic ? "• تقليل تكلفة الامتثال بنسبة 40-60%" : "• 40–60% reduction in compliance cost"}</li>
                        <li>{isArabic ? "• كشف الاحتيال مع عدد أقل من الإيجابيات الكاذبة" : "• Fraud detection with fewer false positives"}</li>
                        <li>{isArabic ? "• ثقة على مستوى مجلس الإدارة أن الذكاء الاصطناعي قابل للتدقيق والدفاع عنه" : "• Board‑level trust that AI is auditable and defensible"}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Insurance */}
            <Card id="insurance" className="card-spacex card-spacex-glow mb-16 overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={insuranceImg} 
                  alt="Insurance"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 flex items-center">
                  <div className="pl-8">
                    <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-wider">
                      {isArabic ? "التأمين" : "INSURANCE"}
                    </h2>
                  </div>
                </div>
              </div>
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-primary uppercase tracking-wider">{isArabic ? "التحديات" : "CHALLENGES"}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                      {isArabic ? "شركات التأمين تتلاعب بحجم مطالبات متزايد وأنظمة سياسات قديمة وضغط لتحسين تجربة العملاء. الاكتتاب يعتمد على بيانات غير مكتملة أو غير متسقة، بينما يغرق موظفو المطالبات في الأعمال الورقية. تبني الذكاء الاصطناعي تعثر بسبب التدقيق التنظيمي على الإنصاف ومصادر البيانات المعزولة بعمق عبر المنصات القديمة." : "Insurers juggle rising claims volume, legacy policy systems, and pressure to improve customer experience. Underwriting depends on incomplete or inconsistent data, while claims staff drown in paperwork. AI adoption has been stunted by regulatory scrutiny on fairness and by deeply siloed data sources across legacy platforms."}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-primary uppercase tracking-wider">{isArabic ? "حلول الذكاء الاصطناعي التطبيقي" : "APPLIED AI SOLUTIONS"}</h3>
                    <div className="space-y-4">
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-lg">{isArabic ? "أتمتة المطالبات" : "CLAIMS AUTOMATION"}</h4>
                        <p className="text-muted-foreground">{isArabic ? "مساعدو الذكاء الاصطناعي الذين يقرؤون نماذج المطالبات والصور والنصوص لتجميع الحالات" : "AI copilots that read claim forms, photos, and transcripts to assemble cases"}</p>
                      </div>
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-lg">{isArabic ? "كشف الشذوذ" : "ANOMALY DETECTION"}</h4>
                        <p className="text-muted-foreground">{isArabic ? "محركات كشف الشذوذ التي تضع علامة على المطالبات المشبوهة" : "Anomaly detection engines that flag suspicious claims"}</p>
                      </div>
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-lg">{isArabic ? "مساعدو الاكتتاب" : "UNDERWRITING COPILOTS"}</h4>
                        <p className="text-muted-foreground">{isArabic ? "مساعدو الاكتتاب الذين يقيمون المخاطر بسرعة باستخدام البيانات متعددة الوسائط" : "Underwriting copilots that rapidly assess risk using multimodal data"}</p>
                      </div>
                    </div>
                    <div className="mt-6 p-6 bg-primary/10 border border-primary/20 rounded-lg">
                      <h4 className="font-bold text-primary mb-3 text-xl uppercase tracking-wider">{isArabic ? "النتائج المتوقعة" : "PROJECTED OUTCOMES"}</h4>
                      <ul className="space-y-2 font-semibold">
                        <li>{isArabic ? "• حل المطالبات أسرع بنسبة 40-70%" : "• 40–70% faster claims resolution"}</li>
                        <li>{isArabic ? "• تحسين نسب الخسارة" : "• Improved loss ratios"}</li>
                        <li>{isArabic ? "• كتاب التأمين مع ملفات مخاطر أغنى" : "• Underwriters with richer risk profiles"}</li>
                        <li>{isArabic ? "• درجات رضا أعلى من خلال الخدمة السريعة" : "• Higher satisfaction scores through responsive service"}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Healthcare & Life Sciences */}
            <Card id="healthcare" className="card-spacex card-spacex-glow mb-16 overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={healthcareImg} 
                  alt="Healthcare & Life Sciences"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 flex items-center">
                  <div className="pl-8">
                    <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-wider">
                      {isArabic ? <>الرعاية الصحية<br />والعلوم الحياتية</> : <>HEALTHCARE &<br />LIFE SCIENCES</>}
                    </h2>
                  </div>
                </div>
              </div>
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-primary uppercase tracking-wider">{isArabic ? "التحديات" : "CHALLENGES"}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                      {isArabic ? "بيانات الرعاية الصحية محبوسة في سجلات EMR وأرشيفات التصوير وأنظمة المختبرات التي نادراً ما تتفاعل مع بعضها البعض. التزامات الخصوصية ثقيلة. الأطباء يقضون نصف يومهم في المهام الإدارية بدلاً من الرعاية. تجارب الذكاء الاصطناعي غالباً ما تتوقف عندما لا يمكن اعتمادها كمتوافقة مع HIPAA أو لا يمكن دمجها مع سير عمل سريري." : "Healthcare data is locked in EMRs, imaging archives, and lab systems that rarely interoperate. Privacy obligations are heavy. Clinicians spend half their day on administrative tasks instead of care. AI pilots often stall when they can't be certified as HIPAA‑compliant or cannot integrate with clinical workflows."}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-primary uppercase tracking-wider">{isArabic ? "حلول الذكاء الاصطناعي التطبيقي" : "APPLIED AI SOLUTIONS"}</h3>
                    <div className="space-y-4">
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-lg">{isArabic ? "الترخيص المسبق والفواتير" : "PRIOR AUTHORIZATION & BILLING"}</h4>
                        <p className="text-muted-foreground">{isArabic ? "أتمتة الترخيص المسبق والفواتير" : "Prior authorization and billing automation"}</p>
                      </div>
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-lg">{isArabic ? "التوثيق السريري" : "CLINICAL DOCUMENTATION"}</h4>
                        <p className="text-muted-foreground">{isArabic ? "مساعدو التوثيق السريري الذين ينسخون ويقومون بترميز الزيارات في الوقت الفعلي" : "Clinical documentation copilots that transcribe and code visits in real time"}</p>
                      </div>
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-lg">{isArabic ? "مراقبة الأدوية" : "PHARMACOVIGILANCE"}</h4>
                        <p className="text-muted-foreground">{isArabic ? "مراقبو مراقبة الأدوية الذين يفحصون تقارير الأحداث الضارة" : "Pharmacovigilance monitors scanning adverse event reports"}</p>
                      </div>
                    </div>
                    <div className="mt-6 p-6 bg-primary/10 border border-primary/20 rounded-lg">
                      <h4 className="font-bold text-primary mb-3 text-xl uppercase tracking-wider">{isArabic ? "النتائج المتوقعة" : "PROJECTED OUTCOMES"}</h4>
                      <ul className="space-y-2 font-semibold">
                        <li>{isArabic ? "• زيادة الإيرادات بنسبة 20-30% من خلال عدد أقل من الرفض" : "• 20–30% revenue lift through fewer denials"}</li>
                        <li>{isArabic ? "• 2-3 ساعات لكل طبيب تعود للرعاية اليومية للمرضى" : "• 2–3 hours per clinician returned to patient care daily"}</li>
                        <li>{isArabic ? "• موافقات أسرع على الأدوية" : "• Faster drug approvals"}</li>
                        <li>{isArabic ? "• تحسينات قابلة للقياس في سلامة المرضى" : "• Measurable improvements in patient safety"}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Retail & CPG */}
            <Card id="retail" className="card-spacex card-spacex-glow mb-16 overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={retailImg} 
                  alt="Retail & Consumer Packaged Goods"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 flex items-center">
                  <div className="pl-8">
                    <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-wider">
                      {isArabic ? <>التجارة<br />وسلع المستهلك</> : <>RETAIL &<br />CONSUMER GOODS</>}
                    </h2>
                  </div>
                </div>
              </div>
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-primary uppercase tracking-wider">{isArabic ? "التحديات" : "CHALLENGES"}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                      {isArabic ? "تجار التجزئة وشركات سلع المستهلك تعمل على هوامش رفيعة جداً وتواجه تقلبات طلب غير متوقعة. البيانات متناثرة عبر نقاط البيع وبرامج الولاء ومنصات التجارة الإلكترونية وأنظمة الموزعين. تجارب الذكاء الاصطناعي تفشل عندما لا تستطيع تقديم توقعات طلب موثوقة في الوقت المناسب أو عندما تتجاهل محركات التخصيص السياق في الوقت الفعلي." : "Retailers and CPG companies operate on razor‑thin margins and face unpredictable demand swings. Data is scattered across POS, loyalty programs, e‑commerce platforms, and distributor systems. AI pilots fail when they can't deliver timely, reliable demand forecasts or when personalization engines ignore real‑time context."}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-primary uppercase tracking-wider">{isArabic ? "حلول الذكاء الاصطناعي التطبيقي" : "APPLIED AI SOLUTIONS"}</h3>
                    <div className="space-y-4">
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-lg">{isArabic ? "استشعار الطلب" : "DEMAND SENSING"}</h4>
                        <p className="text-muted-foreground">{isArabic ? "استشعار الطلب باستخدام إشارات خارجية مثل الطقس أو توجهات الشبكات الاجتماعية" : "Demand sensing using external signals like weather or social trends"}</p>
                      </div>
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-lg">{isArabic ? "تحسين المخزون" : "INVENTORY OPTIMIZATION"}</h4>
                        <p className="text-muted-foreground">{isArabic ? "تحسين المخزون وإعادة تخصيصه في الوقت الفعلي" : "Inventory optimization that reallocates stock in real time"}</p>
                      </div>
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-lg">{isArabic ? "تسعير ديناميكي" : "DYNAMIC PRICING"}</h4>
                        <p className="text-muted-foreground">{isArabic ? "محركات تسعير ديناميكي وأدوات عرض مدعومة بالذكاء" : "Dynamic pricing engines and AI‑powered merchandising tools"}</p>
                      </div>
                    </div>
                    <div className="mt-6 p-6 bg-primary/10 border border-primary/20 rounded-lg">
                      <h4 className="font-bold text-primary mb-3 text-xl uppercase tracking-wider">{isArabic ? "النتائج المتوقعة" : "PROJECTED OUTCOMES"}</h4>
                      <ul className="space-y-2 font-semibold">
                        <li>{isArabic ? "• تقليل نفاد المخزون بنسبة 15-20%" : "• 15–20% reduction in stock‑outs"}</li>
                        <li>{isArabic ? "• تحسينات مضاعفة في الهوامش عبر تنبؤ وتسعير أفضل" : "• Double‑digit margin improvements from better forecasting and pricing"}</li>
                        <li>{isArabic ? "• ولاء أقوى للعملاء عبر التخصيص" : "• Stronger customer loyalty through personalization"}</li>
                        <li>{isArabic ? "• دوران أسرع للمخزون" : "• Faster inventory turns"}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Energy & Utilities */}
            <Card id="energy" className="card-spacex card-spacex-glow mb-16 overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={energyImg} 
                  alt="Energy & Utilities"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 flex items-center">
                  <div className="pl-8">
                    <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-wider">
                      {isArabic ? <>الطاقة<br />والمرافق</> : <>ENERGY &<br />UTILITIES</>}
                    </h2>
                  </div>
                </div>
              </div>
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-primary uppercase tracking-wider">{isArabic ? "التحديات" : "CHALLENGES"}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                      {isArabic ? "تعتمد شركات الخدمات على أنظمة SCADA وOT عمرها عقود. السلامة أولوية قصوى، وإفصاحات الاستدامة التنظيمية أصبحت إلزامية. تدفقات البيانات صاخبة ومعزولة، ومعظم نماذج الذكاء تكافح لمعالجة القياسات الحية بأمان. كان التبني بطيئًا لأن قادة التقنية يخشون إدخال عدم الاستقرار إلى البنية التحتية الحرجة." : "Utilities run on decades‑old SCADA and OT systems. Safety is paramount, and regulatory sustainability reporting is now non‑negotiable. Data streams are noisy and siloed, and most AI models struggle to process live telemetry securely. Adoption has been slow because CIOs fear introducing instability into mission‑critical infrastructure."}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-primary uppercase tracking-wider">{isArabic ? "حلول الذكاء الاصطناعي التطبيقي" : "APPLIED AI SOLUTIONS"}</h3>
                    <div className="space-y-4">
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-lg">{isArabic ? "صيانة تنبؤية" : "PREDICTIVE MAINTENANCE"}</h4>
                        <p className="text-muted-foreground">{isArabic ? "نماذج صيانة تنبؤية تحلل بيانات مستشعرات الشبكات والتوربينات" : "Predictive maintenance models analyzing turbine and grid sensor data"}</p>
                      </div>
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-lg">{isArabic ? "حوكمة الانبعاثات" : "EMISSIONS GOVERNANCE"}</h4>
                        <p className="text-muted-foreground">{isArabic ? "منصات حوكمة الانبعاثات التي تنشئ تقارير كربون قابلة للتدقيق" : "Emissions governance platforms that create auditable carbon reports"}</p>
                      </div>
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-lg">{isArabic ? "جدولة فرق الميدان" : "FIELD CREW SCHEDULING"}</h4>
                        <p className="text-muted-foreground">{isArabic ? "مساعدو جدولة فرق الميدان ومحسنات تداول الطاقة" : "Field crew scheduling copilots and energy trading optimizers"}</p>
                      </div>
                    </div>
                    <div className="mt-6 p-6 bg-primary/10 border border-primary/20 rounded-lg">
                      <h4 className="font-bold text-primary mb-3 text-xl uppercase tracking-wider">{isArabic ? "النتائج المتوقعة" : "PROJECTED OUTCOMES"}</h4>
                      <ul className="space-y-2 font-semibold">
                        <li>{isArabic ? "• تقليل التوقف بنسبة 20-40%" : "• 20–40% less downtime"}</li>
                        <li>{isArabic ? "• توفير ملايين في التشغيل والصيانة" : "• Millions saved in O&M"}</li>
                        <li>{isArabic ? "• الامتثال لتفويضات الاستدامة" : "• Compliance with sustainability mandates"}</li>
                        <li>{isArabic ? "• عمليات أكثر أمانًا وهوامش تداول محسّنة" : "• Safer operations and improved trading margins"}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Manufacturing */}
            <Card id="manufacturing" className="card-spacex card-spacex-glow mb-16 overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={manufacturingImg} 
                  alt="Manufacturing"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 flex items-center">
                  <div className="pl-8">
                    <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-wider">
                      {isArabic ? "التصنيع" : "MANUFACTURING"}
                    </h2>
                  </div>
                </div>
              </div>
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-primary uppercase tracking-wider">{isArabic ? "التحديات" : "CHALLENGES"}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                      {isArabic ? "تواجه المصانع منافسة ونقصًا في العمالة وضغوط ESG. تفكك IT/OT يعني أن تجارب الذكاء تتوقف عند إثبات المفهوم. جودة البيانات غير متسقة وغالبًا ما يقاوم العمال الأتمتة. بدون تكامل سلس مع MES وERP، تفشل مشاريع الذكاء في التوسع." : "Factories face competition, labor shortages, and ESG pressures. IT/OT fragmentation means AI pilots get stuck at proof‑of‑concept. Data quality is uneven, and workers often resist automation. Without seamless integration into MES and ERP, AI projects fail to scale."}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-primary uppercase tracking-wider">{isArabic ? "حلول الذكاء الاصطناعي التطبيقي" : "APPLIED AI SOLUTIONS"}</h3>
                    <div className="space-y-4">
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-lg">{isArabic ? "تحسين المردود التنبؤي" : "PREDICTIVE YIELD OPTIMIZATION"}</h4>
                        <p className="text-muted-foreground">{isArabic ? "تحسين المردود بالتنبؤ" : "Predictive yield optimization"}</p>
                      </div>
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-lg">{isArabic ? "جودة برؤية حاسوبية" : "COMPUTER‑VISION QUALITY"}</h4>
                        <p className="text-muted-foreground">{isArabic ? "تحليلات جودة بالرؤية الحاسوبية" : "Computer‑vision quality analytics"}</p>
                      </div>
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-lg">{isArabic ? "ضبط تلقائي لخط الإنتاج" : "AUTONOMOUS LINE TUNING"}</h4>
                        <p className="text-muted-foreground">{isArabic ? "مساعدو ضبط خطوط الإنتاج ولوحات استدامة لحظية" : "Autonomous line tuning copilots and real‑time sustainability dashboards"}</p>
                      </div>
                    </div>
                    <div className="mt-6 p-6 bg-primary/10 border border-primary/20 rounded-lg">
                      <h4 className="font-bold text-primary mb-3 text-xl uppercase tracking-wider">{isArabic ? "النتائج المتوقعة" : "PROJECTED OUTCOMES"}</h4>
                      <ul className="space-y-2 font-semibold">
                        <li>{isArabic ? "• زيادة المردود بنسبة 5-10%" : "• 5–10% yield increases"}</li>
                        <li>{isArabic ? "• تقليل التوقف بنسبة 30-40%" : "• 30–40% less downtime"}</li>
                        <li>{isArabic ? "• تقليل كبير للهدر" : "• Significant waste reduction"}</li>
                        <li>{isArabic ? "• دورات إنتاج أسرع وتقدم ESG قابل للقياس" : "• Faster production cycles and measurable ESG progress"}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Public Sector */}
            <Card id="public" className="card-spacex card-spacex-glow overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={publicImg} 
                  alt="Public Sector"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 flex items-center">
                  <div className="pl-8">
                    <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-wider">
                      {isArabic ? "القطاع العام" : "PUBLIC SECTOR"}
                    </h2>
                  </div>
                </div>
              </div>
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-primary uppercase tracking-wider">{isArabic ? "التحديات" : "CHALLENGES"}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                      {isArabic ? "يجب على قادة التقنية في الحكومة تقديم خدمات رقمية أولاً، لكن تكبلهم الأنظمة القديمة وتأخيرات الشراء والميزانيات الضيقة وثقة عامة هشة. تُهجر العديد من تجارب الذكاء لأنّها لا تصمد أمام متطلبات الشفافية العامة أو تدقيقات الأمان." : "Government CIOs must deliver digital‑first services but are handcuffed by legacy systems, procurement delays, tight budgets, and fragile public trust. Many AI pilots are abandoned because they can't withstand public transparency requirements or security audits."}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-primary uppercase tracking-wider">{isArabic ? "حلول الذكاء الاصطناعي التطبيقي" : "APPLIED AI SOLUTIONS"}</h3>
                    <div className="space-y-4">
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-lg">{isArabic ? "مساعدو خدمات المواطنين" : "CITIZEN SERVICE COPILOTS"}</h4>
                        <p className="text-muted-foreground">{isArabic ? "مساعدون يتعاملون مع الاستفسارات والطلبات" : "Citizen service copilots that handle queries and applications"}</p>
                      </div>
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-lg">{isArabic ? "تصاريح مؤتمتة" : "AUTOMATED PERMITTING"}</h4>
                        <p className="text-muted-foreground">{isArabic ? "سير عمل مؤتمت للتراخيص والتصاريح" : "Automated permitting and licensing workflows"}</p>
                      </div>
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-lg">{isArabic ? "تحليلات السلامة" : "SAFETY ANALYTICS"}</h4>
                        <p className="text-muted-foreground">{isArabic ? "منصات تحليلات السلامة لبيانات البنية التحتية وإنفاذ القانون" : "Safety analytics platforms for infrastructure and law enforcement data"}</p>
                      </div>
                    </div>
                    <div className="mt-6 p-6 bg-primary/10 border border-primary/20 rounded-lg">
                      <h4 className="font-bold text-primary mb-3 text-xl uppercase tracking-wider">{isArabic ? "النتائج المتوقعة" : "PROJECTED OUTCOMES"}</h4>
                      <ul className="space-y-2 font-semibold">
                        <li>{isArabic ? "• تقديم الخدمات خلال أيام بدل أشهر" : "• Services delivered in days instead of months"}</li>
                        <li>{isArabic ? "• كفاءة أعلى ضمن ميزانيات محدودة" : "• Higher efficiency with limited budgets"}</li>
                        <li>{isArabic ? "• شفافية ومساءلة محسّنة" : "• Improved transparency and accountability"}</li>
                        <li>{isArabic ? "• ثقة أكبر للمواطنين" : "• Increased citizen trust"}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Telecommunications */}
            <Card id="telecom" className="card-spacex card-spacex-glow mb-16 overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={telecomImg} 
                  alt="Telecommunications"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 flex items-center">
                  <div className="pl-8">
                    <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-wider">
                      {isArabic ? "الاتصالات" : "TELECOMMUNICATIONS"}
                    </h2>
                  </div>
                </div>
              </div>
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-primary uppercase tracking-wider">{isArabic ? "التحديات" : "CHALLENGES"}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                      {isArabic ? "يدير مشغلو الاتصالات شبكات ضخمة تولد كميات هائلة من البيانات اللحظية مع ضغط لتقليل تكاليف التشغيل وتحسين جودة الخدمة. الانقطاعات والتهديدات الأمنية وتسرب العملاء تحديات مستمرة. كان تبني الذكاء بطيئًا بسبب تعقيد التكامل مع أنظمة OSS/BSS القديمة والحاجة لاتخاذ قرارات لحظية." : "Telecom operators manage vast networks generating massive amounts of real‑time data while facing pressure to reduce operational costs and improve service quality. Network outages, security threats, and customer churn are constant challenges. AI adoption has been slow due to the complexity of integrating with legacy OSS/BSS systems and the need for real‑time decision making."}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-primary uppercase tracking-wider">{isArabic ? "حلول الذكاء الاصطناعي التطبيقي" : "APPLIED AI SOLUTIONS"}</h3>
                    <div className="space-y-4">
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-lg">{isArabic ? "تحسين الشبكات" : "NETWORK OPTIMIZATION"}</h4>
                        <p className="text-muted-foreground">{isArabic ? "تحسين الشبكة بالذكاء وصيانة تنبؤية للبنية التحتية" : "AI‑driven network optimization and predictive maintenance for infrastructure"}</p>
                      </div>
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-lg">{isArabic ? "كشف الاحتيال" : "FRAUD DETECTION"}</h4>
                        <p className="text-muted-foreground">{isArabic ? "كشف الاحتيال في الوقت الفعلي ومراقبة تهديدات الأمان" : "Real‑time fraud detection and security threat monitoring"}</p>
                      </div>
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-lg">{isArabic ? "تحليلات العملاء" : "CUSTOMER ANALYTICS"}</h4>
                        <p className="text-muted-foreground">{isArabic ? "تحليلات تجربة العملاء ونماذج توقع التسرب" : "Customer experience analytics and churn prediction models"}</p>
                      </div>
                    </div>
                    <div className="mt-6 p-6 bg-primary/10 border border-primary/20 rounded-lg">
                      <h4 className="font-bold text-primary mb-3 text-xl uppercase tracking-wider">{isArabic ? "النتائج المتوقعة" : "PROJECTED OUTCOMES"}</h4>
                      <ul className="space-y-2 font-semibold">
                        <li>{isArabic ? "• تخفيض التوقف الشبكي بنسبة 30-50%" : "• 30–50% reduction in network downtime"}</li>
                        <li>{isArabic ? "• انخفاض تكاليف التشغيل بنسبة 20-40%" : "• 20–40% decrease in operational costs"}</li>
                        <li>{isArabic ? "• تحسين رضا العملاء والاحتفاظ بهم" : "• Improved customer satisfaction and retention"}</li>
                        <li>{isArabic ? "• تعزيز الأمان والامتثال" : "• Enhanced security and compliance"}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-16 section-gradient">
        <div className="container mx-auto px-6">
          <div className={`max-w-4xl mx-auto ${isArabic ? 'text-right' : 'text-center'}`}>
            <h2 className={`text-3xl font-bold mb-6 ${isArabic ? '' : 'text-center'}`}>
              {isArabic ? <>ختام <span className="text-gradient">البيان</span></> : <>Closing <span className="text-gradient">Statement</span></>}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              {isArabic ? "هذه القطاعات ليست اختيارية — إنها أساسية للاقتصاد العالمي. عبر استهداف الصناعات ذات الحواجز الأصعب للتبني، تضمن فايبرانت كابيتال أن يقدم الذكاء الاصطناعي التطبيقي القيمة حيثما يهم أكثر." : "These sectors are not optional — they are foundational to the global economy. By targeting industries with the hardest barriers to adoption, Vibrant Capital ensures that Applied AI delivers where it matters most."}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {isArabic ? "نشارك مع CIOs للانتقال من التجارب إلى الإنتاج، مثبتين أن الذكاء يمكنه تقديم نتائج عملية ومنظمة وجاهزة لمجالس الإدارة اليوم." : "We partner with CIOs to move from pilots to production, proving that AI can deliver practical, regulated, and board‑ready results today."}
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Sectors;