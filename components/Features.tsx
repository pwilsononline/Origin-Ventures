import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import Section from './ui/Section';

const Features: React.FC = () => {
  return (
    <Section id="features" className="bg-slate-950">
      <div className="container mx-auto px-6">
        
        {/* Feature 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-cyan-900/30 border border-cyan-800 text-cyan-400 text-xs font-bold uppercase tracking-wider">
              AI-Powered CRM
            </div>
            <h3 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Never lose a lead to <br/><span className="text-slate-500">slow response times.</span>
            </h3>
            <p className="text-slate-400 text-lg mb-8">
              Our AI receptionist engages leads instantly via SMS, Email, and Instagram DMs. It answers questions, books appointments, and reactivates database contacts 24/7.
            </p>
            <ul className="space-y-4">
              {['Instant Booking Engine', 'Context-Aware Responses', 'Seamless Human Handoff'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="text-cyan-400 w-5 h-5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
             <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900">
                {/* Chat Interface Mockup */}
                <div className="p-4 border-b border-white/5 bg-slate-800/50 flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-sm font-medium">Origin AI Assistant</span>
                </div>
                <div className="p-6 space-y-4 bg-slate-900/50 h-[300px]">
                    <div className="flex justify-start">
                        <div className="bg-slate-800 text-slate-200 p-3 rounded-2xl rounded-tl-none max-w-[80%] text-sm">
                            I'm looking for a quote on a new roof installation.
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <div className="bg-cyan-600 text-white p-3 rounded-2xl rounded-tr-none max-w-[80%] text-sm shadow-lg shadow-cyan-900/20">
                            Hi there! I can definitely help with that. Are you looking for shingle, metal, or tile?
                        </div>
                    </div>
                    <div className="flex justify-start">
                        <div className="bg-slate-800 text-slate-200 p-3 rounded-2xl rounded-tl-none max-w-[80%] text-sm">
                           Probably metal. My house is about 2500 sqft.
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <div className="bg-cyan-600 text-white p-3 rounded-2xl rounded-tr-none max-w-[80%] text-sm shadow-lg shadow-cyan-900/20">
                           Great choice. I have an opening for an estimate this Thursday at 2 PM. Does that work for you?
                        </div>
                    </div>
                </div>
             </div>
             {/* Decorative Elements */}
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/20 blur-[60px] rounded-full -z-10" />
             <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-cyan-500/20 blur-[60px] rounded-full -z-10" />
          </motion.div>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-purple-900/30 border border-purple-800 text-purple-400 text-xs font-bold uppercase tracking-wider">
              Data-Driven Growth
            </div>
            <h3 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Total visibility into <br/><span className="text-slate-500">your marketing ROI.</span>
            </h3>
            <p className="text-slate-400 text-lg mb-8">
              Stop guessing which ads are working. Our centralized dashboard brings Google, Facebook, and Organic leads into one view, attributing revenue to specific campaigns.
            </p>
            <ul className="space-y-4">
              {['Multi-Channel Attribution', 'Cost-Per-Acquisition Tracking', 'Automated Weekly Reports'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="text-purple-400 w-5 h-5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="flex-1"
          >
             {/* Abstract Data Visual */}
             <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 rounded-full animate-pulse border border-white/5" />
                <div className="absolute inset-8 border border-dashed border-white/20 rounded-full animate-[spin_20s_linear_infinite]" />
                <div className="absolute inset-16 border border-white/10 rounded-full" />
                
                {/* Floating Cards */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-1/4 left-0 bg-slate-800/90 backdrop-blur border border-white/10 p-3 rounded-lg shadow-xl"
                >
                    <div className="text-xs text-slate-400">Google Ads ROAS</div>
                    <div className="text-lg font-bold text-green-400">4.5x</div>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-1/4 right-0 bg-slate-800/90 backdrop-blur border border-white/10 p-3 rounded-lg shadow-xl"
                >
                    <div className="text-xs text-slate-400">Leads this Month</div>
                    <div className="text-lg font-bold text-cyan-400">142</div>
                </motion.div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/5 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-[0_0_50px_rgba(168,85,247,0.3)]">
                   <div className="text-center">
                     <div className="text-3xl font-bold text-white">$42k</div>
                     <div className="text-[10px] uppercase tracking-widest text-slate-400">Generated</div>
                   </div>
                </div>
             </div>
          </motion.div>
        </div>

      </div>
    </Section>
  );
};

export default Features;
