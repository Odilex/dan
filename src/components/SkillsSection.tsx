'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaReact, FaNodeJs, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiTypescript, SiFirebase } from 'react-icons/si';
import Image from 'next/image';

interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string;
}

const skills: Skill[] = [
  { name: 'React', icon: <FaReact size={36} />, color: '#61DAFB' },
  { name: 'Node.js', icon: <FaNodeJs size={36} />, color: '#339933' },
  { name: 'Express', icon: <SiExpress size={36} />, color: '#000000' },
  { name: 'MongoDB', icon: <SiMongodb size={36} />, color: '#47A248' },
  { name: 'TypeScript', icon: <SiTypescript size={36} />, color: '#3178C6' },
  { name: 'Firebase', icon: <SiFirebase size={36} />, color: '#FFCA28' },
  { name: 'Git', icon: <FaGitAlt size={36} />, color: '#F05032' },
  { name: 'GitHub', icon: <FaGithub size={36} />, color: '#181717' },
];

const SkillsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section 
      id="skills" 
      className="section-padding relative overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #ffffff, #f9fafb)',
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6 text-gray-800"
          >
            My Skills
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
            I specialize in these technologies to build modern, efficient, and scalable web applications.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mb-16"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="flex flex-col items-center"
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <div className="relative w-24 h-24 mb-4 flex items-center justify-center">
                <div className="absolute inset-0">
                  <Image 
                    src="/skill-bg.svg" 
                    alt="" 
                    fill 
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <div className="relative z-10" style={{ color: skill.color }}>
                  {skill.icon}
                </div>
                <motion.div 
                  className="absolute inset-0 rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.2, 1] }}
                  transition={{ 
                    delay: 0.2 + index * 0.1, 
                    duration: 0.8, 
                    ease: "easeInOut" 
                  }}
                  style={{ 
                    background: `radial-gradient(circle, ${skill.color}10 0%, transparent 70%)`,
                    opacity: 0.6
                  }}
                />
              </div>
              <h3 className="font-medium text-gray-800">{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>

        <div className="bg-white rounded-xl p-8 shadow-lg">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-800">My Approach</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                I believe in writing clean, maintainable code that solves real problems. My development process focuses on understanding user needs first, then implementing solutions with the right technologies.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I'm constantly learning and adapting to new technologies and best practices. Whether it's optimizing performance, improving accessibility, or implementing security measures, I strive to deliver high-quality applications.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative h-64 md:h-80 rounded-lg overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center"
            >
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
              </div>
              
              <div className="relative z-10 text-center p-6">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <FaReact size={40} className="text-primary animate-slow-spin" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">Always Improving</h4>
                <p className="text-gray-600">
                  Committed to continuous learning and staying updated with the latest web development trends and technologies.
                </p>
              </div>
              
              {/* Animated dots */}
              <motion.div 
                className="absolute top-10 right-10 w-4 h-4 rounded-full bg-blue-400"
                animate={{ 
                  y: [0, 10, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2,
                  ease: "easeInOut" 
                }}
              />
              <motion.div 
                className="absolute bottom-10 left-10 w-3 h-3 rounded-full bg-green-400"
                animate={{ 
                  y: [0, -8, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1.5,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;