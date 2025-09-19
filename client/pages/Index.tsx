import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import CaseStudies from "@/components/sections/CaseStudies";
import Map from "@/components/sections/Map";
import Security from "@/components/sections/Security";
import Integrations from "@/components/sections/Integrations";
import WhyUs from "@/components/sections/WhyUs";
import Blogs from "@/components/sections/Blogs";

import TrustedBy from "@/components/sections/TrustedBy";
import KeyBenefits from "@/components/sections/KeyBenifits";

export default function Index() {
  return (
    <div className="relative">
      <Hero />
      {/* <TrustedBy /> */}
      <KeyBenefits />
      <Services />
      <Integrations />
      <Testimonials />
      <CaseStudies />
      {/* <Map /> */}
      <Security />
      <Blogs />
    </div>
  );
}
