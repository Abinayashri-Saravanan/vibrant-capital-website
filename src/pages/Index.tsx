import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/ui/navigation";
import { useVideoOptimization } from "@/hooks/use-video-optimization";
import bankingImg from "@/assets/sector-banking.jpg";
import insuranceImg from "@/assets/sector-insurance.jpg";
import healthcareImg from "@/assets/sector-healthcare.jpg";
import retailImg from "@/assets/sector-retail.jpg";
import energyImg from "@/assets/sector-energy.jpg";
import transportationImg from "@/assets/sector-transportation.jpg";
import manufacturingImg from "@/assets/sector-manufacturing.jpg";
import publicImg from "@/assets/sector-public.jpg";
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

  // Home Hero Auto-Slider Content
  const heroMessages = [
    { title: 'Powering the Third Wave of AI', subtitle: 'Applied AI for the Enterprise' },
    { title: 'Applied AI, From Lab to Operations', subtitle: "Intelligence moves from lab experiments into the arteries of business and government." },
    { title: 'From Pilots to Production', subtitle: "We bridge boardroom ambition and operational execution with tools, playbooks, partners, and governance." },
    { title: 'Outcomes in Under 12 Months', subtitle: 'Cycle‑time reductions, compliance improvements, and ROI in under 12 months.' }
  ];

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
          <div className="max-w-6xl mx-auto text-center relative">
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
            <div className="relative min-h-[320px] md:min-h-[280px] overflow-hidden">
              {heroMessages.map((m, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 w-full transition-all duration-1000 ease-in-out transform ${
                    i === currentSlide ? 'opacity-100 translate-x-0 z-10' : i < currentSlide ? 'opacity-0 -translate-x-full z-0' : 'opacity-0 translate-x-full z-0'
                  }`}
                >
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight text-white drop-shadow-2xl animate-fade-in">
                    {m.title}
                  </h1>
                  <p className="text-2xl md:text-3xl text-white/90 font-light max-w-4xl mx-auto leading-relaxed drop-shadow-lg animate-fade-in">
                    {m.subtitle}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-12 sm:mt-10 mb-8 sm:mb-0 flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="btn-spacex-filled px-12 py-4 text-lg" asChild>
                <Link to="/investments">EXPLORE INVESTMENTS</Link>
              </Button>
              <Button size="lg" className="btn-spacex px-12 py-4 text-lg" asChild>
                <Link to="/philosophy">OUR PHILOSOPHY</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-xl md:text-2xl font-light leading-relaxed text-muted-foreground mb-8">
              Vibrant Capital is a private equity firm{" "}
              <span className="text-primary font-medium">founded by CIOs, for CIOs</span>. We invest in, operate, and accelerate companies that embed AI into the core of enterprise operations, ensuring transformation is practical, secure, and measurable.
            </p>
            <div className="max-w-5xl mx-auto text-base md:text-lg leading-relaxed text-muted-foreground space-y-4">
              <p>
                While the world is focused on chasing the newest advances in LLMs to achieve near‑AGI intelligence, we stay awake worrying about the fact that medium and large corporations and governments have yet to see transformational commercial or operational impacts from AI technologies that are already good enough to create step‑function changes.
              </p>
              <p>
                While AI only firms debate whether scaling laws for LLM improvements are nearing their yield limits, we stay awake asking why the scaling of current AI capabilities is moving so slowly inside the average enterprise.
              </p>
              <p>
                While AI and hyperscalers worry about how they will spend the next $100B on building a new data center, we refine our thinking on how exactly a CIO can take out $100 million in cost and add $100 million in revenue with AI solutions today.
              </p>
              <p className="text-primary font-semibold text-lg">
                We focus on the pragmatic, practical basis of scaling AI in enterprises and governments. We know humanity has seen at least two AI winters when all investments froze after initial fervor subsided because commercial promise did not materialize. We stay awake to ensure another AI winter does not come — by making sure AI delivers practical, measurable results today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Message */}
      <section className="py-20 section-spacex">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <Card className="card-spacex card-spacex-glow border-none">
              <CardContent className="p-12">
                <h2 className="text-4xl font-bold mb-8 text-center">APPLIED AI IS THE CURRENT WAVE</h2>
                <div className="space-y-6 text-lg leading-relaxed">
                  <p>
                    Applied AI is the current wave where intelligence moves from lab experiments into the arteries of business and government. For us, this is not about futuristic speculation — it is about helping CIOs translate today's proven AI capabilities into cost savings, revenue growth, and risk reduction.
                  </p>
                  <p>
                    We act as the bridge between boardroom ambition and operational execution, giving enterprises the tools, playbooks, partners, and governance frameworks to go from pilots to production.
                  </p>
                  <p>
                    Our focus is on measurable outcomes — cycle‑time reductions, compliance improvements, and ROI in under 12 months — so that AI adoption is not a gamble but a reliable lever of transformation.
                  </p>
                  <p className="text-center text-2xl font-bold text-primary border-t border-b border-primary/20 py-8">
                    Vibrant Capital exists to make AI practical and profitable today, while laying the foundations for tomorrow's AI‑native enterprises.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Four Waves Framework */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-semibold text-center mb-20 text-foreground">
              Four Waves Framework
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Wave 1 */}
              <Card className="bg-card border border-border/50 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 h-full flex flex-col justify-between min-h-[280px]">
                  <div>
                    <div className="text-4xl font-bold text-primary/30 mb-4">01</div>
                    <h3 className="text-lg font-semibold mb-3 text-foreground">Frontier Models</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      Breakthrough research from labs and hyperscalers demonstrated AI's raw potential but remained impractical for enterprise scale. CIOs admired the headlines but could not integrate these models into regulated, legacy-heavy environments.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Wave 2 */}
              <Card className="bg-card border border-border/50 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 h-full flex flex-col justify-between min-h-[280px]">
                  <div>
                    <div className="text-4xl font-bold text-primary/30 mb-4">02</div>
                    <h3 className="text-lg font-semibold mb-3 text-foreground">Tools & Platforms</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      APIs, copilots, and SaaS tools democratized access. Enterprises experimented widely, but initiatives stayed fragmented. CIOs were left with pilots that looked exciting in demos but could not pass procurement, compliance, or ROI thresholds.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Wave 3 - Featured */}
              <Card className="bg-primary/5 border border-primary/20 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 h-full flex flex-col justify-between min-h-[280px]">
                  <div>
                    <div className="text-4xl font-bold text-primary mb-4">03</div>
                    <h3 className="text-lg font-semibold mb-3 text-primary">Applied AI</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm mb-3">
                      The wave we operate in. Applied AI is about embedding intelligence into critical workflows: automating claims, enhancing fraud detection, accelerating regulatory reporting, powering revenue cycle management. It is enterprise‑grade, governed, and outcome‑driven.
                    </p>
                    <div className="text-xs font-medium text-primary">← Our Focus</div>
                  </div>
                </CardContent>
              </Card>

              {/* Wave 4 - Vision */}
              <Card className="bg-secondary/10 border border-secondary/20 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 h-full flex flex-col justify-between min-h-[280px]">
                  <div>
                    <div className="text-4xl font-bold text-foreground mb-4">04</div>
                    <h3 className="text-lg font-semibold mb-3 text-foreground">AI‑Native Enterprises</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm mb-3">
                      The future we are building toward. Entire enterprises re‑architected around AI — from infrastructure and governance to customer engagement and operations. CIOs won't bolt AI on; they will run organizations designed to be AI‑first from the ground up.
                    </p>
                    <div className="text-xs font-medium text-secondary">(Vision)</div>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </section>


      {/* Sectors - Sequoia-style Masonry Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-semibold text-center mb-20 text-foreground">
              Target Sectors
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
               {/* Banking - Featured large card */}
              <Card className="col-span-1 md:col-span-1 lg:col-span-2 group overflow-hidden border border-border/50 hover:shadow-lg transition-all duration-300 cursor-pointer" onClick={() => window.location.href = '/sectors'}>
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={bankingImg} 
                    alt="Banking & Capital Markets"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-2xl font-semibold text-white mb-2">Banking & Capital Markets</h3>
                    <p className="text-white/90">AI-powered risk assessment and compliance</p>
                  </div>
                </div>
              </Card>

              {/* Insurance - Medium card */}
              <Card className="col-span-1 group overflow-hidden border border-border/50 hover:shadow-lg transition-all duration-300 cursor-pointer" onClick={() => window.location.href = '/sectors'}>
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={insuranceImg} 
                    alt="Insurance"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-xl font-semibold text-white">Insurance</h3>
                  </div>
                </div>
              </Card>

              {/* Healthcare - Medium card */}
              <Card className="col-span-1 group overflow-hidden border border-border/50 hover:shadow-lg transition-all duration-300 cursor-pointer" onClick={() => window.location.href = '/sectors'}>
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={healthcareImg} 
                    alt="Healthcare"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-xl font-semibold text-white">Healthcare</h3>
                  </div>
                </div>
              </Card>

              {/* Retail - Wide card */}
              <Card className="col-span-1 md:col-span-1 lg:col-span-2 group overflow-hidden border border-border/50 hover:shadow-lg transition-all duration-300 cursor-pointer" onClick={() => window.location.href = '/sectors'}>
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={retailImg} 
                    alt="Retail & Consumer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-6">
                    <h3 className="text-xl font-semibold text-white">Retail & Consumer</h3>
                  </div>
                </div>
              </Card>

              {/* Energy - Medium card */}
              <Card className="col-span-1 group overflow-hidden border border-border/50 hover:shadow-lg transition-all duration-300 cursor-pointer" onClick={() => window.location.href = '/sectors'}>
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={energyImg} 
                    alt="Energy & Utilities"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-6">
                    <h3 className="text-xl font-semibold text-white">Energy & Utilities</h3>
                  </div>
                </div>
              </Card>

              {/* Manufacturing - Medium card */}
              <Card className="col-span-1 group overflow-hidden border border-border/50 hover:shadow-lg transition-all duration-300 cursor-pointer" onClick={() => window.location.href = '/sectors'}>
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={manufacturingImg} 
                    alt="Manufacturing"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-6">
                    <h3 className="text-xl font-semibold text-white">Manufacturing</h3>
                  </div>
                </div>
              </Card>

            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 section-spacex">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-6xl font-black mb-12 uppercase tracking-wider">
              JOIN THE MISSION
            </h2>
            <p className="text-2xl text-muted-foreground mb-12 font-light leading-relaxed">
              We are not just investing in companies.<br />
              <span className="text-spacex-gradient font-bold">
                We are writing the next chapter of enterprise transformation.
              </span>
            </p>
            <Button size="lg" className="btn-spacex-filled px-16 py-6 text-xl" asChild>
              <Link to="/contact">PARTNER WITH US</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;