import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/sections/common/Section";
import FeatureGrid from "@/components/sections/common/FeatureGrid";
import CTASection from "@/components/sections/common/CTASection";
import CheckList from "@/components/sections/common/CheckList";
import IntegrationLogos from "@/components/sections/common/IntegrationLogos";
import FAQ from "@/components/sections/common/FAQ";
import Stats from "@/components/sections/common/Stats";
import {
  HeartPulse,
  Stethoscope,
  ShieldCheck,
  ClipboardCheck,
  BellRing,
  Users,
} from "lucide-react";

export default function Healthcare() {
  return (
    <div className="relative">
      <PageHeader
        title="Healthcare"
        subtitle="HIPAA-ready messaging with consent and preference management."
      />

      <Section title="Patient‑centric communications">
        <FeatureGrid
          items={[
            {
              title: "BAA + HIPAA",
              desc: "Business Associate Agreements and safeguards.",
              icon: <ShieldCheck className="h-5 w-5" />,
            },
            {
              title: "Appointments",
              desc: "Reminders, reschedules, and follow‑ups.",
              icon: <Stethoscope className="h-5 w-5" />,
            },
            {
              title: "Results",
              desc: "Secure notifications for labs and imaging.",
              icon: <HeartPulse className="h-5 w-5" />,
            },
            {
              title: "Consent",
              desc: "Granular preferences and audit trails.",
              icon: <ClipboardCheck className="h-5 w-5" />,
            },
            {
              title: "Care teams",
              desc: "Coordinate across roles and facilities.",
              icon: <Users className="h-5 w-5" />,
            },
            {
              title: "Alerts",
              desc: "Critical results and escalations.",
              icon: <BellRing className="h-5 w-5" />,
            },
          ]}
        />
      </Section>

      <Section title="Compliance">
        <CheckList
          items={[
            "BAA with partners",
            "HIPAA safeguards",
            "Access reviews",
            "Encryption and logging",
          ]}
        />
      </Section>

      <Section title="Integrations">
        <IntegrationLogos
          items={["Epic", "Cerner", "Twilio", "Azure", "Okta"]}
        />
      </Section>

      <Section
        title="Why Chatriox for Healthcare"
        subtitle="Serve clinicians and patients securely and efficiently."
      >
        <CheckList
          items={[
            "HIPAA‑aligned workflows with BAAs",
            "Consent and preference management by channel",
            "Secure delivery of results and protected health info",
            "Automated reminders and follow‑ups to reduce no‑shows",
            "Role‑based access and audit for clinical teams",
          ]}
        />
      </Section>

      <Section title="Outcomes">
        <Stats
          items={[
            { label: "No‑show rate", value: "-28%" },
            { label: "Care team efficiency", value: "+32%" },
            { label: "Patient satisfaction", value: "+18%" },
            { label: "Time to notify", value: "-55%" },
          ]}
        />
      </Section>

      <Section title="FAQs">
        <FAQ
          items={[
            {
              q: "Is Chatriox HIPAA‑ready?",
              a: "Yes, HIPAA controls and BAAs available.",
            },
            {
              q: "Can patients manage preferences?",
              a: "Granular consent and audit trails are supported.",
            },
            {
              q: "Do you support EHRs?",
              a: "Integrations for major EHRs are available.",
            },
          ]}
        />
      </Section>

      <CTASection
        title="Improve patient outcomes"
        subtitle="Reliable, compliant messaging for care teams."
        primary={{ href: "/contact", label: "Talk to Sales" }}
        secondary={{ href: "/docs", label: "Implementation Guide" }}
      />
    </div>
  );
}
