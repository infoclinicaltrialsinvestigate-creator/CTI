import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";
import ctiLogo from "@assets/cti_logo-removebg-preview_1771584501134.png";

const footerLinks = {
  services: [
    { label: "Clinical Operations", href: "/clinical-operations" },
    { label: "Solutions", href: "/solutions" },
    { label: "Delivery Models", href: "/delivery-models" },
    { label: "Expertise", href: "/expertise" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Sectors", href: "/sectors" },
    { label: "Education", href: "/education" },
    { label: "Careers", href: "/careers" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <img src={ctiLogo} alt="Clinical Trials Investigate" className="h-10 w-auto" data-testid="img-footer-logo" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              A leading full-service CRO specializing in medical device and diagnostics development.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                <span>2470 Windy Hill Rd, Suite 310, Marietta, GA 30067</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 shrink-0 text-primary" />
                <span>(404) 207-2431</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 shrink-0 text-primary" />
                <span>jobs@clinicaltrialsinvestigate.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Services</h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-sm text-muted-foreground cursor-pointer transition-colors" data-testid={`footer-${link.label.toLowerCase().replace(/\s+/g, "-")}`}>
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-sm text-muted-foreground cursor-pointer transition-colors" data-testid={`footer-${link.label.toLowerCase().replace(/\s+/g, "-")}`}>
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Get in Touch</h4>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Ready to advance your clinical program? Let's discuss how we can help.
            </p>
            <Link href="/contact">
              <button className="inline-flex items-center gap-2 text-sm font-semibold text-primary" data-testid="footer-contact-link">
                Contact Us
                <span aria-hidden="true">&rarr;</span>
              </button>
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Clinical Trials Investigate. All rights reserved.
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <span className="text-xs text-muted-foreground">ICH/GCP Compliant</span>
            <span className="text-xs text-muted-foreground">21 CFR Part 11</span>
            <span className="text-xs text-muted-foreground">ISO 13485</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
