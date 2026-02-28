import HeroSection from "@/components/hero-section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, BookOpen, FileCheck, Scale, Database, Users, Shield, BarChart3, AlertTriangle } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";

const resources = [
  {
    icon: BookOpen,
    title: "Overview of Clinical Trials",
    desc: "Understanding the basics of clinical trials, including phases, types, and processes involved.",
    url: "https://www.nih.gov/health-information/clinical-trials",
  },
  {
    icon: FileCheck,
    title: "Informed Consent Process",
    desc: "Education about the importance of informed consent, how it is obtained, and ethical considerations.",
    url: "https://www.fda.gov/science-research/science-and-research-special-topics/informed-consent",
  },
  {
    icon: Shield,
    title: "Regulatory Requirements",
    desc: "Knowledge of the regulatory framework governing clinical trials, including FDA and ICH guidelines.",
    url: "https://www.fda.gov/science-research/science-and-research-special-topics/clinical-trials",
  },
  {
    icon: Database,
    title: "Data Management and Analysis",
    desc: "Understanding data collection, management, and statistical analysis in clinical trials.",
    url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5506173/",
  },
  {
    icon: Users,
    title: "Patient Recruitment and Retention",
    desc: "Strategies for effectively recruiting and retaining participants in clinical trials.",
    url: "https://www.nih.gov/research-training/clinical-research/clinical-trial-recruitment",
  },
  {
    icon: Scale,
    title: "Ethical Considerations",
    desc: "Ethical principles guiding clinical trials: respect for persons, beneficence, and justice.",
    url: "https://www.hhs.gov/ohrp/regulations-and-policy/belmont-report/read-the-belmont-report/index.html",
  },
  {
    icon: BarChart3,
    title: "Understanding Trial Results",
    desc: "How to interpret and understand the results of clinical trials, including efficacy and safety data.",
    url: "https://www.who.int/clinical-trials-registry-platform",
  },
  {
    icon: Users,
    title: "Clinical Research Coordinators",
    desc: "The responsibilities and skills required for those managing clinical trials.",
    url: "https://www.aacr.org",
  },
  {
    icon: AlertTriangle,
    title: "Adverse Event Reporting",
    desc: "Understanding the process of reporting and managing adverse events during clinical trials.",
    url: "https://www.fda.gov/safety/reporting-serious-problems-fda",
  },
];

export default function Education() {
  return (
    <div>
      <HeroSection
        title="Clinical Research Education"
        subtitle="Education"
        description="Explore educational resources to deepen your understanding of clinical trials, regulatory requirements, and best practices in clinical research."
        image="/images/education-hero.png"
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeUp">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <Badge variant="secondary" className="mb-4">Resources</Badge>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Educational Resources</h2>
              <p className="text-muted-foreground leading-relaxed">
                Access curated educational materials covering the fundamentals and advanced topics of clinical research.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="fadeUp" delay={150}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {resources.map((res) => (
                <Card key={res.title} className="p-6 flex flex-col" data-testid={`education-${res.title.toLowerCase().replace(/\s+/g, "-")}`}>
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4 shrink-0">
                    <res.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{res.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{res.desc}</p>
                  <a
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary"
                    data-testid={`link-${res.title.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    Learn More
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </Card>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
