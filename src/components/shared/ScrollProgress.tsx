import { motion, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-gray-800 z-50">
      <motion.div
        className="h-full bg-geng-gold"
        style={{ scaleX: scrollYProgress, transformOrigin: 'left' }}
      />
    </div>
  );
};

export default ScrollProgress;

