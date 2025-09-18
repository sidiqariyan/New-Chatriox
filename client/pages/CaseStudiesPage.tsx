import PageHeader from "@/components/layout/PageHeader";
import CaseStudies from "@/components/sections/CaseStudies";
import Section from "@/components/sections/common/Section";
import CTASection from "@/components/sections/common/CTASection";
import IntegrationLogos from "@/components/sections/common/IntegrationLogos";

export default function CaseStudiesPage() {
  return (
    <div className="relative">
      <PageHeader
        title="Case Studies"
        subtitle="How leading teams achieved 100x ROI with Chatriox."
      />
      <CaseStudies />
      <Section title="Trusted by">
        <IntegrationLogos
          items={["Acme Corp", "Globex", "Initech", "Umbrella", "Wayne Ent."]}
        />
      </Section>
      <Section title="FAQs">
        <div className="text-sm text-foreground/70">
          Have a specific industry? Contact us for a tailored case study.
        </div>
      </Section>
      <Section>
        <CTASection
          title="See what you can achieve"
          subtitle="We’ll tailor a plan to your goals."
          primary={{ href: "/contact", label: "Book Demo" }}
          secondary={{ href: "/docs", label: "Read Docs" }}
        />
      </Section>
    </div>
  );
}
