import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/sections/common/Section";
import FeatureGrid from "@/components/sections/common/FeatureGrid";
import CheckList from "@/components/sections/common/CheckList";
import {
  Send,
  MessageCircle,
  ShieldCheck,
  Brain,
  LayoutTemplate,
  Lock,
  BarChart3,
  Zap,
  Workflow,
  Webhook,
  Server,
  FileCheck2,
  Headset,
  Building2,
} from "lucide-react";

export default function Services() {
  return (
    <div className="relative">
      <PageHeader
        title="Services"
        subtitle="Explore all Chatriox tools—capabilities, benefits, and exactly how they fit into your stack."
      />

      <Section title="Messaging & Intelligence">
        <FeatureGrid
          items={[
            {
              title: "Bulk Email",
              desc: "High‑volume sending with AI warmup, throttling, suppression lists, and deliverability analytics.",
              icon: <Send className="h-5 w-5" />,
            },
            {
              title: "WhatsApp",
              desc: "Verified API, templates, rich media, session/marketing flows, and smart failover.",
              icon: <MessageCircle className="h-5 w-5" />,
            },
            {
              title: "Email Validation",
              desc: "Real‑time verification to reduce bounces and protect sender score across the lifecycle.",
              icon: <ShieldCheck className="h-5 w-5" />,
            },
            {
              title: "AI Analyzer",
              desc: "Predictive scoring, copy suggestions, subject‑line testing, and anomaly detection.",
              icon: <Brain className="h-5 w-5" />,
            },
            {
              title: "Template Builder",
              desc: "Enterprise components, brand tokens, versioning, and review/approval workflows.",
              icon: <LayoutTemplate className="h-5 w-5" />,
            },
          ]}
        />
        <div className="mt-6 flex flex-wrap gap-2 text-sm">
          {[
            ["/bulk-email", "Learn more →"],
            ["/whatsapp", "WhatsApp details →"],
            ["/validation", "Validation details →"],
            ["/ai-analyzer", "AI Analyzer details →"],
            ["/templates", "Templates details →"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="glass px-3 py-1.5 rounded-md hover:shadow-glow"
            >
              {label}
            </a>
          ))}
        </div>
      </Section>

      <Section
        title="Deliverability & Compliance"
        subtitle="Maximize inbox placement while staying compliant globally."
      >
        <FeatureGrid
          items={[
            {
              title: "Reputation management",
              desc: "Automatic warmup, dedicated IP pools, and feedback loop processing.",
              icon: <Zap className="h-5 w-5" />,
            },
            {
              title: "Compliance controls",
              desc: "Regional opt‑in rules, double opt‑in, consent logs, and granular preferences.",
              icon: <FileCheck2 className="h-5 w-5" />,
            },
            {
              title: "Security",
              desc: "SPF/DKIM/DMARC assistance, domain alignment, and secure key management.",
              icon: <Lock className="h-5 w-5" />,
            },
          ]}
        />
      </Section>

      <Section
        title="Automation & Workflows"
        subtitle="Trigger messages based on events and orchestrate journeys."
      >
        <FeatureGrid
          items={[
            {
              title: "Journeys",
              desc: "Visual flows with delays, conditions, A/B tests, and goals.",
              icon: <Workflow className="h-5 w-5" />,
            },
            {
              title: "Webhooks & events",
              desc: "Emit and listen to events, transform payloads, and react in real‑time.",
              icon: <Webhook className="h-5 w-5" />,
            },
            {
              title: "Data sync",
              desc: "Upsert audiences from your warehouse, CRM, or backend jobs.",
              icon: <Server className="h-5 w-5" />,
            },
          ]}
        />
      </Section>

      <Section
        title="Analytics & Reporting"
        subtitle="Unified visibility across channels with exportable metrics."
      >
        <FeatureGrid
          items={[
            {
              title: "Performance dashboards",
              desc: "Opens, clicks, bounces, conversions, and attribution in one view.",
              icon: <BarChart3 className="h-5 w-5" />,
            },
            {
              title: "Cohorts & segments",
              desc: "Slice results by audience, channel, campaign, or country.",
              icon: <LayoutTemplate className="h-5 w-5" />,
            },
            {
              title: "Exports",
              desc: "Scheduled CSV/Parquet exports and BI integrations.",
              icon: <Server className="h-5 w-5" />,
            },
          ]}
        />
      </Section>

      <Section
        title="Integrations"
        subtitle="Connect your stack in minutes with official connectors."
      >
        <CheckList
          items={[
            "Email providers: SES, Mailgun, Postmark, SendGrid",
            "WhatsApp Business API (On‑Prem/Cloud)",
            "CRMs: HubSpot, Salesforce, Pipedrive",
            "Data: Snowflake, BigQuery, Redshift, Postgres",
            "Cloud: AWS, GCP, Azure (KMS/Secrets)",
            "Auth: SSO/SAML, SCIM, RBAC",
          ]}
        />
      </Section>

      <Section
        title="Security & Trust"
        subtitle="Enterprise‑grade security program and transparent certifications."
      >
        <CheckList
          items={[
            "SOC 2 Type II and ISO 27001",
            "SAML SSO, MFA, fine‑grained RBAC",
            "Audit logs and immutable history",
            "PII minimization and data residency",
            "Vulnerability management and pen‑testing",
            "Backups, DR plans, multi‑region failover",
          ]}
        />
      </Section>

      <Section
        title="Support & SLAs"
        subtitle="Get experts on your side—around the clock when you need it."
      >
        <FeatureGrid
          items={[
            {
              title: "24/7 Support",
              desc: "Follow‑the‑sun support with guaranteed response times.",
              icon: <Headset className="h-5 w-5" />,
            },
            {
              title: "Enterprise onboarding",
              desc: "Solution architects help with integration, warmup, and migrations.",
              icon: <Building2 className="h-5 w-5" />,
            },
            {
              title: "Dedicated CSM",
              desc: "Quarterly reviews, optimization plans, and roadmap input.",
              icon: <Brain className="h-5 w-5" />,
            },
          ]}
        />
      </Section>
    </div>
  );
}
