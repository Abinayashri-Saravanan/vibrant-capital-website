import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";

const About = () => {
  const navigate = useNavigate();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleJoinMission = () => {
    navigate('/contact');
  };

  const handlePlayVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 text-foreground">
                About
                <span className="text-spacex-gradient block">Vibrant Capital</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                For CIOs, By CIOs — Leading the AI revolution in enterprises through operator experience and deep sector expertise.
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
                <h2 className="text-4xl font-bold mb-8 text-center text-foreground">
                  Who We Are
                </h2>
                <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                  <p>
                    Vibrant Capital is a private equity firm focused on the Applied AI economy — the massive transformation happening as enterprises integrate AI into their core operations. We partner with companies that are building the infrastructure, platforms, and solutions that enable CIOs to deploy AI at scale, with confidence.
                  </p>
                  <p>
                    Traditional private equity focuses on financial engineering and cost optimization. We focus on transformation through applied intelligence. Our approach recognizes that the companies winning in the AI-driven economy won't be those that simply optimize existing processes, but those that fundamentally reimagine how work gets done.
                  </p>
                  <p>
                    We partner with companies ready to make this transition - from process automation to intelligent operations, from reactive decision-making to predictive insights, from siloed departments to integrated AI-native workflows.
                  </p>
                  <p className="text-center text-2xl font-bold text-primary border-t border-b border-primary/20 py-8">
                    We don't just invest in AI companies. We create them.
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
            <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
              Meet Our <span className="text-spacex-gradient">Founder</span>
            </h2>
            <Card className="card-spacex card-spacex-glow border-none bg-card/80 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0 items-stretch">
                  {/* Photo Section */}
                  <div className="p-4 sm:p-6 lg:p-8 space-y-6">
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
                      <p className="text-center text-lg sm:text-xl lg:text-2xl font-bold text-spacex-gradient border-t border-b border-spacex-accent/20 py-6 sm:py-8">
                        "My experience is not theoretical. I've presented to boards under pressure, 
                        answered regulators in the toughest jurisdictions, and delivered multi-billion-dollar transformations."
                      </p>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-6 sm:p-8 lg:p-12 xl:p-16 space-y-8">
                    <div className="text-center lg:text-left">
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">Shadman Zafar</h3>
                      <p className="text-lg sm:text-xl text-spacex-gradient font-semibold mb-6">Founder, Chairman</p>
                      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                        A globally recognized technology leader and innovator whose career spans decades of 
                        driving transformation at Fortune 100 companies.
                      </p>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-2 h-2 bg-spacex-gradient rounded-full mt-3 flex-shrink-0"></div>
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-2">Executive Leadership</h4>
                          <p className="text-muted-foreground">
                            CIO, Chief Digital Officer, and Chief Product Officer at Citi, JPMorgan Chase, 
                            Barclays, and Verizon.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-2 h-2 bg-spacex-gradient rounded-full mt-3 flex-shrink-0"></div>
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-2">Innovation Pioneer</h4>
                          <p className="text-muted-foreground">
                            Holder of over <span className="text-spacex-gradient font-semibold">100 patents</span> across 
                            finance, telecom, AI, and digital transformation.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-2 h-2 bg-spacex-gradient rounded-full mt-3 flex-shrink-0"></div>
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-2">Transformation Expert</h4>
                          <p className="text-muted-foreground">
                            Led enterprises through three waves of disruption and now leads the charge into Applied AI.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-2 h-2 bg-spacex-gradient rounded-full mt-3 flex-shrink-0"></div>
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-2">Global Scale</h4>
                          <p className="text-muted-foreground">
                            Built technology teams across every continent, scaling platforms serving millions of customers.
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
      <section className="py-16 section-gradient">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our <span className="text-gradient">Difference</span>
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Video Section */}
              <div className="order-2 lg:order-1">
                <Card className="card-premium overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative aspect-video bg-card/50">
                      <video
                        ref={videoRef}
                        className="w-full h-full object-cover rounded-lg"
                        muted
                        autoPlay
                        loop
                        playsInline
                        onPlay={() => setIsVideoPlaying(true)}
                        onPause={() => setIsVideoPlaying(false)}
                      >
                        <source src="/Video/About-Avatar.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      
                      {/* Video Control Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                        <div className="p-6 w-full">
                          <Button
                            onClick={handlePlayVideo}
                            className="w-full bg-primary/90 backdrop-blur-sm hover:bg-primary text-primary-foreground font-semibold"
                            size="lg"
                          >
                            {isVideoPlaying ? "Pause" : "Hear from"} Shadman's AI Avatar
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Four Differences Grid */}
              <div className="order-1 lg:order-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Card className="card-premium">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">Operator DNA</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      We are not outsiders with capital; we are insiders with conviction. Every member of our 
                      leadership team has run technology at scale — leading thousands of engineers, managing 
                      billion-dollar budgets, and defending transformation programs under board scrutiny.
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-premium">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">CIO Council</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      We are not a firm that guesses at what CIOs want. We convene an active council of current 
                      and former CIOs who inform our strategy, validate our portfolio companies, and share 
                      playbooks across industries.
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-premium">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">Conviction Over Hype</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      We don't spray investments across hundreds of AI startups. We curate a portfolio with 
                      purpose — selecting companies that solve the real, mission-critical problems CIOs face 
                      in scaling AI adoption.
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-premium">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">Design-Led Approach</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      From our LP dashboards to our sector playbooks, every experience we create — for CIOs, 
                      investors, and founders — is crafted with care. Our design philosophy communicates 
                      clarity, confidence, and credibility.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our <span className="text-gradient">Vision</span>
            </h2>
            <Card className="card-premium card-glow">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We believe CIOs are the <span className="text-primary font-semibold">architects of the AI-native enterprise.</span> 
                  They are no longer back-office operators; they are front-line leaders of growth, compliance, and innovation.
                </p>
                
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8">
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Empower CIOs</h3>
                    <p className="text-sm text-muted-foreground">Give them the playbooks, partners, and platforms to lead AI adoption confidently</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Build the Ecosystem</h3>
                    <p className="text-sm text-muted-foreground">Invest in companies that form the foundation of Applied AI</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Accelerate Outcomes</h3>
                    <p className="text-sm text-muted-foreground">Ensure every deployment is tied to measurable business results</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Create Lasting Infrastructure</h3>
                    <p className="text-sm text-muted-foreground">Build the Applied AI economy's core infrastructure</p>
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
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our <span className="text-gradient">Values</span>
            </h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Practicality Over Theory</h3>
                <p className="text-muted-foreground">We focus on outcomes, not hype. AI adoption must work in practice, not just in white papers.</p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Trust Through Governance</h3>
                <p className="text-muted-foreground">Compliance, auditability, and security are not optional. They are the foundation of enterprise AI.</p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Partnership at Every Step</h3>
                <p className="text-muted-foreground">We work side by side with CIOs, founders, and LPs. We are not distant financiers — we are embedded allies.</p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Sustainable Impact</h3>
                <p className="text-muted-foreground">We measure success not just in financial returns, but in the resilience of enterprises and empowerment of people.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              More Than a <span className="text-gradient">Private Equity Firm</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Vibrant Capital is more than a private equity firm. We are a movement of CIOs, operators, and 
              innovators determined to make Applied AI adoption real.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We invest with conviction, operate with empathy, and partner with CIOs to deliver transformations 
              that are secure, measurable, and future-proof.
            </p>
            <Button size="lg" className="btn-premium" onClick={handleJoinMission}>
              Join Our Mission
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;