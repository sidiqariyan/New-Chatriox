import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/sections/common/Section";
import Stats from "@/components/sections/common/Stats";
import FeatureGrid from "@/components/sections/common/FeatureGrid";
import FAQ from "@/components/sections/common/FAQ";
import CTASection from "@/components/sections/common/CTASection";
import CheckList from "@/components/sections/common/CheckList";
import IntegrationLogos from "@/components/sections/common/IntegrationLogos";
import SmallTestimonial from "@/components/sections/common/SmallTestimonial";
import CalloutCard from "@/components/sections/common/CalloutCard";
import {
  Send,
  Gauge,
  ShieldCheck,
  MailCheck,
  Rocket,
  Globe2,
  BarChart3,
  Zap,
  Inbox,
  Filter,
  Code,
} from "lucide-react";

export default function BulkEmail() {
  return (
    <div className="relative">
      <PageHeader
        title="Bulk Email"
        subtitle="Send campaigns at global scale with AI warmup, smart throttling, and deliverability insights."
      />

      <Section>
        <Stats
          items={[
            { label: "Daily capacity", value: "10M+ emails" },
            { label: "Avg inbox placement", value: "98%" },
            { label: "Bounce reduction", value: "-62%" },
            { label: "Regions", value: "7+" },
          ]}
        />
      </Section>

      <Section
        title="Powerful sending engine"
        subtitle="Throughput, reputation, and targeting—fully automated."
      >
        <FeatureGrid
          items={[
            {
              title: "High-volume sending",
              desc: "Parallelized pipelines with backoff and retry logic.",
              icon: <Send className="h-5 w-5" />,
            },
            {
              title: "AI warmup",
              desc: "Gradually increases volume based on engagement signals.",
              icon: <Rocket className="h-5 w-5" />,
            },
            {
              title: "Smart throttling",
              desc: "ISP-aware rate limits and adaptive ramping.",
              icon: <Gauge className="h-5 w-5" />,
            },
            {
              title: "Segmentation",
              desc: "Target cohorts by behavior, attributes, or lifecycle.",
              icon: <Filter className="h-5 w-5" />,
            },
            {
              title: "A/B testing",
              desc: "Multivariate subject and content experiments.",
              icon: <BarChart3 className="h-5 w-5" />,
            },
            {
              title: "Global routing",
              desc: "Geo-aware sending across regions for latency and compliance.",
              icon: <Globe2 className="h-5 w-5" />,
            },
          ]}
        />
      </Section>

      <Section
        title="Deliverability & compliance"
        subtitle="Protect your sender score and maintain trust."
      >
        <FeatureGrid
          items={[
            {
              title: "SPF/DKIM/DMARC",
              desc: "Automated checks and alerting for authentication.",
              icon: <ShieldCheck className="h-5 w-5" />,
            },
            {
              title: "Feedback loops",
              desc: "Automatic unsubscribe on spam complaints.",
              icon: <Inbox className="h-5 w-5" />,
            },
            {
              title: "Suppression lists",
              desc: "Global, workspace, and campaign-level suppressions.",
              icon: <MailCheck className="h-5 w-5" />,
            },
            {
              title: "Seed testing",
              desc: "Pre-flight inbox tests with heuristics.",
              icon: <Zap className="h-5 w-5" />,
            },
          ]}
        />
      </Section>

      <Section title="Use cases">
        <CheckList
          items={[
            "Newsletters and announcements",
            "Product launches and lifecycle campaigns",
            "Transactional at scale (password resets, receipts)",
            "Regulatory and compliance communications",
          ]}
        />
      </Section>

      <Section title="Integrations">
        <IntegrationLogos
          items={["SendGrid", "SES", "Mailgun", "Postmark", "Gmail", "Outlook"]}
        />
      </Section>

      <Section title="Implementation">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass rounded-xl p-5">
            <div className="flex items-center gap-2">
              <Code className="h-4 w-4" />{" "}
              <div className="font-medium">Node.js</div>
            </div>
            <pre className="mt-2 text-xs bg-black/50 text-white rounded-md p-4 overflow-auto">
              <code>{`import { Client } from 'chatriox';
const client = new Client({ apiKey: process.env.CHATRIOX_KEY! });
await client.email.sendBulk(list, { subject: 'Hello', html: '<h1>Hi</h1>' });`}</code>
            </pre>
          </div>
          <CalloutCard
            title="SLA & Support"
            body="99.99% uptime, 24/7 pager coverage, and proactive deliverability reviews for enterprise plans."
          />
        </div>
      </Section>

      <Section title="Testimonials">
        <SmallTestimonial
          quote="We cut bounces by 60% and scaled to millions of emails per day without issues."
          author="Maya R."
          role="Growth Lead, Fintech"
        />
      </Section>

      <Section title="FAQs">
        <FAQ
          items={[
            {
              q: "How do you handle ISP rate limits?",
              a: "We maintain provider-specific rate profiles and dynamically adjust throughput based on real-time response codes and engagement.",
            },
            {
              q: "Do you support dedicated IPs?",
              a: "Yes. We offer dedicated pools with automated warmup and rotation policies.",
            },
            {
              q: "What data residency options exist?",
              a: "Choose US, EU, or APAC routing to meet compliance requirements.",
            },
          ]}
        />
      </Section>

      <CTASection
        title="Ready to scale your sending?"
        subtitle="Start your 14‑day free trial or book a demo with our deliverability experts."
        primary={{ href: "/signup", label: "Start Free Trial" }}
        secondary={{ href: "/contact", label: "Talk to Sales" }}
      />
    </div>
  );
}
