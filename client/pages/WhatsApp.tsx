import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/sections/common/Section";
import FeatureGrid from "@/components/sections/common/FeatureGrid";
import FAQ from "@/components/sections/common/FAQ";
import CTASection from "@/components/sections/common/CTASection";
import CheckList from "@/components/sections/common/CheckList";
import IntegrationLogos from "@/components/sections/common/IntegrationLogos";
import SmallTestimonial from "@/components/sections/common/SmallTestimonial";
import {
  MessageCircle,
  Image,
  LayoutTemplate,
  ShieldCheck,
  GitBranch,
  PhoneCall,
  Code,
} from "lucide-react";

export default function WhatsApp() {
  return (
    <div className="relative">
      <PageHeader
        title="WhatsApp"
        subtitle="Verified API with smart routing, templates, and rich media support."
      />

      <Section title="Build conversational journeys">
        <FeatureGrid
          items={[
            {
              title: "Verified API",
              desc: "Official Business API with high deliverability.",
              icon: <ShieldCheck className="h-5 w-5" />,
            },
            {
              title: "Template manager",
              desc: "Localize, version, and approve templates.",
              icon: <LayoutTemplate className="h-5 w-5" />,
            },
            {
              title: "Rich media",
              desc: "Send images, video, documents, and interactive elements.",
              icon: <Image className="h-5 w-5" />,
            },
            {
              title: "Flows",
              desc: "Drag‑and‑drop journeys with conditions and actions.",
              icon: <GitBranch className="h-5 w-5" />,
            },
            {
              title: "Two‑way messaging",
              desc: "Capture replies and escalate to human support.",
              icon: <MessageCircle className="h-5 w-5" />,
            },
            {
              title: "Failover to SMS",
              desc: "Fallback routes when WhatsApp is unavailable.",
              icon: <PhoneCall className="h-5 w-5" />,
            },
          ]}
        />
      </Section>

      <Section title="Use cases">
        <CheckList
          items={[
            "Order updates and support",
            "Account alerts and authentication",
            "Customer care and re‑engagement",
            "Proactive notifications",
          ]}
        />
      </Section>

      <Section title="Integrations">
        <IntegrationLogos items={["Meta", "Twilio", "360Dialog", "Vonage"]} />
      </Section>

      <Section title="Implementation">
        <div className="glass rounded-xl p-5">
          <div className="flex items-center gap-2">
            <Code className="h-4 w-4" />{" "}
            <div className="font-medium">Template send (curl)</div>
          </div>
          <pre className="mt-2 text-xs bg-black/50 text-white rounded-md p-4 overflow-auto">
            <code>{`curl -X POST https://api.chatriox.example/v1/whatsapp.send \
 -H "Authorization: Bearer $KEY" \
 -d '{"to":"+12065550123","template":"order_update"}'`}</code>
          </pre>
        </div>
      </Section>

      <Section title="Testimonials">
        <SmallTestimonial
          quote="We moved from SMS to WhatsApp and doubled engagement in two weeks."
          author="Devon C."
          role="CX Lead, Retail"
        />
      </Section>

      <Section title="FAQs">
        <FAQ
          items={[
            {
              q: "Do you register and verify numbers?",
              a: "Yes, we assist with onboarding, verification, and display name approvals.",
            },
            {
              q: "How is pricing calculated?",
              a: "WhatsApp uses conversation‑based pricing; we provide transparent usage reports and alerts.",
            },
            {
              q: "Can I import existing templates?",
              a: "Import via CSV or API and manage versions in one place.",
            },
          ]}
        />
      </Section>

      <CTASection
        title="Launch WhatsApp in days"
        subtitle="Templates, routing, and analytics included."
        primary={{ href: "/contact", label: "Talk to Sales" }}
        secondary={{ href: "/docs", label: "Read Docs" }}
      />
    </div>
  );
}
