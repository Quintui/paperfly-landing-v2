"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DEMO_BOOKING_URL, DASHBOARD_URL } from "@/lib/constants";
import {
  Check,
  Sparkles,
  Upload,
  Edit3,
  Send,
  BarChart3,
  ArrowRight,
  ChevronDown,
  Briefcase,
  Scale,
  FileCheck,
  ClipboardList,
  Building2,
  Calculator,
} from "lucide-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect, useState } from "react";

// Role data for the compliance section
const rolesData = [
  {
    id: "procurement",
    title: "Procurement Officers",
    icon: Briefcase,
    headline: "Streamline your entire procurement cycle",
    description:
      "From requisition to contract award, manage every step with full visibility and compliance tracking.",
    benefits: [
      "Automated compliance checklists for every procurement stage",
      "Real-time tracking of vendor submissions and evaluations",
      "Built-in approval workflows that match your org structure",
      "Complete audit trail for every decision made",
    ],
  },
  {
    id: "legal",
    title: "Legal Teams",
    icon: Scale,
    headline: "Review and approve with confidence",
    description:
      "Ensure every contract meets regulatory requirements with integrated legal review workflows.",
    benefits: [
      "Clause library with pre-approved legal language",
      "Version control for contract negotiations",
      "Risk flagging for non-standard terms",
      "Integration with your existing contract management",
    ],
  },
  {
    id: "compliance",
    title: "Compliance Managers",
    icon: FileCheck,
    headline: "Stay audit-ready at all times",
    description:
      "Monitor compliance across all procurement activities with real-time dashboards and alerts.",
    benefits: [
      "Automated compliance scoring for each RFP",
      "Policy violation alerts before they become issues",
      "Customizable compliance frameworks (SOC 2, ISO, etc.)",
      "One-click audit report generation",
    ],
  },
  {
    id: "project",
    title: "Project Managers",
    icon: ClipboardList,
    headline: "Keep projects on track and on budget",
    description:
      "Coordinate stakeholders, manage timelines, and ensure deliverables meet specifications.",
    benefits: [
      "Gantt-style timeline views for RFP milestones",
      "Stakeholder assignment and notification system",
      "Budget tracking integrated with procurement",
      "Dependencies management across departments",
    ],
  },
  {
    id: "finance",
    title: "Finance Directors",
    icon: Calculator,
    headline: "Control spend with complete visibility",
    description:
      "Track budgets, forecast costs, and ensure financial compliance across all procurement.",
    benefits: [
      "Real-time budget consumption dashboards",
      "Multi-year contract cost projections",
      "Integration with ERP and accounting systems",
      "Variance analysis and spend optimization insights",
    ],
  },
  {
    id: "executives",
    title: "C-Suite Executives",
    icon: Building2,
    headline: "Strategic oversight without the details",
    description:
      "Get the insights you need to make informed decisions without getting lost in the weeds.",
    benefits: [
      "Executive dashboards with key procurement metrics",
      "Risk exposure summaries across all contracts",
      "Savings and efficiency reports",
      "Board-ready compliance certifications",
    ],
  },
];
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

