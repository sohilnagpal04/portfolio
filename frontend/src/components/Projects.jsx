import React from 'react';
import { Github } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Projects = () => {
  const [headerRef, headerVisible] = useScrollReveal(0.2);
  const [gridRef, gridVisible] = useScrollReveal(0.1);

  const projects = [
    {
      title: 'Energy-Efficient IoT Forest Monitoring System',
      description: 'Distributed embedded monitoring system using Arduino Feather M0 microcontrollers and LoRa communication for remote environmental data collection.',
      technologies: ['Python', 'Arduino', 'LoRa', 'Raspberry Pi', 'Flask', 'SQLite'],
      highlights: [
        'Integrated environmental sensors for temperature, humidity, and voltage monitoring',
        'Built Flask backend for real-time telemetry data ingestion and processing',
        'Developed Raspberry Pi dashboard for system health monitoring',
        'Designed SQLite schema for time-series environmental data storage',
      ],
      year: '2025',
      githubUrl: 'https://github.com/sohilnagpal04',
      category: 'IoT',
    },
    {
      title: 'Sustainable Mushroom Production System',
      description: 'MERN-stack monitoring platform for real-time greenhouse environmental monitoring and automation with solar-powered IoT integration.',
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'IoT', 'MQTT', 'Solar Energy'],
      highlights: [
        'Integrated IoT sensors with MQTT pipelines for real-time data streaming',
        'Implemented backend APIs with MongoDB for secure environmental data storage',
        'Developed automation logic for greenhouse climate control',
        'Built responsive web interface for monitoring and control',
      ],
      year: '2023',
      githubUrl: 'https://github.com/sohilnagpal04',
      category: 'Full-Stack',
    },
    {
      title: 'Smart Shopping Store Management System',
      description: 'Python-based embedded retail automation system running on Raspberry Pi to support smart checkout workflows and real-time inventory management.',
      technologies: ['Python', 'Raspberry Pi', 'Embedded Systems', 'GUI Development'],
      highlights: [
        'Developed GUI interface for real-time product detection and billing',
        'Implemented software logic for hardware sensor integration',
        'Designed system architecture integrating embedded components',
        'Built dynamic billing system with automatic price calculation',
      ],
      year: '2022',
      githubUrl: 'https://github.com/sohilnagpal04',
      category: 'Embedded',
    },
    {
      title: 'OpenCV Bin Picking Challenge (BPC)',
      description: 'Contributed to a global robotics competition focused on 6DoF object pose estimation for robotic grasping using ROS2 and Docker-based pipeline.',
      technologies: ['Python', 'C++', 'ROS2', 'Docker', 'Computer Vision', 'OpenCV'],
      highlights: [
        'Developed perception pipeline for 6DoF object pose estimation',
        'Implemented ROS2 nodes for robotic grasping coordination',
        'Optimised Docker-based deployment for competition environment',
        'Integrated computer vision algorithms for object detection',
      ],
      year: '2024',
      category: 'Robotics',
    },
  ];

  const categoryColors = {
    IoT:          'bg-cyan-50 text-cyan-600 border-cyan-300 dark:bg-cyan-500/10 dark:text-cyan-400 dark:border-cyan-500/30',
    'Full-Stack':  'bg-violet-50 text-violet-600 border-violet-300 dark:bg-violet-500/10 dark:text-violet-400 dark:border-violet-500/30',
    Embedded:     'bg-cyan-50 text-cyan-600 border-cyan-300 dark:bg-cyan-500/10 dark:text-cyan-400 dark:border-cyan-500/30',
    Robotics:     'bg-violet-50 text-violet-600 border-violet-300 dark:bg-violet-500/10 dark:text-violet-400 dark:border-violet-500/30',
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-[#050508] relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-200/20 dark:bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={headerRef} className={`text-center mb-16 reveal ${headerVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-violet-600 mx-auto rounded-full mb-4" />
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my work in embedded systems, IoT platforms, robotics, and full-stack development
          </p>
        </div>

        <div ref={gridRef} className={`grid md:grid-cols-2 gap-6 reveal ${gridVisible ? 'visible' : ''}`}>
          {projects.map((project, i) => (
            <div key={i} className="glass-card rounded-2xl p-6 flex flex-col transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start justify-between mb-4">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${categoryColors[project.category]}`}>
                  {project.category}
                </span>
                <span className="text-gray-400 dark:text-gray-500 text-sm">{project.year}</span>
              </div>

              <h3 className="text-gray-900 dark:text-white text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-5">{project.description}</p>

              <ul className="space-y-2 mb-5 flex-grow">
                {project.highlights.map((h, idx) => (
                  <li key={idx} className="text-gray-500 dark:text-gray-400 text-sm flex items-start">
                    <span className="text-cyan-500 dark:text-cyan-400 mr-2 mt-0.5">▸</span>
                    {h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="text-xs px-2.5 py-1 rounded-md border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-cyan-600 dark:text-cyan-400 border border-cyan-300 dark:border-cyan-500/30 hover:border-cyan-500 hover:bg-cyan-50 dark:hover:border-cyan-400 dark:hover:bg-cyan-500/10 px-4 py-2 rounded-lg transition-all w-fit"
                >
                  <Github size={16} />
                  View Code
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
