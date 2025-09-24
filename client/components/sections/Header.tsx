import React from 'react';
import { Globe } from 'lucide-react';

interface HeaderProps {
  countriesCount: number;
}

export default function Header({ countriesCount }: HeaderProps) {
  return (
    <div className="text-center mb-16">
      <div className="relative inline-flex items-center justify-center mb-8">
        <div className="absolute inset-0 bg-cyan-500/10 rounded-full blur-xl"></div>
        <div className="relative w-20 h-20 rounded-full bg-gray-50 border border-cyan-500/30 flex items-center justify-center">
          <Globe className="w-10 h-10 text-cyan-400" />
        </div>
      </div>
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
        Global <span className="text-cyan-400">Presence</span>
      </h1>
      <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
        Serving customers across <span className="text-cyan-400 font-semibold">{countriesCount} countries</span> and 
        <span className="text-cyan-400 font-semibold"> 5 continents</span>, we deliver world-class services to major markets worldwide.
      </p>
    </div>
  );
}