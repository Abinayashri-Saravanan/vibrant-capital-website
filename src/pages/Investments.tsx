import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Investments = () => {
  const { isArabic } = useLanguage();
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 section-gradient">
        <div className="container mx-auto px-6">
          <div className={`max-w-4xl mx-auto ${isArabic ? 'text-right' : 'text-center'}`}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {isArabic ? (
                <>منظومة من <span className="text-gradient">روّاد الذكاء الاصطناعي التطبيقي</span></>
              ) : (
                <>An Ecosystem of <span className="text-gradient">Applied AI Leaders</span></>
              )}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {isArabic
                ? "في فايبرانت كابيتال، لا نستثمر من أجل التوسع الأفقي — بل من أجل العمق والمواءمة. نختار كل شركة لأنها تحل مشكلة حرجة لقادة التقنية: نقل الذكاء الاصطناعي من الوعد إلى الإنتاج."
                : "At Vibrant Capital, we don't invest for breadth — we invest for depth and alignment. Every company in our portfolio is carefully chosen because it solves a critical pain point for CIOs: moving AI from promise to production."}
            </p>
          </div>
        </div>
      </section>

      {/* HaiIntel */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className={`max-w-4xl mx-auto ${isArabic ? 'text-right' : ''}`}>
            <Card className="card-premium card-glow mb-16">
              <CardHeader>
                <CardTitle className="text-3xl text-gradient">{isArabic ? "هاي إنتل" : "HaiIntel"}</CardTitle>
                <p className="text-xl text-muted-foreground">
                  {isArabic ? "إعادة تعريف دور CIO في عصر الذكاء الاصطناعي التطبيقي" : "Redefining the CIO's Role in the Age of Applied AI"}
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-primary">{isArabic ? "الذكاء في الجوهر لا على الأطراف" : "AI at the Core, Not the Edge"}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {isArabic ? "لم تُصمَّم البنى التقنية التقليدية وفي ذهنها الذكاء الاصطناعي؛ بُنيت للأنظمة المعاملاتية لا للذكاء العَمِيل. تقلب HaiIntel هذه المعادلة بجعل الذكاء مبدأ التنظيم للتقنية المؤسسية." : "Traditional IT architectures were never designed with AI in mind; they were built for transactional systems, not agentic intelligence. HaiIntel flips that paradigm. By embedding AI as the organizing principle of enterprise technology, they help CIOs reimagine everything from infrastructure design to workflow orchestration so that AI is not a bolt-on, but the engine that drives the organization."}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-primary">{isArabic ? "مسرّعات تحدث أثرًا نوعيًا" : "Accelerators that Deliver Step-Change Impact"}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {isArabic ? (
                        <>من خلال مسرّعات خاصة بالذكاء الاصطناعي، تمكّن HaiIntel المؤسسات من تجاوز التحسين التدريجي نحو قفزات مضاعفة. في بعض الحالات تقلّص عبء العمل بنسبة <span className="text-primary font-semibold">300%</span>. </>
                      ) : (
                        <>Through proprietary AI accelerators, HaiIntel enables enterprises to leapfrog incremental progress and move straight to exponential gains. In some cases, these accelerators have compressed workloads by <span className="text-primary font-semibold">300%</span>, turning multi-week deployments into days and slashing cycle times across mission-critical processes.</>
                      )}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-primary">{isArabic ? "الإنسان أولًا، دائمًا" : "Humans First, Always"}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {isArabic ? "ما يميز HaiIntel ليس التقنية فقط — بل روح الشراكة. تبني علاقات إنسانية عميقة وموثوقة مع فرق القيادة، وترافقهم في العروض والمعارك الشرائية والتغيير الثقافي." : "What truly differentiates HaiIntel is not just the technology — it's the partnership ethos. In a world full of transactional vendors, HaiIntel builds deep, trusted human relationships with CIOs and their teams. They listen before they prescribe. They coach, guide, and walk shoulder-to-shoulder with enterprise leaders through board presentations, procurement battles, and cultural resistance."}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Skan AI */}
            <Card className="card-premium card-glow mb-16">
              <CardHeader>
                <CardTitle className="text-3xl text-gradient">{isArabic ? "سكان أي آي" : "Skan AI"}</CardTitle>
                <p className="text-xl text-muted-foreground">
                  {isArabic ? "عصر جديد لإعادة هندسة العمليات آليًا" : "The New Era of Automated Process Reengineering"}
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-primary">{isArabic ? "من رسم العمليات إلى إعادة ابتكار العمل" : "From Mapping to Reinventing Work"}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {isArabic ? "لِعقود، اعتمدت الشركات على الاستشاريين لرسم العمليات. تستخدم Skan AI الرؤية الحاسوبية والملاحظة المدفوعة بالذكاء لالتقاط كيفية أداء العمل فعليًا وبناء توأم رقمي نابض للعمليات." : "For decades, corporations have relied on consultants armed with clipboards, spreadsheets, and interviews to map processes. Those days are over. Skan AI uses advanced computer vision and AI-driven observation to automatically capture how work is truly performed across applications, desktops, and workflows — in real time and at enterprise scale. The result is not a guess, not a sample, but a living, breathing digital twin of corporate work."}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-primary">{isArabic ? "الجيل الجديد من هندسة العمليات" : "The New Generation of Process Engineering"}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {isArabic ? "فكر في Skan AI كوريث لثورات سيغما وليّن؛ تستبدل جمع البيانات اليدوي بالأتمتة لتقديم رؤى في أيام بدل شهور." : "Think of Skan AI as the successor to the Six Sigma and Lean revolutions. Where those methodologies relied on manual data collection and statistical modeling, Skan AI automates the entire process with AI. It delivers insights in days that would take armies of consultants months to approximate."}
                    </p>
                  </div>

                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                    <p className="text-primary font-semibold">
                      {isArabic ? "\"لا تقوم أي شركة بالتحول الرقمي بشكل صحيح إذا لم تقم بإعادة هندسة العمليات آليًا.\"" : "\"No corporation is doing digital transformation right if they are not doing automated process reengineering.\""}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* UnifyApps */}
            <Card className="card-premium card-glow mb-16">
              <CardHeader>
                <CardTitle className="text-3xl text-gradient">{isArabic ? "يوني فاي آبس" : "UnifyApps"}</CardTitle>
                <p className="text-xl text-muted-foreground">
                  {isArabic ? "نسيج التنسيق للمؤسسة الأصيلة بالذكاء الاصطناعي" : "The Orchestration Fabric of the AI-Native Enterprise"}
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-primary">{isArabic ? "لماذا التنسيق ضروري" : "Why Orchestration is Essential"}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {isArabic ? "ينتشر الذكاء داخل المؤسسات، لكن دون تنسيق يصبح التبني فوضى وتظل البيانات معزولة وتتفكك التدفقات." : "AI is exploding inside enterprises, but without orchestration, adoption becomes chaos. HR may have an AI chatbot, finance an anomaly-detection model, operations a predictive maintenance system — but none of these talk to each other. Data remains siloed, workflows break down at the seams, and CIOs face a sprawl of tools they cannot govern."}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-primary">{isArabic ? "توسيع الذكاء يتطلب نسيجًا لا ميزات" : "Scaling AI Requires a Fabric, Not Features"}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {isArabic ? "التجارب سهلة، التوسيع صعب. ما يمنع التوسّع ليس نقص النماذج بل نقص الجاهزية المؤسسية من أمن وامتثال وتكامل ومراقبة." : "Pilots are easy. Scaling is hard. What prevents scale is not lack of models but lack of enterprise readiness: security, compliance, integration, and monitoring. UnifyApps provides that readiness through low-code development, workflow automation, data integration, and GenAI orchestration."}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                      <h4 className="font-semibold text-accent-foreground mb-2">{isArabic ? "تطوير منخفض الشفرة" : "Low-Code Development"}</h4>
                      <p className="text-sm text-muted-foreground">{isArabic ? "تمكين الفرق من البناء بسرعة دون دورات تطوير طويلة" : "Empowering teams to build quickly without long dev cycles"}</p>
                    </div>
                    <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                      <h4 className="font-semibold text-accent-foreground mb-2">{isArabic ? "أتمتة سير العمل" : "Workflow Automation"}</h4>
                      <p className="text-sm text-muted-foreground">{isArabic ? "ربط وكلاء الذكاء بعمليات المؤسسة" : "Connecting AI agents with enterprise processes"}</p>
                    </div>
                    <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                      <h4 className="font-semibold text-accent-foreground mb-2">{isArabic ? "تكامل البيانات" : "Data Integration"}</h4>
                      <p className="text-sm text-muted-foreground">{isArabic ? "ضمان وصول محكوم للبيانات المناسبة في الوقت المناسب" : "Ensuring governed access to the right data at the right time"}</p>
                    </div>
                    <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                      <h4 className="font-semibold text-accent-foreground mb-2">{isArabic ? "تنسيق الذكاء التوليدي" : "GenAI Orchestration"}</h4>
                      <p className="text-sm text-muted-foreground">{isArabic ? "دمج الذكاء التوليدي في تطبيقات الأعمال بأمان" : "Embedding generative AI into business applications safely"}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Securiti.ai */}
            <Card className="card-premium card-glow">
              <CardHeader>
                <CardTitle className="text-3xl text-gradient">{isArabic ? "سيكيورِتي.أي" : "Securiti.ai"}</CardTitle>
                <p className="text-xl text-muted-foreground">
                  {isArabic ? "الثقة والبيانات والحوكمة في صميم التحول المدفوع بالذكاء" : "Trust, Data, and Governance at the Core of AI-Led Transformation"}
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-primary">{isArabic ? "البيانات في صميم التحول" : "Data at the Core of Transformation"}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {isArabic ? "كل نموذج يتعلم من البيانات، وكل تنبؤ وتوصية وأتمتة يعتمد على الدقة والنسب والامتثال. ومع ذلك تبقى البيانات كعب أخيل للتحول." : "Every AI model learns from data. Every prediction, recommendation, or automation depends on its accuracy, lineage, and compliance. Yet, for most CIOs, data remains the Achilles' heel of transformation: fragmented across systems, hidden in silos, riddled with compliance risks, and vulnerable to breaches."}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-primary">{isArabic ? "المنصة المتقدمة لإدارة البيانات في عصر الذكاء" : "The Forefront Platform for Managing Data in the AI Age"}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {isArabic ? "تقدم Securiti.ai منصة موحّدة تجمع اكتشاف البيانات وتصنيفها ونَسَبها وحمايتها وأتمتة الامتثال، ما يمكّن المؤسسات من:" : "Securiti.ai provides a unified platform that combines data discovery, classification, lineage, protection, and compliance automation. It allows enterprises to:"}
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {isArabic ? "العثور على البيانات الحساسة وفهرستها عبر البيئات المختلفة" : "Find and catalog sensitive data across structured and unstructured environments"}
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {isArabic ? "تصنيف البيانات وحوكمتها حسب الحساسية والملكية والمتطلبات التنظيمية" : "Classify and govern data by sensitivity, ownership, and regulatory requirements"}
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {isArabic ? "فرض سياسات الخصوصية والحماية تلقائيًا عبر البيئات السحابية المتعددة" : "Enforce privacy and protection policies automatically across hybrid and multi-cloud environments"}
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {isArabic ? "أتمتة الامتثال للأطر العالمية مع سجلات تدقيق جاهزة للذكاء" : "Automate compliance with GDPR, HIPAA, CCPA, and global frameworks — with AI-ready audit trails"}
                      </li>
                    </ul>
                  </div>

                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                    <p className="text-primary font-semibold">
                      {isArabic ? "\"لا يمكن لأي مؤسسة تحقيق تحول حقيقي مدفوع بالذكاء الاصطناعي دون إتقان البيانات. إنها الأساس الذي تُبنى عليه كل مسرّع وكل مساعد وكل وكيل.\"" : "\"No enterprise can achieve true AI-led transformation without mastering data. It is the foundation upon which every accelerator, every copilot, every agent is built.\""}
                    </p>
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
            <h2 className="text-3xl font-bold mb-6">
              {isArabic ? (
                <>بناء <span className="text-gradient">بنية الذكاء الاصطناعي المؤسسية</span></>
              ) : (
                <>Building the <span className="text-gradient">Infrastructure of Enterprise AI</span></>
              )}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {isArabic ? "اختير شركاؤنا لما يقدّمونه من ثقة ووضوح وتحكم لقادة التقنية في عصر الذكاء — لتشكيل منظومة تمكّن تحولًا آمنًا وقابلًا للقياس ومستدامًا." : "Each of our partners was chosen not for what they promise, but for what they deliver to CIOs: confidence, clarity, and control in the age of AI. Together, they form an ecosystem of Applied AI leaders that enables enterprises to transform safely, measurably, and sustainably."}
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Investments;