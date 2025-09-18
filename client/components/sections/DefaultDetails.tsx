import Section from "@/components/sections/common/Section";
import FeatureGrid from "@/components/sections/common/FeatureGrid";
import CheckList from "@/components/sections/common/CheckList";
import IntegrationLogos from "@/components/sections/common/IntegrationLogos";
import FAQ from "@/components/sections/common/FAQ";
import CTASection from "@/components/sections/common/CTASection";
import SmallTestimonial from "@/components/sections/common/SmallTestimonial";
import {
  Rocket,
  ShieldCheck,
  Sparkles,
  BarChart3,
  Headset,
} from "lucide-react";

export default function DefaultDetails() {
  return (
    <>
      <Section
        title="Highlights"
        subtitle="A quick overview of why teams choose Chatriox."
      >
        <FeatureGrid
          items={[
            {
              title: "Fast to implement",
              desc: "SDKs, examples, and guided setup.",
              icon: <Rocket className="h-5 w-5" />,
            },
            {
              title: "Enterprise‑grade",
              desc: "SSO, RBAC, audit logs, residency.",
              icon: <ShieldCheck className="h-5 w-5" />,
            },
            {
              title: "AI‑powered",
              desc: "Optimization, anomaly alerts, insights.",
              icon: <Sparkles className="h-5 w-5" />,
            },
            {
              title: "Measurable impact",
              desc: "Dashboards, exports, and attribution.",
              icon: <BarChart3 className="h-5 w-5" />,
            },
            {
              title: "Global support",
              desc: "Follow‑the‑sun with strict SLAs.",
              icon: <Headset className="h-5 w-5" />,
            },
            {
              title: "Secure by default",
              desc: "Encryption, key mgmt, change control.",
              icon: <ShieldCheck className="h-5 w-5" />,
            },
          ]}
        />
      </Section>

      <Section
        title="Key benefits"
        subtitle="What you can expect when adopting this product."
      >
        <CheckList
          items={[
            "Faster time‑to‑value with guided onboarding",
            "Reliable at scale with resilient architecture",
            "Lower risk via compliance and strong defaults",
            "Clear ROI with analytics and exportable data",
          ]}
        />
      </Section>

      <Section title="Integrations">
        <IntegrationLogos
          items={["AWS", "GCP", "Azure", "Postgres", "Kafka"]}
        />
      </Section>

      <Section title="What customers say">
        <SmallTestimonial
          quote="Rollout took days, not weeks. The team was responsive and the results were immediate."
          author="Operations Lead"
          role="Global SaaS"
        />
      </Section>

      <Section title="FAQs">
        <FAQ
          items={[
            {
              q: "How long does setup take?",
              a: "Most teams launch within a week using our guides and SDKs.",
            },
            {
              q: "Is data export supported?",
              a: "Yes—CSV, APIs, and scheduled exports to your warehouse.",
            },
            {
              q: "Do you offer SLAs?",
              a: "Enterprise plans include 24/7 support and uptime SLAs.",
            },
          ]}
        />
      </Section>

      <CTASection
        title="Ready to take the next step?"
        subtitle="Start free or talk to our team for a tailored walkthrough."
        primary={{ href: "/signup", label: "Start Free" }}
        secondary={{ href: "/contact", label: "Talk to Sales" }}
      />
    </>
  );
}
