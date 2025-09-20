import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";

const Investments = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 section-gradient">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              An Ecosystem of <span className="text-gradient">Applied AI Leaders</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              At Vibrant Capital, we don't invest for breadth — we invest for depth and alignment. 
              Every company in our portfolio is carefully chosen because it solves a critical pain point 
              for CIOs: moving AI from promise to production.
            </p>
          </div>
        </div>
      </section>

      {/* HaiIntel */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="card-premium card-glow mb-16">
              <CardHeader>
                <CardTitle className="text-3xl text-gradient">HaiIntel</CardTitle>
                <p className="text-xl text-muted-foreground">
                  Redefining the CIO's Role in the Age of Applied AI
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-primary">AI at the Core, Not the Edge</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Traditional IT architectures were never designed with AI in mind; they were built for 
                      transactional systems, not agentic intelligence. HaiIntel flips that paradigm. By embedding 
                      AI as the organizing principle of enterprise technology, they help CIOs reimagine everything 
                      from infrastructure design to workflow orchestration so that AI is not a bolt-on, but the 
                      engine that drives the organization.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-primary">Accelerators that Deliver Step-Change Impact</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Through proprietary AI accelerators, HaiIntel enables enterprises to leapfrog incremental 
                      progress and move straight to exponential gains. In some cases, these accelerators have 
                      compressed workloads by <span className="text-primary font-semibold">300%</span>, turning 
                      multi-week deployments into days and slashing cycle times across mission-critical processes.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-primary">Humans First, Always</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      What truly differentiates HaiIntel is not just the technology — it's the partnership ethos. 
                      In a world full of transactional vendors, HaiIntel builds deep, trusted human relationships 
                      with CIOs and their teams. They listen before they prescribe. They coach, guide, and walk 
                      shoulder-to-shoulder with enterprise leaders through board presentations, procurement battles, 
                      and cultural resistance.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Skan AI */}
            <Card className="card-premium card-glow mb-16">
              <CardHeader>
                <CardTitle className="text-3xl text-gradient">Skan AI</CardTitle>
                <p className="text-xl text-muted-foreground">
                  The New Era of Automated Process Reengineering
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-primary">From Mapping to Reinventing Work</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      For decades, corporations have relied on consultants armed with clipboards, spreadsheets, 
                      and interviews to map processes. Those days are over. Skan AI uses advanced computer vision 
                      and AI-driven observation to automatically capture how work is truly performed across 
                      applications, desktops, and workflows — in real time and at enterprise scale. The result 
                      is not a guess, not a sample, but a living, breathing digital twin of corporate work.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-primary">The New Generation of Process Engineering</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Think of Skan AI as the successor to the Six Sigma and Lean revolutions. Where those 
                      methodologies relied on manual data collection and statistical modeling, Skan AI automates 
                      the entire process with AI. It delivers insights in days that would take armies of 
                      consultants months to approximate.
                    </p>
                  </div>

                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                    <p className="text-primary font-semibold">
                      "No corporation is doing digital transformation right if they are not doing automated 
                      process reengineering."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* UnifyApps */}
            <Card className="card-premium card-glow mb-16">
              <CardHeader>
                <CardTitle className="text-3xl text-gradient">UnifyApps</CardTitle>
                <p className="text-xl text-muted-foreground">
                  The Orchestration Fabric of the AI-Native Enterprise
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-primary">Why Orchestration is Essential</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      AI is exploding inside enterprises, but without orchestration, adoption becomes chaos. 
                      HR may have an AI chatbot, finance an anomaly-detection model, operations a predictive 
                      maintenance system — but none of these talk to each other. Data remains siloed, workflows 
                      break down at the seams, and CIOs face a sprawl of tools they cannot govern.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-primary">Scaling AI Requires a Fabric, Not Features</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Pilots are easy. Scaling is hard. What prevents scale is not lack of models but lack of 
                      enterprise readiness: security, compliance, integration, and monitoring. UnifyApps provides 
                      that readiness through low-code development, workflow automation, data integration, and 
                      GenAI orchestration.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                      <h4 className="font-semibold text-accent-foreground mb-2">Low-Code Development</h4>
                      <p className="text-sm text-muted-foreground">Empowering teams to build quickly without long dev cycles</p>
                    </div>
                    <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                      <h4 className="font-semibold text-accent-foreground mb-2">Workflow Automation</h4>
                      <p className="text-sm text-muted-foreground">Connecting AI agents with enterprise processes</p>
                    </div>
                    <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                      <h4 className="font-semibold text-accent-foreground mb-2">Data Integration</h4>
                      <p className="text-sm text-muted-foreground">Ensuring governed access to the right data at the right time</p>
                    </div>
                    <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                      <h4 className="font-semibold text-accent-foreground mb-2">GenAI Orchestration</h4>
                      <p className="text-sm text-muted-foreground">Embedding generative AI into business applications safely</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Securiti.ai */}
            <Card className="card-premium card-glow">
              <CardHeader>
                <CardTitle className="text-3xl text-gradient">Securiti.ai</CardTitle>
                <p className="text-xl text-muted-foreground">
                  Trust, Data, and Governance at the Core of AI-Led Transformation
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-primary">Data at the Core of Transformation</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Every AI model learns from data. Every prediction, recommendation, or automation depends on 
                      its accuracy, lineage, and compliance. Yet, for most CIOs, data remains the Achilles' heel 
                      of transformation: fragmented across systems, hidden in silos, riddled with compliance risks, 
                      and vulnerable to breaches.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-primary">The Forefront Platform for Managing Data in the AI Age</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Securiti.ai provides a unified platform that combines data discovery, classification, 
                      lineage, protection, and compliance automation. It allows enterprises to:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Find and catalog sensitive data across structured and unstructured environments
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Classify and govern data by sensitivity, ownership, and regulatory requirements
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Enforce privacy and protection policies automatically across hybrid and multi-cloud environments
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Automate compliance with GDPR, HIPAA, CCPA, and global frameworks — with AI-ready audit trails
                      </li>
                    </ul>
                  </div>

                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                    <p className="text-primary font-semibold">
                      "No enterprise can achieve true AI-led transformation without mastering data. 
                      It is the foundation upon which every accelerator, every copilot, every agent is built."
                    </p>
                  </div>
                </div>
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
              Building the <span className="text-gradient">Infrastructure of Enterprise AI</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Each of our partners was chosen not for what they promise, but for what they deliver to CIOs: 
              confidence, clarity, and control in the age of AI. Together, they form an ecosystem of Applied AI 
              leaders that enables enterprises to transform safely, measurably, and sustainably.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Investments;