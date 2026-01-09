import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Paperfly",
  description:
    "Insights on procurement, RFP automation, and building better vendor relationships. Learn how to streamline your procurement process.",
  openGraph: {
    title: "Blog | Paperfly",
    description:
      "Insights on procurement, RFP automation, and building better vendor relationships.",
    type: "website",
  },
};

// Blog post data - in a real app this would come from a CMS or MDX files
const posts = [
  {
    slug: "how-to-overcome-government-rfp-challenges",
    title: "How to Overcome the Biggest Challenges in Government RFP Creation",
    excerpt:
      "Government procurement plays a critical role in delivering effective public services. Learn how to overcome the biggest challenges in government RFP creation with modern tools.",
    date: "2025-08-01",
    readTime: "6 min read",
    category: "Government",
  },
  {
    slug: "simplifying-healthcare-rfps",
    title:
      "Simplifying Healthcare RFPs: Overcoming Complexity and Ensuring Compliance",
    excerpt:
      "Healthcare procurement carries some of the most complex requirements of any industry. Learn how to overcome complexity and ensure HIPAA compliance in your healthcare RFPs.",
    date: "2025-07-01",
    readTime: "7 min read",
    category: "Healthcare",
  },
  {
    slug: "why-rfp-creation-is-still-broken-in-2025",
    title: "Why RFP Creation Is Still Broken in 2025",
    excerpt:
      "Despite major technological advances in procurement, RFP creation remains one of the most painful, manual, and inefficient parts of vendor selection. Learn how to fix it.",
    date: "2025-06-01",
    readTime: "8 min read",
    category: "Guides",
  },
  {
    slug: "how-to-write-effective-research-forms",
    title: "How to Write Effective Research Forms for AI-Powered RFPs",
    excerpt:
      "The quality of your RFP starts with how well you complete your research form. Learn how to provide the right context and detail for AI to generate precise, comprehensive RFPs.",
    date: "2025-01-01",
    readTime: "8 min read",
    category: "Best Practices",
  },
];

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24 border-b border-border">
        <div className="container">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Blog
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Insights on procurement, RFP automation, and building better
              vendor relationships.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 md:gap-16">
            {posts.map((post, index) => (
              <article
                key={post.slug}
                className={`group ${index !== posts.length - 1 ? "pb-12 md:pb-16 border-b border-border" : ""}`}
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="grid md:grid-cols-12 gap-4 md:gap-8">
                    {/* Meta column */}
                    <div className="md:col-span-3">
                      <div className="flex md:flex-col gap-3 md:gap-2 text-sm text-muted-foreground">
                        <time dateTime={post.date}>
                          {formatDate(post.date)}
                        </time>
                        <span className="md:hidden">·</span>
                        <span>{post.readTime}</span>
                      </div>
                      <span className="hidden md:inline-block mt-3 text-xs font-medium text-primary">
                        {post.category}
                      </span>
                    </div>

                    {/* Content column */}
                    <div className="md:col-span-9">
                      <span className="md:hidden inline-block mb-3 text-xs font-medium text-primary">
                        {post.category}
                      </span>
                      <h2 className="text-xl md:text-2xl font-semibold tracking-tight mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {post.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        Read more
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
