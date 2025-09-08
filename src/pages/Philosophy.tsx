import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/ui/navigation";

const Philosophy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 section-gradient">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Investment <span className="text-gradient">Philosophy</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our investment philosophy is built around a simple but powerful conviction: the true value of AI 
              will not be captured by frontier models or flashy prototypes, but by the enterprises that 
              successfully embed AI into the very core of how they operate.
            </p>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              
              {/* Sector Depth */}
              <Card className="card-premium card-glow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">1</div>
                    <CardTitle className="text-2xl">Sector Depth Over Scatter</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We are unapologetically focused. While others spread capital across dozens of unconnected bets, 
                    we concentrate our efforts on the industries where data gravity, regulatory scrutiny, and 
                    operational complexity make AI adoption both difficult and transformative.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <span className="text-primary mr-2">•</span>
                      Banking and Financial Services
                    </div>
                    <div className="flex items-center text-sm">
                      <span className="text-primary mr-2">•</span>
                      Insurance
                    </div>
                    <div className="flex items-center text-sm">
                      <span className="text-primary mr-2">•</span>
                      Healthcare and Life Sciences
                    </div>
                    <div className="flex items-center text-sm">
                      <span className="text-primary mr-2">•</span>
                      Energy and Utilities
                    </div>
                    <div className="flex items-center text-sm">
                      <span className="text-primary mr-2">•</span>
                      Manufacturing, Transportation, and Retail
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* AI-Native Readiness */}
              <Card className="card-premium card-glow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">2</div>
                    <CardTitle className="text-2xl">AI-Native Readiness</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We don't back companies that are simply "AI-enhanced." We back those that are AI-native.
                  </p>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Architecture-first thinking</h4>
                      <p className="text-sm text-muted-foreground">Designed around agentic AI, RAG, and secure MLOps</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Data readiness</h4>
                      <p className="text-sm text-muted-foreground">Ingest, classify, and govern data responsibly</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Compliance by design</h4>
                      <p className="text-sm text-muted-foreground">Built for the harshest regulators from day one</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Future-proofing</h4>
                      <p className="text-sm text-muted-foreground">Engineered for multi-agent systems and GraphRAG</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Operate to De-Risk */}
              <Card className="card-premium card-glow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">3</div>
                    <CardTitle className="text-2xl">Operate to De-Risk</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Capital alone does not win enterprise markets. Execution does. That is why Vibrant Capital 
                    deploys Operators-in-Residence — veteran CIOs and technology leaders who know the trenches 
                    of procurement, security reviews, and enterprise rollouts.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <span className="text-primary mr-2">•</span>
                      Accelerate vendor approvals
                    </div>
                    <div className="flex items-center text-sm">
                      <span className="text-primary mr-2">•</span>
                      Translate technical innovation into board-ready language
                    </div>
                    <div className="flex items-center text-sm">
                      <span className="text-primary mr-2">•</span>
                      Navigate compliance and risk committees
                    </div>
                    <div className="flex items-center text-sm">
                      <span className="text-primary mr-2">•</span>
                      Land Fortune 500 logos and expand globally
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Value Creation Playbooks */}
              <Card className="card-premium card-glow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">4</div>
                    <CardTitle className="text-2xl">Value Creation Playbooks</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We don't leave outcomes to chance. Every investment is accompanied by a playbook — 
                    frameworks, accelerators, and best practices drawn from decades of enterprise leadership.
                  </p>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-primary mb-1">AI Deployment Blueprints</h4>
                      <p className="text-sm text-muted-foreground">Secure landing zones with pre-built compliance controls</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Process Intelligence Frameworks</h4>
                      <p className="text-sm text-muted-foreground">Tools to identify high-ROI workflows</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Agentic Patterns Libraries</h4>
                      <p className="text-sm text-muted-foreground">Reusable AI workflows for claims, collections, KYC</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Governance Guardrails</h4>
                      <p className="text-sm text-muted-foreground">Model evaluation and audit logs built in</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes We Underwrite */}
      <section className="py-16 section-gradient">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="text-gradient">Outcomes We Underwrite</span>
            </h2>
            <Card className="card-premium">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  Our philosophy is outcomes-first. Every investment is judged by the value it creates for CIOs and their enterprises.
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-primary/10 border border-primary/20 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-2">30-50%</div>
                    <div className="font-semibold mb-1">Cycle-time reductions</div>
                    <div className="text-sm text-muted-foreground">in targeted workflows</div>
                  </div>
                  <div className="text-center p-6 bg-primary/10 border border-primary/20 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-2">&lt;12</div>
                    <div className="font-semibold mb-1">Months ROI payback</div>
                    <div className="text-sm text-muted-foreground">for lighthouse use cases</div>
                  </div>
                  <div className="text-center p-6 bg-primary/10 border border-primary/20 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-2">Enterprise</div>
                    <div className="font-semibold mb-1">Adoption velocity</div>
                    <div className="text-sm text-muted-foreground">pilots converted to production</div>
                  </div>
                  <div className="text-center p-6 bg-primary/10 border border-primary/20 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-2">100%</div>
                    <div className="font-semibold mb-1">Governance maturity</div>
                    <div className="text-sm text-muted-foreground">compliance certifications passed</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* North Star */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              Our North Star: <span className="text-gradient">The CIO</span>
            </h2>
            <Card className="card-premium card-glow">
              <CardContent className="p-8">
                <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                  Every dollar we invest, every playbook we create, every operator we embed — all of it is 
                  guided by a single question:
                </p>
                <blockquote className="text-2xl font-bold text-gradient mb-6">
                  "Does this make CIOs more successful?"
                </blockquote>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Because when CIOs succeed, enterprises succeed. And when enterprises succeed, AI stops being 
                  a buzzword and becomes the most transformative operating model of the century.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-16 section-gradient">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Reshaping How <span className="text-gradient">Enterprises Work</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Our investment philosophy is not about capital allocation. It is about reshaping how enterprises 
              work in the AI era. We invest in companies that don't just promise disruption, but deliver transformation.
            </p>
            <p className="text-lg font-semibold text-gradient">
              At Vibrant Capital, we believe the Third Wave of AI — Applied AI — will be remembered not by 
              the size of the models, but by the enterprises that learned how to use them.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Philosophy;