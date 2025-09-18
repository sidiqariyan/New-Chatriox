import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/sections/common/Section";
import FeatureGrid from "@/components/sections/common/FeatureGrid";
import CTASection from "@/components/sections/common/CTASection";
import CheckList from "@/components/sections/common/CheckList";
import IntegrationLogos from "@/components/sections/common/IntegrationLogos";
import FAQ from "@/components/sections/common/FAQ";
import Stats from "@/components/sections/common/Stats";
import {
  Lock,
  FileLock2,
  ShieldCheck,
  Building2,
  Bell,
  KeySquare,
} from "lucide-react";

export default function Financial() {
  return (
    <div className="relative">
      <PageHeader
        title="Financial"
        subtitle="Secure communications for banking, payments, and insurance."
      />

      <Section title="Security and governance">
        <FeatureGrid
          items={[
            {
              title: "Encryption",
              desc: "Data encrypted in transit and at rest.",
              icon: <Lock className="h-5 w-5" />,
            },
            {
              title: "Approvals",
              desc: "Maker‑checker workflows for critical messages.",
              icon: <FileLock2 className="h-5 w-5" />,
            },
            {
              title: "Compliance",
              desc: "PCI, SOC2, ISO—and regional regulations.",
              icon: <ShieldCheck className="h-5 w-5" />,
            },
            {
              title: "Auditability",
              desc: "Immutable logs for regulators and internal audit.",
              icon: <Building2 className="h-5 w-5" />,
            },
            {
              title: "Alerts",
              desc: "Realtime anomaly and threshold notifications.",
              icon: <Bell className="h-5 w-5" />,
            },
            {
              title: "Access control",
              desc: "Granular RBAC and SSO for least privilege.",
              icon: <KeySquare className="h-5 w-5" />,
            },
          ]}
        />
      </Section>

      <Section title="Controls & policies">
        <CheckList
          items={[
            "Segregation of duties",
            "Maker‑checker approvals",
            "Key management and rotation",
            "Data retention policies",
          ]}
        />
      </Section>

      <Section title="Integrations">
        <IntegrationLogos
          items={["KMS", "Vault", "Splunk", "SailPoint", "ServiceNow"]}
        />
      </Section>

      <Section
        title="Why Chatriox for Financial Services"
        subtitle="Controls and outcomes aligned with regulated industries."
      >
        <CheckList
          items={[
            "Approval workflows and segregation of duties",
            "Encryption, KMS integration, and key rotation",
            "Granular access with SSO/SAML and RBAC",
            "Compliant retention and detailed audit trails",
            "Real‑time alerts and anomaly detection to reduce risk",
          ]}
        />
      </Section>

      <Section title="Outcomes">
        <Stats
          items={[
            { label: "Manual reviews", value: "-35%" },
            { label: "Compliance incidents", value: "-40%" },
            { label: "Time to approve", value: "-50%" },
            { label: "Customer trust", value: "+25%" },
          ]}
        />
      </Section>

      <Section title="FAQs">
        <FAQ
          items={[
            { q: "Do you offer BAAs?", a: "Yes, for eligible customers." },
            {
              q: "How are keys managed?",
              a: "Integrated KMS and rotation policies.",
            },
            {
              q: "What audit logs exist?",
              a: "Immutable, exportable logs for all actions.",
            },
          ]}
        />
      </Section>

      <CTASection
        title="Bank‑grade messaging"
        subtitle="Trusted by fintechs and enterprises."
        primary={{ href: "#pricing", label: "Start Free Trial" }}
        secondary={{ href: "/contact", label: "Book a Demo" }}
      />
    </div>
  );
}
