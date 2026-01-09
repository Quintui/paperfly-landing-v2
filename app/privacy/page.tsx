"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  COMPANY_NAME,
  COMPANY_EMAIL,
  COMPANY_WEBSITE,
  PRIVACY_POLICY_EFFECTIVE_DATE,
} from "@/lib/constants";

export default function PrivacyPolicy() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1 }
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

        <div className="container relative py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1
              className="text-4xl md:text-5xl font-bold tracking-tight mb-4 animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              Privacy Policy
            </h1>
            <p
              className="text-lg text-muted-foreground animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              Effective Date: {PRIVACY_POLICY_EFFECTIVE_DATE}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl prose prose-lg prose-neutral dark:prose-invert">
            {/* Intro */}
            <section className="scroll-animate mb-12">
              <p className="text-muted-foreground leading-relaxed">
                At {COMPANY_NAME} (accessible at{" "}
                <Link
                  href={COMPANY_WEBSITE}
                  className="text-primary hover:underline"
                >
                  {COMPANY_WEBSITE}
                </Link>
                ), your privacy is important to us. This Privacy Policy explains
                what information we collect, how we use it, and the choices you
                have regarding your personal data. By using our website or
                platform, you agree to the practices described below.
              </p>
            </section>

            {/* 1. Information We Collect */}
            <section className="scroll-animate mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 tracking-tight">
                1. Information We Collect
              </h2>

              <h3 className="text-xl font-semibold text-foreground mb-4">
                Personal Information
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When you interact with {COMPANY_NAME}—by signing up, using our
                tools, or contacting us—we may collect:
              </p>
              <ul className="space-y-2 text-muted-foreground list-none pl-0 mb-6">
                {[
                  "Full name",
                  "Email address",
                  "Phone number",
                  "Company/organization name",
                  "Billing and payment details",
                  "Content or documents you upload or generate",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-4">
                Usage Data
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We automatically collect data about how you access and use our
                platform, including:
              </p>
              <ul className="space-y-2 text-muted-foreground list-none pl-0 mb-6">
                {[
                  "IP address",
                  "Browser type and version",
                  "Pages visited",
                  "Time spent on pages",
                  "Referral URLs",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-4">
                Cookies & Tracking Technologies
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We use cookies and similar tools to enhance your experience,
                understand user behavior, and improve our services. You can
                manage cookie preferences through your browser settings.
              </p>
            </section>

            {/* 2. How We Use Your Information */}
            <section className="scroll-animate mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 tracking-tight">
                2. How We Use Your Information
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="space-y-2 text-muted-foreground list-none pl-0">
                {[
                  `Provide and operate the ${COMPANY_NAME} platform`,
                  "Process transactions and manage user accounts",
                  "Respond to customer support requests",
                  "Improve our tools and user experience through analytics",
                  "Send relevant updates, product information, and marketing communications (you can opt out anytime)",
                  "Meet legal obligations and enforce terms of use",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 3. Sharing Your Information */}
            <section className="scroll-animate mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 tracking-tight">
                3. Sharing Your Information
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">
                  We do not sell your data.
                </strong>{" "}
                We may share information with trusted third parties who help us
                operate {COMPANY_NAME}, such as:
              </p>
              <ul className="space-y-2 text-muted-foreground list-none pl-0 mb-4">
                {[
                  "Payment processors",
                  "Hosting providers",
                  "Analytics tools",
                  "Legal or regulatory authorities (when required by law)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                All third-party providers are contractually obligated to protect
                your information.
              </p>
            </section>

            {/* 4. Data Retention */}
            <section className="scroll-animate mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 tracking-tight">
                4. Data Retention
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain personal data only as long as needed for business
                purposes, legal compliance, or to fulfill any ongoing
                service-related functions. You can request data deletion at any
                time by contacting us.
              </p>
            </section>

            {/* 5. Data Security */}
            <section className="scroll-animate mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 tracking-tight">
                5. Data Security
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We apply industry-standard safeguards—encryption, access
                controls, secure servers—to protect your information. However,
                no system is completely immune to risk. We recommend taking
                precautions to keep your credentials and data secure.
              </p>
            </section>

            {/* 6. Your Rights */}
            <section className="scroll-animate mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 tracking-tight">
                6. Your Rights
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Depending on your location, you may have the right to:
              </p>
              <ul className="space-y-2 text-muted-foreground list-none pl-0 mb-4">
                {[
                  "Access or receive a copy of your personal data",
                  "Request correction of inaccurate data",
                  "Request deletion of your information",
                  "Withdraw consent for marketing communications",
                  "Object to or restrict certain data uses",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                To make a data request, email us at{" "}
                <Link
                  href={`mailto:${COMPANY_EMAIL}`}
                  className="text-primary hover:underline"
                >
                  {COMPANY_EMAIL}
                </Link>
                .
              </p>
            </section>

            {/* 7. International Users */}
            <section className="scroll-animate mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 tracking-tight">
                7. International Users
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                If you access {COMPANY_NAME} from outside our country of
                operation, note that your information may be processed and
                stored in countries with different data protection laws.
              </p>
            </section>

            {/* 8. Third-Party Websites */}
            <section className="scroll-animate mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 tracking-tight">
                8. Third-Party Websites
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our platform may include links to third-party websites. We are
                not responsible for the content or privacy practices of those
                sites.
              </p>
            </section>

            {/* 9. Policy Updates */}
            <section className="scroll-animate mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 tracking-tight">
                9. Policy Updates
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this policy to reflect changes in our practices or
                legal obligations. The &quot;Effective Date&quot; will be
                updated accordingly. We recommend reviewing this page
                periodically.
              </p>
            </section>

            {/* 10. Platform Recommendations Disclaimer */}
            <section className="scroll-animate mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 tracking-tight">
                10. Platform Recommendations Disclaimer
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {COMPANY_NAME} provides AI-powered recommendations and scoring
                based on vendor responses to help streamline your RFP process.
                However, it is important to note that:
              </p>
              <ul className="space-y-2 text-muted-foreground list-none pl-0 mb-4">
                {[
                  "Our platform provides recommendations based on vendor responses and specified criteria",
                  "We strongly advise issuers to personally evaluate vendor candidates for optimal vendor selection",
                  "Final vendor selection decisions should be made based on your organization's specific needs, requirements, and due diligence",
                  "Our recommendations are tools to assist in the decision-making process but should not be the sole basis for vendor selection",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                {COMPANY_NAME} is designed to enhance and streamline your
                procurement process, but ultimate responsibility for vendor
                selection remains with your organization.
              </p>
            </section>

            {/* 11. Contact Us */}
            <section className="scroll-animate">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 tracking-tight">
                11. Contact Us
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For any questions or concerns about this Privacy Policy or your
                data, please reach out to us at:
              </p>
              <div className="bg-muted/50 rounded-lg p-6 border border-border">
                <p className="font-semibold text-foreground mb-2">
                  {COMPANY_NAME}
                </p>
                <p className="text-muted-foreground">
                  Email:{" "}
                  <Link
                    href={`mailto:${COMPANY_EMAIL}`}
                    className="text-primary hover:underline"
                  >
                    {COMPANY_EMAIL}
                  </Link>
                </p>
              </div>
            </section>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
