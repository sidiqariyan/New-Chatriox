import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/sections/common/Section";
import CheckList from "@/components/sections/common/CheckList";

export default function HowToUse() {
  return (
    <div className="relative">
      <PageHeader
        title="How To Use"
        subtitle="Step‑by‑step guides and videos for every Chatriox service."
      />

      <Section title="Watch the product demo">
        <div className="aspect-video rounded-xl overflow-hidden glass">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/ysz5S6PUM-U"
            title="Chatriox Product Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </Section>

      <Section
        title="Prerequisites"
        subtitle="A short checklist to make setup smooth."
      >
        <CheckList
          items={[
            "Create a workspace and invite your team",
            "Set up SSO/SAML (optional) and MFA",
            "Add email provider credentials (SES, Mailgun, Postmark, SendGrid)",
            "Verify sending domains and add DNS (SPF, DKIM, DMARC)",
            "Connect WhatsApp Business Account if needed",
            "Prepare audience data or connect your data source",
            "Define naming conventions for templates and campaigns",
            "Enable validation rules for forms and imports",
          ]}
        />
      </Section>

      <Section
        title="Bulk Email — 10‑step guide"
        subtitle="Send high‑volume email reliably with best practices enabled by default."
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <CheckList
              items={[
                "Add and verify your sending domain; set SPF/DKIM/DMARC",
                "Configure IP warmup policy and reputation safeguards",
                "Create suppression lists for hard bounces and complaints",
                "Build a template or import MJML/HTML and set brand tokens",
                "Create a campaign and select your audience segment",
                "Enable pre‑send checks: accessibility, links, and images",
                "Run AI Analyzer to score subject and preview deliverability",
                "Choose send window, throttling, and time‑zone optimization",
                "Launch with idempotency key; monitor events and metrics",
                "Export results or sync to your BI warehouse",
              ]}
            />
          </div>
          <div className="aspect-video rounded-xl overflow-hidden glass">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/ysz5S6PUM-U"
              title="Bulk Email Walkthrough"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </Section>

      <Section
        title="WhatsApp — 10‑step guide"
        subtitle="Use verified templates and session messages for support and marketing."
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <CheckList
              items={[
                "Connect your WhatsApp Business Account and verify",
                "Register phone numbers and enable two‑factor security",
                "Create and submit templates for approval (multi‑language)",
                "Map templates to journeys and add personalization",
                "Set session handling and escalation to human agents",
                "Upload media assets (images, PDFs, video) for rich messages",
                "Configure failover routing and delivery webhooks",
                "Define quiet hours and rate limits per country",
                "Test with a small segment and review analytics",
                "Go live and monitor conversations and CSAT",
              ]}
            />
          </div>
          <div className="aspect-video rounded-xl overflow-hidden glass">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/ysz5S6PUM-U"
              title="WhatsApp Walkthrough"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </Section>

      <Section
        title="Email Validation — 10‑step guide"
        subtitle="Reduce bounces and protect sender reputation at every touchpoint."
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <CheckList
              items={[
                "Enable validation for signup forms and imports",
                "Choose strictness levels (regex, MX, SMTP, disposable)",
                "Configure real‑time edge validation for low latency",
                "Set rules for role accounts, catch‑all, and greylisting",
                "Define quarantine lists and automated rechecks",
                "Wire webhook for invalid addresses to trigger flows",
                "Add retry/backoff for transient SMTP responses",
                "Sync validation status to your CRM or warehouse",
                "Report on bounce reduction and list hygiene",
                "Gate campaign sends by validation status",
              ]}
            />
          </div>
          <div className="aspect-video rounded-xl overflow-hidden glass">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/ysz5S6PUM-U"
              title="Email Validation Walkthrough"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </Section>

      <Section
        title="AI Analyzer — 10‑step guide"
        subtitle="Predict performance and improve copy automatically before you send."
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <CheckList
              items={[
                "Open or create a draft template or message",
                "Run baseline analysis to get a performance score",
                "Review tone, reading level, and spam‑trigger terms",
                "Generate variant suggestions and compare side‑by‑side",
                "Preview across clients and dark/light modes",
                "Create an A/B/C test with auto‑winner selection",
                "Configure guardrails for brand and compliance",
                "Schedule a pre‑send checklist as required",
                "Launch a sample send to seed accounts",
                "Publish the winning version to production",
              ]}
            />
          </div>
          <div className="aspect-video rounded-xl overflow-hidden glass">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/ysz5S6PUM-U"
              title="AI Analyzer Walkthrough"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </Section>

      <Section
        title="Template Builder — 10‑step guide"
        subtitle="Create reusable, brand‑safe templates with version control."
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <CheckList
              items={[
                "Define brand tokens: colors, typography, spacing",
                "Start from a library block or import MJML/HTML",
                "Bind data placeholders and add conditionals",
                "Add accessibility labels and link tracking",
                "Preview on mobile/desktop and dark/light",
                "Request review and collect approvals",
                "Publish with semantic versioning",
                "Lock templates for critical campaigns",
                "Expose safe variables to downstream apps",
                "Track usage and performance by version",
              ]}
            />
          </div>
          <div className="aspect-video rounded-xl overflow-hidden glass">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/ysz5S6PUM-U"
              title="Template Builder Walkthrough"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </Section>

      <Section
        title="Next steps"
        subtitle="Put your setup into practice and keep improving."
      >
        <CheckList
          items={[
            "Create your first journey with an onboarding series",
            "Set up alerts for deliverability and error budgets",
            "Schedule weekly exports to your BI tool",
            "Run quarterly security reviews and access audits",
            "Document runbooks for incidents and warmup",
          ]}
        />
      </Section>
    </div>
  );
}
