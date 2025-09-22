import Postman from "../../assets/images.png"
import Vercel from "../../assets/Vercel-Logo.png"
import Azizi from "../../assets/Azizi-Developments.png"
import Salesforce from "../../assets/Salesforce.com_logo.svg.png"
import Uber from "../../assets/Uber_logo_2018.png"
import Netflix from "../../assets/Netflix_2015_logo.svg.png"
import Shopify from "../../assets/Shopify_logo_2018.svg.png"
import Airbnb from "../../assets/Airbnb_Logo_Bélo.svg.png"
import Stripe from "../../assets/Stripe_Logo,_revised_2016.svg.png"
import Spotify from "../../assets/images (1).png"

export default function TrustedBy() {
  const brands = [
    "Postman",
    "Vercel",
    "Azizi Group",
    "Netflix",
    "Uber",
    "Airbnb",
    "Stripe",
    "Shopify",
    "Spotify",
  ];

  const brandLogos = {
    "Postman": Postman,
    "Vercel": Vercel, 
    "Azizi Group": Azizi,
    "Netflix": Netflix,
    "Uber": Uber,
    "Airbnb": Airbnb,
    "Stripe": Stripe,
    "Shopify": Shopify,
    "Spotify": Spotify
  };

  return (
    <section className="py-10 md:py-12 border-y border-black/10 bg-white/60">
      <div className="container">
        <div className="text-center text-sm text-foreground/60">Trusted by leading companies</div>
        <div className="mt-6 overflow-hidden">
          <div className="marquee-track animate-marquee" aria-hidden>
            {[...brands, ...brands].map((brand, i) => (
              <div key={i} className="h-48 w-48 px-6 py-4 flex flex-col items-center justify-center rounded-md bg-white border border-black/10 text-foreground/70">
                <div className="flex-1 flex items-center justify-center mb-2">
                  <img 
                    src={brandLogos[brand]} 
                    alt={`${brand} logo`}
                    className="h-32 w-auto max-w-full object-contain"
                    style={{ minHeight: '150px' }}
                    onError={(e) => {
                      // Fallback if image fails to load
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                <div className="text-sm font-medium">
                  {brand}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}