import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Skills = () => {
  const [headerRef, headerVisible] = useScrollReveal(0.2);
  const [gridRef, gridVisible] = useScrollReveal(0.1);

  const skillCategories = [
    { category: 'Programming Languages', skills: ['Python', 'C/C++', 'C#', 'JavaScript', 'TypeScript', 'SQL', 'Ruby'] },
    { category: 'Embedded & Robotics', skills: ['Arduino', 'Raspberry Pi', 'Microcontrollers', 'Sensor Integration', 'ROS', 'LoRa', 'MQTT'] },
    { category: 'Frameworks & APIs', skills: ['Flask', 'ASP.NET WebAPI', 'Node.js', 'React', 'Express.js', 'Entity Framework'] },
    { category: 'Databases', skills: ['Microsoft SQL Server', 'SQLite', 'MongoDB', 'Entity Framework'] },
    { category: 'Cloud & DevOps', skills: ['Docker', 'Microsoft Azure', 'AWS', 'Git', 'GitHub Actions', 'CI/CD'] },
    { category: 'Systems & Tools', skills: ['Linux', 'Visual Studio', 'VS Code', 'Shopify', 'REST API Design'] },
    { category: 'Practices', skills: ['OOP', 'Embedded Systems Development', 'REST API Design', 'Debugging', 'Distributed Systems', 'Agile'] },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-[#0a0a0f] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-100/40 dark:bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={headerRef} className={`text-center mb-16 reveal ${headerVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-violet-600 mx-auto rounded-full mb-4" />
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building embedded systems, backend platforms, and distributed applications
          </p>
        </div>

        <div ref={gridRef} className={`grid md:grid-cols-2 gap-5 reveal ${gridVisible ? 'visible' : ''}`}>
          {skillCategories.map((cat, i) => (
            <div key={i} className="glass-card rounded-xl p-6 transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-500" />
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-sm px-3 py-1 rounded-full border border-cyan-200 dark:border-cyan-500/20 bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 hover:border-cyan-400 dark:hover:border-cyan-400/50 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
