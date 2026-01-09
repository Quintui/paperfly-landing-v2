import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { DEMO_BOOKING_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Why RFP Creation Is Still Broken in 2025 | Paperfly Blog",
  description:
    "Despite major technological advances in procurement, RFP creation remains one of the most painful, manual, and inefficient parts of vendor selection. Learn how to fix it.",
  openGraph: {
    title: "Why RFP Creation Is Still Broken in 2025",
    description:
      "Despite major technological advances in procurement, RFP creation remains one of the most painful, manual, and inefficient parts of vendor selection.",
    type: "article",
    publishedTime: "2025-06-01T00:00:00.000Z",
    authors: ["Paperfly Team"],
  },
};

export default function BlogPost() {
  return (
    <div className="min-h-screen">
      <Header />

      <article className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            {/* Back link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>

            {/* Header */}
            <header className="mb-12">
              <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                <span>Paperfly Team</span>
                <span>·</span>
                <time dateTime="2025-06">June 2025</time>
                <span>·</span>
                <span>8 min read</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Why RFP Creation Is Still Broken in 2025
              </h1>
              <p className="text-xl text-muted-foreground">And How to Fix It</p>
            </header>

            {/* Content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Despite major technological advances in procurement, RFP
                creation remains one of the most painful, manual, and
                inefficient parts of vendor selection.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Teams struggle with outdated templates, misalignment across
                departments, unclear scopes, and endless formatting work. All of
                this happens before a single proposal is even received.
              </p>

              <p className="font-medium text-foreground pt-4">
                The result is predictable.
              </p>

              <ul className="space-y-3 py-4">
                <li className="flex items-start gap-3">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                  <span className="text-muted-foreground">
                    Confusing RFPs that discourage strong vendors
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                  <span className="text-muted-foreground">
                    Delayed timelines and missed opportunities
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                  <span className="text-muted-foreground">
                    Inconsistent and subjective evaluations
                  </span>
                </li>
              </ul>

              <p className="text-muted-foreground leading-relaxed pt-2">
                If your organization still relies on Word documents and long
                email threads, you are not alone.
              </p>

              <p className="font-semibold text-foreground text-lg pt-2">
                At Paperfly, we set out to fix this.
              </p>

              <hr className="my-12 border-border" />

              <h2 className="text-2xl font-bold tracking-tight mt-12 mb-6">
                5 Common RFP Creation Problems
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                And How Paperfly Solves Them
              </p>

              {/* Problem 1 */}
              <div className="mb-10">
                <h3 className="text-lg font-semibold mb-3">
                  1. Unclear Scope and Structure
                </h3>
                <p className="text-muted-foreground mb-4">
                  Most RFPs begin with a blank page or a legacy template that
                  does not quite fit the project. This leads to vague
                  requirements, missing sections, and unclear expectations.
                </p>
                <div className="pl-4 border-l-2 border-primary">
                  <p className="text-sm font-medium text-primary mb-1">
                    Paperfly Fix
                  </p>
                  <p className="text-muted-foreground">
                    Paperfly uses AI to turn meeting notes, past RFPs, or rough
                    ideas into structured, editable RFPs tailored to your
                    project and industry.
                  </p>
                </div>
              </div>

              {/* Problem 2 */}
              <div className="mb-10">
                <h3 className="text-lg font-semibold mb-3">
                  2. Stakeholder Chaos
                </h3>
                <p className="text-muted-foreground mb-4">
                  Procurement requires input from legal, IT, operations,
                  finance, and more. Coordinating feedback across teams slows
                  everything down and creates version confusion.
                </p>
                <div className="pl-4 border-l-2 border-primary">
                  <p className="text-sm font-medium text-primary mb-1">
                    Paperfly Fix
                  </p>
                  <p className="text-muted-foreground">
                    A shared RFP workspace captures comments, merges feedback,
                    and keeps everyone aligned without version chaos.
                  </p>
                </div>
              </div>

              {/* Problem 3 */}
              <div className="mb-10">
                <h3 className="text-lg font-semibold mb-3">
                  3. Manual Document Assembly
                </h3>
                <p className="text-muted-foreground mb-4">
                  Creating a clean, professional RFP with consistent language
                  and formatting can take hours or even days.
                </p>
                <div className="pl-4 border-l-2 border-primary">
                  <p className="text-sm font-medium text-primary mb-1">
                    Paperfly Fix
                  </p>
                  <p className="text-muted-foreground">
                    Paperfly generates ready-to-export RFPs in Word, PDF, or
                    Google Docs in minutes.
                  </p>
                </div>
              </div>

              {/* Problem 4 */}
              <div className="mb-10">
                <h3 className="text-lg font-semibold mb-3">
                  4. Inconsistent Vendor Responses
                </h3>
                <p className="text-muted-foreground mb-4">
                  When questions are unclear or poorly structured, vendors
                  submit wildly different proposals that are hard to compare.
                </p>
                <div className="pl-4 border-l-2 border-primary">
                  <p className="text-sm font-medium text-primary mb-1">
                    Paperfly Fix
                  </p>
                  <p className="text-muted-foreground">
                    Paperfly generates a mirrored Q&A response form for vendors,
                    making proposals structured and easy to review.
                  </p>
                </div>
              </div>

              {/* Problem 5 */}
              <div className="mb-10">
                <h3 className="text-lg font-semibold mb-3">
                  5. No Scoring Logic
                </h3>
                <p className="text-muted-foreground mb-4">
                  Many teams still evaluate proposals subjectively because there
                  is no shared evaluation framework.
                </p>
                <div className="pl-4 border-l-2 border-primary">
                  <p className="text-sm font-medium text-primary mb-1">
                    Paperfly Fix
                  </p>
                  <p className="text-muted-foreground">
                    Built-in evaluation models align scoring with your industry,
                    priorities, and business goals.
                  </p>
                </div>
              </div>

              <hr className="my-12 border-border" />

              <h2 className="text-2xl font-bold tracking-tight mb-4">
                Why It Matters
              </h2>

              <p>
                A strong RFP is not just about compliance. It is your first
                opportunity to attract the right vendors, set clear
                expectations, and streamline decision-making.
              </p>

              <p className="font-medium text-foreground">
                Paperfly brings structure, intelligence, and speed to the entire
                RFP process.
              </p>

              <hr className="my-12 border-border" />

              {/* CTA */}
              <div className="text-center py-8">
                <h2 className="text-2xl font-bold tracking-tight mb-3">
                  Ready to See It in Action?
                </h2>
                <p className="text-muted-foreground mb-6">
                  Transform your RFP process from painful to powerful.
                </p>
                <Link href={DEMO_BOOKING_URL}>
                  <Button size="lg" className="gap-2">
                    Book a Demo
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
