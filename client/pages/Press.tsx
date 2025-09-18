import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/sections/common/Section";
import FAQ from "@/components/sections/common/FAQ";
import DefaultDetails from "@/components/sections/DefaultDetails";

export default function Press() {
  return (
    <div className="relative">
      <PageHeader
        title="Press"
        subtitle="Brand assets, logos, and press inquiries."
      />

      <Section title="Media kit">
        <div className="glass rounded-xl p-5 flex items-center justify-between">
          <div>
            <div className="font-medium">Logos & Guidelines</div>
            <div className="text-xs text-foreground/60 mt-1">
              SVG, PNG, and usage rules
            </div>
          </div>
          <a
            href="/placeholder.svg"
            className="btn-gradient rounded-md px-4 py-2 text-white"
          >
            Download
          </a>
        </div>
      </Section>

      <Section title="Contact">
        <p className="text-foreground/70">
          For media inquiries, email press@chatriox.example
        </p>
      </Section>

      <Section title="FAQs">
        <FAQ
          items={[
            { q: "Do you offer briefings?", a: "Yes, on product and roadmap." },
            { q: "Embargo policy?", a: "We respect agreed embargo times." },
            { q: "Where can I get logos?", a: "See the media kit above." },
          ]}
        />
      </Section>
      <DefaultDetails />
    </div>
  );
}
