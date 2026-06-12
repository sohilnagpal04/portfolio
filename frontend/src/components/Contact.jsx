import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Linkedin, Github, Send, Download, MapPin, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from '../hooks/use-toast';
import { useScrollReveal } from '../hooks/useScrollReveal';

const EMAILJS_SERVICE_ID  = 'service_o317wcv';
const EMAILJS_TEMPLATE_ID = 'template_xuwq6md';
const EMAILJS_PUBLIC_KEY  = 'zZh7iiRk0QLulLxsN';

const Contact = () => {
  const [headerRef, headerVisible] = useScrollReveal(0.2);
  const [leftRef, leftVisible] = useScrollReveal(0.15);
  const [rightRef, rightVisible] = useScrollReveal(0.15);
  const formRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          time: new Date().toLocaleString(),
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out — I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
    } catch {
      toast({
        title: "Failed to send",
        description: "Something went wrong. Please email me directly.",
        variant: "destructive",
      });
    } finally {
      setSending(false);
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

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sohil.nagpal@outlook.com',
      href: 'mailto:sohil.nagpal@outlook.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+61 451 265 842',
      href: 'tel:+61451265842'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Melbourne, VIC, Australia',
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/sohilnagpal04',
      color: 'hover:text-gray-300'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/sohilnagpal',
      color: 'hover:text-blue-400'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:sohil.nagpal@outlook.com',
      color: 'hover:text-red-400'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-[#0a0a0f] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-100/30 dark:bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div ref={headerRef} className={`text-center mb-16 reveal ${headerVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-violet-600 mx-auto rounded-full mb-4" />
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            I'm currently seeking graduate or junior software engineering opportunities. Let's connect!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Left: Contact Info */}
          <div ref={leftRef} className={`space-y-6 reveal-left ${leftVisible ? 'visible' : ''}`}>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Contact Information</h3>
            <div className="space-y-3">
              {contactInfo.map((info, i) => (
                <div key={i} className="glass-card rounded-xl p-4">
                  {info.href ? (
                    <a href={info.href} className="flex items-center text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                      <div className="w-10 h-10 bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <info.icon className="text-cyan-500 dark:text-cyan-400" size={18} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 dark:text-gray-500">{info.label}</p>
                        <p className="font-medium text-sm text-gray-700 dark:text-gray-300">{info.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center text-gray-700 dark:text-gray-300">
                      <div className="w-10 h-10 bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <info.icon className="text-cyan-500 dark:text-cyan-400" size={18} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 dark:text-gray-500">{info.label}</p>
                        <p className="font-medium text-sm text-gray-700 dark:text-gray-300">{info.value}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Connect</h3>
              <div className="flex gap-3">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            <Button
              onClick={handleDownloadResume}
              className="w-full bg-cyan-500 hover:bg-cyan-400 text-black py-6 text-lg font-semibold transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </Button>
          </div>

          {/* Right: Form */}
          <div ref={rightRef} className={`reveal-right ${rightVisible ? 'visible' : ''}`}>
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Send a Message</h3>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Name</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-cyan-500/60 focus:ring-0"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Email</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-cyan-500/60 focus:ring-0"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your opportunity or project..."
                    required
                    rows={6}
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-cyan-500/60 focus:ring-0 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-cyan-500 hover:bg-cyan-400 text-black py-6 text-lg font-semibold disabled:opacity-50 transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                >
                  <Send className="mr-2" size={20} />
                  {sending ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;