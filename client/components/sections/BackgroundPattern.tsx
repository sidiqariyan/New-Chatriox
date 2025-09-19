import React from 'react';

export default function BackgroundPattern() {
  return (
    <div className="fixed inset-0 pointer-events-none opacity-5">
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, #06b6d4 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}
      />
    </div>
  );
}