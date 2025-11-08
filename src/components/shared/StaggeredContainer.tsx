import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface StaggeredContainerProps {
  children: ReactNode;
  className?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const StaggeredContainer = ({ 
  children, 
  className = '' 
}: StaggeredContainerProps) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1, margin: '-100px' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default StaggeredContainer;

