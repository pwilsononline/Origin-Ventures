import React from 'react';
import Section from './ui/Section';

const Stats: React.FC = () => {
  // Generic industries instead of specific client names
  const industries = ["Dentistry", "Real Estate", "Roofing", "Law Firms", "E-Commerce", "Medical Spas", "HVAC", "Financial Services"];

  return (
    <Section id="stats" className="bg-background py-10 border-y border-white/5">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm font-medium text-slate-500 mb-8 uppercase tracking-[0.2em]">Industries We Transform</p>
        
        <div className="relative overflow-hidden w-full">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
          
          {/* Slower scroll for readability */}
          <div className="flex gap-16 items-center animate-scroll whitespace-nowrap opacity-60 hover:opacity-100 transition-opacity duration-500">
            {[...industries, ...industries, ...industries].map((industry, i) => (
              <span key={i} className="text-2xl font-bold text-slate-300 font-sans tracking-tight">
                {industry}
              </span>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.33%); }
          }
          .animate-scroll {
            animation: scroll 40s linear infinite;
          }
        `}</style>

        {/* Capability-based stats instead of historical revenue */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 text-center">
           {[
             { val: "24/7", label: "Automated Support" },
             { val: "100%", label: "Data Transparency" },
             { val: "AI", label: "Driven Systems" },
             { val: "∞", label: "Scalability" },
           ].map((stat, i) => (
             <div key={i} className="flex flex-col items-center p-6 rounded-2xl hover:bg-white/5 transition-colors">
               <div className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500 mb-2">{stat.val}</div>
               <div className="text-sm text-slate-400 uppercase tracking-wide font-semibold">{stat.label}</div>
             </div>
           ))}
        </div>
      </div>
    </Section>
  );
};

export default Stats;