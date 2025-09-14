import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/ui/navigation";
import { useState, useEffect } from "react";

const Philosophy = () => {
  const heroMessages = [
    {
      title: "Investing Where CIOs Create Durable Edge",
      subtitle: "At Vibrant Capital, our philosophy is rooted in one conviction: the value of AI will be measured not in research papers or pilot projects, but in the boardroom results delivered by CIOs."
    },
    {
      title: "Sector Depth Over Scatter",
      subtitle: "We concentrate on sectors where the stakes are highest and where AI adoption has been historically difficult: banking, insurance, healthcare, energy, manufacturing, retail, and logistics."
    },
    {
      title: "AI-Native Readiness",
      subtitle: "We back companies that are AI-native — designed from the ground up with AI at the core, adaptable to emerging paradigms like GraphRAG, multi-agent systems, and explainable AI."
    },
    {
      title: "Operate to De-Risk",
      subtitle: "Capital is necessary, but not sufficient. We embed Operators-in-Residence — seasoned CIOs and enterprise technologists — directly into our portfolio companies."
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroMessages.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(timer);
  }, [heroMessages.length]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section with Auto-Slider */}
      <section className="pt-24 pb-16 section-gradient relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center relative">
            {/* Slide Indicators */}
            <div className="flex justify-center space-x-2 mb-8">
              {heroMessages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-primary w-8' : 'bg-primary/30 hover:bg-primary/60'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Sliding Content */}
            <div className="relative h-48 md:h-32">
              {heroMessages.map((message, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    index === currentSlide
                      ? 'opacity-100 transform translate-x-0'
                      : index < currentSlide
                      ? 'opacity-0 transform -translate-x-full'
                      : 'opacity-0 transform translate-x-full'
                  }`}
                >
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
                    {message.title.split(' ').map((word, i) => 
                      word === 'Edge' || word === 'Scatter' || word === 'Readiness' || word === 'De-Risk' ? (
                        <span key={i} className="text-gradient">{word}</span>
                      ) : (
                        <span key={i}>{word} </span>
                      )
                    )}
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in">
                    {message.subtitle}
                  </p>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-between items-center absolute top-1/2 left-0 right-0 transform -translate-y-1/2 px-4">
              <button
                onClick={() => setCurrentSlide((prev) => (prev - 1 + heroMessages.length) % heroMessages.length)}
                className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors duration-200 group"
                aria-label="Previous slide"
              >
                <svg className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % heroMessages.length)}
                className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors duration-200 group"
                aria-label="Next slide"
              >
                <svg className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
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
                    We concentrate on sectors where the stakes are highest and where AI adoption has been historically difficult: banking, insurance, healthcare, energy, manufacturing, retail, and logistics. These industries carry massive data gravity, complex compliance obligations, and systemic inefficiencies. They are also where AI's potential for cycle-time reduction, revenue generation, and risk mitigation is greatest. By going deep, not broad, we become trusted partners in industries where CIOs need conviction and credibility most.
                  </p>
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
                    We back companies that are AI-native — designed from the ground up with AI at the core. AI-native firms build their architectures around intelligence, not as a bolt-on feature. They prioritize compliance and observability from day one. They are adaptable to emerging paradigms like GraphRAG, multi-agent systems, and explainable AI. For CIOs, these companies provide solutions that don't just solve today's pain points but position them to lead tomorrow's enterprise AI landscape.
                  </p>
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
                    Capital is necessary, but not sufficient. CIOs struggle with procurement bottlenecks, security reviews, and organizational resistance. That is why we embed Operators-in-Residence — seasoned CIOs and enterprise technologists — directly into our portfolio companies. They accelerate sales cycles, prepare governance frameworks, and open doors at Fortune 500s. This operator-led model reduces friction, builds trust, and ensures our companies get to production — not just pilots.
                  </p>
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
                    We deliver proven frameworks to every investment:
                  </p>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Deployment Blueprints</h4>
                      <p className="text-sm text-muted-foreground">Secure landing zones tailored for BFSI, healthcare, and other regulated industries</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Process Intelligence Maps</h4>
                      <p className="text-sm text-muted-foreground">Data-driven identification of where AI yields the highest ROI</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Agentic Patterns Library</h4>
                      <p className="text-sm text-muted-foreground">Pre-built workflows for claims, collections, revenue cycle, KYC, and more</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Governance Guardrails</h4>
                      <p className="text-sm text-muted-foreground">Guardrails, evaluation protocols, and monitoring for trustworthy AI</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    These playbooks transform abstract potential into pragmatic execution.
                  </p>
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
                  Our philosophy is outcome-driven. We evaluate investments on their ability to deliver:
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-primary/10 border border-primary/20 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-2">30–50%</div>
                    <div className="font-semibold mb-1">Cycle-time reductions</div>
                    <div className="text-sm text-muted-foreground">in targeted workflows</div>
                  </div>
                  <div className="text-center p-6 bg-primary/10 border border-primary/20 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-2">&lt;12</div>
                    <div className="font-semibold mb-1">Months ROI payback</div>
                    <div className="text-sm text-muted-foreground">for lighthouse processes</div>
                  </div>
                  <div className="text-center p-6 bg-primary/10 border border-primary/20 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-2">Enterprise</div>
                    <div className="font-semibold mb-1">Adoption velocity</div>
                    <div className="text-sm text-muted-foreground">measured in pilots converted to production deployments</div>
                  </div>
                  <div className="text-center p-6 bg-primary/10 border border-primary/20 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-2">Governance</div>
                    <div className="font-semibold mb-1">Maturity</div>
                    <div className="text-sm text-muted-foreground">evidenced by certifications, audits passed, and regulatory approvals</div>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <p className="text-muted-foreground">If a company cannot deliver these outcomes, it does not belong in our portfolio.</p>
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

      {/* Closing Manifesto */}
      <section className="py-16 section-gradient">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Closing <span className="text-gradient">Manifesto</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Our philosophy is not about capital allocation; it is about reshaping how enterprises work in the AI era. We invest in companies that embed AI into the fabric of operations, empower CIOs to lead transformation, and prove that AI can be both trusted and profitable.
            </p>
            <p className="text-lg font-semibold text-gradient">
              By holding ourselves accountable to this philosophy, Vibrant Capital ensures that Applied AI becomes the wave of transformation that enterprises — and the world — can count on.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Philosophy;