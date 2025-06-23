import React from 'react';
import { Code, Database, Cloud, Cpu, Zap, Shield } from 'lucide-react';

const FloatingElements: React.FC = () => {
  const elements = [
    { icon: Code, delay: '0s', position: 'top-20 left-20' },
    { icon: Database, delay: '2s', position: 'top-40 right-32' },
    { icon: Cloud, delay: '4s', position: 'bottom-40 left-32' },
    { icon: Cpu, delay: '1s', position: 'top-60 left-1/2' },
    { icon: Zap, delay: '3s', position: 'bottom-20 right-20' },
    { icon: Shield, delay: '5s', position: 'top-32 right-1/4' },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 2 }}>
      {elements.map((Element, index) => (
        <div
          key={index}
          className={`absolute ${Element.position} animate-float opacity-20`}
          style={{
            animationDelay: Element.delay,
            animationDuration: '6s',
          }}
        >
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/20">
            <Element.icon className="w-6 h-6 text-white" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;