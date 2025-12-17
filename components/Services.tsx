import React from 'react';
import { motion } from 'framer-motion';
import { Bot, LineChart, Megaphone, Target, Smartphone, Globe } from 'lucide-react';
import Section from './ui/Section';

const services = [
  {
    icon: Bot,
    title: "AI Automation",
    desc: "Chatbots and workflows that capture leads while you sleep. We automate the boring stuff so you can focus on closing."
  },
  {
    icon: Target,
    title: "Precision Ads",
    desc: "Meta & Google campaigns hyper-targeted to your local demographic. Stop wasting budget on broad audiences."
  },
  {
    icon: Megaphone,
    title: "Reputation Management",
    desc: "Automated review generation systems that turn your happy customers into your best marketing asset."
  },
  {
    icon: Smartphone,
    title: "SMS Marketing",
    desc: "Direct-to-consumer text campaigns with 98% open rates. Reactivate old leads instantly."
  },
  {
    icon: Globe,
    title: "High-Convert Web",
    desc: "Landing pages designed for one purpose: Conversion. Fast, sleek, and optimized for mobile."
  },
  {
    icon: LineChart,
    title: "Real-Time Analytics",
    desc: "A custom dashboard showing you exactly what your ROI is. No vanity metrics, just revenue."
  }
];

const Services: React.FC = () => {
  return (
    <Section id="services" className="bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Capabilities engineered for <span className="text-cyan-400">Scale</span>
          </motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We don't just run ads. We build comprehensive ecosystems that attract, nurture, and convert high-value clients for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Services;
