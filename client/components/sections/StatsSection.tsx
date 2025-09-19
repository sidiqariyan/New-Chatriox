import React from 'react';
import { Globe, MapPin, Users, Building2 } from 'lucide-react';

interface StatsSectionProps {
  countriesCount: number;
}

export default function StatsSection({ countriesCount }: StatsSectionProps) {
  const stats = [
    {
      icon: Globe,
      value: countriesCount,
      label: 'Countries'
    },
    {
      icon: Building2,
      value: '5',
      label: 'Continents'
    },
    {
      icon: Users,
      value: '50M+',
      label: 'Customers'
    },
    {
      icon: MapPin,
      value: '24/7',
      label: 'Global Support'
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
      {stats.map((stat, index) => {
        const IconComponent = stat.icon;
        return (
          <div 
            key={stat.label}
            className="text-center p-6 rounded-2xl bg-gray-50 border border-gray-200 hover:border-cyan-500/50 transition-all duration-300"
          >
            <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-cyan-500/10 flex items-center justify-center">
              <IconComponent className="w-6 h-6 text-cyan-400" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
            <div className="text-gray-600 text-sm">{stat.label}</div>
          </div>
        );
      })}
    </div>
  );
}