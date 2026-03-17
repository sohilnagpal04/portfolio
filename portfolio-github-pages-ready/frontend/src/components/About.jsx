import React from 'react';
import { Code2, Cpu, Database, Zap } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Software Engineering',
      description: 'Full-stack development with Python, C/C++, C#, and JavaScript'
    },
    {
      icon: Cpu,
      title: 'Embedded Systems',
      description: 'IoT platforms, Arduino, Raspberry Pi, and sensor integration'
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'RESTful APIs, distributed systems, and cloud platforms'
    },
    {
      icon: Zap,
      title: 'Robotics & Automation',
      description: 'ROS, real-time perception, and robotic control systems'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6">
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              I'm a <span className="text-blue-600 dark:text-blue-400 font-semibold">Software Engineering (Honours)</span> graduate from{' '}
              <span className="text-blue-600 dark:text-blue-400 font-semibold">Deakin University</span> in Melbourne, Australia, with a minor in Artificial Intelligence.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              My passion lies in building <span className="text-gray-900 dark:text-white font-medium">reliable, real-world systems</span> that bridge software and hardware. I have hands-on experience developing embedded IoT platforms, robotics software pipelines, and backend systems using microcontrollers, sensors, and distributed architectures.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              I've worked across <span className="text-gray-900 dark:text-white font-medium">academic research</span> and <span className="text-gray-900 dark:text-white font-medium">industry projects</span>, contributing to production APIs, robotic coordination software, and cloud-connected platforms. My work focuses on real-time data processing, system integration, and solving technical challenges in embedded and distributed environments.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              Currently seeking <span className="text-blue-600 dark:text-blue-400 font-semibold">graduate or junior software engineering roles</span> where I can apply my technical skills to build impactful solutions.
            </p>
          </div>

          {/* Right: Highlights Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <Card
                key={index}
                className="bg-gray-50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-800 hover:border-blue-600/50 transition-all duration-300 hover:transform hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <highlight.icon className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-4" />
                  <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;