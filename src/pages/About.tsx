import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 section-gradient">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">For CIOs, By CIOs</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Vibrant Capital was created with a simple yet radical belief: the AI revolution in enterprises 
              will succeed only if it is led by those who have lived the enterprise technology journey themselves.
            </p>
          </div>
        </div>
      </section>

      {/* Our Founder */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="card-premium card-glow">
              <CardHeader>
                <CardTitle className="text-3xl text-gradient">Our Founder — Shadman Zafar</CardTitle>
                <p className="text-xl text-muted-foreground">
                  A globally recognized technology leader and innovator whose career spans decades of 
                  driving transformation at Fortune 100 companies.
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-primary">Leadership Roles</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Served as CIO, Chief Digital Officer, and Chief Product Officer at Citi, JPMorgan Chase, 
                        Barclays, and Verizon.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-primary">Inventor & Innovator</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Holder of over <span className="text-primary font-semibold">100 patents</span> across 
                        finance, telecom, AI, and digital transformation.
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-primary">Transformation Experience</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Led enterprises through three waves of disruption — the internet era, the cloud era, 
                        and the mobile era — and now leads the charge into the age of Applied AI.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-primary">Global Impact</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Built and managed technology teams across every continent, scaling platforms that serve 
                        millions of customers under some of the strictest compliance regimes in the world.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-primary/10 border border-primary/20 rounded-lg">
                  <p className="text-lg font-semibold text-primary text-center">
                    Shadman's experience is not theoretical. He has presented to boards under pressure, 
                    answered regulators in the toughest jurisdictions, and delivered multi-billion-dollar transformations.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Difference */}
      <section className="py-16 section-gradient">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our <span className="text-gradient">Difference</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
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
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
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
            <div className="grid md:grid-cols-2 gap-6">
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
            <Button size="lg" className="btn-premium">
              Join Our Mission
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;