import { Boxes, Webhook, Zap, Database, Link2, Shield } from "lucide-react";

const integrations = [
  { icon: Boxes, title: "Salesforce", desc: "Sync audiences, events and opportunities bi-directionally." },
  { icon: Database, title: "Segment", desc: "Ingest traits & events to power personalization." },
  { icon: Webhook, title: "Webhooks", desc: "Reliable, signed webhooks with retries and DLQs." },
  { icon: Zap, title: "Zapier", desc: "Automate workflows across 8k+ apps without code." },
  { icon: Link2, title: "Custom APIs", desc: "Typed SDKs and OpenAPI spec for any stack." },
  { icon: Shield, title: "SSO/SAML", desc: "Enterprise authentication and SCIM provisioning." },
];

export default function Integrations() {
  return (
    <section className="container py-24" id="integrations">
      <h2 className="font-display text-3xl md:text-4xl">Integrations & Automation</h2>
      <p className="mt-2 text-foreground/70 max-w-2xl">Plug Chatriox into your existing data stack. Stream events in real time, trigger journeys, and keep systems in sync.</p>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {integrations.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-2xl glass p-6 hover:shadow-glow transition">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center">
                <Icon className="size-5 text-white" />
              </div>
              <div className="font-medium">{title}</div>
            </div>
            <p className="mt-2 text-sm text-foreground/70">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
