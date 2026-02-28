import HeroSection from "@/components/hero-section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowRight, Layers, Puzzle, Shield, Globe, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { AnimatedSection } from "@/components/animated-section";

const fullServiceItems = [
  { title: "Integrated Program Management", desc: "Seamless coordination of all functional areas, including clinical development, regulatory affairs, medical writing, and pharmacovigilance." },
  { title: "Global Clinical Trial Execution", desc: "Planning, implementation, and oversight of multi-country trials, ensuring compliance with local and international regulations." },
  { title: "Regulatory and Compliance Assurance", desc: "Support for pre- and post-market submissions, inspections, and audits." },
  { title: "Medical and Scientific Expertise", desc: "Access to therapeutic, diagnostic, and device-specific expertise to inform study design and product strategy." },
  { title: "Data-Driven Insights", desc: "Real-time analytics, biometrics, and reporting for informed decision-making and risk management." },
];

const fspItems = [
  { title: "Scalable Resource Deployment", desc: "Flexible allocation of experienced professionals across clinical operations, data management, biostatistics, and more." },
  { title: "Targeted Expertise", desc: "Access to specialized skill sets for specific projects or phases without long-term commitments." },
  { title: "Process Integration", desc: "Seamless collaboration with your internal teams, aligned with your SOPs and quality standards." },
  { title: "Cost Efficiency", desc: "Optimized resource utilization to manage budgets while maintaining high-quality outcomes." },
  { title: "Rapid Response", desc: "Agile deployment to support urgent project needs or unexpected operational demands." },
];

const whyChoose = [
  { icon: Puzzle, text: "Customized to match your operational structure and strategic goals" },
  { icon: Shield, text: "Ensures consistent quality, compliance, and risk mitigation" },
  { icon: Layers, text: "Provides both end-to-end management and targeted, flexible support" },
  { icon: Globe, text: "Leverages global expertise and technology for efficiency and reliability" },
];

export default function DeliveryModels() {
  return (
    <div>
      <HeroSection
        title="Flexible Delivery Models for Your Needs"
        subtitle="Delivery Models"
        description="Ensure quality, efficiency, and reliability with customized delivery models that fit your unique business needs."
        image="/images/delivery-models.png"
        ctaText="Discuss Options"
        ctaHref="/contact"
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection animation="fadeLeft">
              <div>
                <Badge variant="secondary" className="mb-4">Full-Service</Badge>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">Full-Service Solutions</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our full-service model offers end-to-end management of your clinical and regulatory programs. We serve as your single point of accountability from initial strategy through post-market activities.
                </p>
                <div className="space-y-4">
                  {fullServiceItems.map((item) => (
                    <div key={item.title} className="flex items-start gap-3" data-testid={`full-service-${item.title.toLowerCase().replace(/\s+/g, "-")}`}>
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-sm mb-0.5">{item.title}</h4>
                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-6 bg-primary/5 p-4 rounded-md border border-primary/10">
                  Ideal for organizations seeking a trusted partner to manage the full spectrum of clinical programs, reducing operational burden and accelerating time-to-market.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeRight" delay={200}>
              <div>
                <Badge variant="secondary" className="mb-4">FSP</Badge>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">Functional Service Provider</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our FSP model allows you to augment your internal capabilities with specialized expertise and resources on-demand.
                </p>
                <div className="space-y-4">
                  {fspItems.map((item) => (
                    <div key={item.title} className="flex items-start gap-3" data-testid={`fsp-${item.title.toLowerCase().replace(/\s+/g, "-")}`}>
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-sm mb-0.5">{item.title}</h4>
                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-6 bg-primary/5 p-4 rounded-md border border-primary/10">
                  Ideal for organizations looking for flexibility, cost control, and the ability to scale expertise up or down depending on project requirements.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeUp">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <Badge variant="secondary" className="mb-4">Advantages</Badge>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Why Choose Our Delivery Models</h2>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="fadeUp" delay={150}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {whyChoose.map((item) => (
                <Card key={item.text} className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                </Card>
              ))}
            </div>
          </AnimatedSection>
          <div className="text-center mt-10">
            <Link href="/contact">
              <Button data-testid="delivery-cta">
                Find Your Model
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
