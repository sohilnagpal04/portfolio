import React from 'react';
import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/assets/Sohil_Nagpal_Resume.pdf';
    link.download = 'Sohil_Nagpal_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 dark:from-[#0a0a0a] dark:via-[#1a1a2e] dark:to-[#0a0a0a]"
    >
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center space-y-8">
          {/* Greeting */}
          <div className="space-y-2 animate-fade-in">
            <p className="text-blue-600 dark:text-blue-400 text-lg font-medium">Hi, my name is</p>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white">
              Sohil Nagpal
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-600 dark:text-gray-400">
              Software Engineer
            </h2>
          </div>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Building real-world systems through software, IoT, and backend technologies.
            <br />
            <span className="text-gray-600 dark:text-gray-400">Specializing in embedded systems, robotics, and distributed platforms.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button
              onClick={() => scrollToSection('projects')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-medium transition-all hover:scale-105"
            >
              View Projects
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600/10 px-8 py-6 text-lg font-medium transition-all hover:scale-105"
            >
              Contact Me
            </Button>
            <Button
              onClick={handleDownloadResume}
              variant="outline"
              className="border-2 border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600/10 px-8 py-6 text-lg font-medium transition-all hover:scale-105"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 pt-8">
            <a
              href="https://github.com/sohilnagpal04"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Github size={28} />
            </a>
            <a
              href="https://linkedin.com/in/sohilnagpal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:sohil.nagpal@outlook.com"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Mail size={28} />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <ArrowDown size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;