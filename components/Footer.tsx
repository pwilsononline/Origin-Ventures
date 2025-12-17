import React from 'react';
import { Twitter, Instagram, Linkedin, Command } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/5 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Command className="w-5 h-5 text-cyan-500" />
            <span className="text-xl font-bold text-white">Origin Ventures</span>
          </div>
          
          <div className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Origin Ventures. All rights reserved.
          </div>

          <div className="flex gap-4">
            {[Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-cyan-500 hover:text-white transition-all">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;