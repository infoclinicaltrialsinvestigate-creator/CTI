import HeroSection from "@/components/hero-section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Briefcase, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { AnimatedSection } from "@/components/animated-section";

export default function Careers() {
  return (
    <div>
      <HeroSection
        title="Join Our Team"
        subtitle="Careers"
        description="Clinical Trials Investigate is an equal opportunity employer offering a dynamic work environment and competitive compensation package."
        image="/images/about-hero.png"
        ctaText="Contact HR"
        ctaHref="/contact"
      />

      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeUp">
            <div className="text-center mb-14">
              <Badge variant="secondary" className="mb-4">Opportunities</Badge>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Career Opportunities</h2>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                We are always looking for talented professionals to join our growing team. Explore current openings and discover how you can make a difference in clinical research.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={150}>
            <Card className="p-8 mb-8" data-testid="career-info-card">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Why Work With Us</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    At Clinical Trials Investigate, we offer a dynamic work environment where you can grow your career in clinical research. We provide competitive compensation, ongoing professional development, and the opportunity to make a real impact in healthcare.
                  </p>
                </div>
              </div>

              <div className="bg-primary/5 p-6 rounded-md border border-primary/10">
                <h4 className="font-semibold mb-4">How to Apply</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  If you are interested in exploring career opportunities, please check our Open Positions or send your resume (including salary history) to:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="w-4 h-4 text-primary shrink-0" />
                    <a href="mailto:jobs@clinicaltrialsinvestigate.com" className="text-primary font-medium">
                      jobs@clinicaltrialsinvestigate.com
                    </a>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>Clinical Trials Investigate, 2470 Windy Hill Rd, Suite 310, Marietta, GA 30067</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Phone className="w-4 h-4 text-primary shrink-0" />
                    <span>(404) 207-2431</span>
                  </div>
                </div>
              </div>
            </Card>
          </AnimatedSection>

          <div className="text-center">
            <Link href="/contact">
              <Button data-testid="careers-contact-cta">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
