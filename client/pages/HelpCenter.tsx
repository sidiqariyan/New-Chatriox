import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/sections/common/Section";
import DefaultDetails from "@/components/sections/DefaultDetails";

export default function HelpCenter() {
  const categories = [
    {
      title: "Getting Started",
      links: [
        "Create an account",
        "Connect a provider",
        "Send your first email",
      ],
    },
    {
      title: "Account & Billing",
      links: ["Manage seats", "Invoices", "Usage limits"],
    },
    { title: "Integrations", links: ["Webhooks", "Providers", "Data sources"] },
    {
      title: "Troubleshooting",
      links: ["Bounces", "Spam complaints", "Rate limits"],
    },
  ];
  return (
    <div className="relative">
      <PageHeader
        title="Help Center"
        subtitle="Guides, answers, and troubleshooting for Chatriox."
      />
      <Section>
        <div className="glass rounded-xl p-4">
          <input
            placeholder="Search articles..."
            className="w-full bg-transparent outline-none"
          />
        </div>
      </Section>
      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((c) => (
            <div key={c.title} className="glass rounded-xl p-5">
              <div className="font-medium mb-2">{c.title}</div>
              <ul className="list-disc pl-5 text-sm text-foreground/70 space-y-1">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="hover:text-foreground">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
      <Section>
        <div className="glass rounded-xl p-5 flex items-center justify-between">
          <div>
            <div className="font-medium">Still need help?</div>
            <div className="text-sm text-foreground/70">
              Our team replies quickly—usually within 2 hours.
            </div>
          </div>
          <a
            href="/contact"
            className="btn-gradient rounded-md px-4 py-2 text-white"
          >
            Contact Support
          </a>
        </div>
      </Section>
      <DefaultDetails />
    </div>
  );
}
