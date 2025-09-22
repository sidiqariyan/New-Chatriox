import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/sections/common/Section";
import FAQ from "@/components/sections/common/FAQ";
import DefaultDetails from "@/components/sections/DefaultDetails";

export default function Legal() {
  return (
    <div className="relative">
      <PageHeader
        title="Legal"
        subtitle="Terms, privacy, and data processing agreements."
      />

      <Section title="Terms of Service">
        <p className="text-foreground/70">
          Use of the service is subject to acceptable use, payment, and
          intellectual property provisions. Violations may result in suspension
          or termination.
        </p>
      </Section>

      <Section title="Privacy Policy">
        <p className="text-foreground/70">
          We collect only necessary data to provide the service, minimize
          retention, and never sell personal information. See regional
          disclosures for specifics.
        </p>
      </Section>

      <Section title="Data Processing Addendum">
        <p className="text-foreground/70">
          We act as a processor for customer data, provide SCCs where
          applicable, and implement security measures consistent with industry
          standards.
        </p>
      </Section>

      <Section title="FAQs">
        <FAQ
          items={[
            {
              q: "Do you sign DPAs?",
              a: "Yes, we provide DPAs to eligible customers.",
            },
            {
              q: "Where is data stored?",
              a: "Choose regional data residency (US/EU/APAC).",
            },
            {
              q: "Do you support SCCs?",
              a: "Yes, Standard Contractual Clauses are available.",
            },
          ]}
        />
      </Section>
      <DefaultDetails />
    </div>
  );
}
