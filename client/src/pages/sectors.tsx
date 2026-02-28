import HeroSection from "@/components/hero-section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowRight, Globe, ShieldCheck, Microscope, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { AnimatedSection } from "@/components/animated-section";

const capabilities = [
  {
    icon: Microscope,
    title: "Comprehensive Global Expertise",
    desc: "Our team of internationally located medical, regulatory, and operational specialists brings extensive experience in navigating complex clinical and regulatory landscapes.",
  },
  {
    icon: Globe,
    title: "End-to-End Product Development",
    desc: "Tailored assistance throughout all phases of your product's life cycle, from early development and market access to post-market compliance.",
  },
  {
    icon: Stethoscope,
    title: "Medical Device & Diagnostics",
    desc: "We understand device-specific endpoints, regulatory requirements, and operational logistics for both pre-market and post-market needs.",
  },
  {
    icon: ShieldCheck,
    title: "Regulatory Compliance",
    desc: "Ensuring compliance with international standards and local regulations across multiple countries and jurisdictions.",
  },
];

const phases = [
  {
    phase: "Early Development",
    items: [
      "Feasibility studies & pilot trials",
      "Regulatory strategy development",
      "Market access guidance",
    ],
  },
  {
    phase: "Clinical Trials",
    items: [
      "Simple pilot studies to complex multinational trials",
      "Pre-market approval trials",
      "Post-market surveillance studies",
    ],
  },
  {
    phase: "Post-Market",
    items: [
      "Ongoing safety monitoring",
      "Regulatory reporting",
      "Evidence generation & product optimization",
    ],
  },
];

export default function Sectors() {
  return (
    <div>
      <HeroSection
        title="Navigating Medical Device & Diagnostic Development"
        subtitle="Sectors"
        description="A leading full-service CRO with notable focus on the medical device and diagnostics sector, assisting you from initial market access to post-marketing requirements."
        image="/images/sectors-hero.png"
        ctaText="Learn More"
        ctaHref="/contact"
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeUp">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <Badge variant="secondary" className="mb-4">Our Capabilities</Badge>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Specialized Expertise for Your Success</h2>
              <p className="text-muted-foreground leading-relaxed">
                We combine global reach with deep expertise to support clients at every stage of their product development journey.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="fadeUp" delay={150}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {capabilities.map((cap) => (
                <Card key={cap.title} className="p-6" data-testid={`capability-${cap.title.toLowerCase().replace(/\s+/g, "-")}`}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                      <cap.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{cap.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{cap.desc}</p>
                    </div>
                  </div>
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
              <Badge variant="secondary" className="mb-4">Product Lifecycle</Badge>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">End-to-End Development Support</h2>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="fadeUp" delay={150}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {phases.map((phase, index) => (
                <Card key={phase.phase} className="p-6 relative overflow-visible" data-testid={`phase-${index}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-md bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <h3 className="font-semibold">{phase.phase}</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {phase.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
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
                <Badge variant="secondary" className="mb-4">Why Choose Us</Badge>
                <h2 className="text-2xl sm:text-3xl font-bold mb-6">Your Trusted Partner</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  By partnering with Clinical Trials Investigate, you gain a reliable, experienced ally who can seamlessly integrate scientific, operational, and regulatory expertise to help bring your device or diagnostic solution from concept to commercial success.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Designing and implementing complex clinical trials across multiple countries",
                    "Managing pre-market submissions and approvals",
                    "Conducting post-market studies, including registries and observational trials",
                    "Ensuring compliance with international standards and local regulations",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <Button data-testid="sectors-contact-cta">
                    Start a Conversation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fadeRight" delay={200}>
              <img
                src="/images/clinical-ops.png"
                alt="Clinical Trials Team"
                className="w-full rounded-md object-cover aspect-[4/3]"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
