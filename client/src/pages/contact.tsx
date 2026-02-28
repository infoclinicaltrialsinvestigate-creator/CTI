import { useState } from "react";
import HeroSection from "@/components/hero-section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { MapPin, Phone, Mail, Send, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { AnimatedSection } from "@/components/animated-section";

export default function Contact() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    title: "",
    company: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    email: "",
    phone: "",
    message: "",
    newsletter: false,
  });

  const mutation = useMutation({
    mutationFn: async (data: typeof form) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      setSubmitted(true);
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We will get back to you soon.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName || !form.lastName || !form.company || !form.city || !form.postalCode || !form.country || !form.email || !form.phone) {
      toast({
        title: "Required Fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    mutation.mutate(form);
  };

  const updateField = (field: string, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  if (submitted) {
    return (
      <div>
        <section className="py-32 bg-background">
          <AnimatedSection animation="scaleIn">
            <div className="max-w-lg mx-auto px-4 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Your message has been received. Our team will review your inquiry and get back to you as soon as possible.
              </p>
              <Button onClick={() => { setSubmitted(false); setForm({ firstName: "", lastName: "", title: "", company: "", city: "", state: "", postalCode: "", country: "", email: "", phone: "", message: "", newsletter: false }); }} data-testid="button-send-another">
                Send Another Message
              </Button>
            </div>
          </AnimatedSection>
        </section>
      </div>
    );
  }

  return (
    <div>
      <HeroSection
        title="Get in Touch"
        subtitle="Contact Us"
        description="Explore the possibilities of collaboration with Clinical Trials Investigate. Let's join forces on the path to a healthier and safer world."
        image="/images/pattern-bg.png"
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <AnimatedSection animation="fadeLeft" className="lg:col-span-2">
              <div>
                <h2 className="text-2xl font-bold mb-2">How Can We Help?</h2>
                <p className="text-muted-foreground mb-8 text-sm">
                  Whether you have inquiries, project requests, or a desire to learn more about our services, we're here to assist you. Fields marked with * are required.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5" data-testid="contact-form">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-sm mb-1.5 block">First Name *</Label>
                      <Input id="firstName" value={form.firstName} onChange={(e) => updateField("firstName", e.target.value)} required data-testid="input-first-name" />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-sm mb-1.5 block">Last Name *</Label>
                      <Input id="lastName" value={form.lastName} onChange={(e) => updateField("lastName", e.target.value)} required data-testid="input-last-name" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="title" className="text-sm mb-1.5 block">Title</Label>
                      <Input id="title" value={form.title} onChange={(e) => updateField("title", e.target.value)} data-testid="input-title" />
                    </div>
                    <div>
                      <Label htmlFor="company" className="text-sm mb-1.5 block">Company *</Label>
                      <Input id="company" value={form.company} onChange={(e) => updateField("company", e.target.value)} required data-testid="input-company" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="city" className="text-sm mb-1.5 block">City *</Label>
                      <Input id="city" value={form.city} onChange={(e) => updateField("city", e.target.value)} required data-testid="input-city" />
                    </div>
                    <div>
                      <Label htmlFor="state" className="text-sm mb-1.5 block">State / Province</Label>
                      <Input id="state" value={form.state} onChange={(e) => updateField("state", e.target.value)} data-testid="input-state" />
                    </div>
                    <div>
                      <Label htmlFor="postalCode" className="text-sm mb-1.5 block">Postal Code *</Label>
                      <Input id="postalCode" value={form.postalCode} onChange={(e) => updateField("postalCode", e.target.value)} required data-testid="input-postal-code" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="country" className="text-sm mb-1.5 block">Country *</Label>
                      <Input id="country" value={form.country} onChange={(e) => updateField("country", e.target.value)} required data-testid="input-country" />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm mb-1.5 block">Company Email *</Label>
                      <Input id="email" type="email" value={form.email} onChange={(e) => updateField("email", e.target.value)} required data-testid="input-email" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-sm mb-1.5 block">Phone *</Label>
                    <Input id="phone" type="tel" value={form.phone} onChange={(e) => updateField("phone", e.target.value)} required data-testid="input-phone" />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm mb-1.5 block">Message</Label>
                    <Textarea id="message" rows={5} value={form.message} onChange={(e) => updateField("message", e.target.value)} className="resize-none" data-testid="input-message" />
                  </div>

                  <div className="flex items-start gap-2">
                    <Checkbox
                      id="newsletter"
                      checked={form.newsletter}
                      onCheckedChange={(checked) => updateField("newsletter", Boolean(checked))}
                      data-testid="checkbox-newsletter"
                    />
                    <Label htmlFor="newsletter" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                      Yes, I want to receive news and resources from Clinical Trials Investigate
                    </Label>
                  </div>

                  <Button type="submit" disabled={mutation.isPending} data-testid="button-submit-contact">
                    {mutation.isPending ? "Sending..." : "Submit"}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeRight" delay={200}>
              <div>
                <Card className="p-6" data-testid="contact-info-card">
                  <h3 className="font-semibold text-lg mb-6">Contact Information</h3>
                  <div className="space-y-5">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-0.5">Address</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          2470 Windy Hill Rd, Suite 310<br />
                          Marietta, GA 30067
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-0.5">Phone</h4>
                        <p className="text-xs text-muted-foreground">(404) 207-2431</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-0.5">Email</h4>
                        <p className="text-xs text-muted-foreground">jobs@clinicaltrialsinvestigate.com</p>
                      </div>
                    </div>
                  </div>
                </Card>

                <div className="mt-6 p-5 bg-primary/5 rounded-md border border-primary/10">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    If you are interested in a career with CTI, please visit the dedicated careers page. CVs sent via this contact form will not be processed.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
