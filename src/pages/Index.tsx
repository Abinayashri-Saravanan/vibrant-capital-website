import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/ui/navigation";
import bankingImg from "@/assets/sector-banking.jpg";
import insuranceImg from "@/assets/sector-insurance.jpg";
import healthcareImg from "@/assets/sector-healthcare.jpg";
import retailImg from "@/assets/sector-retail.jpg";
import energyImg from "@/assets/sector-energy.jpg";
import transportationImg from "@/assets/sector-transportation.jpg";
import manufacturingImg from "@/assets/sector-manufacturing.jpg";
import publicImg from "@/assets/sector-public.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center hero-spacex grid-pattern overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-black mb-8 leading-none">
              POWERING THE
              <br />
              <span className="text-spacex-gradient">THIRD WAVE</span>
              <br />
              OF AI
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground mb-12 font-light max-w-4xl mx-auto leading-relaxed">
              Applied AI for the Enterprise
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="btn-spacex-filled px-12 py-4 text-lg">
                EXPLORE INVESTMENTS
              </Button>
              <Button size="lg" className="btn-spacex px-12 py-4 text-lg">
                OUR PHILOSOPHY
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-3xl md:text-4xl font-light leading-relaxed text-muted-foreground">
              We are a private equity firm{" "}
              <span className="text-primary font-medium">founded by CIOs, for CIOs</span>{" "}
              — leaders who have lived the daily pressures of running massive IT organizations and who now 
              dedicate themselves to shaping the future of enterprise AI.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-32 section-spacex">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="card-spacex card-spacex-glow border-none">
              <CardContent className="p-12">
                <h2 className="text-4xl font-bold mb-8 text-center">THE CHALLENGE</h2>
                <div className="space-y-8 text-xl leading-relaxed">
                  <p>
                    A Fortune 100 CIO sat in a boardroom with a familiar problem: the board demanded an AI strategy. 
                    His team had run <span className="text-primary font-semibold">six pilots in the past year</span> 
                    — a chatbot here, a predictive model there — but none had scaled.
                  </p>
                  <p>
                    Compliance flagged every rollout. Procurement delayed contracts for months. The board grew impatient.
                  </p>
                  <p className="text-center text-2xl font-bold text-primary border-t border-b border-primary/20 py-8">
                    They know AI can transform the business, but they can't get from promise to production.
                  </p>
                  <p className="text-center text-3xl font-black text-spacex-gradient">
                    THIS IS WHY VIBRANT CAPITAL EXISTS.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Three Waves - Sequoia-style Tiled Layout */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-semibold text-center mb-20 text-foreground">
              The Three Waves of AI
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
              
              {/* Wave 1 - Large card */}
              <Card className="col-span-1 md:col-span-2 lg:col-span-1 row-span-2 bg-card border border-border/50 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 h-full flex flex-col justify-between">
                  <div>
                    <div className="text-6xl font-bold text-primary/30 mb-4">01</div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Frontier Models</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      The pioneers built massive models that captured headlines. They demonstrated potential, 
                      but remained confined to white papers and demos.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Wave 2 - Medium card */}
              <Card className="col-span-1 bg-card border border-border/50 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary/30 mb-3">02</div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">Tools & Platforms</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    APIs, SaaS platforms, and vendor demos flooded inboxes. Pilots proliferated.
                  </p>
                </CardContent>
              </Card>

              {/* Wave 3 - Featured large card */}
              <Card className="col-span-1 row-span-2 bg-primary/5 border border-primary/20 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 h-full flex flex-col justify-between">
                  <div>
                    <div className="text-6xl font-bold text-primary mb-4">03</div>
                    <h3 className="text-xl font-semibold mb-4 text-primary">Applied AI</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      AI becomes invisible but indispensible. Board-ready, compliant, and financially justifiable.
                    </p>
                  </div>
                  <div className="text-sm font-medium text-primary">← Our Focus</div>
                </CardContent>
              </Card>

              {/* Mission Statement - Wide card */}
              <Card className="col-span-1 md:col-span-2 bg-card border border-border/50 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">The Enterprise Reality</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Integration hurdles turned most pilots into shelfware. We bridge the gap between AI potential and production deployment.
                  </p>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-32 section-spacex">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-black text-center mb-20 uppercase tracking-wider">
              MISSION METRICS
            </h2>
            <div className="grid md:grid-cols-4 gap-12">
              <div className="text-center group">
                <div className="text-6xl font-black text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  60-90
                </div>
                <div className="text-lg font-bold uppercase tracking-wider">DAYS</div>
                <div className="text-sm text-muted-foreground mt-2">TO PILOT</div>
              </div>
              <div className="text-center group">
                <div className="text-6xl font-black text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  30-50%
                </div>
                <div className="text-lg font-bold uppercase tracking-wider">EFFICIENCY</div>
                <div className="text-sm text-muted-foreground mt-2">GAINS</div>
              </div>
              <div className="text-center group">
                <div className="text-6xl font-black text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  &lt;12
                </div>
                <div className="text-lg font-bold uppercase tracking-wider">MONTHS</div>
                <div className="text-sm text-muted-foreground mt-2">ROI</div>
              </div>
              <div className="text-center group">
                <div className="text-6xl font-black text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  100%
                </div>
                <div className="text-lg font-bold uppercase tracking-wider">COMPLIANT</div>
                <div className="text-sm text-muted-foreground mt-2">SOC2, HIPAA, PCI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors - Sequoia-style Masonry Grid */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-semibold text-center mb-20 text-foreground">
              Target Sectors
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-auto">
              
              {/* Banking - Large featured card */}
              <Card className="col-span-1 md:col-span-2 row-span-2 group overflow-hidden border border-border/50 hover:shadow-lg transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={bankingImg} 
                    alt="Banking"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-semibold text-white mb-2">Banking & Capital Markets</h3>
                    <p className="text-sm text-white/80">AI-powered risk assessment and compliance</p>
                  </div>
                </div>
              </Card>

              {/* Insurance - Medium card */}
              <Card className="col-span-1 group overflow-hidden border border-border/50 hover:shadow-lg transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={insuranceImg} 
                    alt="Insurance"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-3">
                    <h3 className="text-lg font-semibold text-white">Insurance</h3>
                  </div>
                </div>
              </Card>

              {/* Healthcare - Medium card */}
              <Card className="col-span-1 group overflow-hidden border border-border/50 hover:shadow-lg transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={healthcareImg} 
                    alt="Healthcare"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-3">
                    <h3 className="text-lg font-semibold text-white">Healthcare</h3>
                  </div>
                </div>
              </Card>

              {/* Retail - Wide card */}
              <Card className="col-span-1 md:col-span-2 group overflow-hidden border border-border/50 hover:shadow-lg transition-all duration-300">
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={retailImg} 
                    alt="Retail"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-3">
                    <h3 className="text-lg font-semibold text-white">Retail & Consumer</h3>
                  </div>
                </div>
              </Card>

              {/* Energy - Tall card */}
              <Card className="col-span-1 row-span-2 group overflow-hidden border border-border/50 hover:shadow-lg transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={energyImg} 
                    alt="Energy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-3">
                    <h3 className="text-lg font-semibold text-white">Energy & Utilities</h3>
                  </div>
                </div>
              </Card>

              {/* Manufacturing - Medium card */}
              <Card className="col-span-1 group overflow-hidden border border-border/50 hover:shadow-lg transition-all duration-300">
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={manufacturingImg} 
                    alt="Manufacturing"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-3">
                    <h3 className="text-lg font-semibold text-white">Manufacturing</h3>
                  </div>
                </div>
              </Card>

            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 section-spacex">
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
            <Button size="lg" className="btn-spacex-filled px-16 py-6 text-xl">
              PARTNER WITH US
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;