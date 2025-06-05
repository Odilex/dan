'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="#hero" className="text-xl font-bold text-primary">MD</Link>
        
        <nav className="hidden md:flex space-x-8">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>

        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </motion.header>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <Link 
      href={href} 
      className="text-gray-700 hover:text-primary transition-colors duration-300"
    >
      {children}
    </Link>
  );
};

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-700 focus:outline-none"
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {isOpen && (
        <motion.div 
          className="absolute top-16 right-0 left-0 bg-white shadow-md py-4 px-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col space-y-4">
            <MobileNavLink href="#about" onClick={() => setIsOpen(false)}>About</MobileNavLink>
            <MobileNavLink href="#projects" onClick={() => setIsOpen(false)}>Projects</MobileNavLink>
            <MobileNavLink href="#skills" onClick={() => setIsOpen(false)}>Skills</MobileNavLink>
            <MobileNavLink href="#contact" onClick={() => setIsOpen(false)}>Contact</MobileNavLink>
          </div>
        </motion.div>
      )}
    </div>
  );
};

const MobileNavLink = ({ 
  href, 
  children, 
  onClick 
}: { 
  href: string; 
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <Link 
      href={href} 
      className="text-gray-700 hover:text-primary transition-colors duration-300 block py-2"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Navbar;