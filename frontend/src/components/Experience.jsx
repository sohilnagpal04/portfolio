import React from 'react';
import { Building2, MapPin, Calendar, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Experience = () => {
  const [headerRef, headerVisible] = useScrollReveal(0.2);
  const [contentRef, contentVisible] = useScrollReveal(0.1);

  const technicalExperiences = [
    {
      title: 'Software Engineer Intern',
      company: 'VDOIT Technologies Ltd',
      location: 'Remote',
      period: 'Oct 2024 – Mar 2025',
      type: 'Internship',
      typeColor: 'bg-cyan-50 text-cyan-600 border-cyan-200 dark:bg-cyan-500/10 dark:text-cyan-400 dark:border-cyan-500/30',
      responsibilities: [
        'Developed and maintained production RESTful APIs using C#/.NET and ASP.NET WebAPI supporting real-time sports analytics data processing',
        'Optimised MSSQL queries and Entity Framework data access layers to improve database performance',
        'Implemented structured logging, debugging, and validation testing to improve reliability',
        'Contributed to Azure-based deployments and CI/CD pipelines for staging and production',
      ],
      technologies: ['C#', '.NET', 'ASP.NET WebAPI', 'MSSQL', 'Entity Framework', 'Azure', 'CI/CD'],
    },
    {
      title: 'Research Assistant',
      company: 'Deakin University Robotics and IoT Lab',
      location: 'Melbourne, VIC',
      period: 'Nov 2024 – Feb 2025',
      type: 'Research',
      typeColor: 'bg-violet-50 text-violet-600 border-violet-200 dark:bg-violet-500/10 dark:text-violet-400 dark:border-violet-500/30',
      responsibilities: [
        'Developed Linux-based robotic coordination software for a dual-arm manipulation system using ROS',
        'Built real-time perception and control pipelines integrating sensor data with robotic motion systems',
        'Implemented Python and C++ modules for sensor processing, robot coordination, and system communication',
        'Performed systematic debugging and performance optimisation to reduce system latency',
      ],
      technologies: ['Python', 'C++', 'ROS', 'Linux', 'Robotics', 'Sensor Integration'],
    },
    {
      title: 'Web Developer (Shopify)',
      company: 'Victorian Chamber of Commerce and Industry',
      location: 'Melbourne, VIC',
      period: 'Feb 2024 – Jun 2024',
      type: 'Contract',
      typeColor: 'bg-emerald-50 text-emerald-600 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/30',
      responsibilities: [
        'Enhanced a Shopify-based e-commerce platform using HTML, CSS, and JavaScript',
        'Integrated analytics and automation tools to support data-driven business insights',
        'Improved website performance and functionality through structured debugging',
      ],
      technologies: ['Shopify', 'HTML', 'CSS', 'JavaScript', 'Analytics'],
    },
  ];

  const otherExperience = {
    title: 'Team Member',
    company: 'Woolworths Group',
    location: 'Melbourne, VIC',
    period: 'Feb 2024 – Present',
    type: 'Part-Time',
    responsibilities: [
      'Delivered customer service in a fast-paced retail environment',
      'Managed inventory replenishment, stock rotation, and shelf organisation',
    ],
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-[#050508] relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-200/20 dark:bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={headerRef} className={`text-center mb-16 reveal ${headerVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-violet-600 mx-auto rounded-full mb-4" />
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Software engineering, robotics research, and web development roles
          </p>
        </div>

        <div ref={contentRef} className={`space-y-5 reveal ${contentVisible ? 'visible' : ''}`}>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <Building2 className="text-cyan-500 dark:text-cyan-400" size={22} />
            Technical Roles
          </h3>

          {technicalExperiences.map((exp, i) => (
            <div key={i} className="glass-card rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <Building2 className="text-cyan-500 dark:text-cyan-400" size={22} />
                  </div>
                  <div>
                    <h4 className="text-gray-900 dark:text-white text-xl font-bold">{exp.title}</h4>
                    <p className="text-cyan-600 dark:text-cyan-400 font-semibold">{exp.company}</p>
                  </div>
                </div>
                <div className="flex flex-col items-start md:items-end gap-2 mt-3 md:mt-0">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${exp.typeColor}`}>{exp.type}</span>
                  <span className="flex items-center text-gray-400 dark:text-gray-500 text-xs gap-1"><Calendar size={12} />{exp.period}</span>
                  <span className="flex items-center text-gray-400 dark:text-gray-500 text-xs gap-1"><MapPin size={12} />{exp.location}</span>
                </div>
              </div>

              <div className="border-t border-gray-100 dark:border-white/5 pt-4 mb-4">
                <ul className="space-y-2">
                  {exp.responsibilities.map((r, idx) => (
                    <li key={idx} className="text-gray-600 dark:text-gray-400 text-sm flex items-start gap-2">
                      <ArrowRight size={14} className="text-cyan-500 dark:text-cyan-400 mt-0.5 flex-shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, idx) => (
                  <span key={idx} className="text-xs px-2.5 py-1 rounded-md border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}

          <h3 className="text-lg font-bold text-gray-500 dark:text-gray-400 mt-8 mb-4 flex items-center gap-3">
            <Building2 className="text-gray-400 dark:text-gray-500" size={20} />
            Additional Experience
          </h3>
          <div className="glass-card rounded-xl p-5 opacity-80">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center flex-shrink-0">
                  <Building2 className="text-gray-400" size={18} />
                </div>
                <div>
                  <h4 className="text-gray-800 dark:text-white font-semibold">{otherExperience.title}</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{otherExperience.company}</p>
                </div>
              </div>
              <div className="flex flex-col items-start md:items-end gap-1 mt-2 md:mt-0 text-xs text-gray-400">
                <span className="px-2.5 py-0.5 rounded-full border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400">{otherExperience.type}</span>
                <span className="flex items-center gap-1"><Calendar size={11} />{otherExperience.period}</span>
                <span className="flex items-center gap-1"><MapPin size={11} />{otherExperience.location}</span>
              </div>
            </div>
            <ul className="space-y-1.5">
              {otherExperience.responsibilities.map((r, idx) => (
                <li key={idx} className="text-gray-500 dark:text-gray-500 text-sm flex items-start gap-2">
                  <span className="text-gray-400 mt-0.5">•</span>{r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
