import HeroSection from "@/components/hero-section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowRight, HeartPulse, Brain, Microscope, Bug, Pill, Dna } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { AnimatedSection } from "@/components/animated-section";

const therapeuticAreas = [
  { icon: HeartPulse, area: "Cardiovascular", capabilities: "Clinical trial design, device integration, post-market surveillance" },
  { icon: Microscope, area: "Oncology", capabilities: "Biomarker-driven trials, safety monitoring, regulatory submissions" },
  { icon: Brain, area: "Neurology", capabilities: "Patient recruitment strategies, multi-center trials, medical monitoring" },
  { icon: Bug, area: "Infectious Diseases", capabilities: "Epidemiology studies, vaccine trials, real-world evidence collection" },
  { icon: Pill, area: "Endocrinology & Metabolism", capabilities: "Outcome assessments, biometrics, pharmacovigilance" },
  { icon: Dna, area: "Rare & Orphan Diseases", capabilities: "Adaptive trial design, small population strategies, global regulatory navigation" },
];

const specialties = [
  { title: "Medical Devices & Diagnostics", desc: "Regulatory strategy, trial execution, post-market studies" },
  { title: "Real-World Evidence & Post-Marketing", desc: "Observational studies, registries, pharmacovigilance" },
  { title: "Regulatory Affairs", desc: "Global submission support, compliance audits, strategy planning" },
  { title: "Biometrics & Data Science", desc: "Advanced analytics, AI-driven insights, statistical programming" },
  { title: "Medical & Technical Writing", desc: "Protocols, clinical study reports, regulatory documentation" },
  { title: "Medical Affairs & Toxicology", desc: "Risk assessment, clinical guidance, safety strategy" },
  { title: "Project Management", desc: "Integrated planning, resource optimization, milestone tracking" },
];

const whyMatters = [
  "Accelerates development timelines with domain-specific knowledge",
  "Ensures regulatory compliance across global markets",
  "Provides integrated, cross-functional solutions for drugs, devices, and diagnostics",
  "Supports both pre-market and post-market needs with proven results",
];

export default function Expertise() {
  return (
    <div>
      <HeroSection
        title="Driving Innovation in Healthcare"
        subtitle="Expertise"
        description="Deep therapeutic knowledge and specialized experience to accelerate the development, regulatory approval, and commercialization of innovative drugs, medical devices, and diagnostics."
        image="/images/expertise-hero.png"
        ctaText="Explore Our Capabilities"
        ctaHref="/contact"
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeUp">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <Badge variant="secondary" className="mb-4">Therapeutic Areas</Badge>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Broad Therapeutic Coverage</h2>
              <p className="text-muted-foreground leading-relaxed">
                We offer expertise across a broad spectrum of therapeutic domains, enabling targeted strategies for clinical development.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="fadeUp" delay={150}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {therapeuticAreas.map((ta) => (
                <Card key={ta.area} className="p-6" data-testid={`therapeutic-${ta.area.toLowerCase().replace(/\s+/g, "-")}`}>
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                    <ta.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{ta.area}</h3>
                  <p className="text-sm text-muted-foreground">{ta.capabilities}</p>
                </Card>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeUp">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <Badge variant="secondary" className="mb-4">Specialties</Badge>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Specialized Capabilities</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our specialized capabilities support complex, high-value projects and unique regulatory needs.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="fadeUp" delay={150}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {specialties.map((s, i) => (
                <Card key={s.title} className="p-6" data-testid={`specialty-${i}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-md bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0">
                      {i + 1}
                    </div>
                    <h3 className="font-semibold text-sm">{s.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </Card>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fadeLeft">
              <div>
                <Badge variant="secondary" className="mb-4">Why It Matters</Badge>
                <h2 className="text-2xl sm:text-3xl font-bold mb-6">Why Our Expertise Matters</h2>
                <ul className="space-y-4">
                  {whyMatters.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link href="/contact">
                    <Button data-testid="expertise-cta">
                      Partner With Us
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fadeRight" delay={200}>
              <img
                src="/images/expertise-hero.png"
                alt="Expertise Network"
                className="w-full rounded-md object-cover aspect-[4/3]"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
