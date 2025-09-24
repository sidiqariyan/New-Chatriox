import Section from "@/components/sections/common/Section";
import CheckList from "@/components/sections/common/CheckList";
import Stats from "@/components/sections/common/Stats";
import SmallTestimonial from "@/components/sections/common/SmallTestimonial";

export default function KeyBenefits() {
  return (
    <Section
      title="Why Founders and CEOs Choose Chatriox"
      subtitle="You run the business. We run your outreach. Chatriox eliminates busywork with automation and intelligence so you can focus on strategy, growth, and closing deals."
      className="relative pt-10 md:pt-16"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-10 h-64 w-64 rounded-full bg-[conic-gradient(at_70%_120%,_#00e5ff,_#7c4dff,_#00bcff)] opacity-20 blur-2xl" />
        <div className="absolute left-10 bottom-0 h-40 w-40 rounded-full bg-[radial-gradient(circle,_rgba(0,229,255,0.35)_0%,_rgba(0,0,0,0)_60%)]" />
      </div>

      <div className="grid lg:grid-cols-3 gap-6 items-stretch">
        <div className="lg:col-span-2 space-y-4">
          <div className="flex flex-wrap gap-2">
            {[
              "Founder-friendly pricing",
              "SOC2 Type II",
              "GDPR-ready",
              "Global PoPs",
            ].map((b) => (
              <span key={b} className="px-3 py-1.5 rounded-full glass text-xs text-foreground/80">{b}</span>
            ))}
          </div>

          <div className="rounded-2xl glass p-6">
            <CheckList
              items={[
                "Launch campaigns in minutes — no engineering tickets required.",
                "Verified data out of the box — validation + enrichment on every list.",
                "Personalization at scale — dynamic fields, segments, and journeys.",
                "Predict before you send — AI scores subject lines and copy for uplift.",
                "Deliverability that compounds — warmup, throttling, and routing built in.",
                "Compliance-first — SSO, audit trails, data residency controls.",
                "Transparent usage — clear pricing, no hidden fees.",
                "24/7 priority support — humans who understand growth and email.",
              ]}
            />
            <div className="text-xs text-foreground/60 mt-3">
              No long-term contracts. Start free and scale when you’re ready.
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl glass p-6">
            <Stats
              items={[
                { value: "<30m", label: "Time to first campaign" },
                { value: "+28%", label: "Avg. reply-rate lift" },
                { value: "-92%", label: "Bounce reduction with validation" },
                { value: "99.99%", label: "Platform uptime" },
              ]}
            />
          </div>
          <SmallTestimonial
            quote="We consolidated vendors into Chatriox and saw a 40% faster GTM. Their validation + AI stack paid for itself in weeks."
            author="Ava Martin"
            role="Founder & CEO, Zenith Holdings"
          />
        </div>
      </div>
    </Section>
  );
}
