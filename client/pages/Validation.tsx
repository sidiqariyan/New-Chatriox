import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/sections/common/Section";
import FeatureGrid from "@/components/sections/common/FeatureGrid";
import FAQ from "@/components/sections/common/FAQ";
import Stats from "@/components/sections/common/Stats";
import CTASection from "@/components/sections/common/CTASection";
import IntegrationLogos from "@/components/sections/common/IntegrationLogos";
import SmallTestimonial from "@/components/sections/common/SmallTestimonial";
import {
  MailCheck,
  MailWarning,
  Database,
  ShieldAlert,
  ListChecks,
  Cloud,
  Code,
} from "lucide-react";

export default function Validation() {
  return (
    <div className="relative">
      <PageHeader
        title="Email Validation"
        subtitle="Real-time verification at the edge to reduce bounces and protect sender score."
      />

      <Section>
        <Stats
          items={[
            { label: "Avg. bounce reduction", value: "-72%" },
            { label: "Latency (p95)", value: "< 50ms" },
            { label: "Coverage", value: "190+ TLDs" },
            { label: "Uptime", value: "99.99%" },
          ]}
        />
      </Section>

      <Section title="Real-time checks">
        <FeatureGrid
          items={[
            {
              title: "Syntax & MX",
              desc: "RFC, DNS, and mailbox existence checks.",
              icon: <MailCheck className="h-5 w-5" />,
            },
            {
              title: "Disposable detection",
              desc: "Block throwaway domains at the edge.",
              icon: <MailWarning className="h-5 w-5" />,
            },
            {
              title: "Role accounts",
              desc: "Identify admin@ and no‑reply addresses.",
              icon: <ListChecks className="h-5 w-5" />,
            },
            {
              title: "SMTP heuristics",
              desc: "Provider‑specific signals and catch‑all scoring.",
              icon: <ShieldAlert className="h-5 w-5" />,
            },
            {
              title: "Bulk + streaming",
              desc: "Batch lists or stream via API and webhooks.",
              icon: <Database className="h-5 w-5" />,
            },
            {
              title: "Edge network",
              desc: "Verify near users for lower latency.",
              icon: <Cloud className="h-5 w-5" />,
            },
          ]}
        />
      </Section>

      <Section title="Integrations">
        <IntegrationLogos
          items={["HubSpot", "Salesforce", "Segment", "BigQuery", "S3"]}
        />
      </Section>

      <Section title="Implementation">
        <div className="glass rounded-xl p-5">
          <div className="flex items-center gap-2">
            <Code className="h-4 w-4" />{" "}
            <div className="font-medium">Batch CSV (Node.js)</div>
          </div>
          <pre className="mt-2 text-xs bg-black/50 text-white rounded-md p-4 overflow-auto">
            <code>{`const results = await client.validation.bulk({ file: 'emails.csv' });
console.log(results.summary);`}</code>
          </pre>
        </div>
      </Section>

      <Section title="Testimonials">
        <SmallTestimonial
          quote="Bounce rate dropped from 8% to under 2% after enabling validation at signup."
          author="Priya S."
          role="Head of Growth, SaaS"
        />
      </Section>

      <Section title="FAQs">
        <FAQ
          items={[
            {
              q: "Do you store emails?",
              a: "We hash and discard by default; optional retention with encryption for audit needs.",
            },
            {
              q: "How accurate is SMTP verification?",
              a: "Accuracy depends on provider responses; we combine multiple signals to improve confidence.",
            },
            {
              q: "Can I export validated lists?",
              a: "Yes, via dashboard or API in CSV/JSON.",
            },
          ]}
        />
      </Section>

      <CTASection
        title="Improve your list quality"
        subtitle="Add validation to sign‑up, imports, and campaigns."
        primary={{ href: "/docs", label: "Get Started" }}
        secondary={{ href: "/api", label: "View API" }}
      />
    </div>
  );
}