// Role-Based Section Component
function RoleBasedSection() {
  const [activeRole, setActiveRole] = useState(rolesData[0]);

  return (
    <section className="py-24 md:py-32 border-b border-border">
      <div className="container">
        <div className="mb-16 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-balance">
            Built for every role in your organization
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Whether you&apos;re in procurement, legal, compliance, or the
            C-suite—Paperfly adapts to how you work.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 scroll-animate">
          {/* Left side - Role list */}
          <div className="lg:col-span-4">
            <div className="space-y-1">
              {rolesData.map((role) => {
                const Icon = role.icon;
                const isActive = activeRole.id === role.id;
                return (
                  <button
                    type="button"
                    key={role.id}
                    onClick={() => setActiveRole(role)}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors duration-200 rounded-lg ${
                      isActive ? "bg-muted" : "hover:bg-muted/50"
                    }`}
                  >
                    <Icon
                      className={`h-5 w-5 shrink-0 ${isActive ? "text-primary" : "text-muted-foreground"}`}
                    />
                    <span
                      className={`font-medium ${isActive ? "text-foreground" : "text-muted-foreground"}`}
                    >
                      {role.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right side - Role details */}
          <div className="lg:col-span-8">
            <div className="lg:pl-8 lg:border-l border-border">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                {activeRole.headline}
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {activeRole.description}
              </p>

              <ul className="space-y-3">
                {activeRole.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3 group">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll(".scroll-animate").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10 animate-gradient" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

        <div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />

        <div className="container relative py-24 md:py-32 lg:py-40">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm mb-8 animate-fade-in backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-primary animate-pulse-subtle" />
              <span className="text-foreground">
                AI-powered procurement platform
              </span>
            </div>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              Turn procurement chaos into clarity
            </h1>
            <p
              className="text-xl md:text-2xl text-muted-foreground mb-10 text-pretty leading-relaxed animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              Most RFPs start with a blank page and end with manual scoring in
              spreadsheets. There&apos;s a better way.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              <Link href={DEMO_BOOKING_URL}>
                <Button size="lg" className="text-base h-12 px-8 group">
                  Book a Demo
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href={DASHBOARD_URL}>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base h-12 px-8 bg-background/50 backdrop-blur-sm hover:bg-background/80"
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </section>

      {/* Feature 1: RFP Generation */}
      <section
        id="features"
        className="py-24 md:py-32 border-b border-border relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,93,242,0.05),transparent_50%)]" />

        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 scroll-animate">
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 hover:shadow-xl hover:scale-[1.02] transition-all duration-500">
                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                      <Upload className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-card-foreground">
                        Upload Requirements
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Past documents, notes, or requirements
                      </p>
                    </div>
                  </div>
                  <div
                    className="flex items-start gap-4 group"
                    style={{ animationDelay: "0.1s" }}
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                      <Sparkles className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-card-foreground">
                        AI Processing
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Generate bilingual RFPs in English, French, or both
                      </p>
                    </div>
                  </div>
                  <div
                    className="flex items-start gap-4 group"
                    style={{ animationDelay: "0.2s" }}
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                      <BarChart3 className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-card-foreground">
                        Auto-Grading
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Instant scoring against your criteria
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            <div className="order-1 lg:order-2 scroll-animate">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-balance">
                From notes to published RFP in minutes
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Upload your requirements, past documents, or meeting notes.
                Paperfly builds a complete, professional RFP—ready to send or
                customize further.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 group">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 group-hover:scale-125 transition-transform" />
                  <span className="text-muted-foreground">
                    Generate bilingual RFPs in English, French, or both
                  </span>
                </li>
                <li className="flex items-start gap-3 group">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 group-hover:scale-125 transition-transform" />
                  <span className="text-muted-foreground">
                    Collect structured responses through vendor-specific forms
                  </span>
                </li>
                <li className="flex items-start gap-3 group">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 group-hover:scale-125 transition-transform" />
                  <span className="text-muted-foreground">
                    Grade automatically with instant scoring against your
                    criteria
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2: Response Management */}
      <section className="py-24 md:py-32 bg-muted/30 border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(0,93,242,0.03)_49%,rgba(0,93,242,0.03)_51%,transparent_52%)] bg-[size:40px_40px]" />

        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="scroll-animate">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-balance">
                Stop managing responses in spreadsheets
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Each RFP comes with a secure vendor form. Responses arrive
                organized, standardized, and already scored. You see top
                candidates immediately—no manual comparison needed.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 group">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 group-hover:scale-125 transition-transform" />
                  <span className="text-muted-foreground">
                    Vendors answer the same questions, the same way
                  </span>
                </li>
                <li className="flex items-start gap-3 group">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 group-hover:scale-125 transition-transform" />
                  <span className="text-muted-foreground">
                    Scoring happens on submission, not weeks later
                  </span>
                </li>
                <li className="flex items-start gap-3 group">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 group-hover:scale-125 transition-transform" />
                  <span className="text-muted-foreground">
                    Export results or notify vendors directly from Paperfly
                  </span>
                </li>
              </ul>
            </div>
            <div className="scroll-animate">
              <Card className="p-8 bg-card hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-lg bg-accent border border-border hover:border-primary/40 transition-all duration-300 cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        A
                      </div>
                      <div>
                        <p className="font-medium text-card-foreground">
                          Vendor A Solutions
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Submitted 2 hours ago
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform">
                        94
                      </p>
                      <p className="text-xs text-muted-foreground">Score</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50 border border-border hover:border-primary/40 transition-all duration-300 cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground font-semibold group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        B
                      </div>
                      <div>
                        <p className="font-medium text-card-foreground">
                          TechCorp Industries
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Submitted 5 hours ago
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-foreground group-hover:scale-110 transition-transform">
                        87
                      </p>
                      <p className="text-xs text-muted-foreground">Score</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50 border border-border hover:border-primary/40 transition-all duration-300 cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground font-semibold group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        C
                      </div>
                      <div>
                        <p className="font-medium text-card-foreground">
                          Global Services Ltd
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Submitted 1 day ago
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-foreground group-hover:scale-110 transition-transform">
                        82
                      </p>
                      <p className="text-xs text-muted-foreground">Score</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3: Role-Based Compliance Section */}
      <RoleBasedSection />

      {/* Workflow Section */}
      <section
        id="workflow"
        className="py-20 md:py-28 bg-muted/30 border-b border-border relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle,#005DF2_1px,transparent_1px)] bg-[size:32px_32px]" />

        <div className="container relative">
          <div className="text-center mb-12 md:mb-16 scroll-animate">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
              From requirements to results in 5 steps
            </h2>
            <p className="text-muted-foreground text-lg">
              A streamlined workflow that saves hours on every RFP
            </p>
          </div>

          {/* Horizontal Timeline */}
          <div
            className="relative max-w-6xl mx-auto scroll-animate"
            style={{ "--delay": "0s" } as React.CSSProperties}
          >
            {/* Timeline connector line - hidden on mobile, animates left to right */}
            <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-primary/20">
              <div className="h-full bg-gradient-to-r from-primary to-primary/60 origin-left scale-x-0 transition-transform duration-[1.8s] delay-[0.4s] [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] [.in-view_&]:scale-x-100" />
            </div>

            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
              {[
                {
                  icon: Upload,
                  title: "Upload",
                  desc: "Past documents, notes, or a simple description",
                },
                {
                  icon: Sparkles,
                  title: "Generate",
                  desc: "AI drafts your complete RFP in minutes",
                },
                {
                  icon: Edit3,
                  title: "Refine",
                  desc: "Review with your team and finalize",
                },
                {
                  icon: Send,
                  title: "Publish",
                  desc: "Send to vendors with secure forms",
                },
                {
                  icon: BarChart3,
                  title: "Review",
                  desc: "See pre-scored responses instantly",
                },
              ].map((step, index) => {
                const Icon = step.icon;

                return (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center group scroll-animate"
                    style={
                      {
                        "--delay": `${[0.3, 0.7, 1.0, 1.25, 1.45][index]}s`,
                      } as React.CSSProperties
                    }
                  >
                    {/* Step circle with icon */}
                    <div className="relative mb-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-background border-2 border-primary/30 text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 group-hover:border-primary transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:shadow-primary/20">
                        <Icon className="h-6 w-6" />
                      </div>
                      {/* Step number badge */}
                      <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center border-2 border-background">
                        {index + 1}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-semibold mb-1.5 text-foreground group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-[180px]">
                      {step.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 md:py-32 border-b border-border">
        <div className="container max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Frequently Asked Questions
            </h2>
          </div>
          {(() => {
            const faqs = [
              {
                question:
                  "Can Paperfly create RFPs in both English and French automatically?",
                answer:
                  "Yes. You can generate your entire RFP in English, French, or both — ensuring bilingual compliance from the start.",
              },
              {
                question: "Do I still have control over the final RFP?",
                answer:
                  "Absolutely. Every draft is fully editable before publishing.",
              },
              {
                question: "What is an RFP scoring rubric?",
                answer:
                  "A rubric is a standardized set of criteria used to evaluate vendor responses objectively. Paperfly includes built-in rubrics tailored to your industry.",
              },
              {
                question:
                  "Can multiple people work on an RFP at the same time?",
                answer:
                  "Currently, team members can edit sequentially, with each contributor's changes saved securely. A live simultaneous editing feature is coming soon.",
              },
              {
                question: "How are vendor responses scored?",
                answer:
                  "Each vendor submission is automatically graded against your selected rubric, generating a percentage score out of 100 for easy comparison.",
              },
              {
                question: "Can I notify vendors directly from Paperfly?",
                answer:
                  "Yes. You can bulk notify vendors of their selection or rejection right from our platform.",
              },
            ];
            return (
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index + 1}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            );
          })()}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-balance">
              Ready to move faster?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Join procurement teams that spend less time on documents and more
              time choosing the right vendors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={DEMO_BOOKING_URL}>
                <Button size="lg" className="text-base h-12 px-8">
                  Book a Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href={DASHBOARD_URL}>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base h-12 px-8 bg-transparent"
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
