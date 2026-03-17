import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/sohilnagpal04',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/sohilnagpal',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:sohil.nagpal@outlook.com',
      label: 'Email'
    }
  ];

  return (
    <footer className="bg-gray-100 dark:bg-black border-t border-gray-200 dark:border-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="text-gray-600 dark:text-gray-400 text-sm text-center md:text-left">
            <p>
              © {currentYear} Sohil Nagpal. Built with React
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 text-center">
          <p className="text-gray-500 dark:text-gray-500 text-xs">
            Based in Melbourne, Australia • Available for graduate/junior software engineering roles
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;