import React from 'react';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: ['Python', 'C/C++', 'C#', 'JavaScript', 'TypeScript', 'SQL', 'Ruby']
    },
    {
      category: 'Embedded & Robotics',
      skills: ['Arduino', 'Raspberry Pi', 'Microcontrollers', 'Sensor Integration', 'ROS', 'LoRa', 'MQTT']
    },
    {
      category: 'Frameworks & APIs',
      skills: ['Flask', 'ASP.NET WebAPI', 'Node.js', 'React', 'Express.js', 'Entity Framework']
    },
    {
      category: 'Databases',
      skills: ['Microsoft SQL Server', 'SQLite', 'MongoDB', 'Entity Framework']
    },
    {
      category: 'Cloud & DevOps',
      skills: ['Docker', 'Microsoft Azure', 'AWS', 'Git', 'GitHub Actions', 'CI/CD']
    },
    {
      category: 'Systems & Tools',
      skills: ['Linux', 'Visual Studio', 'VS Code', 'Shopify', 'REST API Design']
    },
    {
      category: 'Practices & Methodologies',
      skills: [
        'Object-Oriented Programming',
        'Embedded Systems Development',
        'REST API Design',
        'Debugging',
        'Distributed Systems',
        'Agile Development'
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building embedded systems, backend platforms, and distributed applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-white dark:bg-gray-900/50 border-gray-200 dark:border-gray-800 hover:border-blue-600/30 transition-all duration-300"
            >
              <CardContent className="p-6">
                <h3 className="text-gray-900 dark:text-white font-semibold text-xl mb-4">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge
                      key={idx}
                      className="bg-blue-100 dark:bg-blue-600/20 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-600/30 hover:bg-blue-200 dark:hover:bg-blue-600/30 transition-colors px-3 py-1"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;