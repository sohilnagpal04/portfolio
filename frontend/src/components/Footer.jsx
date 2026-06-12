import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { icon: Github, href: 'https://github.com/sohilnagpal04', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/sohilnagpal', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:sohil.nagpal@outlook.com', label: 'Email' },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-[#050508] border-t border-gray-200 dark:border-white/5 py-8 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-gray-500 text-sm">
            © {currentYear} <span className="gradient-text font-semibold">Sohil Nagpal</span>. Built with React & Tailwind.
          </div>
          <div className="flex items-center gap-3">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-9 h-9 rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 flex items-center justify-center text-gray-500 hover:text-cyan-500 dark:hover:text-cyan-400 hover:border-cyan-400 transition-all"
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-4 text-center">
          <p className="text-gray-400 dark:text-gray-600 text-xs">
            Based in Melbourne, Australia · Available for graduate/junior software engineering roles
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
