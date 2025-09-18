import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/sections/common/Section";
import FeatureGrid from "@/components/sections/common/FeatureGrid";
import CTASection from "@/components/sections/common/CTASection";
import IntegrationLogos from "@/components/sections/common/IntegrationLogos";
import SmallTestimonial from "@/components/sections/common/SmallTestimonial";
import FAQ from "@/components/sections/common/FAQ";
import {
  Blocks,
  Palette,
  Languages,
  History,
  MoonStar,
  ShieldCheck,
} from "lucide-react";

export default function Templates() {
  return (
    <div className="relative">
      <PageHeader
        title="Templates"
        subtitle="Enterprise-ready template builder with reusable components and versioning."
      />

      <Section title="Design once, reuse everywhere">
        <FeatureGrid
          items={[
            {
              title: "Components",
              desc: "Build with reusable content blocks.",
              icon: <Blocks className="h-5 w-5" />,
            },
            {
              title: "Theming",
              desc: "Design tokens and brand‑safe palettes.",
              icon: <Palette className="h-5 w-5" />,
            },
            {
              title: "Localization",
              desc: "Per‑locale content and RTL support.",
              icon: <Languages className="h-5 w-5" />,
            },
            {
              title: "Versioning",
              desc: "Change history with diff and rollback.",
              icon: <History className="h-5 w-5" />,
            },
            {
              title: "Dark mode",
              desc: "Auto and manual theme switching.",
              icon: <MoonStar className="h-5 w-5" />,
            },
            {
              title: "Approvals",
              desc: "Review workflows with role controls.",
              icon: <ShieldCheck className="h-5 w-5" />,
            },
          ]}
        />
      </Section>

      <Section title="Integrations">
        <IntegrationLogos
          items={["Figma", "Storybook", "GitHub", "Contentful", "Builder.io"]}
        />
      </Section>

      <Section title="Testimonials">
        <SmallTestimonial
          quote="Our team ships on‑brand emails 3x faster with components and versioning."
          author="Marcus T."
          role="Design Systems Lead"
        />
      </Section>

      <Section title="FAQs">
        <FAQ
          items={[
            {
              q: "Can I import HTML?",
              a: "Yes, import and convert into components with safeguards.",
            },
            {
              q: "Do you support localization?",
              a: "Per‑locale content and fallbacks are supported.",
            },
            {
              q: "Can non‑technical users edit?",
              a: "Yes, with role‑based approvals.",
            },
          ]}
        />
      </Section>

      <CTASection
        title="Standardize your brand"
        subtitle="Launch on-brand content faster with reusable templates."
        primary={{ href: "/docs", label: "Read Docs" }}
        secondary={{ href: "/contact", label: "Request Demo" }}
      />
    </div>
  );
}
