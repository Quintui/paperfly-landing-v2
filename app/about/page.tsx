"use client";

import { Button } from "@/components/ui/button";
import { DEMO_BOOKING_URL, DASHBOARD_URL } from "@/lib/constants";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function About() {
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

        <div className="container relative py-24 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <p
              className="text-sm font-medium text-primary mb-4 animate-fade-in"
              style={{ animationDelay: "0s" }}
            >
              Our Story
            </p>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              We&apos;re fixing procurement, one RFP at a time
            </h1>
            <p
              className="text-lg md:text-xl text-muted-foreground mb-10 animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              The story behind Paperfly and why we&apos;re building the future
              of procurement.
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
      </section>

      {/* Blog Content */}
      <article className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl prose prose-lg prose-neutral dark:prose-invert">
            {/* The Problem */}
            <section className="scroll-animate mb-16">
              <p className="text-xl text-muted-foreground leading-relaxed">
                For too long, creating an RFP has meant staring at a blank Word
                doc, chasing down requirements via email, and spending weeks on
                formatting. Then comes the vendor responses—scattered formats,
                incomplete answers, manual scoring in spreadsheets.
              </p>
              <p className="text-xl font-semibold text-foreground mt-6">
                We built Paperfly because there&apos;s a better way.
              </p>
            </section>

            {/* What We Believe */}
            <section className="scroll-animate mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 tracking-tight">
                What we believe
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Procurement teams shouldn&apos;t spend their time wrestling with
                documents. They should spend it making smart vendor decisions.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                RFPs are essential, but the process is stuck in the past.
                We&apos;re bringing it forward—with tools that handle the
                busywork so you can focus on what actually matters.
              </p>
            </section>

            {/* What We Built */}
            <section className="scroll-animate mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 tracking-tight">
                What we built
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">
                  Paperfly turns messy inputs into structured RFPs.
                </strong>{" "}
                Upload notes, requirements, or past documents. Get a
                professional draft in minutes, not days.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                <strong className="text-foreground">
                  Vendors respond in a format you can actually compare.
                </strong>{" "}
                No more mismatched Word docs. Everyone answers the same
                questions, the same way.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                <strong className="text-foreground">
                  Scoring happens automatically.
                </strong>{" "}
                Responses are graded as they arrive. You see top candidates
                immediately, without spreadsheets or guesswork.
              </p>
            </section>

            {/* Who We Built It For */}
            <section className="scroll-animate mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 tracking-tight">
                Who we built it for
              </h2>
              <ul className="space-y-3 text-muted-foreground list-none pl-0">
                <li className="flex items-start gap-3">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                  <span>
                    <strong className="text-foreground">
                      Procurement teams
                    </strong>{" "}
                    drowning in manual work
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                  <span>
                    <strong className="text-foreground">
                      Government agencies
                    </strong>{" "}
                    with bilingual and compliance requirements
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                  <span>
                    <strong className="text-foreground">
                      Healthcare organizations
                    </strong>{" "}
                    coordinating across departments
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                  <span>
                    Anyone who&apos;s ever said{" "}
                    <em>&quot;there has to be a better way to do this&quot;</em>
                  </span>
                </li>
              </ul>
            </section>

            {/* How We Work */}
            <section className="scroll-animate mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 tracking-tight">
                How we work
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We don&apos;t believe in replacing people with automation. We
                believe in giving people better tools.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Paperfly handles structure, formatting, and scoring. You control
                the content, the criteria, and the decisions.{" "}
                <strong className="text-foreground">Always.</strong>
              </p>
            </section>

            {/* Divider */}
            <hr className="my-12 border-border" />

            {/* Final CTA */}
            <section className="scroll-animate text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 tracking-tight">
                Ready to try it?
              </h2>
              <p className="text-muted-foreground mb-8">
                See how Paperfly works for your team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center not-prose">
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
                    className="text-base h-12 px-8"
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
