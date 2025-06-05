'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-primary text-white shadow-lg hover:bg-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
          whileHover={{ 
            scale: 1.1,
            boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.5)'
          }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
        >
          <FaArrowUp size={20} />
          <span className="sr-only">Scroll to top</span>
          
          {/* Ripple effect */}
          <motion.span
            className="absolute inset-0 rounded-full bg-white"
            initial={{ opacity: 0.3, scale: 0.8 }}
            animate={{
              scale: [0.8, 1.5],
              opacity: [0.3, 0]
            }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 1.5,
              repeatDelay: 1
            }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;