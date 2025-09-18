import { ShieldCheck, Lock, KeyRound } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "Certifications", desc: "GDPR, ISO 27001 and SOC2 Type II. Independent audits and continuous monitoring." },
  { icon: Lock, title: "Encryption", desc: "TLS 1.3 in transit, AES-256 at rest. Key management with strict rotation policies." },
  { icon: KeyRound, title: "Access Controls", desc: "RBAC, SSO/SAML, SCIM, IP allowlists and fine-grained API keys with scopes." },
];

export default function Security() {
  return (
    <section className="container py-24" id="security">
      <h2 className="font-display text-3xl md:text-4xl">Security & Compliance</h2>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-2xl glass p-6 text-center">
            <div className="mx-auto size-12 rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center">
              <Icon className="size-6 text-white" />
            </div>
            <div className="mt-3 font-medium">{title}</div>
            <p className="text-sm text-foreground/70 mt-1">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
