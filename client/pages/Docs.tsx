import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/sections/common/Section";
import CTASection from "@/components/sections/common/CTASection";
import CheckList from "@/components/sections/common/CheckList";
import FAQ from "@/components/sections/common/FAQ";

export default function Docs() {
  return (
    <div className="relative">
      <PageHeader
        title="Documentation"
        subtitle="Developer-first guides, SDKs, and API references."
      />

      <Section title="Quickstart">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="glass rounded-xl p-5">
            <h3 className="font-medium mb-2">Install SDK</h3>
            <pre className="text-xs bg-black/50 text-white rounded-md p-4 overflow-auto">
              <code>npm i chatriox</code>
            </pre>
          </div>
          <div className="glass rounded-xl p-5">
            <h3 className="font-medium mb-2">Send an email</h3>
            <pre className="text-xs bg-black/50 text-white rounded-md p-4 overflow-auto">
              <code>{`import { Client } from 'chatriox';
const client = new Client({ apiKey: process.env.CHATRIOX_KEY! });
await client.email.send({ to: 'user@example.com', subject: 'Hello', html: '<h1>Hi</h1>' });`}</code>
            </pre>
          </div>
          <div className="glass rounded-xl p-5">
            <h3 className="font-medium mb-2">Webhooks</h3>
            <pre className="text-xs bg-black/50 text-white rounded-md p-4 overflow-auto">
              <code>{`app.post('/webhooks/email', verifySignature, (req,res)=>{ /* handle */ })`}</code>
            </pre>
          </div>
        </div>
      </Section>

      <Section title="Best practices">
        <CheckList
          items={[
            "Use idempotency keys for retries",
            "Validate inputs with Zod or similar",
            "Verify webhook signatures",
            "Paginate with cursors",
            "Respect rate limits",
          ]}
        />
      </Section>

      <Section title="FAQs">
        <FAQ items={[{ q: "Is there a sandbox?", a: "Yes, you can generate test API keys with limited scope." }, { q: "How do I verify webhooks?", a: "Use HMAC signatures with your secret; see examples." }, { q: "What SDKs exist?", a: "Official clients for JS/TS and community SDKs for others." }]} />
      </Section>

      <CTASection
        title="Explore the API"
        subtitle="Endpoints, webhooks, and examples."
        primary={{ href: "/api", label: "API Reference" }}
        secondary={{ href: "/status", label: "Check Status" }}
      />
    </div>
  );
}
