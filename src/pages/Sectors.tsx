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
            <p className="text-2xl text-muted-foreground leading-relaxed font-light mb-12">
              We focus on industries where data is abundant, regulation is strict, and inefficiency 
              is costly. These are the sectors where AI can create transformational impact.
            </p>
            
            {/* Quick Navigation */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <a href="#banking" className="p-4 bg-card border border-border/50 rounded-lg hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                <h3 className="font-semibold text-sm mb-1">Banking &</h3>
                <h3 className="font-semibold text-sm">Capital Markets</h3>
              </a>
              <a href="#insurance" className="p-4 bg-card border border-border/50 rounded-lg hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                <h3 className="font-semibold text-sm">Insurance</h3>
              </a>
              <a href="#healthcare" className="p-4 bg-card border border-border/50 rounded-lg hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                <h3 className="font-semibold text-sm">Healthcare &</h3>
                <h3 className="font-semibold text-sm">Life Sciences</h3>
              </a>
              <a href="#retail" className="p-4 bg-card border border-border/50 rounded-lg hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                <h3 className="font-semibold text-sm">Retail &</h3>
                <h3 className="font-semibold text-sm">Consumer Goods</h3>
              </a>
              <a href="#transportation" className="p-4 bg-card border border-border/50 rounded-lg hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                <h3 className="font-semibold text-sm">Transportation &</h3>
                <h3 className="font-semibold text-sm">Logistics</h3>
              </a>
              <a href="#energy" className="p-4 bg-card border border-border/50 rounded-lg hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                <h3 className="font-semibold text-sm">Energy &</h3>
                <h3 className="font-semibold text-sm">Utilities</h3>
              </a>
              <a href="#manufacturing" className="p-4 bg-card border border-border/50 rounded-lg hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                <h3 className="font-semibold text-sm">Manufacturing</h3>
              </a>
              <a href="#public" className="p-4 bg-card border border-border/50 rounded-lg hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                <h3 className="font-semibold text-sm">Public Sector</h3>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Banking & Capital Markets */}
      <section id="banking" className="py-16 section-spacex">
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
                      Banking CIOs are trapped between aging core systems and ever‑increasing regulatory expectations. Critical functions like KYC, AML, and fraud detection require armies of analysts. Regulatory filings are slow, costly, and error‑prone. Integration of AI has been hard because most solutions fail to meet explainability requirements, don't mesh with mainframe‑era IT, and create new risk exposures regulators reject.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-primary uppercase tracking-wider">APPLIED AI SOLUTIONS</h3>
                    <div className="space-y-4">
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-lg">KYC/AML AUTOMATION</h4>
                        <p className="text-muted-foreground">Automate KYC/AML onboarding with machine‑readable audit trails</p>
                      </div>
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-lg">FRAUD DETECTION</h4>
                        <p className="text-muted-foreground">Fraud detection systems that explain anomalies in language regulators understand</p>
                      </div>
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-lg">COMPLIANCE COPILOTS</h4>
                        <p className="text-muted-foreground">Copilots that free compliance teams from repetitive document review</p>
                      </div>
                    </div>
                    <div className="mt-6 p-6 bg-primary/10 border border-primary/20 rounded-lg">
                      <h4 className="font-bold text-primary mb-3 text-xl uppercase tracking-wider">PROJECTED OUTCOMES</h4>
                      <ul className="space-y-2 font-semibold">
                        <li>• Customer onboarding in hours instead of days</li>
                        <li>• 40–60% reduction in compliance cost</li>
                        <li>• Fraud detection with fewer false positives</li>
                        <li>• Board‑level trust that AI is auditable and defensible</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Insurance */}
            <Card id="insurance" className="card-spacex card-spacex-glow mb-16 overflow-hidden">
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
                      Insurers juggle rising claims volume, legacy policy systems, and pressure to improve customer experience. Underwriting depends on incomplete or inconsistent data, while claims staff drown in paperwork. AI adoption has been stunted by regulatory scrutiny on fairness and by deeply siloed data sources across legacy platforms.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-primary uppercase tracking-wider">APPLIED AI SOLUTIONS</h3>
                    <div className="space-y-4">
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-lg">CLAIMS AUTOMATION</h4>
                        <p className="text-muted-foreground">AI copilots that read claim forms, photos, and transcripts to assemble cases</p>
                      </div>
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-lg">ANOMALY DETECTION</h4>
                        <p className="text-muted-foreground">Anomaly detection engines that flag suspicious claims</p>
                      </div>
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-lg">UNDERWRITING COPILOTS</h4>
                        <p className="text-muted-foreground">Underwriting copilots that rapidly assess risk using multimodal data</p>
                      </div>
                    </div>
                    <div className="mt-6 p-6 bg-primary/10 border border-primary/20 rounded-lg">
                      <h4 className="font-bold text-primary mb-3 text-xl uppercase tracking-wider">PROJECTED OUTCOMES</h4>
                      <ul className="space-y-2 font-semibold">
                        <li>• 40–70% faster claims resolution</li>
                        <li>• Improved loss ratios</li>
                        <li>• Underwriters with richer risk profiles</li>
                        <li>• Higher satisfaction scores through responsive service</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Healthcare & Life Sciences */}
            <Card id="healthcare" className="card-spacex card-spacex-glow mb-16 overflow-hidden">
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
                      Healthcare data is locked in EMRs, imaging archives, and lab systems that rarely interoperate. Privacy obligations are heavy. Clinicians spend half their day on administrative tasks instead of care. AI pilots often stall when they can't be certified as HIPAA‑compliant or cannot integrate with clinical workflows.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-primary uppercase tracking-wider">APPLIED AI SOLUTIONS</h3>
                    <div className="space-y-4">
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-lg">PRIOR AUTHORIZATION & BILLING</h4>
                        <p className="text-muted-foreground">Prior authorization and billing automation</p>
                      </div>
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-lg">CLINICAL DOCUMENTATION</h4>
                        <p className="text-muted-foreground">Clinical documentation copilots that transcribe and code visits in real time</p>
                      </div>
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-lg">PHARMACOVIGILANCE</h4>
                        <p className="text-muted-foreground">Pharmacovigilance monitors scanning adverse event reports</p>
                      </div>
                    </div>
                    <div className="mt-6 p-6 bg-primary/10 border border-primary/20 rounded-lg">
                      <h4 className="font-bold text-primary mb-3 text-xl uppercase tracking-wider">PROJECTED OUTCOMES</h4>
                      <ul className="space-y-2 font-semibold">
                        <li>• 20–30% revenue lift through fewer denials</li>
                        <li>• 2–3 hours per clinician returned to patient care daily</li>
                        <li>• Faster drug approvals</li>
                        <li>• Measurable improvements in patient safety</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Retail & CPG */}
            <Card id="retail" className="card-spacex card-spacex-glow mb-16 overflow-hidden">
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
                      Retailers and CPG companies operate on razor‑thin margins and face unpredictable demand swings. Data is scattered across POS, loyalty programs, e‑commerce platforms, and distributor systems. AI pilots fail when they can't deliver timely, reliable demand forecasts or when personalization engines ignore real‑time context.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-primary uppercase tracking-wider">APPLIED AI SOLUTIONS</h3>
                    <div className="space-y-4">
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-lg">DEMAND SENSING</h4>
                        <p className="text-muted-foreground">Demand sensing using external signals like weather or social trends</p>
                      </div>
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-lg">INVENTORY OPTIMIZATION</h4>
                        <p className="text-muted-foreground">Inventory optimization that reallocates stock in real time</p>
                      </div>
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-lg">DYNAMIC PRICING</h4>
                        <p className="text-muted-foreground">Dynamic pricing engines and AI‑powered merchandising tools</p>
                      </div>
                    </div>
                    <div className="mt-6 p-6 bg-primary/10 border border-primary/20 rounded-lg">
                      <h4 className="font-bold text-primary mb-3 text-xl uppercase tracking-wider">PROJECTED OUTCOMES</h4>
                      <ul className="space-y-2 font-semibold">
                        <li>• 15–20% reduction in stock‑outs</li>
                        <li>• Double‑digit margin improvements from better forecasting and pricing</li>
                        <li>• Stronger customer loyalty through personalization</li>
                        <li>• Faster inventory turns</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Transportation & Logistics */}
            <Card id="transportation" className="card-spacex card-spacex-glow mb-16 overflow-hidden">
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
                      Global supply chains face shocks from weather, geopolitics, and pandemics. Systems across carriers, ports, and warehouses rarely integrate. CIOs struggle to create real‑time visibility, and AI pilots often collapse under the scale and complexity of multi‑party logistics data.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-primary uppercase tracking-wider">APPLIED AI SOLUTIONS</h3>
                    <div className="space-y-4">
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-lg">ROUTING OPTIMIZERS</h4>
                        <p className="text-muted-foreground">Routing optimizers that adapt in real time</p>
                      </div>
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-lg">EXCEPTION DETECTION</h4>
                        <p className="text-muted-foreground">Copilots that detect and resolve shipment exceptions before they cascade</p>
                      </div>
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-lg">INVENTORY POSITIONING</h4>
                        <p className="text-muted-foreground">Predictive inventory positioning engines</p>
                      </div>
                    </div>
                    <div className="mt-6 p-6 bg-primary/10 border border-primary/20 rounded-lg">
                      <h4 className="font-bold text-primary mb-3 text-xl uppercase tracking-wider">PROJECTED OUTCOMES</h4>
                      <ul className="space-y-2 font-semibold">
                        <li>• 20–30% higher delivery reliability</li>
                        <li>• 10–15% cost reductions</li>
                        <li>• More resilient networks</li>
                        <li>• Significantly better customer trust</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Energy & Utilities */}
            <Card id="energy" className="card-spacex card-spacex-glow mb-16 overflow-hidden">
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
                      Utilities run on decades‑old SCADA and OT systems. Safety is paramount, and regulatory sustainability reporting is now non‑negotiable. Data streams are noisy and siloed, and most AI models struggle to process live telemetry securely. Adoption has been slow because CIOs fear introducing instability into mission‑critical infrastructure.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-primary uppercase tracking-wider">APPLIED AI SOLUTIONS</h3>
                    <div className="space-y-4">
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-lg">PREDICTIVE MAINTENANCE</h4>
                        <p className="text-muted-foreground">Predictive maintenance models analyzing turbine and grid sensor data</p>
                      </div>
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-lg">EMISSIONS GOVERNANCE</h4>
                        <p className="text-muted-foreground">Emissions governance platforms that create auditable carbon reports</p>
                      </div>
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-lg">FIELD CREW SCHEDULING</h4>
                        <p className="text-muted-foreground">Field crew scheduling copilots and energy trading optimizers</p>
                      </div>
                    </div>
                    <div className="mt-6 p-6 bg-primary/10 border border-primary/20 rounded-lg">
                      <h4 className="font-bold text-primary mb-3 text-xl uppercase tracking-wider">PROJECTED OUTCOMES</h4>
                      <ul className="space-y-2 font-semibold">
                        <li>• 20–40% less downtime</li>
                        <li>• Millions saved in O&M</li>
                        <li>• Compliance with sustainability mandates</li>
                        <li>• Safer operations and improved trading margins</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Manufacturing */}
            <Card id="manufacturing" className="card-spacex card-spacex-glow mb-16 overflow-hidden">
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
                      Factories face competition, labor shortages, and ESG pressures. IT/OT fragmentation means AI pilots get stuck at proof‑of‑concept. Data quality is uneven, and workers often resist automation. Without seamless integration into MES and ERP, AI projects fail to scale.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-primary uppercase tracking-wider">APPLIED AI SOLUTIONS</h3>
                    <div className="space-y-4">
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-lg">PREDICTIVE YIELD OPTIMIZATION</h4>
                        <p className="text-muted-foreground">Predictive yield optimization</p>
                      </div>
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-lg">COMPUTER‑VISION QUALITY</h4>
                        <p className="text-muted-foreground">Computer‑vision quality analytics</p>
                      </div>
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-lg">AUTONOMOUS LINE TUNING</h4>
                        <p className="text-muted-foreground">Autonomous line tuning copilots and real‑time sustainability dashboards</p>
                      </div>
                    </div>
                    <div className="mt-6 p-6 bg-primary/10 border border-primary/20 rounded-lg">
                      <h4 className="font-bold text-primary mb-3 text-xl uppercase tracking-wider">PROJECTED OUTCOMES</h4>
                      <ul className="space-y-2 font-semibold">
                        <li>• 5–10% yield increases</li>
                        <li>• 30–40% less downtime</li>
                        <li>• Significant waste reduction</li>
                        <li>• Faster production cycles and measurable ESG progress</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Public Sector */}
            <Card id="public" className="card-spacex card-spacex-glow overflow-hidden">
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
                      Government CIOs must deliver digital‑first services but are handcuffed by legacy systems, procurement delays, tight budgets, and fragile public trust. Many AI pilots are abandoned because they can't withstand public transparency requirements or security audits.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-primary uppercase tracking-wider">APPLIED AI SOLUTIONS</h3>
                    <div className="space-y-4">
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-lg">CITIZEN SERVICE COPILOTS</h4>
                        <p className="text-muted-foreground">Citizen service copilots that handle queries and applications</p>
                      </div>
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-lg">AUTOMATED PERMITTING</h4>
                        <p className="text-muted-foreground">Automated permitting and licensing workflows</p>
                      </div>
                      <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-lg">SAFETY ANALYTICS</h4>
                        <p className="text-muted-foreground">Safety analytics platforms for infrastructure and law enforcement data</p>
                      </div>
                    </div>
                    <div className="mt-6 p-6 bg-primary/10 border border-primary/20 rounded-lg">
                      <h4 className="font-bold text-primary mb-3 text-xl uppercase tracking-wider">PROJECTED OUTCOMES</h4>
                      <ul className="space-y-2 font-semibold">
                        <li>• Services delivered in days instead of months</li>
                        <li>• Higher efficiency with limited budgets</li>
                        <li>• Improved transparency and accountability</li>
                        <li>• Increased citizen trust</li>
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
              Closing <span className="text-gradient">Statement</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              These sectors are not optional — they are foundational to the global economy. By targeting industries with the hardest barriers to adoption, Vibrant Capital ensures that Applied AI delivers where it matters most.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We partner with CIOs to move from pilots to production, proving that AI can deliver practical, regulated, and board‑ready results today.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sectors;