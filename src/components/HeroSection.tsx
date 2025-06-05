'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center section-padding relative overflow-hidden"
      style={{
        backgroundImage: 'url(/hero-pattern.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-64 h-64 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            className="md:w-3/5"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Available for freelance work
            </motion.span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800 leading-tight">
              Hi, I'm <span className="text-primary">Murenzi Dan</span> – Fullstack Developer building scalable and user-friendly web apps.
            </h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Skilled in both frontend and backend technologies including React, Node.js, and MongoDB.
              I create elegant solutions that combine powerful functionality with intuitive user experiences.
            </motion.p>

            <motion.div 
              className="flex flex-col gap-2 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <div className="flex items-center gap-2 text-gray-600">
                <MdLocationOn className="text-primary" />
                <span>Kigali, Rwanda</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <MdPhone className="text-primary" />
                <span>+250 786 493 820</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <MdEmail className="text-primary" />
                <span>murenzidan1@gmail.com</span>
              </div>
            </motion.div>
            
            <div className="flex flex-wrap gap-4">
              <motion.a 
                href="#contact" 
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                Get in Touch
              </motion.a>
              <motion.a 
                href="#projects" 
                className="btn btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                View Projects
              </motion.a>
            </div>
            
            <motion.div 
              className="flex mt-8 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <motion.a 
                href="https://github.com/murenz1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <FaGithub size={24} />
              </motion.a>
              <motion.a 
                href="https://linkedin.com/in/murenzidan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <FaLinkedin size={24} />
              </motion.a>
              <motion.a 
                href="mailto:murenzidan1@gmail.com" 
                className="text-gray-600 hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <MdEmail size={24} />
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:w-2/5"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 opacity-20"
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              ></motion.div>
              
              <motion.div 
                className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-300 to-blue-500 opacity-20"
                animate={{ 
                  scale: [1, 1.1, 1],
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 0.5
                }}
              ></motion.div>
              
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image 
                  src="/profile.svg" 
                  alt="Murenzi Dan" 
                  width={300} 
                  height={300} 
                  className="rounded-full shadow-lg"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;