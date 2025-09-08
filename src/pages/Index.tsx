import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/ui/navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 section-gradient">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Powering the{" "}
              <span className="text-gradient">Third Wave of AI</span>
              <br />
              Applied AI for the Enterprise
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              At Vibrant Capital, we believe the true test of technology is not what it promises in theory, 
              but what it delivers in practice. We are a private equity firm founded by CIOs, for CIOs — 
              leaders who have lived the daily pressures of running massive IT organizations and who now 
              dedicate themselves to shaping the future of enterprise AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-premium">
                Our Investments
              </Button>
              <Button size="lg" variant="outline" className="btn-outline-premium">
                Investment Philosophy
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="card-premium p-8">
              <CardContent className="p-0">
                <h2 className="text-2xl font-semibold mb-6 text-primary">The CIO's Dilemma</h2>
                <p className="text-lg leading-relaxed mb-6">
                  A few years ago, a Fortune 100 CIO sat in a boardroom with a familiar problem: 
                  the board demanded an AI strategy. His team had run{" "}
                  <span className="text-primary font-semibold">six pilots in the past year</span>{" "}
                  — a chatbot here, a predictive model there — but none had scaled. Compliance flagged every rollout. 
                  Procurement delayed contracts for months. The board grew impatient.
                </p>
                <p className="text-lg leading-relaxed">
                  That CIO's story is not unique. Across industries, technology leaders face the same dilemma:{" "}
                  <span className="text-primary font-semibold">
                    they know AI can transform the business, but they can't get from promise to production.
                  </span>
                </p>
                <p className="text-xl font-semibold mt-6 text-gradient">
                  This is why Vibrant Capital exists.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Three Waves Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why the <span className="text-gradient">Third Wave of AI</span> Matters
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="card-premium card-glow">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-4">1</div>
                  <h3 className="text-xl font-semibold mb-3">Wave 1: Frontier Models</h3>
                  <p className="text-muted-foreground">
                    The pioneers built massive models that captured headlines. They demonstrated potential, 
                    but for CIOs, they remained confined to white papers and demos — impossible to deploy at scale.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="card-premium card-glow">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-4">2</div>
                  <h3 className="text-xl font-semibold mb-3">Wave 2: Tools & Platforms</h3>
                  <p className="text-muted-foreground">
                    Then came the tools. APIs, SaaS platforms, and vendor demos flooded inboxes. 
                    Pilots proliferated, but integration, security, and governance hurdles turned most into shelfware.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="card-premium card-glow">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-4">3</div>
                  <h3 className="text-xl font-semibold mb-3">Wave 3: Applied AI</h3>
                  <p className="text-muted-foreground">
                    Today, we enter the Third Wave. This is where AI becomes{" "}
                    <span className="text-primary font-semibold">invisible but indispensable.</span>{" "}
                    Board-ready, compliant, and financially justifiable.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Points Section */}
      <section className="py-16 section-gradient">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">
              From <span className="text-gradient">Promise to Production</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">60-90</div>
                <div className="text-sm text-muted-foreground">Days to Pilot</div>
                <div className="text-xs text-muted-foreground">Not 12-18 months</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">30-50%</div>
                <div className="text-sm text-muted-foreground">Efficiency Gains</div>
                <div className="text-xs text-muted-foreground">Cycle-time reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">&lt;12</div>
                <div className="text-sm text-muted-foreground">Months ROI</div>
                <div className="text-xs text-muted-foreground">Payback period</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Compliant</div>
                <div className="text-xs text-muted-foreground">SOC2, HIPAA, PCI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Preview */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Sectors We <span className="text-gradient">Transform</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Banking & Capital Markets",
                "Insurance",
                "Healthcare & Life Sciences", 
                "Retail & CPG",
                "Energy & Utilities",
                "Transportation & Logistics",
                "Manufacturing",
                "Public Sector"
              ].map((sector) => (
                <Card key={sector} className="card-premium hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-4 text-center">
                    <div className="text-sm font-medium">{sector}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 section-gradient">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              Our Vision: From <span className="text-gradient">Boardrooms to Breakthroughs</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We envision a world where CIOs are not forced into defensive postures, where they no longer say, 
              "We're experimenting with AI" but instead report, "AI is now embedded into how we serve our customers, 
              protect our data, and grow our business."
            </p>
            <p className="text-lg font-semibold text-gradient mb-8">
              At Vibrant Capital, we are not just investing in companies. 
              We are writing the next chapter of enterprise transformation.
            </p>
            <Button size="lg" className="btn-premium">
              Partner With Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
