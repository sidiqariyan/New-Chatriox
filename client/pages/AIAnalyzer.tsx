import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/sections/common/Section";
import FeatureGrid from "@/components/sections/common/FeatureGrid";
import FAQ from "@/components/sections/common/FAQ";
import CTASection from "@/components/sections/common/CTASection";
import IntegrationLogos from "@/components/sections/common/IntegrationLogos";
import SmallTestimonial from "@/components/sections/common/SmallTestimonial";
import {
  Brain,
  Sparkles,
  Timer,
  BarChart3,
  BellRing,
  FlaskConical,
  Code,
} from "lucide-react";

export default function AIAnalyzer() {
  return (
    <div className="relative">
      <PageHeader
        title="AI Analyzer"
        subtitle="Predict performance, generate insights, and optimize campaigns automatically."
      />

      <Section title="Optimization, not just insights">
        <FeatureGrid
          items={[
            {
              title: "Predictive scoring",
              desc: "Estimate open and click probability before launch.",
              icon: <Brain className="h-5 w-5" />,
            },
            {
              title: "Copy suggestions",
              desc: "Subject lines and CTAs tuned to your audience.",
              icon: <Sparkles className="h-5 w-5" />,
            },
            {
              title: "Send‑time optimization",
              desc: "Deliver at the best time for each recipient.",
              icon: <Timer className="h-5 w-5" />,
            },
            {
              title: "Experimentation",
              desc: "Multi‑armed bandits pick winning variants automatically.",
              icon: <FlaskConical className="h-5 w-5" />,
            },
            {
              title: "Anomaly alerts",
              desc: "Detect drops in engagement or deliverability in real time.",
              icon: <BellRing className="h-5 w-5" />,
            },
            {
              title: "Attribution",
              desc: "Tie impact to revenue with UTMs and post‑purchase signals.",
              icon: <BarChart3 className="h-5 w-5" />,
            },
          ]}
        />
      </Section>

      <Section title="Data sources">
        <IntegrationLogos
          items={["Snowflake", "BigQuery", "Segment", "GA4", "Shopify"]}
        />
      </Section>

      <Section title="Implementation">
        <div className="glass rounded-xl p-5">
          <div className="flex items-center gap-2">
            <Code className="h-4 w-4" />{" "}
            <div className="font-medium">Analyze before send</div>
          </div>
          <pre className="mt-2 text-xs bg-black/50 text-white rounded-md p-4 overflow-auto">
            <code>{`const score = await client.ai.score({ subject, content });
if (score.openRate < 0.2) client.ai.suggestCopy();`}</code>
          </pre>
        </div>
      </Section>

      <Section title="Testimonials">
        <SmallTestimonial
          quote="Subject line suggestions lifted open rates by 14%."
          author="Elena V."
          role="Lifecycle, Ecommerce"
        />
      </Section>

      <Section title="FAQs">
        <FAQ
          items={[
            {
              q: "What data is used for modeling?",
              a: "Only your consented campaign and engagement data; models are tenant‑isolated.",
            },
            {
              q: "Do models learn online?",
              a: "We support periodic retraining and online updates depending on volume.",
            },
            {
              q: "Can we export insights?",
              a: "CSV export and API endpoints are available.",
            },
          ]}
        />
      </Section>

      <CTASection
        title="Let AI boost your KPIs"
        subtitle="Ship better campaigns with predictive optimization."
        primary={{ href: "/signup", label: "Start Free" }}
        secondary={{ href: "/contact", label: "Talk to Sales" }}
      />
    </div>
  );
}
