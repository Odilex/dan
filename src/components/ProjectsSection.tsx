'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiTailwindcss, SiTypescript, SiDjango, SiPostgresql, SiNextdotjs } from 'react-icons/si';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  liveLink?: string;
  image: string;
  icons: React.ReactNode[];
}

const hahaOnlineImages = [
  'https://images.unsplash.com/photo-1515168833906-d2a3b82b1e6e?q=80&w=1000',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000',
  'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1000',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=1000',
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000',
];
function getRandomHahaOnlineImage() {
  return hahaOnlineImages[Math.floor(Math.random() * hahaOnlineImages.length)];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Reminder App',
    description: 'A smart schedule app developed with Flutter to help users organize tasks, set reminders, and boost productivity with a beautiful mobile experience.',
    technologies: ['Flutter', 'Dart', 'Firebase'],
    githubLink: 'https://github.com/murenz1/reminder-app',
    liveLink: undefined, // No live web demo for mobile app
    image: '/reminder.jpg',
    icons: [<SiTailwindcss key="tailwind" />, <SiTypescript key="typescript" />],
  },
  {
    id: 2,
    title: 'Medtrack',
    description: 'Medtrack is a software that enables patients to view and list their medicines for reminders, while doctors can update patients\' medicines. Built with PHP Laravel.',
    technologies: ['PHP', 'Laravel', 'MySQL'],
    githubLink: 'https://github.com/murenz1/medtrack', // Update with actual repo if available
    image: '/medtrack-ui.png', // Use the newly provided Medtrack UI image
    icons: [], // Add relevant icons if desired
  },
  {
    id: 3,
    title: 'HahaOnline Application',
    description: 'A local market ecommerce application enabling users to browse, buy, and sell products in their community. Built with React Native and Expo for seamless mobile experience.',
    technologies: ['React Native', 'Expo', 'JavaScript', 'Firebase'],
    githubLink: 'https://github.com/murenz1/hahaonline',
    liveLink: undefined, // No live web demo for mobile app
    image: '/hahaonline.png',
    icons: [<FaReact key="react" />, <SiTypescript key="typescript" />, <SiTailwindcss key="tailwind" />],
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website showcasing my projects and skills. Features smooth animations and dark mode support.',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    githubLink: 'https://github.com/murenz1/portfolio',
    liveLink: 'https://murenzidan.vercel.app',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000',
    icons: [<SiNextdotjs key="next" />, <SiTailwindcss key="tailwind" />, <SiTypescript key="typescript" />],
  },
];

const ProjectsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleAccessRequest = () => {
    // Smooth scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const showAccessAlert = () => {
    const result = window.confirm('Access Required. Would you like to request access?');
    if (result) {
      handleAccessRequest();
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <section 
      id="projects" 
      className="section-padding relative overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #f9fafb, #f3f4f6)',
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-40 right-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-40 left-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6 text-gray-800"
          >
            My Projects
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
            Here are some of my recent projects. Each one presented unique challenges and opportunities to grow as a developer.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  const [cardRef, cardInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 card-hover"
    >
      <div className="relative h-56 bg-gray-200 overflow-hidden">
        <Image 
          src={project.image} 
          alt={project.title}
          fill
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
        
        <div className="mb-6 flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <motion.a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors hover-lift"
              whileHover={{ scale: 1.05 }}
            >
              <FaGithub /> Code
            </motion.a>
            {project.liveLink && (
              <motion.a 
                href={project.liveLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors hover-lift"
                whileHover={{ scale: 1.05 }}
              >
                <FaExternalLinkAlt /> Live Demo
              </motion.a>
            )}
          </div>
          
          <div className="flex gap-2">
            {project.icons.map((icon, index) => (
              <span key={index} className="text-gray-500">
                {icon}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsSection;