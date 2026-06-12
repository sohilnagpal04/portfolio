import React from 'react';
import { Code2, Cpu, Database, Zap } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const stats = [
  { value: '3', label: 'Technical Roles' },
  { value: '4+', label: 'Projects Built' },
  { value: '2+', label: 'Years Experience' },
  { value: '1', label: 'Honours Degree' },
];

const About = () => {
  const [headerRef, headerVisible] = useScrollReveal(0.2);
  const [leftRef, leftVisible] = useScrollReveal(0.15);
  const [rightRef, rightVisible] = useScrollReveal(0.15);
  const [statsRef, statsVisible] = useScrollReveal(0.2);

  const highlights = [
    { icon: Code2, title: 'Software Engineering', description: 'Full-stack development with Python, C/C++, C#, and JavaScript' },
    { icon: Cpu, title: 'Embedded Systems', description: 'IoT platforms, Arduino, Raspberry Pi, and sensor integration' },
    { icon: Database, title: 'Backend Development', description: 'RESTful APIs, distributed systems, and cloud platforms' },
    { icon: Zap, title: 'Robotics & Automation', description: 'ROS, real-time perception, and robotic control systems' },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-[#0a0a0f] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-200/30 dark:bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={headerRef} className={`text-center mb-16 reveal ${headerVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-violet-600 mx-auto rounded-full" />
        </div>

        <div ref={statsRef} className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 reveal ${statsVisible ? 'visible' : ''}`}>
          {stats.map((stat, i) => (
            <div key={i} className="glass-card text-center p-6 rounded-xl transition-all duration-300">
              <p className="text-4xl font-bold gradient-text mb-1">{stat.value}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div ref={leftRef} className={`space-y-5 reveal-left ${leftVisible ? 'visible' : ''}`}>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              I'm a <span className="text-cyan-600 dark:text-cyan-400 font-semibold">Software Engineering (Honours)</span> graduate from{' '}
              <span className="text-cyan-600 dark:text-cyan-400 font-semibold">Deakin University</span> in Melbourne, Australia, with a minor in Artificial Intelligence.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              My passion lies in building <span className="text-gray-900 dark:text-white font-medium">reliable, real-world systems</span> that bridge software and hardware. I have hands-on experience developing embedded IoT platforms, robotics software pipelines, and backend systems.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              I've worked across <span className="text-gray-900 dark:text-white font-medium">academic research</span> and <span className="text-gray-900 dark:text-white font-medium">industry projects</span>, contributing to production APIs, robotic coordination software, and cloud-connected platforms.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              Currently seeking <span className="text-cyan-600 dark:text-cyan-400 font-semibold">graduate or junior software engineering roles</span> where I can build impactful solutions.
            </p>
          </div>

          <div ref={rightRef} className={`grid grid-cols-1 sm:grid-cols-2 gap-4 reveal-right ${rightVisible ? 'visible' : ''}`}>
            {highlights.map((item, i) => (
              <div key={i} className="glass-card rounded-xl p-6 transition-all duration-300 hover:-translate-y-1">
                <item.icon className="w-10 h-10 text-cyan-500 dark:text-cyan-400 mb-4" />
                <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
