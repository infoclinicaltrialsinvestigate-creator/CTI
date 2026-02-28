import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  overlay?: boolean;
}

export default function HeroSection({
  title,
  subtitle,
  description,
  image,
  ctaText,
  ctaHref,
  secondaryCtaText,
  secondaryCtaHref,
  overlay = true,
}: HeroSectionProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => { const t = setTimeout(() => setMounted(true), 100); return () => clearTimeout(t); }, []);

  return (
    <section className="relative overflow-hidden min-h-[420px] sm:min-h-[500px] lg:min-h-[600px] flex items-center" data-testid="hero-section">
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        {overlay && (
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/40 sm:from-black/75 sm:via-black/55 sm:to-black/30" />
        )}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-2xl">
          <span className="inline-block text-sm font-semibold text-primary bg-primary/15 backdrop-blur-sm px-4 py-1.5 rounded-md mb-6 border border-primary/20" style={{ opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0)' : 'translateY(16px)', transition: 'all 600ms cubic-bezier(0.16, 1, 0.3, 1) 100ms' }}>
            {subtitle}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6" data-testid="hero-title" style={{ opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0)' : 'translateY(20px)', transition: 'all 600ms cubic-bezier(0.16, 1, 0.3, 1) 200ms' }}>
            {title}
          </h1>
          <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-8 max-w-xl" data-testid="hero-description" style={{ opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0)' : 'translateY(20px)', transition: 'all 600ms cubic-bezier(0.16, 1, 0.3, 1) 350ms' }}>
            {description}
          </p>
          <div className="flex flex-wrap items-center gap-3" style={{ opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0)' : 'translateY(16px)', transition: 'all 600ms cubic-bezier(0.16, 1, 0.3, 1) 500ms' }}>
            {ctaText && ctaHref && (
              <Link href={ctaHref}>
                <Button size="lg" data-testid="hero-cta">
                  {ctaText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            )}
            {secondaryCtaText && secondaryCtaHref && (
              <Link href={secondaryCtaHref}>
                <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white/20 text-white" data-testid="hero-secondary-cta">
                  {secondaryCtaText}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
