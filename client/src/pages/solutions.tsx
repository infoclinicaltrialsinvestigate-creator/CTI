import HeroSection from "@/components/hero-section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  FlaskConical,
  Settings,
  BarChart3,
  ShieldCheck,
  FileText,
  FolderCog,
  CheckCircle2,
  Cpu,
  HeartPulse,
  Beaker,
  ScrollText,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { AnimatedSection } from "@/components/animated-section";

const solutions = [
  {
    icon: FlaskConical,
    title: "Clinical Development",
    desc: "We design and implement clinical programs that ensure robust evidence generation for regulatory submissions, market access, and patient safety.",
    items: ["Study design and protocol development", "Feasibility assessments and site selection", "Risk-based monitoring and trial management"],
  },
  {
    icon: Settings,
    title: "Clinical Operations",
    desc: "Our operational teams manage trials efficiently across local and global sites, ensuring timely delivery and regulatory compliance.",
    items: ["Site management and monitoring", "Patient recruitment and retention strategies", "Clinical trial logistics and vendor management"],
  },
  {
    icon: BarChart3,
    title: "Biometrics & Data Science",
    desc: "Comprehensive statistical and analytical support to ensure accurate, reliable data interpretation.",
    items: ["Biostatistics and statistical programming", "Data management and validation", "Advanced analytics and AI-driven insights"],
  },
  {
    icon: HeartPulse,
    title: "Medical Monitoring & Safety",
    desc: "We maintain patient safety and data integrity across all studies through proactive monitoring.",
    items: ["Adverse event tracking and reporting", "Risk assessment and mitigation strategies", "Safety data analysis and interpretation"],
  },
  {
    icon: ShieldCheck,
    title: "Regulatory Affairs",
    desc: "Our experts guide your product through complex regulatory pathways worldwide.",
    items: ["Regulatory strategy and submissions", "Interactions with global health authorities", "Compliance with FDA, EMA, ISO standards"],
  },
  {
    icon: FileText,
    title: "Medical & Technical Writing",
    desc: "High-quality documentation to support regulatory submissions and scientific communication.",
    items: ["Clinical study reports (CSRs)", "Investigator brochures and protocols", "Regulatory dossiers and manuscripts"],
  },
  {
    icon: FolderCog,
    title: "Project Management",
    desc: "Our project managers ensure programs remain on track, within scope, and on budget.",
    items: ["Integrated project planning", "Risk assessment and mitigation", "Cross-functional coordination"],
  },
  {
    icon: CheckCircle2,
    title: "Quality & Compliance",
    desc: "Embedded quality assurance across every phase of product development.",
    items: ["Audits and inspections support", "SOP development and compliance oversight", "Continuous improvement initiatives"],
  },
  {
    icon: Cpu,
    title: "Technology & Data Solutions",
    desc: "Leveraging technology to streamline operations, enhance data integrity, and support decisions.",
    items: ["Electronic data capture (EDC)", "Clinical trial management systems (CTMS)", "Advanced analytics platforms"],
  },
  {
    icon: Beaker,
    title: "Product Vigilance & Post-Marketing",
    desc: "Supporting products throughout their life cycle with robust post-market strategies.",
    items: ["Real-world evidence generation", "Post-marketing surveillance studies", "Pharmacovigilance and safety monitoring"],
  },
  {
    icon: ScrollText,
    title: "Medical Affairs & Toxicology",
    desc: "Scientific guidance for regulatory submissions, clinical strategies, and product safety.",
    items: ["Toxicology assessment and risk evaluation", "Advisory support for decisions", "Evidence-based medical strategy"],
  },
  {
    icon: Beaker,
    title: "Consulting",
    desc: "Tailored consulting to optimize your development strategy and operational efficiency.",
    items: ["Strategic planning and go-to-market", "Gap analysis and process optimization", "Regulatory readiness audits"],
  },
];

export default function Solutions() {
  return (
    <div>
      <HeroSection
        title="Comprehensive Solutions for Product Development"
        subtitle="Solutions"
        description="Approach your next product development program with the right scientific and strategic consultancy to consistently achieve goals and meet the highest quality standards."
        image="/images/solutions-hero.png"
        ctaText="Get in Touch"
        ctaHref="/contact"
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeUp">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <Badge variant="secondary" className="mb-4">Our Solutions</Badge>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">End-to-End Clinical Research Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                At Clinical Trials Investigate, we provide tailored scientific and strategic consultancy to guide your product development programs from concept through post-market activities.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="fadeUp" delay={150}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {solutions.map((sol) => (
                <Card key={sol.title} className="p-6 flex flex-col" data-testid={`solution-${sol.title.toLowerCase().replace(/\s+/g, "-")}`}>
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4 shrink-0">
                    <sol.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{sol.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{sol.desc}</p>
                  <ul className="space-y-2 mt-auto">
                    {sol.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        <span className="text-xs text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/pattern-bg.png" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Scientifically Rigorous. Operationally Efficient.
          </h2>
          <p className="text-white/75 mb-8 leading-relaxed">
            Our comprehensive approach ensures your product development programs are fully compliant with global regulatory standards, from early development to post-market activities.
          </p>
          <Link href="/contact">
            <Button size="lg" data-testid="solutions-cta">
              Start Your Program
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
