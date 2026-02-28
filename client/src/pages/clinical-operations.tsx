import HeroSection from "@/components/hero-section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Eye, Target, Shield, BarChart3, Users, Lightbulb } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";

const principles = [
  { icon: Eye, title: "Adopt a Holistic View", desc: "Understand the project in its whole organizational and environmental context." },
  { icon: Target, title: "Focus on Value", desc: "Prioritize measurable benefits, not just output metrics." },
  { icon: Shield, title: "Embed Quality", desc: "Quality is integrated throughout, not inspected at the end." },
  { icon: Users, title: "Lead Accountably", desc: "Assume responsibility for outcomes ethically and transparently." },
  { icon: Lightbulb, title: "Integrate Sustainability", desc: "Consider long-term and systemic impacts." },
  { icon: BarChart3, title: "Build Empowered Teams", desc: "Foster collaboration and autonomy." },
];

const phases = [
  {
    title: "Initiation & Scope",
    items: ["Define strategic objectives and value", "Identify stakeholders (FDA, EMA, NMPA)", "Establish governance structures", "Create protocol and regulatory strategy"],
  },
  {
    title: "Planning",
    items: ["Study design (Phase I-IV)", "Eligibility criteria & endpoints", "GCP and ICH compliance", "Risk registers and mitigation plans"],
  },
  {
    title: "Execution & Monitoring",
    items: ["Site activation & patient recruitment", "Cross-functional coordination", "Real-time enrollment monitoring", "Adaptive responses to findings"],
  },
  {
    title: "Close-Out & Submission",
    items: ["Clinical reports & safety analyses", "Regulatory submissions (CTD)", "Lessons learned & archival", "Post-market lifecycle management"],
  },
];

const benefits = [
  { title: "Improved Predictability", desc: "Structured planning and risk management reduce surprises in timelines and costs." },
  { title: "Quality & Compliance", desc: "Embedding quality across phases enhances data integrity and audit readiness." },
  { title: "Cross-Functional Leadership", desc: "Project managers bridge scientific, operational, and regulatory domains." },
  { title: "Adaptive Oversight", desc: "Real-time monitoring and iterative adjustments increase successful outcomes." },
];

export default function ClinicalOperations() {
  return (
    <div>
      <HeroSection
        title="Clinical Operations Excellence"
        subtitle="Clinical Operations"
        description="Ensuring the efficient and effective conduct of clinical trials through proactive planning, performance monitoring, resource management, and regulatory adherence."
        image="/images/clinical-ops.png"
        ctaText="Get Started"
        ctaHref="/contact"
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeUp">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <Badge variant="secondary" className="mb-4">PMBOK Framework</Badge>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Six Core Principles</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our project management methodology is guided by the PMBOK Guide principles, adapted specifically for clinical research delivery.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="fadeUp" delay={150}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {principles.map((p) => (
                <Card key={p.title} className="p-6" data-testid={`principle-${p.title.toLowerCase().replace(/\s+/g, "-")}`}>
                  <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-3">
                    <p.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
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
              <Badge variant="secondary" className="mb-4">Development Lifecycle</Badge>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Clinical Development Phases</h2>
              <p className="text-muted-foreground leading-relaxed">
                Applying PMBOK 8 concepts to the lifecycle of therapeutic drug, biologic, device, and IVD development.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="fadeUp" delay={150}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {phases.map((phase, i) => (
                <Card key={phase.title} className="p-6" data-testid={`lifecycle-phase-${i}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-md bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0">
                      {i + 1}
                    </div>
                    <h3 className="font-semibold">{phase.title}</h3>
                  </div>
                  <ul className="space-y-2">
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
          <AnimatedSection animation="fadeUp">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <Badge variant="secondary" className="mb-4">Benefits</Badge>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Benefits of Structured Project Management</h2>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="fadeUp" delay={150}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {benefits.map((b) => (
                <Card key={b.title} className="p-6" data-testid={`benefit-${b.title.toLowerCase().replace(/\s+/g, "-")}`}>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">{b.title}</h3>
                      <p className="text-sm text-muted-foreground">{b.desc}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
