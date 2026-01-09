"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DEMO_BOOKING_URL, DASHBOARD_URL } from "@/lib/constants";
import {
  Check,
  Sparkles,
  Users,
  Shield,
  Zap,
  Upload,
  Edit3,
  Send,
  BarChart3,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect } from "react";

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
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="Paperfly"
              width={140}
              height={32}
              priority
            />
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#features"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </Link>
            <Link
              href="#workflow"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              How it Works
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href={DASHBOARD_URL}>
              <Button variant="ghost" size="sm">
                Get Started
              </Button>
            </Link>
            <Link href={DEMO_BOOKING_URL}>
              <Button size="sm">Book a Demo</Button>
            </Link>
          </div>
        </div>
      </header>

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
              spreadsheets. There's a better way.
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

      {/* Feature 3: Compliance */}
      <section className="py-24 md:py-32 border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,93,242,0.08),transparent_50%)]" />

        <div className="container relative">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Built for teams that need compliance
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Whether you're meeting bilingual mandates, tracking audit trails,
              or coordinating across departments—Paperfly keeps everything in
              one place.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-card hover:shadow-2xl transition-all duration-500 scroll-animate group border-border hover:border-primary/40">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 transition-all duration-300">
                <Shield className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                Government
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Meet procurement guidelines with auditable records and full
                compliance tracking.
              </p>
            </Card>
            <Card
              className="p-8 bg-card hover:shadow-2xl transition-all duration-500 scroll-animate group border-border hover:border-primary/40"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 transition-all duration-300">
                <Users className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                Healthcare
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Coordinate IT, legal, and clinical reviews in one streamlined
                workflow.
              </p>
            </Card>
            <Card
              className="p-8 bg-card hover:shadow-2xl transition-all duration-500 scroll-animate group border-border hover:border-primary/40"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 transition-all duration-300">
                <Zap className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                Education
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Handle approvals and tight timelines without bottlenecks or
                delays.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section
        id="workflow"
        className="py-24 md:py-32 bg-muted/30 border-b border-border relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle,#005DF2_1px,transparent_1px)] bg-[size:32px_32px]" />

        <div className="container relative">
          <div className="text-center mb-20 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Simple workflow, powerful results
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                icon: Upload,
                title: "Upload requirements",
                desc: "Start with past documents, meeting notes, or a simple description of what you need.",
                delay: "0s",
              },
              {
                icon: Sparkles,
                title: "Generate your RFP",
                desc: "AI drafts a complete, professional RFP in minutes—bilingual if needed.",
                delay: "0.1s",
              },
              {
                icon: Edit3,
                title: "Refine and collaborate",
                desc: "Review with your team, make edits, and finalize the details.",
                delay: "0.2s",
              },
              {
                icon: Send,
                title: "Publish to vendors",
                desc: "Send instantly with secure vendor forms for structured responses.",
                delay: "0.3s",
              },
              {
                icon: BarChart3,
                title: "Review scored responses",
                desc: "Responses arrive pre-scored. See top candidates immediately without manual comparison.",
                delay: "0.4s",
              },
            ].map((step, index) => {
              const Icon = step.icon;
              const isLast = index === 4;

              return (
                <div
                  key={index}
                  className={`flex gap-6 items-start group scroll-animate`}
                  style={{ animationDelay: step.delay }}
                >
                  <div className="flex-shrink-0 w-16 flex flex-col items-center">
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-primary border-2 border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20">
                      <Icon className="h-7 w-7" />
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center border-2 border-background">
                        {index + 1}
                      </div>
                    </div>
                    {!isLast && (
                      <div className="w-px h-full min-h-[40px] bg-gradient-to-b from-primary/40 via-primary/20 to-transparent mt-3" />
                    )}
                  </div>
                  <div className="flex-1 pt-3">
                    <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
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

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30">
        <div className="container py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image src="/logo.svg" alt="Paperfly" width={140} height={32} />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                AI-powered procurement platform for modern teams.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Features</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Key Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    AI RFP Tool
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Who We Serve
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground text-center">
              © 2026 Paperfly. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
