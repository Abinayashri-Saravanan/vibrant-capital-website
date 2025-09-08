import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/ui/navigation";

const Sectors = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 section-gradient">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sectors We <span className="text-gradient">Serve</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We deliberately focus on industries where data is abundant, regulation is strict, and inefficiency 
              is costly. These are the sectors where AI can create transformational impact — but also where 
              adoption has been the hardest.
            </p>
          </div>
        </div>
      </section>

      {/* Banking & Capital Markets */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="card-premium card-glow mb-16">
              <CardHeader>
                <CardTitle className="text-3xl text-gradient">Banking & Capital Markets</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-primary">Challenges</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Banks are under constant pressure to reduce costs, improve customer experience, and manage risk. 
                      Yet they are also some of the most heavily regulated organizations in the world. Legacy systems 
                      still underpin most critical functions — core banking platforms that are decades old, stitched 
                      together with custom middleware.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Data is siloed across business lines
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Regulators require explainability and auditability
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Legacy IT makes integration slow and costly
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-primary">Applied AI Solutions</h3>
                    <div className="space-y-3">
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-3">
                        <h4 className="font-semibold mb-1">KYC/AML Automation</h4>
                        <p className="text-sm text-muted-foreground">AI-powered identity verification with full audit trails</p>
                      </div>
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-3">
                        <h4 className="font-semibold mb-1">Fraud Detection</h4>
                        <p className="text-sm text-muted-foreground">Real-time transaction monitoring with explanations</p>
                      </div>
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-3">
                        <h4 className="font-semibold mb-1">Agentic Copilots</h4>
                        <p className="text-sm text-muted-foreground">Back-office assistants for compliance officers</p>
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">Projected Outcomes</h4>
                      <ul className="text-sm space-y-1">
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
            <Card className="card-premium card-glow mb-16">
              <CardHeader>
                <CardTitle className="text-3xl text-gradient">Insurance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-primary">Challenges</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Insurers are drowning in paperwork, manual processes, and legacy claims systems. Adjusters 
                      spend countless hours reviewing documents, talking to customers, and checking compliance boxes. 
                      Underwriting often depends on human judgment and historical models that don't scale.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Core insurance systems are rigid and not AI-ready
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Data is messy: scanned forms, handwritten notes, PDFs
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Regulators require fairness and non-discrimination
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-primary">Applied AI Solutions</h3>
                    <div className="space-y-3">
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-3">
                        <h4 className="font-semibold mb-1">FNOL Automation</h4>
                        <p className="text-sm text-muted-foreground">AI extracts data from images, documents, voice transcripts</p>
                      </div>
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-3">
                        <h4 className="font-semibold mb-1">Claims Adjudication</h4>
                        <p className="text-sm text-muted-foreground">LLM-powered copilots to triage and flag fraud</p>
                      </div>
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-3">
                        <h4 className="font-semibold mb-1">Underwriting Optimization</h4>
                        <p className="text-sm text-muted-foreground">AI-driven risk assessment with structured and unstructured data</p>
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">Projected Outcomes</h4>
                      <ul className="text-sm space-y-1">
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
            <Card className="card-premium card-glow mb-16">
              <CardHeader>
                <CardTitle className="text-3xl text-gradient">Healthcare & Life Sciences</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-primary">Challenges</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Healthcare organizations operate at the intersection of cost pressures, patient expectations, 
                      and heavy regulation (HIPAA, FDA). Revenue cycle management is highly complex, requiring prior 
                      authorizations, coding, billing, and endless documentation. Doctors and nurses spend 
                      <span className="text-primary font-semibold"> 40–50% of their time on admin tasks</span>, not patients.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Data siloed in EMRs, imaging, and lab systems
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Privacy laws restrict use of sensitive patient data
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Early AI attempts were too generic
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-primary">Applied AI Solutions</h3>
                    <div className="space-y-3">
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-3">
                        <h4 className="font-semibold mb-1">Revenue Cycle Automation</h4>
                        <p className="text-sm text-muted-foreground">AI for prior authorizations and claim submission</p>
                      </div>
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-3">
                        <h4 className="font-semibold mb-1">Clinical Documentation</h4>
                        <p className="text-sm text-muted-foreground">Real-time transcription and coding copilots</p>
                      </div>
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-3">
                        <h4 className="font-semibold mb-1">Pharmacovigilance</h4>
                        <p className="text-sm text-muted-foreground">AI monitoring adverse events for drug safety</p>
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">Projected Outcomes</h4>
                      <ul className="text-sm space-y-1">
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
            <Card className="card-premium card-glow mb-16">
              <CardHeader>
                <CardTitle className="text-3xl text-gradient">Retail & Consumer Packaged Goods</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-primary">Challenges</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Retailers and CPG companies face razor-thin margins and volatile supply chains. Consumers 
                      demand personalization, seamless omnichannel experiences, and instant availability.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Data spread across POS, e-commerce, loyalty systems
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Demand forecasting fails when behavior shifts suddenly
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Personalization attempts often superficial
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-primary">Applied AI Solutions</h3>
                    <div className="space-y-3">
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-3">
                        <h4 className="font-semibold mb-1">Demand Sensing</h4>
                        <p className="text-sm text-muted-foreground">AI models combining POS, weather, promotions data</p>
                      </div>
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-3">
                        <h4 className="font-semibold mb-1">Inventory Optimization</h4>
                        <p className="text-sm text-muted-foreground">Real-time rebalancing across warehouses and stores</p>
                      </div>
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-3">
                        <h4 className="font-semibold mb-1">AI-Powered Merchandising</h4>
                        <p className="text-sm text-muted-foreground">Dynamic pricing and personalized recommendations</p>
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">Projected Outcomes</h4>
                      <ul className="text-sm space-y-1">
                        <li>• 15–20% reduction in stock-outs</li>
                        <li>• 10–15% improvement in gross margins</li>
                        <li>• Increased customer loyalty</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Energy & Utilities */}
            <Card className="card-premium card-glow">
              <CardHeader>
                <CardTitle className="text-3xl text-gradient">Energy & Utilities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-primary">Challenges</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Energy companies face a dual imperative: operational reliability and sustainability. 
                      Equipment failures can cost millions and threaten safety, while regulators demand 
                      accurate emissions tracking and carbon reporting.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        SCADA and OT systems are old and often air-gapped
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Data is noisy, high-volume, and poorly structured
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Sustainability reporting requirements are complex
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-primary">Applied AI Solutions</h3>
                    <div className="space-y-3">
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-3">
                        <h4 className="font-semibold mb-1">Predictive Maintenance</h4>
                        <p className="text-sm text-muted-foreground">AI analyzing sensor data to detect anomalies</p>
                      </div>
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-3">
                        <h4 className="font-semibold mb-1">Emissions Monitoring</h4>
                        <p className="text-sm text-muted-foreground">Automated tracking and reporting of carbon data</p>
                      </div>
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-3">
                        <h4 className="font-semibold mb-1">Workforce Optimization</h4>
                        <p className="text-sm text-muted-foreground">AI scheduling and routing for maintenance crews</p>
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">Projected Outcomes</h4>
                      <ul className="text-sm space-y-1">
                        <li>• 20–40% reduction in unplanned downtime</li>
                        <li>• Accurate, real-time carbon emissions reporting</li>
                        <li>• Lower O&M costs with optimized fieldwork</li>
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
              Where <span className="text-gradient">Transformation</span> Meets Reality
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              These sectors represent the frontier of Applied AI — where the promise of artificial intelligence 
              meets the reality of enterprise operations. Our portfolio companies and playbooks are designed 
              to solve the unique barriers in each industry and unlock measurable outcomes that matter to CIOs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sectors;