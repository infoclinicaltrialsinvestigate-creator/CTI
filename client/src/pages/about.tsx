import HeroSection from "@/components/hero-section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowRight, Eye, Target, Heart, Shield, Users, Lightbulb, Award, Cpu, FileText, Microscope, ShieldCheck, FolderCog, Database, Stethoscope, FlaskConical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { AnimatedSection } from "@/components/animated-section";

const strategicGoals = [
  "A Clinical Research Center of great repute",
  "Retaining, retraining and recruiting personnel with the highest standards and academic excellence who are devoted to research and mentoring",
  "Fostering and building an environment that develops staff who are problem solvers, transformed for service and leadership",
  "Developing and encouraging the effective use of technology to support prompt delivery in clinical research",
  "Developing the physical environment to support the goals of a Clinical Research Center",
  "Accelerating and sustaining financial growth to achieve financial stability",
  "Helping create and sustain a social and political environment supportive of these goals",
];

const values = [
  { icon: Shield, title: "Protocol Adherence", desc: "We believe in strict adherence to requirements of Protocols, Standard Operating Procedures and Regulatory and Quality assurances." },
  { icon: Users, title: "Respect & Tolerance", desc: "We believe that respect, tolerance and understanding among national, ethnic, and religious groups are essential to the success of the center's goals." },
  { icon: Eye, title: "Integrity & Transparency", desc: "We believe that the Center, in all of its activities, shall demonstrate the highest standards of integrity, transparency, and honesty." },
  { icon: Lightbulb, title: "Freedom of Expression", desc: "We believe that freedom of expression is fundamental to any research and development community and affirm that all members will express opinions without fear of reprisals." },
];

const neurologyTrials = [
  "Oncology", "Alzheimer's Disease", "ALS", "Anxiety Disorders",
  "Parkinson's Disease", "Chronic Pain", "Dementia (including MID & DAT)",
  "Depression", "Diabetic Neuropathy", "Epilepsy",
  "Fibromyalgia", "First Clinical Episode Multiple Sclerosis",
  "Head Injury", "Insomnia", "Migraine/Headache",
  "Multiple Sclerosis (with/without Spasticity)", "Muscle Disease",
  "Neuromuscular Disorders", "Obesity", "Peripheral Neuropathy",
  "Sleep Disorders", "Stroke", "Vascular Dementia",
  "Other Neurological Disorders",
];

const internalMedicineTrials = [
  "Hypertension", "Anti-Infectives", "Hyperlipidemia",
  "Neuropathic Pain Control", "Diabetes",
];

const technologies = [
  "Clinical Data Management Systems (CDMS)",
  "Safety Systems",
  "SAS Programming",
  "Electronic Data Capture Systems (EDC)",
  "Regulatory Submission Systems (eCTD)",
  "Electronic Trial Master File (eTMF)",
];

const ctiServices = [
  { icon: Microscope, title: "Clinical Research Education", desc: "Workforce Quality Accreditation, training programs for CRA, CRC, and PI including SOP, Protocol, ICH/GCP, and Investigator meetings. Certifications across five core areas: Investigational Product Management, Protocol, Safety, Trial Management, and Trial Oversight." },
  { icon: ShieldCheck, title: "Regulatory / Quality Assurance", desc: "Planning and preparation of Pre-IND meetings and submissions, FDA meetings, IND and NDA assembly, regulatory agency liaison, SOP compliance, pre-approval inspection audits, Sponsor/CRO auditing, and cGMP compliance evaluation." },
  { icon: Stethoscope, title: "Drug Safety", desc: "Pharmacovigilance for investigational and marketed products, safety database management, literature screening, ICSR processing, unblinding procedures, medical assessment, aggregate reporting (SPC, ASR, RSI, PSUR, PADER, PBRER), and signal detection and evaluation." },
  { icon: FlaskConical, title: "Clinical Development", desc: "Clinical Development Plan preparation, protocol development (Bioequivalency and Bioavailability studies), sample size and power computations, surrogate markers evaluation, informed consent in FDA compliance, and clinical strategy consultation." },
  { icon: Users, title: "Site Recruitment & HR Management", desc: "Investigator interviews, confidentiality agreements, site qualification visits, investigator meetings, interim monitoring visits with source data verification, trial site management, site initiation visits, motivational visits, risk-based monitoring, and close-out visits." },
  { icon: Database, title: "Data Management", desc: "CRF/eCRF design, database development, electronic data validation, double data entry, Data Management Plan preparation, data review and quality assurance, query management, MedDRA and WHO Drug coding, SAE reconciliation, and external data integration." },
  { icon: FileText, title: "Medical Writing", desc: "IND documentations, Investigator Brochures, Protocols and Informed Consents, Clinical Trial Reports, scientific posters and papers, clinical manuscripts for marketing and journal publications, and all NDA section summaries." },
  { icon: FolderCog, title: "Project Management", desc: "Dedicated project management from initiation to completion, cross-functional team leadership, interface with clinical and external teams, project plan development and execution, budget management, risk identification, and quality policy support." },
];

