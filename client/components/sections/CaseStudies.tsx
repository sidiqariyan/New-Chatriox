import { useEffect, useState } from "react";
import FintechImage from "../../assets/What-is-FinTech.png";
import RetailImage from "../../assets/retail-market.avif";
import SaasImage from "../../assets/654c90e7ea1f77eae3f7bcca_saas.jpg";
import TravelImage from "../../assets/Business-travel.jpg";
import MarketplaceImage from "../../assets/Gemini_Generated_Image_jlen0jlen0jlen0j.png";
import GamingImage from "../../assets/Gaming_industry_1691552177742_1691552178022.avif";
import { caseStudiesApi } from "@/services/api";

const fallbackItems = [
  {
    title: "FinTech — 4.2x ROI",
    text: "Scaled to 50M/mo emails with 99.99% deliverability and <1s API latency.",
    image: FintechImage,
  },
  {
    title: "Retail — +62% CTR",
    text: "AI subject lines lifted CTR across seasonal campaigns by 62%.",
    image: RetailImage,
  },
  {
    title: "SaaS — 100x Velocity",
    text: "Design system blocks enabled weekly brand refreshes without dev time.",
    image: SaasImage,
  },
  {
    title: "Travel — +38% Conversions",
    text: "Send-time optimization per timezone boosted bookings materially.",
    image: TravelImage,
  },
  {
    title: "Marketplace — -43% Churn",
    text: "Lifecycle journeys reactivated dormant sellers at scale.",
    image: MarketplaceImage,
  },
  {
    title: "Gaming — +25% DAU",
    text: "Real-time messaging and WhatsApp drove daily return rates.",
    image: GamingImage,
  },
];

export default function CaseStudies() {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    let mounted = true;
    caseStudiesApi
      .list(false)
      .then((res: any) => {
        const data = res.data || res;
        if (!mounted) return;
        if (Array.isArray(data) && data.length) {
          setItems(
            data.map((d: any) => ({
              title: d.title,
              text: d.summary || "",
              image: d.imageUrl || "",
              slug: d.slug,
            })),
          );
        } else {
          setItems(fallbackItems);
        }
      })
      .catch(() => setItems(fallbackItems));
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section className="container py-24" id="cases">
      <h2 className="font-display text-3xl md:text-4xl">Case Studies</h2>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {items.map((c, i) => (
          <a
            key={i}
            href={c.slug ? `/case-studies/${c.slug}` : undefined}
            className="group rounded-2xl p-6 border border-white/10 bg-white/5 hover:bg-white/10 transition block"
          >
            <div className="h-32 rounded-xl overflow-hidden group-hover:scale-[1.02] transition">
              {c.image ? (
                <img
                  src={c.image}
                  alt={`${c.title} case study`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200" />
              )}
            </div>
            <div className="mt-4 font-medium">{c.title}</div>
            <p className="text-sm text-foreground/70 mt-1">{c.text}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
