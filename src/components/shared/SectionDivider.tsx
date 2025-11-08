import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionDividerProps {
  children: ReactNode;
  className?: string;
  size?: 'default' | 'small';
}

const SectionDivider = ({ children, className = '', size = 'default' }: SectionDividerProps) => {
  const paddingClass = size === 'small' ? 'py-8' : 'py-20';
  const textSizeClass = size === 'small' ? 'text-3xl md:text-4xl' : 'text-5xl md:text-7xl';
  const marginBottomClass = size === 'small' ? 'mb-6' : 'mb-12';
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`${paddingClass} ${className}`}
    >
      <div className={`flex items-center justify-center gap-4 ${marginBottomClass}`}>
        <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-geng-gold flex-1 max-w-32" />
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`${textSizeClass} font-bold text-white tracking-tight`}
        >
          {children}
        </motion.h2>
        <div className="h-px bg-gradient-to-l from-transparent via-gray-600 to-geng-gold flex-1 max-w-32" />
      </div>
    </motion.div>
  );
};

export default SectionDivider;

