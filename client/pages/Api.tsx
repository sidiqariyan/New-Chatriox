import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/sections/common/Section";
import CheckList from "@/components/sections/common/CheckList";

export default function Api() {
  return (
    <div className="relative">
      <PageHeader
        title="API"
        subtitle="Stable, versioned REST and webhooks built for reliability."
      />

      <Section title="Authentication">
        <p className="text-foreground/70 mb-3">
          Use a Bearer token in the Authorization header.
        </p>
        <pre className="text-xs bg-black/50 text-white rounded-md p-4 overflow-auto">
          <code>{`curl -H "Authorization: Bearer $CHATRIOX_KEY" https://api.chatriox.example/v1/me`}</code>
        </pre>
      </Section>

      <Section title="Send email">
        <pre className="text-xs bg-black/50 text-white rounded-md p-4 overflow-auto">
          <code>{`POST /v1/email.send
{
  "to": "user@example.com",
  "subject": "Welcome",
  "html": "<h1>Hello</h1>"
}`}</code>
        </pre>
      </Section>

      <Section title="Pagination">
        <pre className="text-xs bg-black/50 text-white rounded-md p-4 overflow-auto">
          <code>{`GET /v1/events?limit=100&cursor=abc123`}</code>
        </pre>
      </Section>

      <Section title="Errors">
        <pre className="text-xs bg-black/50 text-white rounded-md p-4 overflow-auto">
          <code>{`{
  "error": { "code": "invalid_request", "message": "Missing field 'to'" }
}`}</code>
        </pre>
      </Section>

      <Section title="Webhook signature">
        <pre className="text-xs bg-black/50 text-white rounded-md p-4 overflow-auto">
          <code>{`const signature = req.headers['x-chatriox-signature'];
// verify HMAC-SHA256 with your secret`}</code>
        </pre>
      </Section>

      <Section title="Rate limits">
        <CheckList
          items={[
            "Per‑org request quotas",
            "Exponential backoff on 429",
            "Idempotency keys for retries",
          ]}
        />
      </Section>

      <Section title="FAQs">
        <CheckList
          items={[
            "Use Bearer tokens and rotate keys",
            "Verify webhook signatures",
            "Use idempotency for retries",
          ]}
        />
      </Section>
    </div>
  );
}
