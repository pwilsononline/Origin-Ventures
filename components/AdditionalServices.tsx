import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Palette, Smartphone, CheckCircle2 } from 'lucide-react';
import Section from './ui/Section';

const AdditionalServices: React.FC = () => {
  return (
    <Section id="expertise" className="bg-slate-950 border-t border-white/5">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Specialized <span className="text-cyan-400">Expertise</span>
          </motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Beyond automation and ads, we bring decades of creative and technical experience to elevate your brand's visual identity and digital presence.
          </p>
        </div>

        {/* Photography Section */}
        <div id="ai-photography" className="flex flex-col lg:flex-row items-center gap-16 mb-32 scroll-mt-32">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-cyan-900/30 border border-cyan-800 text-cyan-400 text-xs font-bold uppercase tracking-wider flex items-center gap-2 w-max">
              <Camera className="w-4 h-4" /> AI Photography
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Stunning visuals with <br/><span className="text-slate-500">unlimited possibilities.</span>
            </h3>
            <p className="text-slate-400 text-lg mb-6">
              Perfect for ecommerce brands, small businesses, models, influencers, and actors. We combine years of experience shooting corporate, product, food, and fashion photography in New York City with advanced AI engineering.
            </p>
            <p className="text-slate-400 text-lg mb-8">
              The result? We build breathtaking product images, corporate headshots, and fashion photography in any environment or season—including elements that are traditionally difficult or impossible to acquire.
            </p>
            <ul className="space-y-4">
              {['Ecommerce & Product', 'Corporate Headshots', 'Fashion & Influencer', 'Impossible Environments'].map((item, i) => (
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
             className="flex-1 relative w-full flex justify-center items-center"
          >
             {/* Abstract Camera/AI Visual */}
             <div className="relative w-80 h-80">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 rounded-full animate-pulse blur-xl" />
                <div className="absolute inset-4 border border-dashed border-cyan-500/30 rounded-full animate-[spin_30s_linear_infinite]" />
                <div className="absolute inset-12 border border-cyan-500/20 rounded-full animate-[spin_20s_linear_infinite_reverse]" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-slate-900 border border-cyan-500/30 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(6,182,212,0.2)] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent" />
                    <Camera className="w-12 h-12 text-cyan-400 relative z-10" />
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-10 right-10 bg-slate-800/90 backdrop-blur border border-white/10 p-3 rounded-lg shadow-xl"
                >
                    <div className="text-xs text-slate-400">Resolution</div>
                    <div className="text-sm font-bold text-cyan-400">High Definition</div>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-10 left-0 bg-slate-800/90 backdrop-blur border border-white/10 p-3 rounded-lg shadow-xl"
                >
                    <div className="text-xs text-slate-400">Environment</div>
                    <div className="text-sm font-bold text-blue-400">Stunning Results</div>
                </motion.div>
             </div>
          </motion.div>
        </div>

        {/* Web Design Section */}
        <div id="web-design" className="flex flex-col lg:flex-row-reverse items-center gap-16 mb-32 scroll-mt-32">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-purple-900/30 border border-purple-800 text-purple-400 text-xs font-bold uppercase tracking-wider flex items-center gap-2 w-max">
              <Palette className="w-4 h-4" /> Web & Graphic Design
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              20 years of design <br/><span className="text-slate-500">supercharged by AI.</span>
            </h3>
            <p className="text-slate-400 text-lg mb-6">
              We pull from two decades of experience in graphic and website design across all major platforms, including WordPress and custom HTML.
            </p>
            <p className="text-slate-400 text-lg mb-8">
              Because we understand all areas of digital marketing and sales—from paid marketing and SEO to email, SMS, social media, and copywriting—we don't just build pretty sites. We build conversion engines, now incorporating AI systems to supercharge every aspect of your business.
            </p>
            <ul className="space-y-4">
              {['Custom Web Design', 'Conversion Rate Optimization', 'Brand Identity & Graphics', 'SEO & Copywriting Integration'].map((item, i) => (
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
             className="flex-1 relative w-full"
          >
             <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900 aspect-video flex flex-col">
                {/* Browser Chrome */}
                <div className="h-8 border-b border-white/5 bg-slate-800/80 flex items-center px-4 gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                    </div>
                    <div className="mx-auto bg-slate-900/50 rounded text-[10px] text-slate-500 px-24 py-0.5 border border-white/5">
                      yourbrand.com
                    </div>
                </div>
                {/* Website Mockup Content */}
                <div className="flex-1 bg-slate-950 p-6 relative overflow-hidden">
                  <div className="w-3/4 h-8 bg-slate-800/50 rounded-lg mb-6"></div>
                  <div className="w-1/2 h-4 bg-slate-800/30 rounded mb-3"></div>
                  <div className="w-2/3 h-4 bg-slate-800/30 rounded mb-8"></div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="h-24 bg-purple-500/10 border border-purple-500/20 rounded-xl"></div>
                    <div className="h-24 bg-cyan-500/10 border border-cyan-500/20 rounded-xl"></div>
                    <div className="h-24 bg-blue-500/10 border border-blue-500/20 rounded-xl"></div>
                  </div>
                  
                  <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-purple-500/20 blur-[50px] rounded-full" />
                </div>
             </div>
          </motion.div>
        </div>

        {/* App Development Section */}
        <div id="app-development" className="flex flex-col lg:flex-row items-center gap-16 scroll-mt-32">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-blue-900/30 border border-blue-800 text-blue-400 text-xs font-bold uppercase tracking-wider flex items-center gap-2 w-max">
              <Smartphone className="w-4 h-4" /> Mobile & Web Apps
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Incredible solutions with <br/><span className="text-slate-500">stunning interfaces.</span>
            </h3>
            <p className="text-slate-400 text-lg mb-6">
              In the past, building apps was cost-prohibitive for most individuals and businesses. It was costly, time-consuming, and there was no guarantee you would get the end result you wanted.
            </p>
            <p className="text-slate-400 text-lg mb-8">
              Now, with AI-assisted app development, the sky is the limit on what types of tools you can create for your clients and industries. Our team specializes in building robust, scalable solutions with beautiful, intuitive interfaces.
            </p>
            <ul className="space-y-4">
              {['iOS & Android Apps', 'Custom Web Applications', 'Internal Business Tools', 'Rapid Prototyping'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="text-blue-400 w-5 h-5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="flex-1 relative flex justify-center w-full"
          >
             {/* Mobile App Mockup */}
             <div className="relative w-[280px] h-[580px] bg-slate-900 rounded-[40px] border-[8px] border-slate-800 shadow-2xl overflow-hidden z-10">
                {/* Notch */}
                <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-20">
                  <div className="w-32 h-6 bg-slate-800 rounded-b-xl"></div>
                </div>
                
                {/* App Content */}
                <div className="absolute inset-0 bg-slate-950 pt-12 px-6 pb-6 flex flex-col">
                  <div className="flex justify-between items-center mb-8">
                    <div className="w-10 h-10 rounded-full bg-slate-800"></div>
                    <div className="w-8 h-8 rounded-full bg-slate-800"></div>
                  </div>
                  
                  <div className="w-3/4 h-8 bg-slate-800/50 rounded-lg mb-8"></div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-2xl p-4 flex flex-col justify-end">
                      <div className="w-1/2 h-2 bg-white/20 rounded mb-2"></div>
                      <div className="w-3/4 h-2 bg-white/20 rounded"></div>
                    </div>
                    <div className="aspect-square bg-slate-800/50 border border-white/5 rounded-2xl p-4 flex flex-col justify-end">
                      <div className="w-1/2 h-2 bg-white/10 rounded mb-2"></div>
                      <div className="w-3/4 h-2 bg-white/10 rounded"></div>
                    </div>
                  </div>
                  
                  <div className="flex-1 bg-slate-800/30 border border-white/5 rounded-2xl p-4">
                    <div className="w-full h-3 bg-white/10 rounded mb-4"></div>
                    <div className="w-full h-3 bg-white/10 rounded mb-4"></div>
                    <div className="w-2/3 h-3 bg-white/10 rounded"></div>
                  </div>
                </div>
             </div>
             
             {/* Decorative Elements */}
             <div className="absolute top-1/2 right-10 -translate-y-1/2 w-48 h-48 bg-blue-500/20 blur-[60px] rounded-full z-0" />
             <div className="absolute bottom-10 left-10 w-40 h-40 bg-cyan-500/20 blur-[60px] rounded-full z-0" />
          </motion.div>
        </div>

      </div>
    </Section>
  );
};

export default AdditionalServices;
