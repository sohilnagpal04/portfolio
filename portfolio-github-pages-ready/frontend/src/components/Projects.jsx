import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'Energy-Efficient IoT Forest Monitoring System',
      description: 'Distributed embedded monitoring system using Arduino Feather M0 microcontrollers and LoRa communication for remote environmental data collection.',
      technologies: ['Python', 'Arduino', 'LoRa', 'Raspberry Pi', 'Flask', 'SQLite'],
      highlights: [
        'Integrated environmental sensors for temperature, humidity, and voltage monitoring',
        'Built Flask backend for real-time telemetry data ingestion and processing',
        'Developed Raspberry Pi dashboard for system health and environmental monitoring',
        'Designed SQLite schema for time-series environmental data storage'
      ],
      year: '2025',
      githubUrl: 'https://github.com/sohilnagpal04',
      category: 'IoT'
    },
    {
      title: 'Sustainable Mushroom Production System',
      description: 'MERN-stack monitoring platform for real-time greenhouse environmental monitoring and automation with solar-powered IoT integration.',
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'IoT', 'MQTT', 'Solar Energy'],
      highlights: [
        'Integrated IoT sensors with MQTT pipelines for real-time data streaming',
        'Implemented backend APIs with MongoDB for secure environmental data storage',
        'Developed automation logic for greenhouse climate control',
        'Built responsive web interface for monitoring and control'
      ],
      year: '2023',
      githubUrl: 'https://github.com/sohilnagpal04',
      category: 'Full-Stack'
    },
    {
      title: 'Smart Shopping Store Management System',
      description: 'Python-based embedded retail automation system running on Raspberry Pi to support smart checkout workflows and real-time inventory management.',
      technologies: ['Python', 'Raspberry Pi', 'Embedded Systems', 'GUI Development'],
      highlights: [
        'Developed GUI interface for real-time product detection and billing',
        'Implemented software logic for hardware sensor integration',
        'Designed system architecture integrating embedded components',
        'Built dynamic billing system with automatic price calculation'
      ],
      year: '2022',
      githubUrl: 'https://github.com/sohilnagpal04',
      category: 'Embedded'
    },
    {
      title: 'OpenCV Bin Picking Challenge (BPC)',
      description: 'Contributed to a global robotics competition focused on 6DoF object pose estimation for robotic grasping using ROS2 and Docker-based pipeline.',
      technologies: ['Python', 'C++', 'ROS2', 'Docker', 'Computer Vision', 'OpenCV'],
      highlights: [
        'Developed perception pipeline for 6DoF object pose estimation',
        'Implemented ROS2 nodes for robotic grasping coordination',
        'Optimized Docker-based deployment for competition environment',
        'Integrated computer vision algorithms for object detection'
      ],
      year: '2024',
      category: 'Robotics'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my work in embedded systems, IoT platforms, robotics, and full-stack development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-white dark:bg-gray-900/50 border-gray-200 dark:border-gray-800 hover:border-blue-600/50 transition-all duration-300 hover:transform hover:-translate-y-2 flex flex-col"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge className="bg-blue-100 dark:bg-blue-600/20 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-600/30">
                    {project.category}
                  </Badge>
                  <span className="text-gray-500 dark:text-gray-500 text-sm">{project.year}</span>
                </div>
                <CardTitle className="text-gray-900 dark:text-white text-2xl mb-2">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                {/* Key Highlights */}
                <div className="mb-6">
                  <h4 className="text-gray-900 dark:text-white font-semibold mb-3 text-sm">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-gray-600 dark:text-gray-400 text-sm flex items-start">
                        <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800/50"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <Button
                      asChild
                      variant="outline"
                      className="border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-600/10 flex-1"
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2" size={16} />
                        View Code
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;