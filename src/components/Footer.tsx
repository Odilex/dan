'use client';

import { motion } from 'framer-motion';
import { FaHeart, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-primary to-blue-400"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-900/20 rounded-full mix-blend-overlay filter blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-900/20 rounded-full mix-blend-overlay filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <motion.h3 
              className="text-xl font-bold mb-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Murenzi Dan
            </motion.h3>
            <motion.p 
              className="text-gray-400 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              A passionate full-stack developer focused on creating intuitive and efficient web applications.
            </motion.p>
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <a 
                href="https://github.com/murenz1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaGithub size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/murenzidan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
              <a 
                href="mailto:murenzidan1@gmail.com" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaEnvelope size={20} />
              </a>
            </motion.div>
          </div>
          
          <div>
            <motion.h3 
              className="text-xl font-bold mb-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Quick Links
            </motion.h3>
            <motion.ul 
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              </li>
            </motion.ul>
          </div>
          
          <div>
            <motion.h3 
              className="text-xl font-bold mb-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Contact
            </motion.h3>
            <motion.div 
              className="space-y-2 text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p>Kigali, Rwanda</p>
              <p>+250 786 493 820</p>
              <p>murenzidan1@gmail.com</p>
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} Murenzi Dan. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center">
            Made with <FaHeart className="text-red-500 mx-1" /> using Next.js & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;