import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import HeroSection from "@/components/hero-section";
import { AnimatedSection } from "@/components/animated-section";
import aboutHeroImg from "@assets/Gemini_Generated_Image_dfd6qjdfd6qjdfd6_1771566872305.png";
import {
  ArrowRight,
  Microscope,
  FlaskConical,
  ShieldCheck,
  BarChart3,
  FileText,
  Users,
  Globe,
  Award,
  CheckCircle2,
  Stethoscope,
  Settings,
} from "lucide-react";

const services = [
  {
    icon: FlaskConical,
    title: "Clinical Development",
    desc: "Study design, protocol development, and trial management from Phase I through post-market.",
  },
  {
    icon: Microscope,
    title: "Biometrics & Data Science",
    desc: "Biostatistics, advanced analytics, and AI-driven insights for reliable data interpretation.",
  },
  {
    icon: ShieldCheck,
    title: "Regulatory Affairs",
    desc: "Global regulatory strategy, submissions, and compliance with FDA, EMA, and ISO standards.",
  },
  {
    icon: Stethoscope,
    title: "Medical Monitoring",
    desc: "Patient safety oversight, adverse event tracking, and risk assessment across all studies.",
  },
  {
    icon: FileText,
    title: "Medical Writing",
    desc: "Clinical study reports, regulatory dossiers, protocols, and scientific publications.",
  },
  {
    icon: Settings,
    title: "Quality & Compliance",
    desc: "Audits, inspections, SOP development, and continuous quality improvement programs.",
  },
];

const stats = [
  { value: "500+", label: "Clinical Trials" },
  { value: "50+", label: "Countries" },
  { value: "100+", label: "Experts" },
  { value: "20+", label: "Therapeutic Areas" },
];

const therapeuticAreas = [
  "Oncology",
  "Cardiovascular",
  "Neurology",
  "Infectious Diseases",
  "Endocrinology",
  "Rare Diseases",
  "Medical Devices",
  "Diagnostics",
];

export default function Home() {
  return (
    <div>
      <HeroSection
        title="Advancing Healthcare Through Clinical Excellence"
        subtitle="Full-Service CRO"
        description="Clinical Trials Investigate is a leading Contract Research Organization specializing in medical device and diagnostics development, delivering world-class clinical research from concept to commercialization."
        image="/images/hero-main.png"
        ctaText="Explore Our Services"
        ctaHref="/solutions"
        secondaryCtaText="Contact Us"
        secondaryCtaHref="/contact"
      />

      <section className="py-20 bg-background" data-testid="stats-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeUp">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-6" data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}>
                  <p className="text-3xl sm:text-4xl font-bold text-primary mb-1">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="services-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeUp">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <Badge variant="secondary" className="mb-4">Our Solutions</Badge>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Comprehensive Clinical Research Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                From early development to post-market activities, we provide end-to-end solutions tailored to your product development needs.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="fadeUp" delay={150}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((service) => (
                <Card key={service.title} className="p-6 hover-elevate cursor-pointer transition-all duration-200" data-testid={`service-card-${service.title.toLowerCase().replace(/\s+/g, "-")}`}>
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                </Card>
              ))}
            </div>
          </AnimatedSection>
          <div className="text-center mt-10">
            <Link href="/solutions">
              <Button variant="outline" data-testid="view-all-solutions">
                View All Solutions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background" data-testid="about-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fadeLeft">
              <div>
                <Badge variant="secondary" className="mb-4">Why Choose Us</Badge>
                <h2 className="text-2xl sm:text-3xl font-bold mb-6">A Trusted Partner in Clinical Research</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  By partnering with Clinical Trials Investigate, you gain a reliable, experienced ally who seamlessly integrates scientific, operational, and regulatory expertise to bring your device or diagnostic solution from concept to commercial success.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Global regulatory and operational expertise",
                    "End-to-end product development support",
                    "Specialized medical device & diagnostics capabilities",
                    "ICH/GCP and 21 CFR Part 11 compliant",
                    "Experienced cross-functional teams",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/about">
                  <Button data-testid="learn-more-about">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fadeRight" delay={200}>
              <div className="relative">
                <img
                  src={aboutHeroImg}
                  alt="Clinical Trials Investigate Office"
                  className="w-full rounded-md object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-6 left-0 sm:-left-6 bg-background border border-border rounded-md p-4 sm:p-6 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center">
                      <Globe className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-lg">Global Reach</p>
                      <p className="text-xs text-muted-foreground">50+ Countries</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="therapeutic-areas-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeUp">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <Badge variant="secondary" className="mb-4">Therapeutic Expertise</Badge>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Broad Therapeutic Coverage</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our teams bring deep domain expertise across multiple therapeutic areas, enabling targeted strategies for clinical development.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="scaleIn" delay={150}>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {therapeuticAreas.map((area) => (
                <Badge key={area} variant="outline" className="px-5 py-2.5 text-sm" data-testid={`area-${area.toLowerCase().replace(/\s+/g, "-")}`}>
                  {area}
                </Badge>
              ))}
            </div>
          </AnimatedSection>
          <div className="text-center mt-10">
            <Link href="/expertise">
              <Button variant="outline" data-testid="explore-expertise">
                Explore Our Expertise
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden" data-testid="cta-section">
        <div className="absolute inset-0">
          <img src="/images/pattern-bg.png" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to Advance Your Clinical Program?
          </h2>
          <p className="text-white/75 mb-8 leading-relaxed">
            Partner with us to bring your innovative medical solutions from concept to market with confidence and compliance.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact">
              <Button size="lg" data-testid="cta-contact">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/delivery-models">
              <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white/20 text-white" data-testid="cta-models">
                Explore Delivery Models
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
