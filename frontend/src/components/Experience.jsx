import React from 'react';
import { Building2, MapPin, Calendar, ArrowRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';

const Experience = () => {
  const technicalExperiences = [
    {
      title: 'Software Engineer Intern',
      company: 'VDOIT Technologies Ltd',
      location: 'Remote',
      period: 'Oct 2024 - Mar 2025',
      duration: '6 months',
      type: 'Internship',
      responsibilities: [
        'Developed and maintained production RESTful APIs using C#/.NET and ASP.NET WebAPI supporting real-time sports analytics data processing',
        'Optimised MSSQL queries and Entity Framework data access layers to improve database performance and query efficiency',
        'Implemented structured logging, debugging, and validation testing to improve reliability and maintainability of backend systems',
        'Contributed to Azure-based deployments and CI/CD pipelines supporting staging and production environments'
      ],
      technologies: ['C#', '.NET', 'ASP.NET WebAPI', 'MSSQL', 'Entity Framework', 'Azure', 'CI/CD']
    },
    {
      title: 'Research Assistant',
      company: 'Deakin University Robotics and IoT Lab',
      location: 'Melbourne, VIC',
      period: 'Nov 2024 - Feb 2025',
      duration: '4 months',
      type: 'Research',
      responsibilities: [
        'Developed Linux-based robotic coordination software for a dual-arm manipulation system using ROS',
        'Built real-time perception and control pipelines integrating sensor data with robotic motion systems',
        'Implemented Python and C++ modules for sensor processing, robot coordination, and system communication',
        'Performed systematic debugging and performance optimisation to improve synchronisation accuracy and reduce system latency'
      ],
      technologies: ['Python', 'C++', 'ROS', 'Linux', 'Robotics', 'Sensor Integration']
    },
    {
      title: 'Web Developer (Shopify)',
      company: 'Victorian Chamber of Commerce and Industry',
      location: 'Melbourne, VIC',
      period: 'Feb 2024 - Jun 2024',
      duration: '5 months',
      type: 'Contract',
      responsibilities: [
        'Enhanced a Shopify-based e-commerce platform using HTML, CSS, and JavaScript to improve usability and customer experience',
        'Integrated analytics and automation tools to support data-driven business insights and platform monitoring',
        'Improved website performance and functionality through structured debugging and frontend optimisation'
      ],
      technologies: ['Shopify', 'HTML', 'CSS', 'JavaScript', 'Analytics']
    }
  ];

  const otherExperience = {
    title: 'Team Member',
    company: 'Woolworths Group',
    location: 'Melbourne, VIC',
    period: 'Feb 2024 - Present',
    duration: 'Ongoing',
    type: 'Part-Time',
    responsibilities: [
      'Delivered customer service in a fast-paced retail environment while maintaining operational efficiency',
      'Managed inventory replenishment, stock rotation, and shelf organisation across multiple departments'
    ]
  };

  const getTypeColor = (type) => {
    const colors = {
      'Internship': 'bg-blue-600/20 text-blue-400 border-blue-600/30',
      'Research': 'bg-emerald-600/20 text-emerald-400 border-emerald-600/30',
      'Contract': 'bg-purple-600/20 text-purple-400 border-purple-600/30',
      'Part-Time': 'bg-gray-600/20 text-gray-400 border-gray-600/30'
    };
    return colors[type] || 'bg-gray-600/20 text-gray-400 border-gray-600/30';
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Software engineering, robotics research, and web development roles
          </p>
        </div>

        {/* Technical Experience Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <Building2 className="mr-3 text-blue-600 dark:text-blue-400" size={28} />
            Technical Roles
          </h3>

          <div className="space-y-6">
            {technicalExperiences.map((exp, index) => (
              <Card
                key={index}
                className="bg-white dark:bg-gray-900/50 border-gray-200 dark:border-gray-800 hover:border-blue-600/50 transition-all duration-300"
              >
                <CardContent className="p-6">
                  {/* Header Row */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-3 mb-2">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                          <Building2 className="text-blue-600 dark:text-blue-400" size={24} />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                            {exp.title}
                          </h4>
                          <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-start md:items-end gap-2 mt-3 md:mt-0">
                      <Badge className={getTypeColor(exp.type)}>
                        {exp.type}
                      </Badge>
                      <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                        <Calendar size={14} className="mr-1.5" />
                        {exp.period}
                      </div>
                      <div className="flex items-center text-gray-400 dark:text-gray-500 text-sm">
                        <MapPin size={14} className="mr-1.5" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <Separator className="my-4 bg-gray-200 dark:bg-gray-800" />

                  {/* Key Achievements */}
                  <div className="mb-4">
                    <h5 className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-3 uppercase tracking-wide">
                      Key Achievements & Responsibilities
                    </h5>
                    <ul className="space-y-2.5">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="text-gray-700 dark:text-gray-300 text-sm flex items-start leading-relaxed">
                          <ArrowRight size={16} className="text-blue-600 dark:text-blue-400 mr-2.5 mt-0.5 flex-shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  {exp.technologies.length > 0 && (
                    <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                      <h5 className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2.5 uppercase tracking-wide">
                        Technologies Used
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <Badge
                            key={idx}
                            variant="outline"
                            className="border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800/50 text-xs px-2.5 py-0.5"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Experience Section */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            <Building2 className="mr-3 text-gray-500 dark:text-gray-400" size={24} />
            Additional Experience
          </h3>

          <Card className="bg-gray-100 dark:bg-gray-900/30 border-gray-200 dark:border-gray-800">
            <CardContent className="p-5">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700/30 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Building2 className="text-gray-600 dark:text-gray-400" size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {otherExperience.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 font-medium">
                        {otherExperience.company}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start md:items-end gap-1.5 mt-2 md:mt-0 text-sm">
                  <Badge className={getTypeColor(otherExperience.type)} className="text-xs">
                    {otherExperience.type}
                  </Badge>
                  <div className="flex items-center text-gray-500 dark:text-gray-500 text-xs">
                    <Calendar size={12} className="mr-1" />
                    {otherExperience.period}
                  </div>
                  <div className="flex items-center text-gray-400 dark:text-gray-500 text-xs">
                    <MapPin size={12} className="mr-1" />
                    {otherExperience.location}
                  </div>
                </div>
              </div>

              <ul className="space-y-1.5 mt-3 ml-13">
                {otherExperience.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-gray-600 dark:text-gray-400 text-sm flex items-start">
                    <span className="text-gray-400 dark:text-gray-500 mr-2">•</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;