import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionDividerProps {
  children: ReactNode;
  className?: string;
}

const SectionDivider = ({ children, className = '' }: SectionDividerProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`py-20 ${className}`}
    >
      <div className="flex items-center justify-center gap-4 mb-12">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-geng-gold flex-1 max-w-32" />
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-white tracking-tight"
        >
          {children}
        </motion.h2>
        <div className="h-px bg-gradient-to-l from-transparent via-gray-600 to-geng-gold flex-1 max-w-32" />
      </div>
    </motion.div>
  );
};

export default SectionDivider;