export default function About() {
  return (
    <div>
      <HeroSection
        title="About Clinical Trials Investigate"
        subtitle="About Us"
        description="An affiliate of both International Information Technology & Application and International Institute of Technology & Application, dedicated to becoming a center of excellence in clinical research."
        image="/images/about-hero.png"
        ctaText="Contact Us"
        ctaHref="/contact"
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection animation="fadeLeft">
              <div>
                <Badge variant="secondary" className="mb-4">Vision</Badge>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Clinical Trials Investigate (CTI) seeks to become a great center of clinical research, and a catalyst for development in the entire world. In the words of its Founder, it sees its role as a "Development Center." The Center honors the traditional roles of clinical repository and transmitter of clinical knowledge, and center for the creation of new knowledge. As a "Development Center," it focuses on the practical role that a great Center must play in clinical development of the world.
                </p>
                <Badge variant="secondary" className="mb-4">Mission</Badge>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The Center's mission is to ensure quality clinical development and as leaders, equip the personnel with the skills needed for clinical development trials/research in the world, and give them the knowledge needed to create solutions that will benefit the world. To this end, CTI fosters the creation of leaders committed to sustaining a culture of Good Clinical Practice in which diverse people share in the rights and responsibilities of safety, rights and well-being of subjects, proficient in creating and applying technology to wise purpose, and dedicated to delivering biologic devices and medications that lead to a healthy and prosperous world.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fadeRight" delay={200}>
              <div>
                <Badge variant="secondary" className="mb-4">Strategic Goals</Badge>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Strategic Goals</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  To realize our vision and fulfill our mission, we focus our efforts on the following strategic goals:
                </p>
                <ul className="space-y-3">
                  {strategicGoals.map((goal) => (
                    <li key={goal} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeUp">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <Badge variant="secondary" className="mb-4">Values</Badge>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Core Values</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our values statement defines what we hold in common as members of the Clinical Trials Investigate community, and informs our vision and mission statements.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="fadeUp" delay={150}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {values.map((v) => (
                <Card key={v.title} className="p-6" data-testid={`value-${v.title.toLowerCase().replace(/\s+/g, "-")}`}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                      <v.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{v.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeUp">
            <div className="max-w-3xl mx-auto mb-14">
              <Badge variant="secondary" className="mb-4">Dedication</Badge>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Dedication and Experience</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Clinical Trials Investigate is dedicated and will always deliver your study successfully and provide the highest quality service. CTI engages documented, time-proven and time-driven processes to manage your project activities, timelines, resources, and budget.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our services are performed in accordance with our SOPs and in compliance with ICH/GCP guidelines and 21 CFR Part 11. Our dedicated and experienced staff will always work closely with your team to understand the requirements and scope of your development program and will ensure that the right team is put in place to accomplish all activities from the commencement of project discussions.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="scaleIn" delay={150}>
            <div className="mb-10">
              <h3 className="font-semibold text-lg mb-4 text-center">Trial Experience</h3>
              <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6">
                {neurologyTrials.map((exp) => (
                  <Badge key={exp} variant="outline" className="px-4 py-2 text-sm" data-testid={`experience-${exp.toLowerCase().replace(/\s+/g, "-")}`}>
                    {exp}
                  </Badge>
                ))}
              </div>
              <p className="text-sm text-muted-foreground text-center mb-4">We also collaborate with an Internal Medicine/Endocrinology practice conducting trials in:</p>
              <div className="flex flex-wrap items-center justify-center gap-2.5">
                {internalMedicineTrials.map((exp) => (
                  <Badge key={exp} variant="outline" className="px-4 py-2 text-sm">
                    {exp}
                  </Badge>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeUp">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <Badge variant="secondary" className="mb-4">Services & Capabilities</Badge>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">CTI Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our experienced and certified professionals provide comprehensive services across clinical research.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="fadeUp" delay={150}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {ctiServices.map((svc) => (
                <Card key={svc.title} className="p-6" data-testid={`service-${svc.title.toLowerCase().replace(/\s+/g, "-")}`}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                      <svc.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{svc.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{svc.desc}</p>
                    </div>
                  </div>
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
              <Badge variant="secondary" className="mb-4">Technology</Badge>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Technology Stack</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our experienced and certified professionals provide the most current and commonly applied technologies.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="fadeUp" delay={150}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {technologies.map((tech) => (
                <Card key={tech} className="p-5">
                  <div className="flex items-center gap-3">
                    <Cpu className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm font-medium">{tech}</span>
                  </div>
                </Card>
              ))}
            </div>
          </AnimatedSection>
          <div className="text-center mt-10">
            <Link href="/contact">
              <Button data-testid="about-contact-cta">
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
