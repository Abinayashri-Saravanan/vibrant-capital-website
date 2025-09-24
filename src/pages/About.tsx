import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const navigate = useNavigate();
  const { isArabic } = useLanguage();
  const [isMuted, setIsMuted] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Define slide timing and content
  const slides = isArabic ? [
    {
      id: 0,
      startTime: 0,
      endTime: 11,
      title: "اختلافنا",
      content: null,
      isIntro: true
    },
    {
      id: 1,
      startTime: 12,
      endTime: 28,
      title: "حمض نووي للمشغلين",
      content: "لسنا غرباء برأس مال؛ نحن من الداخل بقناعة. كل عضو في فريق القيادة أدار التقنية على نطاق واسع — قاد آلاف المهندسين، وأدار ميزانيات بمليارات الدولارات، ودافع عن برامج التحول تحت رقابة مجلس الإدارة."
    },
    {
      id: 2,
      startTime: 29,
      endTime: 42,
      title: "مجلس CIO",
      content: "لسنا شركة تخمن ما يريده قادة التقنية. نجمع مجلسًا نشطًا من قادة التقنية الحاليين والسابقين الذين يوجهون استراتيجيتنا، ويصادقون على شركات محفظتنا، ويشاركون الأدلة عبر الصناعات."
    },
    {
      id: 3,
      startTime: 43,
      endTime: 56,
      title: "قناعة بدل الضجيج",
      content: "لا نرش الاستثمارات عبر مئات شركات الذكاء الاصطناعي الناشئة. ننتقي محفظة بهدف — نختار شركات تحل المشاكل الحقيقية الحرجة التي يواجهها قادة التقنية في توسيع تبني الذكاء الاصطناعي."
    },
    {
      id: 4,
      startTime: 57,
      endTime: 77,
      title: "نهج قائم على التصميم",
      content: "من لوحات الشركاء المحدودين إلى أدلة القطاعات، كل تجربة نصنعها — لقادة التقنية والمستثمرين والمؤسسين — مصنوعة بعناية. فلسفة التصميم تنقل الوضوح والثقة والمصداقية."
    }
  ] : [
    {
      id: 0,
      startTime: 0,
      endTime: 11,
      title: "Our Difference",
      content: null,
      isIntro: true
    },
    {
      id: 1,
      startTime: 12,
      endTime: 28,
      title: "Operator DNA",
      content: "We are not outsiders with capital; we are insiders with conviction. Every member of our leadership team has run technology at scale — leading thousands of engineers, managing billion-dollar budgets, and defending transformation programs under board scrutiny."
    },
    {
      id: 2,
      startTime: 29,
      endTime: 42,
      title: "CIO Council",
      content: "We are not a firm that guesses at what CIOs want. We convene an active council of current and former CIOs who inform our strategy, validate our portfolio companies, and share playbooks across industries."
    },
    {
      id: 3,
      startTime: 43,
      endTime: 56,
      title: "Conviction Over Hype",
      content: "We don't spray investments across hundreds of AI startups. We curate a portfolio with purpose — selecting companies that solve the real, mission-critical problems CIOs face in scaling AI adoption."
    },
    {
      id: 4,
      startTime: 57,
      endTime: 77,
      title: "Design-Led Approach",
      content: "From our LP dashboards to our sector playbooks, every experience we create — for CIOs, investors, and founders — is crafted with care. Our design philosophy communicates clarity, confidence, and credibility."
    }
  ];

  // Handle video time updates to sync slides
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      const currentTime = video.currentTime;
      const newSlide = slides.find(slide =>
        currentTime >= slide.startTime && currentTime <= slide.endTime
      );

      if (newSlide && newSlide.id !== currentSlide) {
        setCurrentSlide(newSlide.id);
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    return () => video.removeEventListener('timeupdate', handleTimeUpdate);
  }, [currentSlide, slides]);

  // Function to manually change slide and sync video
  const goToSlide = (slideIndex: number) => {
    const slide = slides[slideIndex];
    if (slide && videoRef.current) {
      setCurrentSlide(slideIndex);
      videoRef.current.currentTime = slide.startTime;
    }
  };

  const handleJoinMission = () => {
    navigate(isArabic ? '/ar/contact' : '/contact');
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPaused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
      setIsPaused(!isPaused);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className={`${isArabic ? 'text-right' : 'text-center'} mb-16`}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 text-foreground">
                {isArabic ? (
                  <>من نحن<span className="text-spacex-gradient block">فايبرانت كابيتال</span></>
                ) : (
                  <>About<span className="text-spacex-gradient block">Vibrant Capital</span></>
                )}
              </h1>
              <p className={`text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-4xl ${isArabic ? '' : 'mx-auto'}`}>
                {isArabic ? "لقادة التقنية، من قادة التقنية — نقود ثورة الذكاء الاصطناعي في المؤسسات عبر خبرة المشغلين والخبرة العميقة في القطاعات." : "For CIOs, By CIOs — Leading the AI revolution in enterprises through operator experience and deep sector expertise."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <Card className="card-spacex card-spacex-glow border-none bg-card/80 backdrop-blur-sm">
              <CardContent className="p-12">
                <h2 className={`text-4xl font-bold mb-8 text-foreground ${isArabic ? '' : 'text-center'}` }>
                  {isArabic ? "من نحن" : "Who We Are"}
                </h2>
                <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                  <p>
                    {isArabic ? "فايبرانت كابيتال هي شركة رأس مال خاص تركز على اقتصاد الذكاء الاصطناعي التطبيقي — التحول الهائل الذي يحدث عندما تدمج المؤسسات الذكاء الاصطناعي في عملياتها الأساسية. نتعاون مع شركات تبني البنية التحتية والمنصات والحلول التي تمكّن قادة التقنية من نشر الذكاء الاصطناعي على نطاق واسع بثقة." : "Vibrant Capital is a private equity firm focused on the Applied AI economy — the massive transformation happening as enterprises integrate AI into their core operations. We partner with companies that are building the infrastructure, platforms, and solutions that enable CIOs to deploy AI at scale, with confidence."}
                  </p>
                  <p>
                    {isArabic ? "رأس المال الخاص التقليدي يركز على الهندسة المالية وتحسين التكاليف. نحن نركز على التحول عبر الذكاء التطبيقي. نهجنا يدرك أن الشركات الرابحة في الاقتصاد المدفوع بالذكاء الاصطناعي لن تكون تلك التي تحسن العمليات الموجودة فحسب، بل تلك التي تعيد تصور كيفية إنجاز العمل جذريًا." : "Traditional private equity focuses on financial engineering and cost optimization. We focus on transformation through applied intelligence. Our approach recognizes that the companies winning in the AI-driven economy won't be those that simply optimize existing processes, but those that fundamentally reimagine how work gets done."}
                  </p>
                  <p>
                    {isArabic ? "نتعاون مع شركات مستعدة لإجراء هذا التحول — من أتمتة العمليات إلى العمليات الذكية، ومن اتخاذ القرارات التفاعلية إلى الرؤى التنبؤية، ومن الأقسام المعزولة إلى تدفقات العمل المتكاملة الأصيلة بالذكاء الاصطناعي." : "We partner with companies ready to make this transition - from process automation to intelligent operations, from reactive decision-making to predictive insights, from siloed departments to integrated AI-native workflows."}
                  </p>
                  <p className={`text-2xl font-bold text-primary border-t border-b border-primary/20 py-8 ${isArabic ? 'text-right' : 'text-center'}` }>
                    {isArabic ? "لا نستثمر في شركات الذكاء الاصطناعي فحسب. نصنعها." : "We don't just invest in AI companies. We create them."}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Founder */}
      <section className="py-16 section-gradient">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-4xl font-bold ${isArabic ? 'mb-8' : 'mb-16'} text-foreground ${isArabic ? '' : 'text-center'}` }>
              {isArabic ? (
                <>تعرف على <span className="text-spacex-gradient">مؤسسنا</span></>
              ) : (
                <>Meet Our <span className="text-spacex-gradient">Founder</span></>
              )}
            </h2>
            <Card className="card-spacex card-spacex-glow border-none bg-card/80 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-0">
            <div className={`grid lg:grid-cols-2 items-stretch ${isArabic ? 'gap-8' : 'gap-0'}`}>
                  {/* Photo Section */}
                  <div className="p-4 sm:p-6 lg:p-8 space-y-6 ${isArabic ? 'lg:pl-4 lg:pr-8' : ''}">
                    <div className="flex items-start justify-center">
                      <img 
                        src="/images/shadman-about.jpeg" 
                        alt="Shadman Zafar - Founder, Chairman"
                        className="block w-auto h-auto max-w-full rounded-xl shadow-xl"
                        loading="eager"
                        decoding="async"
                      />
                    </div>
                    
                    {/* Quote Section */}
                    <div className="p-4 sm:p-6 bg-spacex-gradient/10 rounded-lg">
                      <p className={`${isArabic ? 'text-right' : 'text-center'} text-lg sm:text-xl lg:text-2xl font-bold text-spacex-gradient border-t border-b border-spacex-accent/20 py-6 sm:py-8`}>
                        {isArabic ? "خبرتي ليست نظرية. قدّمتُ أمام مجالس الإدارة تحت ضغط، وأجبتُ الجهات التنظيمية في أصعب الولايات القضائية، وحققتُ تحوّلات بمليارات الدولارات." : "My experience is not theoretical. I've presented to boards under pressure, answered regulators in the toughest jurisdictions, and delivered multi-billion-dollar transformations."}
                      </p>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-6 sm:p-8 lg:p-12 xl:p-16 space-y-8 ${isArabic ? 'lg:pr-4' : ''}">
                    <div className={`${isArabic ? 'text-right lg:text-right' : 'text-center lg:text-left'}`}>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">{isArabic ? "شادمن ظفر" : "Shadman Zafar"}</h3>
                      <p className="text-lg sm:text-xl text-spacex-gradient font-semibold mb-6">{isArabic ? "المؤسس، رئيس مجلس الإدارة" : "Founder, Chairman"}</p>
                      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                        {isArabic ? "قائد تقني ومبتكر معترف به عالميًا، تمتد مسيرته لعقود في قيادة التحوّل لدى شركات فورتشن 100." : "A globally recognized technology leader and innovator whose career spans decades of driving transformation at Fortune 100 companies."}
                      </p>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-2 h-2 bg-spacex-gradient rounded-full mt-3 flex-shrink-0"></div>
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-2">{isArabic ? "قيادة تنفيذية" : "Executive Leadership"}</h4>
                          <p className="text-muted-foreground">
                            {isArabic ? "الرئيس التنفيذي للمعلومات، والرئيس الرقمي، ورئيس المنتج في سيتي، وجي بي مورغان تشيس، وباركليز، وفيرايزون." : "CIO, Chief Digital Officer, and Chief Product Officer at Citi, JPMorgan Chase, Barclays, and Verizon."}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-2 h-2 bg-spacex-gradient rounded-full mt-3 flex-shrink-0"></div>
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-2">{isArabic ? "رائد ابتكار" : "Innovation Pioneer"}</h4>
                          <p className="text-muted-foreground">
                            {isArabic ? <>حاصل على أكثر من <span className="text-spacex-gradient font-semibold">100 براءة اختراع</span> في المالية والاتصالات والذكاء الاصطناعي والتحول الرقمي.</> : <>Holder of over <span className="text-spacex-gradient font-semibold">100 patents</span> across finance, telecom, AI, and digital transformation.</>}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-2 h-2 bg-spacex-gradient rounded-full mt-3 flex-shrink-0"></div>
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-2">{isArabic ? "خبير تحوّل" : "Transformation Expert"}</h4>
                          <p className="text-muted-foreground">
                            {isArabic ? "قاد المؤسسات عبر ثلاث موجات من الاضطراب والآن يقود الشحنة نحو الذكاء الاصطناعي التطبيقي." : "Led enterprises through three waves of disruption and now leads the charge into Applied AI."}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-2 h-2 bg-spacex-gradient rounded-full mt-3 flex-shrink-0"></div>
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-2">{isArabic ? "نطاق عالمي" : "Global Scale"}</h4>
                          <p className="text-muted-foreground">
                            {isArabic ? "بنى فرق تقنية عبر كل قارة، ووسّع منصات تخدم ملايين العملاء." : "Built technology teams across every continent, scaling platforms serving millions of customers."}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Difference */}
      <section id="our-difference" className="py-16 section-gradient">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className={`text-3xl font-bold mb-16 ${isArabic ? 'text-right pr-4 lg:pr-8' : 'text-center'}`}>
              {isArabic ? <>اختلافنا <span className="text-gradient">\</span></> : <>Our <span className="text-gradient">Difference</span></>}
            </h2>

            {/* Two Column Layout: Video + Synchronized Slides */}
            <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">

              {/* Left Column: Video */}
              <div className="order-2 lg:order-1">
                <div className={`${isArabic ? 'text-right pr-4 lg:pr-8' : 'text-center'} mb-8`}>
                  <h3 className="text-2xl font-bold text-foreground">
                    {isArabic ? <>استمع إلى <span className="text-spacex-gradient">أفاتار الذكاء الخاص بشادمن</span></> : <>Hear from <span className="text-spacex-gradient">Shadman's AI Avatar</span></>}
                  </h3>
                </div>

                <div className="flex justify-center">
                  <div className="relative w-full max-w-md aspect-[3/4] video-container">
                    <video
                      ref={videoRef}
                      className="w-full h-full rounded-2xl shadow-2xl object-contain bg-black/5"
                      muted={isMuted}
                      autoPlay
                      loop
                      playsInline
                      controls={false}
                      onPlay={() => setIsPaused(false)}
                      onPause={() => setIsPaused(true)}
                    >
                      <source src="/Video/Shadman Avatar-20Sep.mp4" type="video/mp4" />
                      {isArabic ? "متصفحك لا يدعم علامة الفيديو." : "Your browser does not support the video tag."}
                    </video>

                    {/* Video Controls Overlay */}
                    <div className="absolute top-4 right-4 flex gap-2 z-30">
                      <button
                        onClick={togglePlay}
                        className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-black/80 transition-all duration-300 group shadow-lg"
                        aria-label={isPaused ? (isArabic ? "تشغيل الفيديو" : "Play video") : (isArabic ? "إيقاف الفيديو" : "Pause video")}
                      >
                        {isPaused ? (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-white ml-0.5 group-hover:scale-110 transition-transform">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-white group-hover:scale-110 transition-transform">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                          </svg>
                        )}
                      </button>

                      <button
                        onClick={toggleMute}
                        className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-black/80 transition-all duration-300 group shadow-lg"
                        aria-label={isMuted ? (isArabic ? "إلغاء كتم الفيديو" : "Unmute video") : (isArabic ? "كتم الفيديو" : "Mute video")}
                      >
                        {isMuted ? (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-white group-hover:scale-110 transition-transform">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.59-.63-1.59-1.41V9.41c0-.78.71-1.41 1.59-1.41h6.75Z" />
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-white group-hover:scale-110 transition-transform">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.59-.63-1.59-1.41V9.41c0-.78.71-1.41 1.59-1.41h6.75Z" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Synchronized Presentation Slides */}
              <div className="order-1 lg:order-2">
                <div className="relative h-full flex items-center justify-center min-h-[500px]">
                  {slides.map((slide, index) => (
                    <div
                      key={slide.id}
                      className={`absolute inset-0 transition-all duration-1000 ease-out ${
                        currentSlide === index
                          ? 'opacity-100 transform translate-x-0 scale-100'
                          : currentSlide > index
                          ? 'opacity-0 transform -translate-x-12 scale-95'
                          : 'opacity-0 transform translate-x-12 scale-95'
                      }`}
                      style={{
                        transitionDelay: currentSlide === index ? '100ms' : '0ms'
                      }}
                    >
                      {slide.isIntro ? (
                        // Intro slide - just the title
                        <div className="flex items-center justify-center h-full">
                          <div className={`${isArabic ? 'text-right' : 'text-center'} transform transition-all duration-1200 ease-out`}>
                            <h3 className={`text-5xl font-black text-spacex-gradient mb-4 transition-all duration-1000 ${
                              currentSlide === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                            }`}>
                              {slide.title}
                            </h3>
                            <p className={`text-xl text-muted-foreground transition-all duration-1000 delay-200 ${
                              currentSlide === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                            }`}>
                              {isArabic ? "اكتشف ما يميزنا" : "Discover what sets us apart"}
                            </p>
                          </div>
                        </div>
                      ) : (
                        // Content slides - cards with title and content
                        <div className="flex items-center justify-center h-full p-8">
                          <div className={`bg-card/60 backdrop-blur-sm border border-border/40 rounded-2xl p-8 shadow-2xl max-w-lg w-full transform hover:scale-105 transition-all duration-1000 ${
                            currentSlide === index ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
                          }`}>
                            <div className={`${isArabic ? 'text-right' : 'text-center'} mb-6`}>
                              <div className={`w-16 h-16 bg-spacex-gradient rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-800 delay-300 ${
                                currentSlide === index ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
                              }`}>
                                <span className="text-2xl font-bold text-white">{slide.id}</span>
                              </div>
                              <h4 className={`text-2xl font-bold text-spacex-gradient mb-4 transition-all duration-800 delay-400 ${
                                currentSlide === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                              }`}>
                                {slide.title}
                              </h4>
                            </div>
                            <p className={`text-muted-foreground leading-relaxed text-lg transition-all duration-800 delay-500 ${ isArabic ? 'text-right' : 'text-center' } ${
                              currentSlide === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                            }`}>
                              {slide.content}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Interactive Slide Navigation */}
                <div className={`flex justify-center mt-8 gap-3`}>
                  {slides.map((slide, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`group relative transition-all duration-500 hover:scale-110 ${
                        currentSlide === index ? 'scale-125' : 'scale-100'
                      }`}
                      aria-label={`Go to slide ${index + 1}: ${slide.title}`}
                    >
                      <div className={`w-4 h-4 rounded-full transition-all duration-500 ${
                        currentSlide === index
                          ? 'bg-spacex-gradient shadow-lg'
                          : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                      }`} />

                      {/* Tooltip */}
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-black/80 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                        {slide.title}
                      </div>

                      {/* Active indicator ring */}
                      {currentSlide === index && (
                        <div className="absolute inset-0 rounded-full border-2 border-spacex-gradient animate-pulse" />
                      )}
                    </button>
                  ))}
                </div>

                {/* Progress Bar */}
                <div className="mt-6 max-w-md mx-auto">
                  <div className="h-1 bg-muted-foreground/20 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-spacex-gradient transition-all duration-1000 ease-out"
                      style={{
                        width: `${((currentSlide + 1) / slides.length) * 100}%`
                      }}
                    />
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                    <span>0:00</span>
                    <span className="text-spacex-gradient font-medium">
                      {slides[currentSlide]?.title}
                    </span>
                    <span>1:17</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Vision */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className={`max-w-4xl mx-auto ${isArabic ? 'text-right' : ''}`}>
            <h2 className={`text-3xl font-bold mb-12 ${isArabic ? '' : 'text-center'}` }>
              {isArabic ? <>رؤيتنا <span className="text-gradient">\</span></> : <>Our <span className="text-gradient">Vision</span></>}
            </h2>
            <Card className="card-premium card-glow">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {isArabic ? <>نؤمن أن CIOs هم <span className="text-primary font-semibold">مهندسو المؤسسة المبنية على الذكاء الاصطناعي.</span> لم يعودوا مشغلي المكاتب الخلفية؛ بل هم قادة الخطوط الأمامية للنمو والامتثال والابتكار.</> : <>We believe CIOs are the <span className="text-primary font-semibold">architects of the AI-native enterprise.</span> They are no longer back-office operators; they are front-line leaders of growth, compliance, and innovation.</>}
                </p>
                
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8">
                  <div>
                    <h3 className="font-semibold text-primary mb-2">{isArabic ? "تمكين CIOs" : "Empower CIOs"}</h3>
                    <p className="text-sm text-muted-foreground">{isArabic ? "نمنحهم دفاتر التشغيل والشركاء والمنصات لقيادة تبني الذكاء الاصطناعي بثقة" : "Give them the playbooks, partners, and platforms to lead AI adoption confidently"}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">{isArabic ? "بناء النظام البيئي" : "Build the Ecosystem"}</h3>
                    <p className="text-sm text-muted-foreground">{isArabic ? "نستثمر في الشركات التي تشكل أساس الذكاء الاصطناعي التطبيقي" : "Invest in companies that form the foundation of Applied AI"}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">{isArabic ? "تسريع النتائج" : "Accelerate Outcomes"}</h3>
                    <p className="text-sm text-muted-foreground">{isArabic ? "نضمن ربط كل نشر بنتائج أعمال قابلة للقياس" : "Ensure every deployment is tied to measurable business results"}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">{isArabic ? "إنشاء بنية تحتية دائمة" : "Create Lasting Infrastructure"}</h3>
                    <p className="text-sm text-muted-foreground">{isArabic ? "نبني البنية التحتية الأساسية لاقتصاد الذكاء الاصطناعي التطبيقي" : "Build the Applied AI economy's core infrastructure"}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 section-gradient">
        <div className="container mx-auto px-6">
          <div className={`max-w-6xl mx-auto ${isArabic ? 'text-right' : ''}`}>
            <h2 className={`text-3xl font-bold mb-12 ${isArabic ? '' : 'text-center'}` }>
              {isArabic ? <>قيمنا <span className="text-gradient">\</span></> : <>Our <span className="text-gradient">Values</span></>}
            </h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">{isArabic ? "العملية على النظرية" : "Practicality Over Theory"}</h3>
                <p className="text-muted-foreground">{isArabic ? "نركز على النتائج، وليس الضجة. يجب أن يعمل تبني الذكاء الاصطناعي في الممارسة، وليس فقط في الأوراق البيضاء." : "We focus on outcomes, not hype. AI adoption must work in practice, not just in white papers."}</p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">{isArabic ? "الثقة من خلال الحوكمة" : "Trust Through Governance"}</h3>
                <p className="text-muted-foreground">{isArabic ? "الامتثال والقابلية للتدقيق والأمان ليست اختيارية. إنها أساس الذكاء الاصطناعي المؤسسي." : "Compliance, auditability, and security are not optional. They are the foundation of enterprise AI."}</p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">{isArabic ? "الشراكة في كل خطوة" : "Partnership at Every Step"}</h3>
                <p className="text-muted-foreground">{isArabic ? "نعمل جنبًا إلى جنب مع CIOs والمؤسسين وLPs. لسنا ممولين بعيدين — نحن حلفاء مدمجون." : "We work side by side with CIOs, founders, and LPs. We are not distant financiers — we are embedded allies."}</p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">{isArabic ? "تأثير مستدام" : "Sustainable Impact"}</h3>
                <p className="text-muted-foreground">{isArabic ? "نقيس النجاح ليس فقط في العوائد المالية، بل في مرونة المؤسسات وتمكين الناس." : "We measure success not just in financial returns, but in the resilience of enterprises and empowerment of people."}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className={`max-w-4xl mx-auto ${isArabic ? 'text-right' : 'text-center'}` }>
            <h2 className={`text-3xl font-bold mb-6 ${isArabic ? '' : 'text-center'}` }>
              {isArabic ? <>أكثر من <span className="text-gradient">شركة رأس مال خاص</span></> : <>More Than a <span className="text-gradient">Private Equity Firm</span></>}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              {isArabic ? "فايبرانت كابيتال أكثر من شركة رأس مال خاص. نحن حركة من CIOs والمشغلين والمبتكرين مصممون على جعل تبني الذكاء الاصطناعي التطبيقي حقيقة." : "Vibrant Capital is more than a private equity firm. We are a movement of CIOs, operators, and innovators determined to make Applied AI adoption real."}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {isArabic ? "نستثمر بقناعة، ونعمل بتعاطف، ونشارك مع CIOs لتقديم تحولات آمنة وقابلة للقياس ومستقبلية." : "We invest with conviction, operate with empathy, and partner with CIOs to deliver transformations that are secure, measurable, and future-proof."}
            </p>
            <Button size="lg" className="btn-premium" onClick={handleJoinMission}>
              {isArabic ? "انضم إلى مهمتنا" : "Join Our Mission"}
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;