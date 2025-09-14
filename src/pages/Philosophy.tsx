import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/ui/navigation";
import { ArrowRight, Target, Brain, Shield, BookOpen } from "lucide-react";
import sectorDepthImg from "@/assets/pillar-sector-depth.jpg";
import aiNativeImg from "@/assets/pillar-ai-native.jpg";
import operateDeRiskImg from "@/assets/pillar-operate-derisk.jpg";
import valuePlaybooksImg from "@/assets/pillar-value-playbooks.jpg";

const Philosophy = () => {
  const pillars = [
    {
      id: 1,
      title: "Sector Depth Over Scatter",
      description: "We focus deeply on specific sectors rather than spreading thin across many. Our expertise comes from understanding the unique challenges, regulations, and opportunities within each vertical we serve.",
      image: sectorDepthImg,
      icon: Target,
      gradient: "from-blue-600/80 to-indigo-800/80"
    },
    {
      id: 2,
      title: "AI-Native Readiness",
      description: "We don't just add AI to existing processes - we help enterprises rebuild from the ground up to be AI-first. This means new architecture, governance, and operating models designed for intelligence.",
      image: aiNativeImg,
      icon: Brain,
      gradient: "from-emerald-600/80 to-teal-800/80"
    },
    {
      id: 3,
      title: "Operate to De-Risk",
      description: "We roll up our sleeves and work alongside management teams. By actively participating in operations, we reduce execution risk and ensure initiatives deliver measurable results.",
      image: operateDeRiskImg,
      icon: Shield,
      gradient: "from-orange-600/80 to-red-800/80"
    },
    {
      id: 4,
      title: "Value Creation Playbooks",
      description: "We bring proven methodologies, not just capital. Our playbooks are battle-tested frameworks that turn AI potential into practical business outcomes with predictable timelines.",
      image: valuePlaybooksImg,
      icon: BookOpen,
      gradient: "from-purple-600/80 to-pink-800/80"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Philosophy Header */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-black mb-8 text-foreground">
              Our Investment
              <span className="text-spacex-gradient block">Philosophy</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Four core principles that guide how we identify, invest in, and grow companies at the intersection of AI and enterprise operations.
            </p>
          </div>
        </div>
      </section>

      {/* Four Pillars - Card Flow */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {pillars.map((pillar, index) => {
                const IconComponent = pillar.icon;
                return (
                  <Card 
                    key={pillar.id}
                    className="group relative overflow-hidden bg-card border-0 hover:shadow-2xl transition-all duration-700 hover:scale-[1.02] cursor-pointer animate-fade-in"
                    style={{
                      animationDelay: `${index * 200}ms`
                    }}
                  >
                    <div className="relative h-80 overflow-hidden">
                      {/* Background Image */}
                      <img 
                        src={pillar.image} 
                        alt={pillar.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} opacity-80 group-hover:opacity-70 transition-opacity duration-500`} />
                      
                      {/* Content Overlay */}
                      <CardContent className="relative h-full p-8 flex flex-col justify-between text-white z-10">
                        <div className="flex items-start justify-between">
                          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                            <IconComponent size={24} className="text-white" />
                          </div>
                          <div className="text-6xl font-black text-white/20 group-hover:text-white/30 transition-colors duration-300">
                            {String(pillar.id).padStart(2, '0')}
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <h3 className="text-2xl md:text-3xl font-bold leading-tight group-hover:text-white transition-colors duration-300">
                            {pillar.title}
                          </h3>
                          
                          {/* Description - slides up on hover */}
                          <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                            <p className="text-white/90 leading-relaxed text-lg">
                              {pillar.description}
                            </p>
                            <div className="flex items-center mt-4 text-white font-semibold">
                              <span className="mr-2">Learn More</span>
                              <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform duration-300" />
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>


      {/* Investment Approach */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-semibold text-center mb-16 text-foreground">
              Our Investment Approach
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-card border border-border/50 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Identify</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Companies with strong fundamentals in sectors ripe for AI transformation, led by teams ready to embrace change.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border border-border/50 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                    <Brain className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Transform</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Embed AI capabilities deep into operations, creating sustainable competitive advantages and new revenue streams.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border border-border/50 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Scale</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Help AI-native enterprises capture market leadership positions and deliver exceptional returns for all stakeholders.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Philosophy;