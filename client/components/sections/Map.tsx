import { Globe, MapPin } from "lucide-react";
import Header from "./Header";
import StatsSection from "./StatsSection";
import RegionalCoverage from "./RegionalCoverage";
import CountriesGrid from "./CountriesGrid";
import BottomCTA from "./BottomCTA";
import BackgroundPattern from "./BackgroundPattern";

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
  "Singapore",
  "Brazil",
  "Canada",
  "Japan",
  "South Korea",
  "Italy",
  "Sweden",
  "Switzerland",
  "Austria",
  "Denmark",
  "Finland",
  "Poland",
  "Mexico",
  "Argentina",
  "Chile",
  "Thailand"
];

const regions = [
  { name: "North America", count: 3 },
  { name: "Europe", count: 11 },
  { name: "Asia Pacific", count: 6 },
  { name: "South America", count: 3 },
  { name: "Oceania", count: 2 }
];
export default function CountriesServed() {
  return (
    <section className="container mx-auto px-6 py-24" id="coverage">
        <Header countriesCount={countries.length} />
        <StatsSection countriesCount={countries.length} />
        <RegionalCoverage regions={regions} />
        <CountriesGrid countries={countries} />
        <BottomCTA />
        <BackgroundPattern />
      </section>
  );
}
