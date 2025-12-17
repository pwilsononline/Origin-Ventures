import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, className = '', children }) => {
  return (
    <section id={id} className={`relative py-20 lg:py-32 overflow-hidden ${className}`}>
      {children}
    </section>
  );
};

export default Section;
