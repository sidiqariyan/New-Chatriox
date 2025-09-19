import React from 'react';
import { Globe } from 'lucide-react';

export default function BottomCTA() {
  return (
    <div className="text-center">
      <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gray-50 border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300 hover:transform hover:scale-105">
        <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></div>
        <Globe className="w-5 h-5 text-cyan-400" />
        <span className="text-gray-900 font-medium">
          Expanding to new markets regularly
        </span>
      </div>
    </div>
  );
}