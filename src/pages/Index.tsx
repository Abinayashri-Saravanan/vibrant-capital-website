import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/ui/navigation";

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

      {/* Three Waves */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-black text-center mb-20">
              THE THREE WAVES
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center group">
                <div className="text-8xl font-black text-primary/20 mb-6 group-hover:text-primary/40 transition-colors duration-500">01</div>
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-wider">FRONTIER MODELS</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The pioneers built massive models that captured headlines. They demonstrated potential, 
                  but remained confined to white papers and demos.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="text-8xl font-black text-primary/20 mb-6 group-hover:text-primary/40 transition-colors duration-500">02</div>
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-wider">TOOLS & PLATFORMS</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  APIs, SaaS platforms, and vendor demos flooded inboxes. Pilots proliferated, 
                  but integration hurdles turned most into shelfware.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="text-8xl font-black text-spacex-gradient mb-6">03</div>
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-wider text-primary">APPLIED AI</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  AI becomes <span className="text-primary font-semibold">invisible but indispensible.</span>{" "}
                  Board-ready, compliant, and financially justifiable.
                </p>
              </div>
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

      {/* Sectors Grid */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-black text-center mb-20 uppercase tracking-wider">
              TARGET SECTORS
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "BANKING & CAPITAL MARKETS",
                "INSURANCE",
                "HEALTHCARE & LIFE SCIENCES", 
                "RETAIL & CPG",
                "ENERGY & UTILITIES",
                "TRANSPORTATION & LOGISTICS",
                "MANUFACTURING",
                "PUBLIC SECTOR"
              ].map((sector) => (
                <Card key={sector} className="card-spacex group hover:scale-105 transition-all duration-500 cursor-pointer">
                  <CardContent className="p-8 text-center">
                    <div className="text-sm font-bold uppercase tracking-wider group-hover:text-primary transition-colors duration-300">
                      {sector}
                    </div>
                  </CardContent>
                </Card>
              ))}
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