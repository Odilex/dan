'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={variants}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            I'm a fullstack developer passionate about turning complex problems into elegant code. 
            I love building applications that make a real impact, from intuitive UIs to powerful APIs.
          </p>
          
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            With a strong foundation in both frontend and backend technologies, I enjoy the 
            challenge of creating seamless, efficient, and user-friendly applications. My approach 
            combines technical expertise with creative problem-solving to deliver solutions that 
            exceed expectations.
          </p>
          
          <div className="flex justify-center">
            <a 
              href="#contact" 
              className="btn btn-primary"
            >
              Let's Work Together
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;