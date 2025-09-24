import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { useVideoOptimization } from "@/hooks/use-video-optimization";
import { ArrowRight, Target, Brain, Shield, BookOpen } from "lucide-react";
import bankingImg from "@/assets/sector-banking.jpg";
import insuranceImg from "@/assets/sector-insurance.jpg";
import healthcareImg from "@/assets/sector-healthcare.jpg";
import retailImg from "@/assets/sector-retail.jpg";
import energyImg from "@/assets/sector-energy.jpg";
import transportationImg from "@/assets/sector-transportation.jpg";
import manufacturingImg from "@/assets/sector-manufacturing.jpg";
import publicImg from "@/assets/sector-public.jpg";
import sectorDepthImg from "@/assets/pillar-sector-depth.jpg";
import aiNativeImg from "@/assets/pillar-ai-native.jpg";
import operateDeRiskImg from "@/assets/pillar-operate-derisk.jpg";
import valuePlaybooksImg from "@/assets/pillar-value-playbooks.jpg";
import { useState, useEffect } from "react";

const Index = () => {
  const { videoRef } = useVideoOptimization({
    autoPlay: true,
    loop: true,
    muted: true,
    preload: 'auto',
    onReady: () => {
      console.log('Hero video is ready and playing smoothly');
    },
    onError: () => {
      console.warn('Hero video failed to load, using fallback background');
    }
  });

  // Language & RTL
  const { isArabic } = useLanguage();
  const base = isArabic ? "/ar" : "";

  // Home Hero Auto-Slider Content
  const heroMessages = isArabic ? [
    { title: 'نقود الموجة الثالثة للذكاء الاصطناعي', subtitle: 'الذكاء الاصطناعي التطبيقي للمؤسسات' },
    { title: 'من المختبر إلى العمليات', subtitle: "نحوّل الذكاء من تجارب مخبرية إلى شرايين الأعمال والحكومة." },
    { title: 'من التجارب إلى الإنتاج', subtitle: "نجسر الفجوة بين طموح مجالس الإدارات والتنفيذ العملي عبر الأدوات والدلائل والشركاء والحوكمة." },
    { title: 'نتائج خلال أقل من 12 شهرًا', subtitle: 'تقليص دورات العمل، تحسين الامتثال، وعائد استثماري خلال أقل من عام.' }
  ] : [
    { title: 'Powering the Third Wave of AI', subtitle: 'Applied AI for the Enterprise' },
    { title: 'Applied AI, From Lab to Operations', subtitle: "Intelligence moves from lab experiments into the arteries of business and government." },
    { title: 'From Pilots to Production', subtitle: "We bridge boardroom ambition and operational execution with tools, playbooks, partners, and governance." },
    { title: 'Outcomes in Under 12 Months', subtitle: 'Cycle‑time reductions, compliance improvements, and ROI in under 12 months.' }
  ];

  const pillars = (isArabic ? [
    {
      id: 1,
      title: "عمق القطاع بدل التشتت",
      description: "نغوص بعمق في قطاعات محددة بدل التوزع السطحي. خبرتنا تأتي من فهم التحديات والأنظمة والفرص الفريدة في كل قطاع نخدمه.",
      image: sectorDepthImg,
      icon: Target,
      gradient: "from-blue-600/80 to-indigo-800/80"
    },
    {
      id: 2,
      title: "جاهزية أصيلة بالذكاء الاصطناعي",
      description: "لا نضيف الذكاء الاصطناعي إلى العمليات فحسب — بل نعيد بناء المؤسسات لتكون أولاً بالذكاء الاصطناعي: هيكلية جديدة، حوكمة، ونماذج تشغيل مصممة للذكاء.",
      image: aiNativeImg,
      icon: Brain,
      gradient: "from-emerald-600/80 to-teal-800/80"
    },
    {
      id: 3,
      title: "التشغيل لتقليل المخاطر",
      description: "نعمل جنبًا إلى جنب مع فرق الإدارة لتقليل مخاطر التنفيذ وضمان تحقيق نتائج قابلة للقياس.",
      image: operateDeRiskImg,
      icon: Shield,
      gradient: "from-orange-600/80 to-red-800/80"
    },
    {
      id: 4,
      title: "أدلة خلق القيمة",
      description: "نقدم منهجيات مجرّبة، لا مجرد رأس مال. أطرنا تحول إمكانات الذكاء الاصطناعي إلى نتائج عملية يمكن التنبؤ بها.",
      image: valuePlaybooksImg,
      icon: BookOpen,
      gradient: "from-purple-600/80 to-pink-800/80"
    }
  ] : [
    {
      id: 1,
      title: "Sector Depth Over Scatter",
      description: "We focus deeply on specific sectors rather than spreading thin across many. Our expertise comes from understanding the unique challenges, regulations, and opportunities within each vertical we serve.",
      image: sectorDepthImg,
      icon: Target,
      gradient: "from-blue-600/80 to-indigo-800/80"
    },
    {
      id: 2,
      title: "AI-Native Readiness",
      description: "We don't just add AI to existing processes - we help enterprises rebuild from the ground up to be AI-first. This means new architecture, governance, and operating models designed for intelligence.",
      image: aiNativeImg,
      icon: Brain,
      gradient: "from-emerald-600/80 to-teal-800/80"
    },
    {
      id: 3,
      title: "Operate to De-Risk",
      description: "We roll up our sleeves and work alongside management teams. By actively participating in operations, we reduce execution risk and ensure initiatives deliver measurable results.",
      image: operateDeRiskImg,
      icon: Shield,
      gradient: "from-orange-600/80 to-red-800/80"
    },
    {
      id: 4,
      title: "Value Creation Playbooks",
      description: "We bring proven methodologies, not just capital. Our playbooks are battle-tested frameworks that turn AI potential into practical business outcomes with predictable timelines.",
      image: valuePlaybooksImg,
      icon: BookOpen,
      gradient: "from-purple-600/80 to-pink-800/80"
    }
  ]);

  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const t = setInterval(() => {
      setCurrentSlide((p) => (p + 1) % heroMessages.length);
    }, 4000);
    return () => clearInterval(t);
  }, [heroMessages.length]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Fallback Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 z-0"></div>

        {/* Background Video */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover z-0 hero-video"
          style={{
            opacity: 0,
            transition: 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          <source src="/Video/Vibrant-Hero-background-1.mp4" type="video/mp4" />
        </video>
        
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 z-10"></div>
        
        <div className="container mx-auto px-6 relative z-20">
          <div className={`max-w-6xl mx-auto ${isArabic ? 'text-right' : 'text-center'} relative`}>
            {/* Slide Indicators */}
            <div className="flex justify-center space-x-3 mb-8 z-20 relative">
              {heroMessages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-3 rounded-full transition-all duration-300 border-2 ${
                    i === currentSlide ? 'bg-primary border-primary w-12' : 'bg-transparent border-primary/40 w-3 hover:border-primary/70 hover:bg-primary/20'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Sliding Content */}
            <div className={`relative min-h-[400px] md:min-h-[380px] lg:min-h-[360px] overflow-hidden ${ isArabic ? 'text-right' : '' }`}>
              {heroMessages.map((m, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 w-full transition-all duration-1000 ease-in-out transform ${
                    i === currentSlide ? 'opacity-100 translate-x-0 z-10' : i < currentSlide ? 'opacity-0 -translate-x-full z-0' : 'opacity-0 translate-x-full z-0'
                  }`}
                >
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight text-white drop-shadow-2xl animate-fade-in" style={isArabic ? {textAlign:'right'}: undefined}>
                    {m.title}
                  </h1>
                  <p className="text-2xl md:text-3xl text-white/90 font-light max-w-4xl leading-relaxed drop-shadow-lg animate-fade-in" style={isArabic ? {textAlign:'right'}: undefined}>
                    {m.subtitle}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-20 sm:mt-16 mb-12 sm:mb-0 flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="btn-spacex-filled px-12 py-4 text-lg" asChild>
                <Link to={`${base}/investments`}>{isArabic ? "استكشف الاستثمارات" : "EXPLORE INVESTMENTS"}</Link>
              </Button>
              <Button size="lg" className="btn-spacex px-12 py-4 text-lg" asChild>
                <Link to={`${base}/about`} onClick={() => {
                  setTimeout(() => {
                    if (typeof document !== 'undefined') {
                      const element = document.getElementById('our-difference');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }, 100);
                }}>{isArabic ? "رسالة المؤسس" : "FOUNDER'S MESSAGE"}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Four Waves Framework - Compact Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className={`max-w-6xl mx-auto ${isArabic ? 'text-right' : ''}`}>
            <h2 className={`text-4xl font-bold mb-10 text-foreground uppercase tracking-wider ${isArabic ? '' : 'text-center'}`}>
              {isArabic ? "إطار الموجات الأربع" : "Four Waves Framework"}
            </h2>

            {/* Compact 4-up grid, avoids vertical scrolling on desktop */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Wave 1 */}
              <Card className="bg-card border border-border/50 hover:shadow-lg transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="text-4xl font-extrabold text-foreground mb-2">01</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{isArabic ? "نماذج الطليعة" : "Frontier Models"}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {isArabic ? "اختراقات مخبرية تتصدر العناوين لكنها غير عملية على نطاق المؤسسات. أبحاث متقدمة يصعب دمجها في بيئات منظمة مثقلة بالأنظمة الموروثة." : "Lab breakthroughs that capture headlines but remain impractical for enterprise scale. Cutting‑edge research that can't integrate into regulated, legacy‑heavy environments."}
                  </p>
                </CardContent>
              </Card>

              {/* Wave 2 */}
              <Card className="bg-card border border-border/50 hover:shadow-lg transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="text-4xl font-extrabold text-foreground mb-2">02</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{isArabic ? "الأدوات والمنصات" : "Tools & Platforms"}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {isArabic ? "واجهات برمجة وتطبيقات مساعدة تيسر الوصول لكنها تظل مجزأة. العروض تثير الحماس ولكنها تتعثر عند الشراء والامتثال." : "APIs and copilots democratize access but stay fragmented. Pilots excite in demos yet stall at procurement and compliance."}
                  </p>
                </CardContent>
              </Card>

              {/* Wave 3 - CURRENT FOCUS */}
              <Card className="bg-primary/5 border border-primary/30 hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="text-4xl font-extrabold text-primary mb-2">03</div>
                  <h3 className="text-lg font-semibold text-primary mb-2">{isArabic ? "الذكاء الاصطناعي التطبيقي — تركيزنا الحالي" : "Applied AI — CURRENT FOCUS"}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {isArabic ? "تبنٍ على مستوى المؤسسات: الانتقال من التجارب إلى الإنتاج. يتعرض قادة التقنية لضغوط مع تعثر التوسّع، والامتثال والحوكمة غير قابلين للتفاوض. تجسر فايبرانت كابيتال الطموح بالتنفيذ مع ضوابط نشر مسؤولة." : "Enterprise‑grade adoption: moving from pilots to production. CIOs are under pressure as pilots fail to scale; compliance and governance are non‑negotiable. Vibrant Capital bridges ambition to execution with the guardrails to deploy responsibly."}
                  </p>
                </CardContent>
              </Card>

              {/* Wave 4 */}
              <Card className="bg-card border border-border/50 hover:shadow-lg transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="text-4xl font-extrabold text-foreground mb-2">04</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{isArabic ? "مؤسسات أصيلة بالذكاء الاصطناعي" : "AI‑Native Enterprises"}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {isArabic ? "منظمات مصمّمة لتكون أولاً بالذكاء الاصطناعي. يصبح الذكاء نموذج التشغيل عبر البنية والحوكمة وكل نقاط تواصل العملاء." : "Organizations designed to be AI‑first from the ground up. AI becomes the operating model across infrastructure, governance, and every customer touchpoint."}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Simple callout (no box/border) */}
            <p className={`mt-10 text-lg md:text-xl font-bold text-foreground ${isArabic ? 'text-right' : 'text-center'}`}>
              {isArabic ? "\"توجد فايبرانت كابيتال لجعل الذكاء الاصطناعي عمليًا ومربحًا اليوم — مع تأسيس مؤسسات أصيلة بالذكاء الاصطناعي لغدٍ أفضل.\"" : "\"Vibrant Capital exists to make AI practical and profitable today — while laying the foundations for tomorrow's AI‑native enterprises.\""}
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Header */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className={`max-w-4xl mx-auto ${isArabic ? 'text-right' : 'text-center'}`}>
            <h2 className={`text-4xl font-bold mb-6 text-foreground uppercase tracking-wider ${isArabic ? '' : 'text-center'}` }>
              {isArabic ? "فلسفتنا الاستثمارية" : "Our Investment Philosophy"}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {isArabic ? "أربعة مبادئ أساسية توجه كيفية تحديدنا للاستثمارات ونمو الشركات عند تقاطع الذكاء الاصطناعي وعمليات المؤسسة." : "Four core principles that guide how we identify, invest in, and grow companies at the intersection of AI and enterprise operations."}
            </p>
          </div>
        </div>
      </section>

      {/* Four Pillars - Compact Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pillars.map((pillar, index) => {
                const IconComponent = pillar.icon;
                return (
                  <Card 
                    key={pillar.id}
                    className="group relative overflow-hidden bg-card border border-border/50 hover:shadow-lg transition-all duration-500 hover:scale-[1.02] cursor-pointer h-full"
                  >
                    <div className="relative h-48 overflow-hidden">
                      {/* Background Image */}
                      <img 
                        src={pillar.image} 
                        alt={pillar.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} opacity-80 group-hover:opacity-70 transition-opacity duration-300`} />
                      
                      {/* Content Overlay */}
                      <CardContent className="relative h-full p-5 flex flex-col justify-between text-white z-10">
                        <div className="flex items-start justify-between">
                          <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                            <IconComponent size={20} className="text-white" />
                          </div>
                          <div className="text-3xl font-bold text-white/30 group-hover:text-white/40 transition-colors duration-300">
                            {String(pillar.id).padStart(2, '0')}
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold leading-tight group-hover:text-white transition-colors duration-300">
                            {pillar.title}
                          </h3>
                          
                          {/* Description - slides up on hover */}
                          <div className="transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                            <p className="text-white/90 leading-relaxed text-sm">
                              {pillar.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Investment Approach */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className={`max-w-6xl mx-auto ${isArabic ? 'text-right' : ''}`}>
            <h2 className={`text-3xl font-semibold mb-12 text-foreground ${isArabic ? '' : 'text-center'}`}>
              {isArabic ? "منهجيتنا الاستثمارية" : "Our Investment Approach"}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-card border border-border/50 hover:shadow-lg transition-all duration-300 h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">{isArabic ? "التحديد" : "Identify"}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {isArabic ? "شركات ذات أساسيات قوية في قطاعات مهيأة للتحول بالذكاء الاصطناعي، تقودها فرق مستعدة للتغيير." : "Companies with strong fundamentals in sectors ripe for AI transformation, led by teams ready to embrace change."}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border border-border/50 hover:shadow-lg transition-all duration-300 h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Brain className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">{isArabic ? "التحوّل" : "Transform"}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {isArabic ? "دمج قدرات الذكاء الاصطناعي بعمق في العمليات لخلق ميزات تنافسية مستدامة وتدفقات إيرادات جديدة." : "Embed AI capabilities deep into operations, creating sustainable competitive advantages and new revenue streams."}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border border-border/50 hover:shadow-lg transition-all duration-300 h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">{isArabic ? "التوسّع" : "Scale"}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {isArabic ? "مساعدة المؤسسات الأصيلة بالذكاء الاصطناعي على قيادة السوق وتقديم عوائد متميزة لجميع أصحاب المصلحة." : "Help AI-native enterprises capture market leadership positions and deliver exceptional returns for all stakeholders."}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 section-spacex">
        <div className="container mx-auto px-6">
          <div className={`max-w-4xl mx-auto ${isArabic ? 'text-right' : 'text-center'}`}>
            <h2 className="text-6xl font-black mb-12 uppercase tracking-wider">
              {isArabic ? "انضم إلى المهمة" : "JOIN THE MISSION"}
            </h2>
            <p className="text-2xl text-muted-foreground mb-12 font-light leading-relaxed">
              {isArabic ? (
                <>
                  نحن لا نستثمر في شركات فحسب.<br />
                  <span className="text-spacex-gradient font-bold">نحن نكتب الفصل التالي من تحول المؤسسات.</span>
                </>
              ) : (
                <>
                  We are not just investing in companies.<br />
                  <span className="text-spacex-gradient font-bold">We are writing the next chapter of enterprise transformation.</span>
                </>
              )}
            </p>
            <Button size="lg" className="btn-spacex-filled px-16 py-6 text-xl" asChild>
              <Link to={`${base}/contact`}>{isArabic ? "كن شريكًا لنا" : "PARTNER WITH US"}</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;