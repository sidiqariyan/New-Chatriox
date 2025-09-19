import React from 'react';
import { MapPin } from 'lucide-react';

interface CountriesGridProps {
  countries: string[];
}

export default function CountriesGrid({ countries }: CountriesGridProps) {
  return (
    <div className="mb-16">
      <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Countries We Serve</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 max-w-7xl mx-auto">
        {countries.map((country, index) => (
          <div 
            key={country} 
            className="group relative overflow-hidden rounded-xl bg-gray-50 border border-gray-200 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105"
            style={{
              animationDelay: `${index * 100}ms`
            }}
          >
            <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative p-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/20 transition-colors duration-300">
                <MapPin className="w-4 h-4 text-cyan-400" />
              </div>
              <span className="font-medium text-gray-900 group-hover:text-cyan-600 transition-colors duration-300">
                {country}
              </span>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
}