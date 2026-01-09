import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Paperfly | Fixing Procurement One RFP at a Time",
  description:
    "Learn about Paperfly's mission to transform procurement. We build AI-powered tools that turn messy inputs into structured RFPs, with automatic scoring and comparable vendor responses.",
  openGraph: {
    title: "About Us - Paperfly",
    description:
      "We're fixing procurement, one RFP at a time. Learn how Paperfly helps teams create better RFPs and make smarter vendor decisions.",
    type: "website",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
