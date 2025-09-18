import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/sections/common/Section";
import Stats from "@/components/sections/common/Stats";
import DefaultDetails from "@/components/sections/DefaultDetails";

export default function Status() {
  return (
    <div className="relative">
      <PageHeader
        title="Status"
        subtitle="Live system status and historical uptime."
      />

      <Section>
        <Stats
          items={[
            { label: "API", value: "Operational" },
            { label: "Email sending", value: "Operational" },
            { label: "Webhooks", value: "Operational" },
            { label: "Dashboard", value: "Operational" },
          ]}
        />
      </Section>

      <Section title="Uptime (90d)">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {["US", "EU", "APAC", "LATAM"].map((r) => (
            <div key={r} className="glass rounded-xl p-5">
              <div className="font-medium">{r}</div>
              <div className="text-sm text-foreground/70 mt-1">99.98%</div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Recent incidents">
        <div className="space-y-3">
          <div className="glass rounded-xl p-4 flex items-center justify-between">
            <div>
              <div className="font-medium">No incidents reported</div>
              <div className="text-xs text-foreground/60">Past 30 days</div>
            </div>
            <a href="#" className="text-sm text-foreground/80">
              Subscribe
            </a>
          </div>
        </div>
      </Section>

      <Section title="FAQs">
        <div className="text-sm text-foreground/70">
          Status updates are posted here and via email subscriptions.
        </div>
      </Section>
      <DefaultDetails />
    </div>
  );
}
