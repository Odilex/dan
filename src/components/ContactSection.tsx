'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaPhone } from 'react-icons/fa';

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError('');

    // Validate form
    if (!formState.name || !formState.email || !formState.message) {
      setFormError('Please fill in all fields');
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      setFormError('Please enter a valid email address');
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <section 
      id="contact" 
      className="section-padding relative overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #f3f4f6, #e5e7eb)',
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6 text-gray-800"
          >
            Get In Touch
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-primary mx-auto mb-8"
            initial={{ width: 0 }}
            animate={inView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-2xl mx-auto text-gray-600 text-lg"
          >
            Have a question or want to work together? Feel free to reach out!
          </motion.p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Send Me a Message</h3>
            
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
              >
                <FaCheckCircle className="text-green-500 text-4xl mx-auto mb-4" />
                <h4 className="text-xl font-bold text-gray-800 mb-2">Message Sent!</h4>
                <p className="text-gray-600">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Your email"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                {formError && (
                  <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-lg">
                    {formError}
                  </div>
                )}
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            )}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-xl shadow-lg p-8 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <FaEnvelope className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Email</h4>
                    <a href="mailto:murenzidan1@gmail.com" className="text-primary hover:underline">
                      murenzidan1@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <FaMapMarkerAlt className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Location</h4>
                    <p className="text-gray-600">Kigali, Rwanda</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <FaPhone className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Phone</h4>
                    <p className="text-gray-600">+250 786 493 820</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="font-bold text-gray-800 mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <motion.a 
                  href="https://github.com/murenz1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-primary hover:text-white transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub size={20} />
                </motion.a>
                <motion.a 
                  href="https://linkedin.com/in/murenzidan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-primary hover:text-white transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaLinkedin size={20} />
                </motion.a>
                <motion.a 
                  href="mailto:murenzidan1@gmail.com" 
                  className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-primary hover:text-white transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaEnvelope size={20} />
                </motion.a>
              </div>
            </div>
            
            <div className="mt-10 p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
              <h4 className="font-bold text-gray-800 mb-2">Available for Freelance</h4>
              <p className="text-gray-600 mb-4">I'm currently available for freelance work and new opportunities.</p>
              <a 
                href="mailto:murenzidan1@gmail.com?subject=Freelance%20Opportunity" 
                className="inline-flex items-center text-primary hover:underline"
              >
                Let's discuss your project <span className="ml-1">→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;