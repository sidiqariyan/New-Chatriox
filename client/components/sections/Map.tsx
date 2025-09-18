import { Globe, MapPin } from "lucide-react";

const countries = [
  "Australia",
  "United States", 
  "United Kingdom",
  "Germany",
  "France",
  "Norway",
  "Netherlands",
  "Belgium",
  "Spain",
  "Russia",
  "India",
  "Kazakhstan",
  "New Zealand",
  "Singapore",   // ✅ Added
  "Brazil"       // ✅ Added
];

export default function CountriesServed() {
  return (
    <section className="container py-24" id="coverage">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/10 mb-6">
          <Globe className="w-8 h-8 text-blue-500" />
        </div>
        <h2 className="font-display text-3xl md:text-4xl mb-4">Global Coverage</h2>
        <p className="text-foreground/70 max-w-2xl mx-auto">
          We proudly serve customers across {countries.length} countries, delivering our services to major markets worldwide.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 max-w-4xl mx-auto">
        {countries.map((country, index) => (
          <div 
            key={country} 
            className="flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-200"
            style={{
              animationDelay: `${index * 100}ms`
            }}
          >
            <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0" />
            <span className="font-medium text-foreground">{country}</span>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
          <Globe className="w-5 h-5 text-blue-400" />
          <span className="text-sm font-medium text-foreground/80">
            Expanding to new markets regularly
          </span>
        </div>
      </div>
    </section>
  );
}
