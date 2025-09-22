import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/sections/common/Section";
import FeatureGrid from "@/components/sections/common/FeatureGrid";
import CTASection from "@/components/sections/common/CTASection";
import IntegrationLogos from "@/components/sections/common/IntegrationLogos";
import FAQ from "@/components/sections/common/FAQ";
import CheckList from "@/components/sections/common/CheckList";
import Stats from "@/components/sections/common/Stats";
import {
  Boxes,
  Webhook,
  Users,
  Calculator,
  ServerCog,
  Layers,
} from "lucide-react";

export default function Saas() {
  return (
    <div className="relative">
      <PageHeader
        title="SaaS"
        subtitle="Usage-based billing, webhooks, and multi-tenant controls for modern SaaS."
      />

      <Section title="Ship faster with built‑ins">
        <FeatureGrid
          items={[
            {
              title: "Multi‑tenancy",
              desc: "Isolate data and configuration per workspace.",
              icon: <Boxes className="h-5 w-5" />,
            },
            {
              title: "Webhooks",
              desc: "Reliable delivery with retries and signatures.",
              icon: <Webhook className="h-5 w-5" />,
            },
            {
              title: "User management",
              desc: "Invites, roles, and org membership.",
              icon: <Users className="h-5 w-5" />,
            },
            {
              title: "Metering",
              desc: "Track usage for billing and limits.",
              icon: <Calculator className="h-5 w-5" />,
            },
            {
              title: "SDKs",
              desc: "Typed client SDKs and backend helpers.",
              icon: <Layers className="h-5 w-5" />,
            },
            {
              title: "Operations",
              desc: "Idempotency, rate limits, and backpressure.",
              icon: <ServerCog className="h-5 w-5" />,
            },
          ]}
        />
      </Section>

      <Section title="Integrations">
        <IntegrationLogos
          items={["Stripe", "AWS", "GCP", "Kafka", "Postgres"]}
        />
      </Section>

      <Section
        title="Why Chatriox for SaaS"
        subtitle="Direct benefits for modern SaaS platforms."
      >
        <CheckList
          items={[
            "Faster feature delivery with built‑in auth, webhooks, and metering",
            "Lower operational toil via retries, idempotency, and backpressure",
            "Multi‑tenant isolation with roles to meet customer requirements",
            "Transparent usage for billing, alerts, and customer trust",
            "Vendor‑neutral architecture that scales from startup to enterprise",
          ]}
        />
      </Section>

      <Section title="Outcomes">
        <Stats
          items={[
            { label: "Time to launch", value: "-60%" },
            { label: "Ops incidents", value: "-45%" },
            { label: "Engagement lift", value: "+22%" },
            { label: "Dev velocity", value: "+35%" },
          ]}
        />
      </Section>

      <Section title="FAQs">
        <FAQ
          items={[
            {
              q: "Do you have SDKs?",
              a: "Yes, for major languages and frameworks.",
            },
            {
              q: "How do you handle multi‑tenancy?",
              a: "Strict workspace isolation with org roles.",
            },
            {
              q: "Can I export data?",
              a: "APIs and scheduled exports available.",
            },
          ]}
        />
      </Section>

      <CTASection
        title="Build your SaaS on Chatriox"
        subtitle="Everything you need to launch and scale."
        primary={{ href: "/docs", label: "Get Started" }}
        secondary={{ href: "/api", label: "API Reference" }}
      />
    </div>
  );
}
