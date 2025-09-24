import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/sections/common/Section";
import FeatureGrid from "@/components/sections/common/FeatureGrid";
import Stats from "@/components/sections/common/Stats";
import CTASection from "@/components/sections/common/CTASection";
import CheckList from "@/components/sections/common/CheckList";
import IntegrationLogos from "@/components/sections/common/IntegrationLogos";
import FAQ from "@/components/sections/common/FAQ";
import {
  ShoppingCart,
  Receipt,
  PackageCheck,
  Percent,
  MailOpen,
  User,
} from "lucide-react";

export default function Ecommerce() {
  return (
    <div className="relative">
      <PageHeader
        title="Ecommerce"
        subtitle="Transactional messaging, abandoned cart recovery, and promotions."
      />

      <Section>
        <Stats
          items={[
            { label: "Recovered carts", value: "+18%" },
            { label: "Repeat purchases", value: "+26%" },
            { label: "CLTV lift", value: "+12%" },
            { label: "Avg ROI", value: "9.3x" },
          ]}
        />
      </Section>

      <Section title="Commerce‑ready features">
        <FeatureGrid
          items={[
            {
              title: "Abandoned cart",
              desc: "Timely nudges with incentives and stock alerts.",
              icon: <ShoppingCart className="h-5 w-5" />,
            },
            {
              title: "Order updates",
              desc: "Purchase, shipping, and delivery notifications.",
              icon: <PackageCheck className="h-5 w-5" />,
            },
            {
              title: "Receipts",
              desc: "Tax‑compliant invoices with line items.",
              icon: <Receipt className="h-5 w-5" />,
            },
            {
              title: "Personalization",
              desc: "Recommendations based on behavior.",
              icon: <User className="h-5 w-5" />,
            },
            {
              title: "Promotions",
              desc: "Targeted offers with audience rules.",
              icon: <Percent className="h-5 w-5" />,
            },
            {
              title: "Engagement analytics",
              desc: "Open, click, and revenue attribution.",
              icon: <MailOpen className="h-5 w-5" />,
            },
          ]}
        />
      </Section>

      <Section title="Use cases">
        <CheckList
          items={[
            "Abandoned cart sequences",
            "Back‑in‑stock alerts",
            "Order and delivery updates",
            "Win‑back campaigns",
          ]}
        />
      </Section>

      <Section
        title="Why Chatriox for Ecommerce"
        subtitle="Revenue impact with minimal engineering effort."
      >
        <CheckList
          items={[
            "Prebuilt flows for cart, browse, and post‑purchase",
            "One‑click integrations with major platforms",
            "Personalization and recommendations out‑of‑the‑box",
            "Analytics tied to orders and revenue",
            "Global deliverability and failover routing",
          ]}
        />
      </Section>

      <Section title="Integrations">
        <IntegrationLogos
          items={["Shopify", "Magento", "BigCommerce", "WooCommerce", "Stripe"]}
        />
      </Section>

      <Section title="FAQs">
        <FAQ
          items={[
            { q: "Do you support Shopify?", a: "Yes, native app and API." },
            {
              q: "Can I track revenue?",
              a: "Attribution ties to orders and LTV.",
            },
            { q: "Do you support SMS?", a: "Yes, as fallback and standalone." },
          ]}
        />
      </Section>

      <CTASection
        title="Grow revenue with messaging"
        subtitle="Transactional + marketing, one platform."
        primary={{ href: "/signup", label: "Start Free" }}
        secondary={{ href: "/contact", label: "See Demo" }}
      />
    </div>
  );
}
