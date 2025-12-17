import React, { useState } from 'react';
import Section from './ui/Section';
import Button from './ui/Button';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', company: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic would go here
    alert("Thanks for your interest in Origin Ventures! We'll be in touch.");
  };

  return (
    <Section id="contact" className="bg-background relative overflow-hidden">
      {/* Smoother abstract background instead of noise */}
      <div className="absolute inset-0 overflow-hidden">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-900/20 blur-[120px] rounded-full" />
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-md relative overflow-hidden shadow-2xl">
          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 blur-[80px] -z-10" />

          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to dominate your market?</h2>
            <p className="text-slate-400">Schedule your free strategy audit. We'll show you exactly how our AI systems can double your lead flow.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Full Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-600"
                  placeholder="John Doe"
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Email Address</label>
                <input 
                  type="email" 
                  required
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-600"
                  placeholder="john@company.com"
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-2">
               <label className="text-sm font-medium text-slate-300">Business Name</label>
               <input 
                  type="text" 
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-600"
                  placeholder="Acme Inc."
                  value={formState.company}
                  onChange={(e) => setFormState({...formState, company: e.target.value})}
               />
            </div>

            <div className="space-y-2">
               <label className="text-sm font-medium text-slate-300">How can we help?</label>
               <textarea 
                  rows={4}
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none placeholder:text-slate-600"
                  placeholder="I want to scale my dental practice..."
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
               />
            </div>

            <div className="pt-4 flex justify-center">
              <Button type="submit" variant="primary" className="w-full md:w-auto px-12">
                Send Request <Send className="w-4 h-4" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;