import React from 'react';

interface Region {
  name: string;
  count: number;
}

interface RegionalCoverageProps {
  regions: Region[];
}

export default function RegionalCoverage({ regions }: RegionalCoverageProps) {
  return (
    <div className="mb-16">
      <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Regional Coverage</h3>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {regions.map((region, index) => (
          <div 
            key={region.name}
            className="group relative p-6 rounded-2xl bg-gray-50 border border-gray-200 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105"
            style={{
              animationDelay: `${index * 150}ms`
            }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-cyan-500 rounded-t-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400 mb-2">{region.count}</div>
              <div className="text-gray-900 font-medium text-sm">{region.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}