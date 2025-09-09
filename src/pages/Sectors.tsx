import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/ui/navigation";
import bankingImg from "@/assets/sector-banking.jpg";
import insuranceImg from "@/assets/sector-insurance.jpg";
import healthcareImg from "@/assets/sector-healthcare.jpg";
import retailImg from "@/assets/sector-retail.jpg";
import energyImg from "@/assets/sector-energy.jpg";
import transportationImg from "@/assets/sector-transportation.jpg";
import manufacturingImg from "@/assets/sector-manufacturing.jpg";
import publicImg from "@/assets/sector-public.jpg";

const Sectors = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-black mb-8 leading-none">
              TARGET
              <br />
              <span className="text-spacex-gradient">SECTORS</span>
            </h1>
            <p className="text-2xl text-muted-foreground leading-relaxed font-light">
              We focus on industries where data is abundant, regulation is strict, and inefficiency 
              is costly. These are the sectors where AI can create transformational impact.
            </p>
          </div>
        </div>
      </section>

      {/* Banking & Capital Markets */}
      <section className="py-16 section-spacex">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <Card className="card-spacex card-spacex-glow mb-16 overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={bankingImg} 
                  alt="Banking & Capital Markets"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 flex items-center">
                  <div className="pl-8">
                    <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-wider">
                      BANKING &<br />CAPITAL MARKETS
                    </h2>
                  </div>
                </div>
              </div>
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-primary uppercase tracking-wider">CHALLENGES</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                      Banks face constant pressure to reduce costs, improve customer experience, and manage risk. 
                      Legacy systems still underpin most critical functions — core banking platforms that are 
                      decades old, stitched together with custom middleware.
                    </p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-primary mr-3 font-bold">•</span>
                        Data is siloed across business lines
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3 font-bold">•</span>
                        Regulators require explainability and auditability
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3 font-bold">•</span>
                        Legacy IT makes integration slow and costly
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-primary uppercase tracking-wider">APPLIED AI SOLUTIONS</h3>
                    <div className="space-y-4">
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-lg">KYC/AML AUTOMATION</h4>
                        <p className="text-muted-foreground">AI-powered identity verification with full audit trails</p>
                      </div>
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-lg">FRAUD DETECTION</h4>
                        <p className="text-muted-foreground">Real-time transaction monitoring with explanations</p>
                      </div>
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-lg">AGENTIC COPILOTS</h4>
                        <p className="text-muted-foreground">Back-office assistants for compliance officers</p>
                      </div>
                    </div>
                    <div className="mt-6 p-6 bg-primary/10 border border-primary/20 rounded-lg">
                      <h4 className="font-bold text-primary mb-3 text-xl uppercase tracking-wider">PROJECTED OUTCOMES</h4>
                      <ul className="space-y-2 font-semibold">
                        <li>• 40–60% reduction in manual compliance costs</li>
                        <li>• Faster onboarding — from days to hours</li>
                        <li>• Improved fraud detection with lower false positives</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Insurance */}
            <Card className="card-spacex card-spacex-glow mb-16 overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={insuranceImg} 
                  alt="Insurance"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 flex items-center">
                  <div className="pl-8">
                    <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-wider">
                      INSURANCE
                    </h2>
                  </div>
                </div>
              </div>
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-primary uppercase tracking-wider">CHALLENGES</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                      Insurers are drowning in paperwork, manual processes, and legacy claims systems. Adjusters 
                      spend countless hours reviewing documents, talking to customers, and checking compliance boxes.
                    </p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-primary mr-3 font-bold">•</span>
                        Core insurance systems are rigid and not AI-ready
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3 font-bold">•</span>
                        Data is messy: scanned forms, handwritten notes, PDFs
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3 font-bold">•</span>
                        Regulators require fairness and non-discrimination
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-primary uppercase tracking-wider">APPLIED AI SOLUTIONS</h3>
                    <div className="space-y-4">
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-lg">FNOL AUTOMATION</h4>
                        <p className="text-muted-foreground">AI extracts data from images, documents, voice transcripts</p>
                      </div>
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-lg">CLAIMS ADJUDICATION</h4>
                        <p className="text-muted-foreground">LLM-powered copilots to triage and flag fraud</p>
                      </div>
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-lg">UNDERWRITING OPTIMIZATION</h4>
                        <p className="text-muted-foreground">AI-driven risk assessment with structured and unstructured data</p>
                      </div>
                    </div>
                    <div className="mt-6 p-6 bg-primary/10 border border-primary/20 rounded-lg">
                      <h4 className="font-bold text-primary mb-3 text-xl uppercase tracking-wider">PROJECTED OUTCOMES</h4>
                      <ul className="space-y-2 font-semibold">
                        <li>• Claim resolution time cut by 40–70%</li>
                        <li>• Improved underwriting accuracy</li>
                        <li>• Higher customer satisfaction scores</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Healthcare & Life Sciences */}
            <Card className="card-spacex card-spacex-glow mb-16 overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={healthcareImg} 
                  alt="Healthcare & Life Sciences"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 flex items-center">
                  <div className="pl-8">
                    <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-wider">
                      HEALTHCARE &<br />LIFE SCIENCES
                    </h2>
                  </div>
                </div>
              </div>
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-primary uppercase tracking-wider">CHALLENGES</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                      Healthcare organizations operate under intense cost pressures and heavy regulation. 
                      Doctors and nurses spend <span className="text-primary font-semibold">40–50% of their time on admin tasks</span>, not patients.
                    </p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-primary mr-3 font-bold">•</span>
                        Data siloed in EMRs, imaging, and lab systems
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3 font-bold">•</span>
                        Privacy laws restrict use of sensitive patient data
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3 font-bold">•</span>
                        Early AI attempts were too generic
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-primary uppercase tracking-wider">APPLIED AI SOLUTIONS</h3>
                    <div className="space-y-4">
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-lg">REVENUE CYCLE AUTOMATION</h4>
                        <p className="text-muted-foreground">AI for prior authorizations and claim submission</p>
                      </div>
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-lg">CLINICAL DOCUMENTATION</h4>
                        <p className="text-muted-foreground">Real-time transcription and coding copilots</p>
                      </div>
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-lg">PHARMACOVIGILANCE</h4>
                        <p className="text-muted-foreground">AI monitoring adverse events for drug safety</p>
                      </div>
                    </div>
                    <div className="mt-6 p-6 bg-primary/10 border border-primary/20 rounded-lg">
                      <h4 className="font-bold text-primary mb-3 text-xl uppercase tracking-wider">PROJECTED OUTCOMES</h4>
                      <ul className="space-y-2 font-semibold">
                        <li>• 20–30% more revenue through reduced denials</li>
                        <li>• Clinicians regain 2–3 hours per day for patients</li>
                        <li>• Faster drug approvals with AI-enabled submissions</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Retail & CPG */}
            <Card className="card-spacex card-spacex-glow mb-16 overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={retailImg} 
                  alt="Retail & Consumer Packaged Goods"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 flex items-center">
                  <div className="pl-8">
                    <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-wider">
                      RETAIL &<br />CONSUMER GOODS
                    </h2>
                  </div>
                </div>
              </div>
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-primary uppercase tracking-wider">CHALLENGES</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                      Retailers and CPG companies face razor-thin margins and volatile supply chains. Consumers 
                      demand personalization, seamless omnichannel experiences, and instant availability.
                    </p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-primary mr-3 font-bold">•</span>
                        Data spread across POS, e-commerce, loyalty systems
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3 font-bold">•</span>
                        Demand forecasting fails when behavior shifts suddenly
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3 font-bold">•</span>
                        Personalization attempts often superficial
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-primary uppercase tracking-wider">APPLIED AI SOLUTIONS</h3>
                    <div className="space-y-4">
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-lg">DEMAND SENSING</h4>
                        <p className="text-muted-foreground">AI models combining POS, weather, promotions data</p>
                      </div>
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-lg">INVENTORY OPTIMIZATION</h4>
                        <p className="text-muted-foreground">Real-time rebalancing across warehouses and stores</p>
                      </div>
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-lg">AI-POWERED MERCHANDISING</h4>
                        <p className="text-muted-foreground">Dynamic pricing and personalized recommendations</p>
                      </div>
                    </div>
                    <div className="mt-6 p-6 bg-primary/10 border border-primary/20 rounded-lg">
                      <h4 className="font-bold text-primary mb-3 text-xl uppercase tracking-wider">PROJECTED OUTCOMES</h4>
                      <ul className="space-y-2 font-semibold">
                        <li>• 15–20% reduction in stock-outs</li>
                        <li>• 10–15% improvement in gross margins</li>
                        <li>• Increased customer loyalty</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Transportation & Logistics */}
            <Card className="card-spacex card-spacex-glow mb-16 overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={transportationImg} 
                  alt="Transportation & Logistics"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 flex items-center">
                  <div className="pl-8">
                    <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-wider">
                      TRANSPORTATION &<br />LOGISTICS
                    </h2>
                  </div>
                </div>
              </div>
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-primary uppercase tracking-wider">CHALLENGES</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                      The global supply chain is more complex than ever. Companies struggle with volatile demand, 
                      geopolitical shocks, and disruptions from weather or pandemics.
                    </p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-primary mr-3 font-bold">•</span>
                        Logistics networks span multiple parties with little data standardization
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3 font-bold">•</span>
                        Predictive models struggle with "black swan" events
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3 font-bold">•</span>
                        Many companies rely on static, manual planning tools
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-primary uppercase tracking-wider">APPLIED AI SOLUTIONS</h3>
                    <div className="space-y-4">
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-lg">DYNAMIC ROUTING & OPTIMIZATION</h4>
                        <p className="text-muted-foreground">Real-time AI optimization of shipping and delivery routes</p>
                      </div>
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-lg">EXCEPTION MANAGEMENT</h4>
                        <p className="text-muted-foreground">AI copilots detect delays and recommend proactive re-routing</p>
                      </div>
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-lg">DOCK & YARD ORCHESTRATION</h4>
                        <p className="text-muted-foreground">AI-driven scheduling to reduce bottlenecks</p>
                      </div>
                    </div>
                    <div className="mt-6 p-6 bg-primary/10 border border-primary/20 rounded-lg">
                      <h4 className="font-bold text-primary mb-3 text-xl uppercase tracking-wider">PROJECTED OUTCOMES</h4>
                      <ul className="space-y-2 font-semibold">
                        <li>• Delivery reliability improved by 20–30%</li>
                        <li>• Logistics costs reduced by 10–15%</li>
                        <li>• Faster recovery from disruptions</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Energy & Utilities */}
            <Card className="card-spacex card-spacex-glow mb-16 overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={energyImg} 
                  alt="Energy & Utilities"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 flex items-center">
                  <div className="pl-8">
                    <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-wider">
                      ENERGY &<br />UTILITIES
                    </h2>
                  </div>
                </div>
              </div>
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-primary uppercase tracking-wider">CHALLENGES</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                      Energy companies face ESG mandates, grid modernization, and volatile markets. 
                      Aging infrastructure meets renewable integration challenges.
                    </p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-primary mr-3 font-bold">•</span>
                        Grid infrastructure built for centralized generation
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3 font-bold">•</span>
                        Renewable energy creates demand volatility
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3 font-bold">•</span>
                        ESG reporting requires granular emissions tracking
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-primary uppercase tracking-wider">APPLIED AI SOLUTIONS</h3>
                    <div className="space-y-4">
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-lg">SMART GRID OPTIMIZATION</h4>
                        <p className="text-muted-foreground">AI-powered demand balancing and renewable integration</p>
                      </div>
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-lg">PREDICTIVE MAINTENANCE</h4>
                        <p className="text-muted-foreground">AI monitoring of critical infrastructure</p>
                      </div>
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-lg">CARBON INTELLIGENCE</h4>
                        <p className="text-muted-foreground">Real-time emissions tracking and optimization</p>
                      </div>
                    </div>
                    <div className="mt-6 p-6 bg-primary/10 border border-primary/20 rounded-lg">
                      <h4 className="font-bold text-primary mb-3 text-xl uppercase tracking-wider">PROJECTED OUTCOMES</h4>
                      <ul className="space-y-2 font-semibold">
                        <li>• 20–25% reduction in operational costs</li>
                        <li>• Enhanced grid reliability</li>
                        <li>• Accelerated carbon neutrality goals</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Manufacturing */}
            <Card className="card-spacex card-spacex-glow mb-16 overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={manufacturingImg} 
                  alt="Manufacturing"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 flex items-center">
                  <div className="pl-8">
                    <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-wider">
                      MANUFACTURING
                    </h2>
                  </div>
                </div>
              </div>
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-primary uppercase tracking-wider">CHALLENGES</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                      Manufacturers face global competition, labor shortages, and sustainability pressures. 
                      Downtime is costly, and waste impacts both margins and ESG metrics.
                    </p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-primary mr-3 font-bold">•</span>
                        Production systems (MES, ERP, OT) are fragmented and not built for AI
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3 font-bold">•</span>
                        Data quality on factory floors is inconsistent
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3 font-bold">•</span>
                        Workforce resistance slows adoption of automation
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-primary uppercase tracking-wider">APPLIED AI SOLUTIONS</h3>
                    <div className="space-y-4">
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-lg">PREDICTIVE YIELD OPTIMIZATION</h4>
                        <p className="text-muted-foreground">AI models that anticipate defects before they occur</p>
                      </div>
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-lg">QUALITY ANALYTICS</h4>
                        <p className="text-muted-foreground">Real-time image and sensor analysis to catch errors</p>
                      </div>
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-lg">AUTONOMOUS LINE TUNING</h4>
                        <p className="text-muted-foreground">AI agents that adjust machine parameters dynamically</p>
                      </div>
                    </div>
                    <div className="mt-6 p-6 bg-primary/10 border border-primary/20 rounded-lg">
                      <h4 className="font-bold text-primary mb-3 text-xl uppercase tracking-wider">PROJECTED OUTCOMES</h4>
                      <ul className="space-y-2 font-semibold">
                        <li>• Yield improvement of 5–10% with less scrap</li>
                        <li>• Unplanned downtime reduced by 30–40%</li>
                        <li>• Lower energy and material waste (ESG goals)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Public Sector */}
            <Card className="card-spacex card-spacex-glow overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={publicImg} 
                  alt="Public Sector"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 flex items-center">
                  <div className="pl-8">
                    <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-wider">
                      PUBLIC SECTOR
                    </h2>
                  </div>
                </div>
              </div>
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-primary uppercase tracking-wider">CHALLENGES</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                      Governments face pressure to deliver digital-first citizen services while constrained by 
                      tight budgets, old systems, and strict compliance rules.
                    </p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-primary mr-3 font-bold">•</span>
                        Legacy infrastructure is decades old
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3 font-bold">•</span>
                        Procurement and approval cycles are lengthy
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3 font-bold">•</span>
                        Public trust is fragile — any AI failure risks reputational damage
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-primary uppercase tracking-wider">APPLIED AI SOLUTIONS</h3>
                    <div className="space-y-4">
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-lg">CITIZEN SERVICE COPILOTS</h4>
                        <p className="text-muted-foreground">AI-powered assistants for queries, applications, permits</p>
                      </div>
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-lg">CASE MANAGEMENT AUTOMATION</h4>
                        <p className="text-muted-foreground">Automating intake, triage, and resolution for public services</p>
                      </div>
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-lg">SAFETY ANALYTICS</h4>
                        <p className="text-muted-foreground">AI-powered infrastructure and emergency response monitoring</p>
                      </div>
                    </div>
                    <div className="mt-6 p-6 bg-primary/10 border border-primary/20 rounded-lg">
                      <h4 className="font-bold text-primary mb-3 text-xl uppercase tracking-wider">PROJECTED OUTCOMES</h4>
                      <ul className="space-y-2 font-semibold">
                        <li>• Service delivery times reduced from months to days</li>
                        <li>• Improved citizen satisfaction and trust</li>
                        <li>• More efficient use of taxpayer dollars</li>
                      </ul>
                    </div>
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
              Applied AI is <span className="text-gradient">Not a Buzzword</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              Applied AI is not a buzzword in these sectors. It is a <span className="text-primary font-semibold">necessity</span>. 
              Each of these industries faces unique challenges, but they all share one truth: without AI, they cannot meet the demands of the future.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Vibrant Capital, we invest in companies that bring the right solutions — tailored, compliant, 
              and scalable — to help CIOs and their enterprises succeed in these high-stakes arenas.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sectors;