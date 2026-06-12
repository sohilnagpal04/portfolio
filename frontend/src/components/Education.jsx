import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Education = () => {
  const [ref, visible] = useScrollReveal(0.2);
  const courses = ['Software Engineering', 'Distributed Systems', 'Artificial Intelligence', 'Computer Vision', 'Cloud Computing'];

  return (
    <section id="education" className="py-20 bg-white dark:bg-[#0a0a0f] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-violet-100/40 dark:bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-violet-600 mx-auto rounded-full" />
        </div>

        <div ref={ref} className={`max-w-4xl mx-auto reveal ${visible ? 'visible' : ''}`}>
          <div className="glass-card rounded-2xl p-8 transition-all duration-300">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="text-cyan-500 dark:text-cyan-400" size={28} />
              </div>
              <div className="flex-1">
                <h3 className="text-gray-900 dark:text-white text-2xl font-bold mb-1">Bachelor of Software Engineering (Honours)</h3>
                <p className="text-cyan-600 dark:text-cyan-400 text-lg font-semibold">Deakin University</p>
                <div className="flex flex-wrap gap-4 mt-2 text-gray-500 dark:text-gray-400 text-sm">
                  <span className="flex items-center gap-1.5"><Calendar size={14} />Jul 2021 – Jun 2025</span>
                  <span className="flex items-center gap-1.5"><Award size={14} />WAM: 79</span>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-100 dark:border-white/5 pt-6 space-y-6">
              <div>
                <h4 className="text-xs uppercase tracking-wide text-gray-400 dark:text-gray-500 font-semibold mb-3">Minor</h4>
                <span className="text-sm px-3 py-1.5 rounded-full border border-violet-200 dark:border-violet-500/30 bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-300">
                  Artificial Intelligence
                </span>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wide text-gray-400 dark:text-gray-500 font-semibold mb-3">Relevant Coursework</h4>
                <div className="flex flex-wrap gap-2">
                  {courses.map((course, i) => (
                    <span key={i} className="text-sm px-3 py-1 rounded-md border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-gray-300">
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wide text-gray-400 dark:text-gray-500 font-semibold mb-3">Projects & Activities</h4>
                <ul className="space-y-3">
                  <li className="text-gray-600 dark:text-gray-400 text-sm flex items-start gap-2">
                    <span className="text-cyan-500 dark:text-cyan-400 mt-0.5">▸</span>
                    <span>
                      <span className="text-gray-900 dark:text-white font-semibold">OpenCV Bin Picking Challenge (BPC): </span>
                      Participated in a global robotics competition focused on 6DoF object pose estimation for robotic grasping. Contributed to a ROS2 and Docker-based pipeline using Python and C++.
                    </span>
                  </li>
                  <li className="text-gray-600 dark:text-gray-400 text-sm flex items-start gap-2">
                    <span className="text-cyan-500 dark:text-cyan-400 mt-0.5">▸</span>
                    <span>
                      <span className="text-gray-900 dark:text-white font-semibold">Student Ambassador: </span>
                      Selected to represent Deakin University at Open Day 2024 and 2025, demonstrating 3D printing and laser cutting technologies at the Makerspace.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
