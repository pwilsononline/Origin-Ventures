import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Cpu, Network, Zap, Globe, MessageSquare } from 'lucide-react';
import Button from './ui/Button';
import Section from './ui/Section';

const Hero: React.FC = () => {
  return (
    <Section className="pt-32 lg:pt-48 min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Dynamic Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Smoother, moving gradients */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3] 
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -left-1/2 w-[150vw] h-[150vw] bg-gradient-to-r from-cyan-900/30 via-blue-900/30 to-purple-900/30 rounded-full blur-[100px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
            opacity: [0.2, 0.4, 0.2] 
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/2 -right-1/2 w-[150vw] h-[150vw] bg-gradient-to-r from-blue-900/20 via-cyan-900/20 to-background rounded-full blur-[100px]" 
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 hover:border-cyan-500/50 transition-colors cursor-pointer"
        >
          <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
          <span className="text-xs font-medium text-cyan-100 uppercase tracking-wide">
            Now Accepting New Partners
          </span>
          <ChevronRight className="w-3 h-3 text-slate-400" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl"
        >
          <span className="text-white">Scale your business with </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
            Intelligent Automation
          </span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed"
        >
          Origin Ventures merges sophisticated AI systems with battle-tested digital marketing strategies to turn local businesses, ecommerce brands, online coaches, and digital entrepreneurs into market leaders.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 mb-20"
        >
          <Button variant="glow" onClick={() => document.getElementById('contact')?.scrollIntoView()}>
            Start Growth Engine <ArrowRight className="w-4 h-4" />
          </Button>
          <Button variant="outline" onClick={() => document.getElementById('features')?.scrollIntoView()}>
            See How It Works
          </Button>
        </motion.div>

        {/* Abstract "AI Ecosystem" Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative w-full max-w-4xl h-[400px] md:h-[500px] flex items-center justify-center perspective-[1000px]"
        >
            {/* Center Core */}
            <div className="relative z-10 w-32 h-32 md:w-40 md:h-40 bg-slate-900 rounded-2xl border border-cyan-500/50 flex items-center justify-center shadow-[0_0_50px_rgba(6,182,212,0.4)]">
                <div className="absolute inset-0 bg-cyan-500/10 animate-pulse rounded-2xl"></div>
                <Cpu className="w-16 h-16 text-cyan-400" />
                
                {/* Connecting Lines */}
                {[0, 90, 180, 270].map((deg, i) => (
                    <div key={i} className="absolute top-1/2 left-1/2 w-[150px] md:w-[200px] h-[2px] bg-gradient-to-r from-cyan-500/50 to-transparent origin-left -z-10" style={{ transform: `rotate(${deg}deg)` }}>
                         <motion.div 
                            animate={{ x: [0, 150, 0], opacity: [0, 1, 0] }}
                            transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                            className="w-2 h-2 rounded-full bg-white absolute top-1/2 -translate-y-1/2" 
                         />
                    </div>
                ))}
            </div>

            {/* Orbiting Nodes */}
            <Node icon={Globe} label="Lead Gen" delay={0} x="-180px" y="-80px" color="text-purple-400" />
            <Node icon={MessageSquare} label="AI CRM" delay={1} x="180px" y="-80px" color="text-green-400" />
            <Node icon={Zap} label="Automation" delay={2} x="0px" y="160px" color="text-yellow-400" />
            <Node icon={Network} label="Strategy" delay={1.5} x="-180px" y="80px" color="text-blue-400" />
            <Node icon={ArrowRight} label="Conversion" delay={2.5} x="180px" y="80px" color="text-pink-400" />

            {/* Background Glows for the Graphic */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[100px] rounded-full -z-20 pointer-events-none" />
        </motion.div>
      </div>
    </Section>
  );
};

const Node = ({ icon: Icon, label, delay, x, y, color }: { icon: any, label: string, delay: number, x: string, y: string, color: string }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, -10, 0] }}
        transition={{ opacity: { delay, duration: 1 }, y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: delay * 2 } }}
        className="absolute hidden md:flex flex-col items-center gap-2 bg-slate-900/80 backdrop-blur border border-white/10 p-4 rounded-xl shadow-xl"
        style={{ transform: `translate(${x}, ${y})` }}
    >
        <Icon className={`w-8 h-8 ${color}`} />
        <span className="text-xs font-semibold text-slate-300 uppercase tracking-wide">{label}</span>
    </motion.div>
)

export default Hero;