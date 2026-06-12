import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react';
import { Button } from './ui/button';

const ROLES = ['Software Engineer', 'IoT Developer', 'Robotics Engineer', 'Backend Developer'];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    if (!isDeleting && displayed === current) {
      const t = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(t);
    }
    if (isDeleting && displayed === '') {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
      return;
    }
    const speed = isDeleting ? 50 : 100;
    const t = setTimeout(() => {
      setDisplayed(isDeleting ? current.slice(0, displayed.length - 1) : current.slice(0, displayed.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [displayed, isDeleting, roleIndex]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
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
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-50 dark:bg-[#050508]"
    >
      <div className="absolute inset-0 dot-grid" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[600px] h-[600px] -top-64 -left-64 bg-cyan-300/20 dark:bg-cyan-500/10 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute w-[600px] h-[600px] -bottom-64 -right-64 bg-violet-300/20 dark:bg-violet-600/10 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center space-y-8">

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/40 bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-pulse" />
            Available for graduate roles · Melbourne
          </div>

          <div className="space-y-4">
            <p className="text-gray-500 dark:text-gray-400 text-lg font-medium">Hi, my name is</p>
            <h1 className="text-6xl md:text-8xl font-bold gradient-text pb-2">Sohil Nagpal</h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-600 dark:text-gray-300 min-h-[1.2em]">
              {displayed}
              <span className="inline-block w-0.5 h-[0.85em] bg-cyan-500 ml-1 align-middle animate-pulse" />
            </h2>
          </div>

          <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Building real-world systems through software, IoT, and backend technologies.
            <br />
            <span className="text-gray-400 dark:text-gray-500">Specialising in embedded systems, robotics, and distributed platforms.</span>
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button
              onClick={() => scrollToSection('projects')}
              className="bg-cyan-500 hover:bg-cyan-400 text-black px-8 py-6 text-lg font-semibold transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]"
            >
              View Projects
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="border border-cyan-500/60 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-500/10 hover:border-cyan-500 px-8 py-6 text-lg font-medium transition-all hover:scale-105 bg-transparent"
            >
              Contact Me
            </Button>
            <Button
              onClick={handleDownloadResume}
              variant="outline"
              className="border border-gray-300 dark:border-white/20 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 px-8 py-6 text-lg font-medium transition-all hover:scale-105 bg-transparent"
            >
              <Download className="mr-2" size={20} />
              Resume
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4 pt-4">
            {[
              { href: 'https://github.com/sohilnagpal04', icon: Github },
              { href: 'https://linkedin.com/in/sohilnagpal', icon: Linkedin },
              { href: 'mailto:sohil.nagpal@outlook.com', icon: Mail },
            ].map(({ href, icon: Icon }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-lg border border-gray-300 dark:border-white/10 bg-white dark:bg-white/5 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 hover:border-cyan-400 transition-all hover:scale-110 shadow-sm dark:shadow-none"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-cyan-500 transition-colors">
              <ArrowDown size={28} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
