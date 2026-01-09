"use client";

import { useState } from "react";
import {
  Check,
  Briefcase,
  Scale,
  FileCheck,
  ClipboardList,
  Building2,
  Calculator,
} from "lucide-react";

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

export function RoleBasedSection() {
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
                {activeRole.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 group">
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
