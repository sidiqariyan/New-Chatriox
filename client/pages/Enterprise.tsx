import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/sections/common/Section";
import FeatureGrid from "@/components/sections/common/FeatureGrid";
import CTASection from "@/components/sections/common/CTASection";
import CheckList from "@/components/sections/common/CheckList";
import IntegrationLogos from "@/components/sections/common/IntegrationLogos";
import FAQ from "@/components/sections/common/FAQ";
import Stats from "@/components/sections/common/Stats";
import {
  ShieldCheck,
  Lock,
  FileLock2,
  KeySquare,
  Globe2,
  ClipboardList,
} from "lucide-react";

export default function Enterprise() {
  return (
    <div className="relative">
      <PageHeader
        title="Enterprise"
        subtitle="Compliance-first global platform with SSO, SCIM, and advanced permissions."
      />

      <Section title="Enterprise controls">
        <FeatureGrid
          items={[
            {
              title: "SSO (SAML/OIDC)",
              desc: "Integrate Okta, Azure AD, Google, and more.",
              icon: <KeySquare className="h-5 w-5" />,
            },
            {
              title: "SCIM provisioning",
              desc: "Automate user and group lifecycle.",
              icon: <ClipboardList className="h-5 w-5" />,
            },
            {
              title: "RBAC",
              desc: "Least‑privilege roles and granular permissions.",
              icon: <Lock className="h-5 w-5" />,
            },
            {
              title: "Audit logs",
              desc: "Immutable logs for every action.",
              icon: <FileLock2 className="h-5 w-5" />,
            },
            {
              title: "Data residency",
              desc: "US, EU, and APAC routing and storage.",
              icon: <Globe2 className="h-5 w-5" />,
            },
            {
              title: "Compliance",
              desc: "SOC2 Type II, ISO 27001, GDPR.",
              icon: <ShieldCheck className="h-5 w-5" />,
            },
          ]}
        />
      </Section>

      <Section title="Compliance & certifications">
        <CheckList
          items={[
            "SOC2 Type II",
            "ISO 27001",
            "GDPR readiness",
            "Data residency controls",
            "Pen testing and SAST",
          ]}
        />
      </Section>

      <Section title="Integrations">
        <IntegrationLogos
          items={["Okta", "Azure AD", "Google", "OneLogin", "SailPoint"]}
        />
      </Section>

      <Section
        title="Why Chatriox for Enterprise"
        subtitle="Built to satisfy security, compliance, and scale requirements."
      >
        <CheckList
          items={[
            "Meets procurement and security reviews with documented controls",
            "Granular RBAC, SSO/SAML, SCIM provisioning for governance",
            "Data residency and encryption with strong key management",
            "Extensive audit logs and reporting for regulators",
            "High availability with SLAs and dedicated support",
          ]}
        />
      </Section>

      <Section title="Outcomes">
        <Stats
          items={[
            { label: "Onboarding time", value: "-50%" },
            { label: "Audit prep effort", value: "-40%" },
            { label: "Uptime", value: "99.99%" },
            { label: "User adoption", value: "+30%" },
          ]}
        />
      </Section>

      <Section title="FAQs">
        <FAQ
          items={[
            {
              q: "Do you sign DPAs?",
              a: "Yes, DPAs and BAAs are available for enterprise.",
            },
            {
              q: "Do you support on‑prem?",
              a: "We offer dedicated regions and VPC peering.",
            },
            {
              q: "What SSO providers?",
              a: "Okta, Azure AD, Google, OneLogin, and more.",
            },
          ]}
        />
      </Section>

      <CTASection
        title="Enterprise deals available"
        subtitle="Custom SLAs, pricing, and security reviews."
        primary={{ href: "#pricing", label: "Start Free Trial" }}
        secondary={{ href: "/contact", label: "Book a Demo" }}
      />
    </div>
  );
}
