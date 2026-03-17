import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Education Card */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gray-50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-800 hover:border-blue-600/50 transition-all duration-300">
            <CardHeader>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-600/20 rounded-lg flex items-center justify-center mr-4">
                    <GraduationCap className="text-blue-600 dark:text-blue-400" size={28} />
                  </div>
                  <div>
                    <CardTitle className="text-gray-900 dark:text-white text-2xl mb-1">
                      Bachelor of Software Engineering (Honours)
                    </CardTitle>
                    <p className="text-blue-600 dark:text-blue-400 text-lg font-medium">Deakin University</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400 text-sm">
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  Jul 2021 - Jun 2025
                </div>
                <div className="flex items-center">
                  <Award size={16} className="mr-2" />
                  WAM: 79
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Minor */}
                <div>
                  <h4 className="text-gray-900 dark:text-white font-semibold mb-2">Minor:</h4>
                  <Badge className="bg-blue-100 dark:bg-blue-600/20 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-600/30">
                    Artificial Intelligence
                  </Badge>
                </div>

                {/* Relevant Coursework */}
                <div>
                  <h4 className="text-gray-900 dark:text-white font-semibold mb-3">Relevant Coursework:</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Software Engineering',
                      'Distributed Systems',
                      'Artificial Intelligence',
                      'Computer Vision',
                      'Cloud Computing'
                    ].map((course, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800/50"
                      >
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Projects & Activities */}
                <div>
                  <h4 className="text-gray-900 dark:text-white font-semibold mb-3">Projects & Activities:</h4>
                  <ul className="space-y-3">
                    <li className="text-gray-700 dark:text-gray-400 flex items-start">
                      <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1">•</span>
                      <span>
                        <strong className="text-gray-900 dark:text-white">OpenCV Bin Picking Challenge (BPC):</strong> Participated in a global robotics competition focused on 6DoF object pose estimation for robotic grasping. Contributed to a ROS2 and Docker-based pipeline using Python and C++.
                      </span>
                    </li>
                    <li className="text-gray-700 dark:text-gray-400 flex items-start">
                      <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1">•</span>
                      <span>
                        <strong className="text-gray-900 dark:text-white">Student Ambassador:</strong> Selected to represent Deakin University at Open Day 2024 and 2025, demonstrating 3D printing and laser cutting technologies at the Makerspace.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;