import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/sections/common/Section";
import FeatureGrid from "@/components/sections/common/FeatureGrid";
import DefaultDetails from "@/components/sections/DefaultDetails";

export default function Careers() {
  const roles = [
    {
      title: "Senior Frontend Engineer",
      location: "Remote",
      type: "Full‑time",
    },
    { title: "Senior Backend Engineer", location: "Remote", type: "Full‑time" },
    { title: "Product Designer", location: "Remote", type: "Full‑time" },
    { title: "Product Manager", location: "Remote", type: "Full‑time" },
  ];
  return (
    <div className="relative">
      <PageHeader
        title="Careers"
        subtitle="Join our remote-first team building the future of AI marketing."
      />

      <Section title="Open roles">
        <div className="grid gap-4">
          {roles.map((r) => (
            <a
              key={r.title}
              href="/contact"
              className="glass rounded-xl p-5 flex items-center justify-between hover:shadow-glow"
            >
              <div>
                <div className="font-medium">{r.title}</div>
                <div className="text-xs text-foreground/60 mt-1">
                  {r.location} • {r.type}
                </div>
              </div>
              <span className="text-sm text-foreground/80">Apply →</span>
            </a>
          ))}
        </div>
      </Section>

      <Section title="Benefits">
        <FeatureGrid
          items={[
            {
              title: "Remote‑first",
              desc: "Work from anywhere with flexible hours.",
              icon: <span>🌍</span>,
            },
            {
              title: "Premium health",
              desc: "Top‑tier medical, dental, vision.",
              icon: <span>🩺</span>,
            },
            {
              title: "Home office",
              desc: "Generous stipend for setup.",
              icon: <span>💻</span>,
            },
            {
              title: "Learning",
              desc: "Budget for books and courses.",
              icon: <span>📚</span>,
            },
            {
              title: "Time off",
              desc: "Flexible PTO and local holidays.",
              icon: <span>🏖️</span>,
            },
            {
              title: "Equity",
              desc: "Meaningful ownership in the company.",
              icon: <span>📈</span>,
            },
          ]}
        />
      </Section>

      <Section title="Hiring process">
        <ol className="list-decimal pl-6 space-y-2 text-foreground/80">
          <li>Intro chat with recruiter</li>
          <li>Technical/role interview</li>
          <li>Practical take‑home or live exercise</li>
          <li>Team interviews and values chat</li>
          <li>Offer and reference check</li>
        </ol>
      </Section>
      <DefaultDetails />
    </div>
  );
}
