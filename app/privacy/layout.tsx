import type { Metadata } from "next";
import { COMPANY_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Privacy Policy - ${COMPANY_NAME}`,
  description:
    "Learn how Paperfly collects, uses, and protects your personal information. Read our privacy policy for details on data handling, your rights, and how to contact us.",
  openGraph: {
    title: `Privacy Policy - ${COMPANY_NAME}`,
    description:
      "Learn how Paperfly collects, uses, and protects your personal information.",
    type: "website",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
