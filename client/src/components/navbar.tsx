import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, ChevronDown } from "lucide-react";
import ctiLogo from "@assets/cti_logo-removebg-preview_1771584501134.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const navItems = [
  { label: "Sectors", href: "/sectors" },
  { label: "Clinical Operations", href: "/clinical-operations" },
  { label: "Solutions", href: "/solutions" },
  { label: "Delivery Models", href: "/delivery-models" },
  { label: "Expertise", href: "/expertise" },
  { label: "Education", href: "/education" },
  { label: "About Us", href: "/about" },
  { label: "Careers", href: "/careers" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" data-testid="link-home">
          <div className="flex items-center cursor-pointer">
            <img src={ctiLogo} alt="Clinical Trials Investigate" className="h-10 w-auto" data-testid="img-logo" />
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <Button
                variant="ghost"
                size="sm"
                data-testid={`nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                className={`text-sm font-medium ${
                  location === item.href
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Button>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/contact">
            <Button data-testid="nav-contact-us" size="sm">
              Contact Us
            </Button>
          </Link>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" data-testid="button-mobile-menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 p-0">
              <div className="flex flex-col h-full">
                <div className="p-6 border-b border-border">
                  <img src={ctiLogo} alt="Clinical Trials Investigate" className="h-10 w-auto" />
                </div>
                <nav className="flex-1 p-4 space-y-0.5 overflow-y-auto">
                  {navItems.map((item) => (
                    <Link key={item.href} href={item.href}>
                      <button
                        onClick={() => setOpen(false)}
                        data-testid={`mobile-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                        className={`w-full text-left px-4 py-3.5 rounded-md text-sm font-medium transition-colors active:scale-[0.98] ${
                          location === item.href
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground hover-elevate"
                        }`}
                      >
                        {item.label}
                      </button>
                    </Link>
                  ))}
                </nav>
                <div className="p-4 border-t border-border">
                  <Link href="/contact">
                    <Button className="w-full" onClick={() => setOpen(false)} data-testid="mobile-nav-contact">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
