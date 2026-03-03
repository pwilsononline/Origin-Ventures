import React, { useState, useEffect } from 'react';
import { Menu, X, Command, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './ui/Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { 
      name: 'Services', 
      href: '#services',
      dropdown: [
        { name: 'Core Services', href: '#services' },
        { name: 'AI Photography', href: '#ai-photography' },
        { name: 'Web & Graphic Design', href: '#web-design' },
        { name: 'Mobile & Web Apps', href: '#app-development' },
      ]
    },
    { name: 'System', href: '#features' },
    { name: 'Industries', href: '#stats' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-white/5 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative w-8 h-8 flex items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg group-hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-shadow">
            <Command className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 group-hover:to-cyan-400 transition-all">
            Origin Ventures
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <a
                href={link.href}
                className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1"
              >
                {link.name}
                {link.dropdown && <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
              </a>
              
              {link.dropdown && (
                <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="bg-slate-900 border border-white/10 rounded-xl shadow-xl w-56 overflow-hidden flex flex-col">
                    {link.dropdown.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="px-4 py-3 text-sm text-slate-300 hover:bg-white/5 hover:text-cyan-400 transition-colors border-b border-white/5 last:border-0"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-white/10"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col gap-2">
                  <a
                    href={link.href}
                    className="text-lg font-medium text-slate-300 hover:text-cyan-400"
                    onClick={() => !link.dropdown && setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                  {link.dropdown && (
                    <div className="flex flex-col pl-4 gap-2 border-l border-white/10 ml-2">
                      {link.dropdown.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="text-base text-slate-400 hover:text-cyan-400 py-1"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Button variant="primary" className="w-full justify-center mt-2">
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;