"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DEMO_BOOKING_URL, DASHBOARD_URL } from "@/lib/constants";
import {
  Check,
  ArrowRight,
  Zap,
  BarChart3,
  Globe,
  Send,
  MessageSquare,
  Shield,
  Headphones,
  Settings,
  Users,
  FileText,
  Timer,
  Target,
  TrendingUp,
  Languages,
} from "lucide-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect, useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { RoleBasedSection } from "@/components/role-based-section";

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "yearly",
  );

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

  const monthlyPrice = 499;
  const yearlyPrice = 416;
  const yearlyTotal = 4990;

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

        <div className="container relative py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              Simple Pricing
            </h1>
            <p
              className="text-xl md:text-2xl text-muted-foreground mb-10 text-pretty leading-relaxed animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              Choose the plan that works best for your organization
            </p>

            {/* Billing Toggle */}
            <div
              className="inline-flex items-center gap-3 p-1.5 rounded-full bg-muted/50 border border-border animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              <button
                type="button"
                onClick={() => setBillingCycle("monthly")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  billingCycle === "monthly"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setBillingCycle("yearly")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  billingCycle === "yearly"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Yearly
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-primary/10 text-primary">
                  Save 2 months
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 md:py-28 border-b border-border">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Complete Solution Card */}
            <Card className="p-8 relative overflow-hidden scroll-animate bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary text-primary-foreground">
                  Most Popular
                </span>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Complete RFP/RFI Solution
                </h3>
                <p className="text-muted-foreground">
                  Professional RFP and RFI creation and vendor management in
                  minutes.
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-foreground">
                    ${billingCycle === "yearly" ? yearlyPrice : monthlyPrice}
                  </span>
                  <span className="text-muted-foreground">USD per month</span>
                </div>
                {billingCycle === "yearly" && (
                  <p className="text-sm text-muted-foreground mt-2">
                    Billed ${yearlyTotal.toLocaleString()} yearly
                  </p>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  {
                    icon: FileText,
                    text: "Unlimited RFP/RFI generation with built-in editor",
                  },
                  {
                    icon: MessageSquare,
                    text: "Smart vendor response forms",
                  },
                  {
                    icon: BarChart3,
                    text: "Automated scoring & AI recommendations",
                  },
                  {
                    icon: Globe,
                    text: "Bilingual documents (English & French)",
                  },
                  { icon: Send, text: "Vendor distribution system built-in" },
                  {
                    icon: Users,
                    text: "Team collaboration & workspace sharing",
                  },
                  {
                    icon: Headphones,
                    text: "Customer success consultation included",
                  },
                ].map((feature) => {
                  return (
                    <li
                      key={feature.text}
                      className="flex items-start gap-3 group"
                    >
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 mt-0.5">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground text-sm">
                        {feature.text}
                      </span>
                    </li>
                  );
                })}
              </ul>

              <Link href={DASHBOARD_URL} className="block">
                <Button size="lg" className="w-full text-base h-12 group">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <p className="text-xs text-muted-foreground text-center mt-4">
                No setup fees • Unlimited RFP/RFI projects • Unlimited vendor
                responses
              </p>
            </Card>

            {/* Enterprise Card */}
            <Card className="p-8 relative overflow-hidden scroll-animate bg-card">
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-secondary text-secondary-foreground">
                  Custom Solution
                </span>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Enterprise
                </h3>
                <p className="text-muted-foreground">
                  Tailored solutions for organizations with advanced
                  requirements and high-volume needs.
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-foreground">
                    Custom
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Contact us for pricing
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  { icon: Check, text: "Everything in Complete Solution" },
                  { icon: Zap, text: "Volume Discounts" },
                  { icon: Shield, text: "Private knowledge base" },
                  { icon: Users, text: "Dedicated account manager" },
                  { icon: Headphones, text: "Priority support & onboarding" },
                  { icon: Settings, text: "Custom integrations & workflows" },
                  { icon: Shield, text: "Advanced security & compliance" },
                ].map((feature) => (
                  <li
                    key={feature.text}
                    className="flex items-start gap-3 group"
                  >
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-muted mt-0.5">
                      <Check className="h-3 w-3 text-foreground" />
                    </div>
                    <span className="text-muted-foreground text-sm">
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <Link href={DEMO_BOOKING_URL} className="block">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full text-base h-12 group"
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <p className="text-xs text-muted-foreground text-center mt-4">
                Volume discounts • SLA agreements available • Custom features
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 bg-muted/30 border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle,#005DF2_1px,transparent_1px)] bg-[size:32px_32px]" />

        <div className="container relative">
          <div className="text-center mb-12 md:mb-16 scroll-animate">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
              How It Works
            </h2>
            <p className="text-muted-foreground text-lg">
              Get started in minutes with our simple workflow
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: 1,
                title: "Describe Your Project",
                desc: "Input your project requirements and specifications",
              },
              {
                step: 2,
                title: "Get Professional RFP/RFI",
                desc: "AI generates a comprehensive RFP or RFI in under 2 minutes",
              },
              {
                step: 3,
                title: "Distribute to Vendors",
                desc: "Send to vendors through our integrated platform",
              },
              {
                step: 4,
                title: "Get AI Recommendations",
                desc: "Automatic evaluation scores and detailed analysis",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex flex-col items-center text-center group scroll-animate"
                style={
                  {
                    "--delay": `${(item.step - 1) * 0.15}s`,
                  } as React.CSSProperties
                }
              >
                <div className="relative mb-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-background border-2 border-primary/30 text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 group-hover:border-primary transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:shadow-primary/20">
                    <span className="text-2xl font-bold">{item.step}</span>
                  </div>
                </div>
                <h3 className="text-base font-semibold mb-1.5 text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built for every role */}
      <RoleBasedSection />

      {/* Why Choose Us */}
      <section className="py-24 md:py-32 border-b border-border">
        <div className="container">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Why Choose Us?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Paperfly transforms how organizations handle procurement
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: Timer,
                metric: "10x Faster",
                desc: "Than traditional RFP/RFI creation methods",
                highlight: "10x",
              },
              {
                icon: Target,
                metric: "Objective Selection",
                desc: "AI-powered vendor evaluation and scoring",
                highlight: "AI",
              },
              {
                icon: TrendingUp,
                metric: "60% Better Quality",
                desc: "Structured forms improve response quality",
                highlight: "60%",
              },
              {
                icon: Languages,
                metric: "Expand Reach",
                desc: "Bilingual capabilities for broader vendor pool",
                highlight: "2x",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.metric}
                  className="relative p-8 rounded-2xl bg-card border border-border scroll-animate"
                  style={
                    {
                      "--delay": `${idx * 0.1}s`,
                    } as React.CSSProperties
                  }
                >
                  <div className="flex items-start gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {item.metric}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-32 border-b border-border">
        <div className="container max-w-3xl">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <Accordion
            type="single"
            collapsible
            className="w-full scroll-animate"
          >
            {[
              {
                id: "speed",
                question: "How quickly can I create an RFP or RFI?",
                answer:
                  "With Paperfly, you can generate a complete, professional RFP or RFI in under 2 minutes. Simply input your project requirements and our AI will create a comprehensive document ready for review and distribution.",
              },
              {
                id: "limits",
                question: "Are there any limits on vendor responses?",
                answer:
                  "No! Both our Complete Solution and Enterprise plans include unlimited vendor responses. You can collect as many proposals as you need without worrying about additional costs.",
              },
              {
                id: "criteria",
                question: "Can I customize evaluation criteria?",
                answer:
                  "Absolutely. Paperfly allows you to define custom evaluation criteria and scoring rubrics tailored to your specific project needs. The AI will then automatically score vendor responses based on your criteria.",
              },
              {
                id: "industries",
                question: "What industries do you support?",
                answer:
                  "Paperfly is designed to work across all industries including government, healthcare, technology, manufacturing, finance, and more. Our AI adapts to industry-specific terminology and requirements.",
              },
              {
                id: "support",
                question: "Is there ongoing support included?",
                answer:
                  "Yes! Our Complete Solution includes customer success consultation to help you get the most out of the platform. Enterprise customers receive a dedicated account manager and priority support.",
              },
              {
                id: "cancel",
                question: "Can I cancel my subscription anytime?",
                answer:
                  "Yes, you can cancel your subscription at any time. If you're on an annual plan, you'll continue to have access until the end of your billing period.",
              },
            ].map((faq) => (
              <AccordionItem key={faq.id} value={faq.id}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-balance">
              Ready to Optimize Your Procurement Process?
            </h2>
            <p className="text-xl text-muted-foreground mb-4 leading-relaxed">
              Join industry leaders who have reduced costs and accelerated
              project execution through standardized procurement.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-10">
              <span className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-primary" />
                40% faster execution
              </span>
              <span className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4 text-primary" />
                25% cost reduction
              </span>
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                Zero documentation errors
              </span>
            </div>
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
