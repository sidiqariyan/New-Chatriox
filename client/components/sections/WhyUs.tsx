import { Globe2, Scale, ShieldCheck, Gauge } from "lucide-react";

const items = [
  { icon: Gauge, title: "Scale at will", desc: "Multi-region sending and elastic infrastructure handle seasonal spikes without rate limits getting in your way." },
  { icon: ShieldCheck, title: "Compliance-first", desc: "GDPR, ISO 27001 and SOC2 Type II by default, with data residency controls and audit trails for every action." },
  { icon: Scale, title: "Accuracy that compounds", desc: "Validation, AI scoring and feedback loops improve deliverability and engagement over time." },
  { icon: Globe2, title: "Global by design", desc: "Localized deliverability best practices and coverage across 190+ countries with 24/7 support." },
];

export default function WhyUs() {
  return (
    <section className="container py-24" id="why-us">
      <h2 className="font-display text-3xl md:text-4xl">Why choose us</h2>
      <div className="mt-8 grid md:grid-cols-4 gap-6">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-2xl glass p-6 text-left">
            <div className="size-12 rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center">
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
