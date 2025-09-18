import PageHeader from "@/components/layout/PageHeader";
import Security from "@/components/sections/Security";
import Section from "@/components/sections/common/Section";
import FeatureGrid from "@/components/sections/common/FeatureGrid";
import { ShieldCheck, Key, Lock, FileLock2, Eye, Bug } from "lucide-react";

export default function SecurityPage() {
  return (
    <div className="relative">
      <PageHeader
        title="Security"
        subtitle="Enterprise-grade security, privacy, and compliance."
      />
      <Security />
      <Section title="Controls">
        <FeatureGrid
          items={[
            {
              title: "Encryption",
              desc: "TLS 1.2+ in transit, AES‑256 at rest.",
              icon: <Lock className="h-5 w-5" />,
            },
            {
              title: "SSO + MFA",
              desc: "SAML/OIDC, TOTP, and hardware keys.",
              icon: <Key className="h-5 w-5" />,
            },
            {
              title: "Compliance",
              desc: "SOC2 Type II, ISO 27001, GDPR.",
              icon: <ShieldCheck className="h-5 w-5" />,
            },
            {
              title: "Audit logs",
              desc: "Immutable and exportable.",
              icon: <FileLock2 className="h-5 w-5" />,
            },
            {
              title: "Privacy",
              desc: "Data minimization and access reviews.",
              icon: <Eye className="h-5 w-5" />,
            },
          ]}
        />
      </Section>
      <Section title="FAQs">
        <div className="text-sm text-foreground/70">
          Security questions? Email security@chatriox.example.
        </div>
      </Section>
      <Section title="Pen testing & bug bounty">
        <div className="glass rounded-xl p-5">
          <div className="font-medium flex items-center gap-2">
            <Bug className="h-4 w-4" /> Continuous testing
          </div>
          <p className="text-sm text-foreground/70 mt-1">
            Independent assessments annually and private bounty program with
            rapid triage.
          </p>
        </div>
      </Section>
    </div>
  );
}
