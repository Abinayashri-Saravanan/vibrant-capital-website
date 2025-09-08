import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";

const ForInvestors = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 section-gradient">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Partnering to Shape the Future of <span className="text-gradient">Applied AI</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              At Vibrant Capital, investing with us is not simply an allocation decision — it is a strategic 
              partnership in building the infrastructure of the AI-native enterprise.
            </p>
          </div>
        </div>
      </section>

      {/* Why This Moment Matters */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="card-premium card-glow">
              <CardHeader>
                <CardTitle className="text-3xl text-gradient">Why This Moment Matters</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We are living through one of the most significant technology shifts of our lifetime. But unlike 
                  the consumer-driven AI buzz that dominates headlines, the <span className="text-primary font-semibold">
                  real value will accrue in enterprises</span> — the regulated, data-rich organizations that power 
                  global finance, healthcare, energy, retail, and manufacturing.
                </p>
                
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-primary mb-4">CIOs Face Immense Challenges:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Data silos and compliance risks slow down adoption
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Fragmented vendors make integration difficult
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Board-level scrutiny demands ROI, auditability, and trust
                    </li>
                  </ul>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The result? Enterprises are drowning in <span className="text-primary font-semibold">pilots</span> but 
                  starving for <span className="text-primary font-semibold">production-scale outcomes.</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Invest with Vibrant Capital */}
      <section className="py-16 section-gradient">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Invest with <span className="text-gradient">Vibrant Capital</span>
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="card-premium card-glow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">1</div>
                    <CardTitle className="text-xl">Operator-Led Model</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    We are a private equity firm run by seasoned CIOs and technology executives. We don't just 
                    provide capital; we provide operating expertise. Our Operators-in-Residence embed with portfolio 
                    companies, helping them overcome procurement hurdles and land enterprise clients faster.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-premium card-glow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">2</div>
                    <CardTitle className="text-xl">CIO-Centric Strategy</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Every investment is chosen with a single north star: <span className="text-primary font-semibold">
                    does this make CIOs successful?</span> By aligning with CIO pain points — governance, orchestration, 
                    data, compliance — we ensure our companies solve real problems, not just showcase demos.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-premium card-glow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">3</div>
                    <CardTitle className="text-xl">High-Conviction Portfolio</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    We do not scatter investments across hundreds of startups. We curate an ecosystem of 
                    complementary, enterprise-ready companies that together form the foundation of Applied AI adoption. 
                    Each investment strengthens the others.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-premium card-glow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">4</div>
                    <CardTitle className="text-xl">Governance & Trust Built-In</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Our portfolio companies are enterprise-grade from day one. They embed compliance (SOC2, HIPAA, 
                    PCI, HITRUST), observability, and security into their platforms, giving CIOs confidence to scale.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-premium card-glow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">5</div>
                    <CardTitle className="text-xl">Transparency for LPs</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    We hold ourselves to the same standard we demand of CIOs: clarity, accountability, and metrics. 
                    Our LP Investor Dashboard provides real-time updates on fund NAV, company performance, and 
                    compliance milestones.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Investor Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="text-gradient">Investor Benefits</span>
            </h2>
            <div className="space-y-6">
              <Card className="card-premium">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">CIO</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-2">Access to CIO Councils</h3>
                      <p className="text-muted-foreground">
                        LPs gain unique access to Vibrant Capital's CIO Council, a network of senior technology 
                        leaders who shape strategy, validate companies, and share insights on enterprise AI adoption.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-premium">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">Co</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-2">Co-Investment Opportunities</h3>
                      <p className="text-muted-foreground">
                        Preferred rights to co-invest alongside Vibrant Capital in high-growth rounds of our most 
                        promising portfolio companies.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-premium">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">IQ</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-2">Quarterly Intelligence</h3>
                      <p className="text-muted-foreground">
                        Detailed investor letters that go beyond financials — including sector deep-dives, 
                        regulatory insights, and adoption benchmarks across BFSI, healthcare, energy, and more.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-premium">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">IM</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-2">Impact Metrics Beyond IRR</h3>
                      <p className="text-muted-foreground">
                        We track not only returns but also enterprise transformation outcomes: pilots converted to 
                        production, compliance certifications achieved, and business processes reengineered.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-16 section-gradient">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              Our <span className="text-gradient">Promise to Investors</span>
            </h2>
            <Card className="card-premium card-glow">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-primary mb-2">We will invest with discipline</h3>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-primary mb-2">We will operate with empathy</h3>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-primary mb-2">We will measure outcomes with rigor</h3>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-primary mb-2">We will give you transparency every step</h3>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Above all, we will ensure that your capital is not just funding the AI revolution — it is 
                  <span className="text-primary font-semibold"> shaping it.</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Investing in the <span className="text-gradient">Future Operating Model</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              The Third Wave of AI will not be defined by who builds the largest model. It will be defined by 
              which enterprises successfully adopt AI at scale.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              By partnering with us, you are not just investing in companies — you are investing in the future 
              operating model of global enterprise.
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

export default ForInvestors;