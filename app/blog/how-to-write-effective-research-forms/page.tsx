import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { DEMO_BOOKING_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title:
    "How to Write Effective Research Forms for AI-Powered RFPs | Paperfly Blog",
  description:
    "The quality of your RFP starts with how well you complete your research form. Learn how to provide the right context and detail for AI to generate precise, comprehensive RFPs.",
  openGraph: {
    title: "How to Write Effective Research Forms for AI-Powered RFPs",
    description:
      "The quality of your RFP starts with how well you complete your research form. Learn best practices for AI-powered RFP generation.",
    type: "article",
    publishedTime: "2025-01-01T00:00:00.000Z",
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
              <span className="inline-block text-xs font-medium text-primary mb-4">
                Best Practices
              </span>
              <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                <span>Paperfly Team</span>
                <span>·</span>
                <time dateTime="2025-01">January 2025</time>
                <span>·</span>
                <span>8 min read</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                How to Write Effective Research Forms for AI-Powered RFPs
              </h1>
            </header>

            {/* Content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                The quality of your RFP starts with how well you complete your
                research form. Providing the right context and level of detail
                allows AI to generate precise, comprehensive RFPs that attract
                the right vendors.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                When creating an RFP with Paperfly, the research form is your
                foundation. Every response helps the AI understand your project
                and translate it into a tailored procurement document. The more
                thoughtful your input, the stronger the final RFP.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                This guide walks through each question in the research form,
                explaining what Paperfly looks for and how to answer in a way
                that leads to better vendor outcomes.
              </p>

              <hr className="my-12 border-border" />

              {/* Understanding the Structure */}
              <h2 className="text-2xl font-bold tracking-tight mb-4">
                Understanding the Research Form Structure
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                The research form consists of 10 carefully designed questions
                that cover every critical aspect of your project. Each question
                plays a specific role in building a complete and accurate RFP.
              </p>

              <div className="pl-4 border-l-2 border-primary mt-6">
                <p className="text-sm font-medium text-primary mb-1">
                  Key Principle
                </p>
                <p className="text-muted-foreground">
                  Be specific, be thorough, and think from a vendor&apos;s
                  perspective. The more context you provide, the easier it is
                  for vendors to understand your needs and submit relevant
                  proposals.
                </p>
              </div>

              <hr className="my-12 border-border" />

              {/* Question 1 */}
              <div className="space-y-4">
                <div className="text-sm font-medium text-primary">
                  Question 1
                </div>
                <h3 className="text-xl font-semibold">
                  Project Context, Goals, and Initiation
                </h3>

                <div className="bg-muted/50 rounded-lg p-4 mt-4">
                  <p className="text-sm font-medium text-foreground mb-1">
                    Prompt
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Briefly explain the project&apos;s context, goals, and why
                    it is being initiated.
                  </p>
                </div>

                <div className="mt-4">
                  <p className="text-sm font-medium text-foreground mb-2">
                    What We&apos;re Looking For
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    This question establishes the foundation of the entire RFP.
                    It explains the bigger picture behind the project.
                  </p>
                </div>

                <div className="mt-4">
                  <p className="text-sm font-medium text-foreground mb-2">
                    How to Answer Effectively
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-muted-foreground">
                        Business context and current situation
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-muted-foreground">
                        Strategic goals and alignment with broader objectives
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-muted-foreground">
                        Timing and urgency
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-muted-foreground">
                        Key stakeholders impacted
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="pl-4 border-l-2 border-muted-foreground/30 mt-4">
                  <p className="text-sm font-medium text-muted-foreground mb-1">
                    Example Response
                  </p>
                  <p className="text-muted-foreground text-sm">
                    A detailed organizational context explaining growth,
                    constraints, strategic goals, and why the project is
                    necessary now.
                  </p>
                </div>
              </div>

              <hr className="my-12 border-border" />

              {/* Question 2 */}
              <div className="space-y-4">
                <div className="text-sm font-medium text-primary">
                  Question 2
                </div>
                <h3 className="text-xl font-semibold">
                  Problem or Opportunity
                </h3>

                <div className="bg-muted/50 rounded-lg p-4 mt-4">
                  <p className="text-sm font-medium text-foreground mb-1">
                    Prompt
                  </p>
                  <p className="text-muted-foreground text-sm">
                    What problem does this project solve or opportunity does it
                    address?
                  </p>
                </div>

                <div className="mt-4">
                  <p className="text-sm font-medium text-foreground mb-2">
                    What We&apos;re Looking For
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Clear articulation of pain points or opportunities helps
                    vendors tailor solutions accurately.
                  </p>
                </div>

                <div className="mt-4">
                  <p className="text-sm font-medium text-foreground mb-2">
                    How to Answer Effectively
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-muted-foreground">
                        Specific pain points with measurable impact
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-muted-foreground">
                        Root causes of current issues
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-muted-foreground">
                        Opportunity scope and benefits
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-muted-foreground">
                        Operational or financial impact
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <hr className="my-12 border-border" />

              {/* Question 3 */}
              <div className="space-y-4">
                <div className="text-sm font-medium text-primary">
                  Question 3
                </div>
                <h3 className="text-xl font-semibold">
                  Deliverables and Success Metrics
                </h3>

                <div className="bg-muted/50 rounded-lg p-4 mt-4">
                  <p className="text-sm font-medium text-foreground mb-1">
                    Prompt
                  </p>
                  <p className="text-muted-foreground text-sm">
                    What are the main deliverables, and how will you measure the
                    project&apos;s success?
                  </p>
                </div>

                <div className="mt-4">
                  <p className="text-sm font-medium text-foreground mb-2">
                    What We&apos;re Looking For
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Clear expectations of what &quot;done&quot; looks like.
                  </p>
                </div>

                <div className="mt-4">
                  <p className="text-sm font-medium text-foreground mb-2">
                    How to Answer Effectively
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-muted-foreground">
                        Tangible deliverables
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-muted-foreground">
                        Quantitative success metrics
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-muted-foreground">
                        Qualitative improvements
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-muted-foreground">
                        Timeline milestones
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <hr className="my-12 border-border" />

              {/* Question 4 */}
              <div className="space-y-4">
                <div className="text-sm font-medium text-primary">
                  Question 4
                </div>
                <h3 className="text-xl font-semibold">
                  Critical Tools, Technologies, and Materials
                </h3>

                <div className="bg-muted/50 rounded-lg p-4 mt-4">
                  <p className="text-sm font-medium text-foreground mb-1">
                    Prompt
                  </p>
                  <p className="text-muted-foreground text-sm">
                    List any critical tools, technologies, or materials
                    required.
                  </p>
                </div>

                <div className="mt-4">
                  <p className="text-sm font-medium text-foreground mb-2">
                    What We&apos;re Looking For
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Technical constraints and compatibility requirements.
                  </p>
                </div>

                <div className="mt-4">
                  <p className="text-sm font-medium text-foreground mb-2">
                    How to Answer Effectively
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-muted-foreground">
                        Existing systems and integrations
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-muted-foreground">
                        Required tech stack
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-muted-foreground">
                        Hardware or infrastructure needs
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-muted-foreground">
                        Licensing constraints
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-muted-foreground">
                        Industry standards
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <hr className="my-12 border-border" />

              {/* Question 5 */}
              <div className="space-y-4">
                <div className="text-sm font-medium text-primary">
                  Question 5
                </div>
                <h3 className="text-xl font-semibold">
                  Timeline and Flexibility
                </h3>

                <div className="bg-muted/50 rounded-lg p-4 mt-4">
                  <p className="text-sm font-medium text-foreground mb-1">
                    Prompt
                  </p>
                  <p className="text-muted-foreground text-sm">
                    When should the project start and finish? Is the timeline
                    flexible?
                  </p>
                </div>

                <div className="mt-4">
                  <p className="text-sm font-medium text-foreground mb-2">
                    What We&apos;re Looking For
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Realistic timing expectations and constraints.
                  </p>
                </div>

                <div className="mt-4">
                  <p className="text-sm font-medium text-foreground mb-2">
                    How to Answer Effectively
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-muted-foreground">
                        Ideal start date
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-muted-foreground">
                        Target completion date
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-muted-foreground">
                        Critical milestones
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-muted-foreground">
                        Flexibility range
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-muted-foreground">
                        Business or regulatory constraints
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <hr className="my-12 border-border" />

              {/* Question 6 */}
              <div className="space-y-4">
                <div className="text-sm font-medium text-primary">
                  Question 6
                </div>
                <h3 className="text-xl font-semibold">
                  Budget Range and Allocation
                </h3>

                <div className="bg-muted/50 rounded-lg p-4 mt-4">
                  <p className="text-sm font-medium text-foreground mb-1">
                    Prompt
                  </p>
                  <p className="text-muted-foreground text-sm">
                    What is the overall budget range, and which areas should
                    receive the most funding?
                  </p>
                </div>

                <div className="mt-4">
                  <p className="text-sm font-medium text-foreground mb-2">
                    What We&apos;re Looking For
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Budget clarity and investment priorities.
                  </p>
                </div>

                <div className="mt-4">
                  <p className="text-sm font-medium text-foreground mb-2">
                    How to Answer Effectively
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-muted-foreground">
                        Total budget range
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-muted-foreground">
                        Budget breakdown by category
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-muted-foreground">
                        Priority areas
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-muted-foreground">
                        Ongoing costs
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-muted-foreground">
                        Flexibility for exceptional value
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <hr className="my-12 border-border" />

              {/* Question 7 */}
              <div className="space-y-4">
                <div className="text-sm font-medium text-primary">
                  Question 7
                </div>
                <h3 className="text-xl font-semibold">
                  Vendor Expertise and Evaluation
                </h3>

                <div className="bg-muted/50 rounded-lg p-4 mt-4">
                  <p className="text-sm font-medium text-foreground mb-1">
                    Prompt
                  </p>
                  <p className="text-muted-foreground text-sm">
                    What expertise or certifications must vendors have? How will
                    you evaluate them?
                  </p>
                </div>

                <div className="mt-4">
                  <p className="text-sm font-medium text-foreground mb-2">
                    What We&apos;re Looking For
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Baseline qualifications and evaluation logic.
                  </p>
                </div>

                <div className="mt-4">
                  <p className="text-sm font-medium text-foreground mb-2">
                    How to Answer Effectively
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-muted-foreground">
                        Required certifications
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-muted-foreground">
                        Experience requirements
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-muted-foreground">
                        Industry expertise
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-muted-foreground">
                        Evaluation criteria and weighting
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-muted-foreground">
                        References or case studies
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <hr className="my-12 border-border" />

              {/* Question 8 */}
              <div className="space-y-4">
                <div className="text-sm font-medium text-primary">
                  Question 8
                </div>
                <h3 className="text-xl font-semibold">
                  Regulations, Certifications, and Protocols
                </h3>

                <div className="bg-muted/50 rounded-lg p-4 mt-4">
                  <p className="text-sm font-medium text-foreground mb-1">
                    Prompt
                  </p>
                  <p className="text-muted-foreground text-sm">
                    What regulations, certifications, or safety protocols must
                    the solution meet?
                  </p>
                </div>

                <div className="mt-4">
                  <p className="text-sm font-medium text-foreground mb-2">
                    What We&apos;re Looking For
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Non-negotiable compliance requirements.
                  </p>
                </div>

                <div className="mt-4">
                  <p className="text-sm font-medium text-foreground mb-2">
                    How to Answer Effectively
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-muted-foreground">
                        Applicable regulations
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-muted-foreground">
                        Industry standards
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-muted-foreground">
                        Required certifications
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-muted-foreground">
                        Audit expectations
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-muted-foreground">
                        Data security and privacy rules
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <hr className="my-12 border-border" />

              {/* Question 9 */}
              <div className="space-y-4">
                <div className="text-sm font-medium text-primary">
                  Question 9
                </div>
                <h3 className="text-xl font-semibold">
                  Known Risks and Challenges
                </h3>

                <div className="bg-muted/50 rounded-lg p-4 mt-4">
                  <p className="text-sm font-medium text-foreground mb-1">
                    Prompt
                  </p>
                  <p className="text-muted-foreground text-sm">
                    What are the known risks or challenges associated with this
                    project?
                  </p>
                </div>

                <div className="mt-4">
                  <p className="text-sm font-medium text-foreground mb-2">
                    What We&apos;re Looking For
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Transparency around potential issues and mitigation
                    expectations.
                  </p>
                </div>

                <div className="mt-4">
                  <p className="text-sm font-medium text-foreground mb-2">
                    How to Answer Effectively
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-muted-foreground">
                        Technical risks
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-muted-foreground">
                        Organizational challenges
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-muted-foreground">
                        External dependencies
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-muted-foreground">
                        Lessons from past projects
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-muted-foreground">
                        Risk mitigation expectations
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <hr className="my-12 border-border" />

              {/* Question 10 */}
              <div className="space-y-4">
                <div className="text-sm font-medium text-primary">
                  Question 10
                </div>
                <h3 className="text-xl font-semibold">
                  Additional Information for Vendors
                </h3>

                <div className="bg-muted/50 rounded-lg p-4 mt-4">
                  <p className="text-sm font-medium text-foreground mb-1">
                    Prompt
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Is there anything else vendors should know to prepare their
                    proposal?
                  </p>
                </div>

                <div className="mt-4">
                  <p className="text-sm font-medium text-foreground mb-2">
                    What We&apos;re Looking For
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Context that does not fit elsewhere but influences vendor
                    fit.
                  </p>
                </div>

                <div className="mt-4">
                  <p className="text-sm font-medium text-foreground mb-2">
                    How to Answer Effectively
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-muted-foreground">
                        Organizational culture
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-muted-foreground">
                        Decision process
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-muted-foreground">
                        Long-term roadmap
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-muted-foreground">
                        Unique constraints
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-muted-foreground">
                        Preferred methodologies
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <hr className="my-12 border-border" />

              {/* Best Practices */}
              <h2 className="text-2xl font-bold tracking-tight mb-6">
                Best Practices for Research Form Success
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Be Specific and Quantitative
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Replace vague goals with concrete metrics. Specificity
                    improves AI accuracy and vendor alignment.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Think Like a Vendor
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Provide the information needed to estimate cost, feasibility,
                    and scope accurately.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Be Honest About Constraints
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Transparency leads to more realistic proposals and fewer
                    surprises during delivery.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Prioritize Requirements
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Clearly distinguish required, preferred, and optional
                    elements.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Review Before Submitting
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Read responses from a vendor&apos;s perspective to catch gaps
                    or inconsistencies.
                  </p>
                </div>
              </div>

              <hr className="my-12 border-border" />

              {/* Common Mistakes */}
              <h2 className="text-2xl font-bold tracking-tight mb-6">
                Common Mistakes to Avoid
              </h2>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span className="text-muted-foreground">Being too brief</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span className="text-muted-foreground">
                    Using unexplained jargon
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span className="text-muted-foreground">
                    Providing contradictory information
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span className="text-muted-foreground">
                    Omitting critical constraints
                  </span>
                </li>
              </ul>

              <hr className="my-12 border-border" />

              {/* How AI Uses Responses */}
              <h2 className="text-2xl font-bold tracking-tight mb-6">
                How AI Uses Your Responses
              </h2>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span className="text-muted-foreground">
                    Builds a comprehensive project context
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span className="text-muted-foreground">
                    Extracts functional and technical requirements
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span className="text-muted-foreground">
                    Generates evaluation frameworks
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span className="text-muted-foreground">
                    Incorporates risk mitigation strategies
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span className="text-muted-foreground">
                    Maps compliance requirements automatically
                  </span>
                </li>
              </ul>

              <p className="text-muted-foreground leading-relaxed mt-6">
                The more detailed your responses, the more accurate and
                effective your AI-generated RFP will be.
              </p>

              <hr className="my-12 border-border" />

              {/* Conclusion */}
              <h2 className="text-2xl font-bold tracking-tight mb-4">
                Conclusion
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                Writing an effective research form is both an art and a science.
                The time invested here directly impacts the quality of your RFP
                and the proposals you receive.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Your research form sets the foundation for your entire
                procurement process. Clear inputs lead to clear RFPs, stronger
                vendor responses, and better project outcomes.
              </p>

              <p className="font-medium text-foreground leading-relaxed pt-2">
                By following these best practices, you enable Paperfly&apos;s AI
                to generate RFPs that truly reflect your needs and help you find
                the right vendor partner.
              </p>

              <hr className="my-12 border-border" />

              {/* CTA */}
              <div className="text-center py-8">
                <h2 className="text-2xl font-bold tracking-tight mb-3">
                  Ready to Create Your First AI-Powered RFP?
                </h2>
                <p className="text-muted-foreground mb-6">
                  Put these best practices to work with Paperfly.
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
