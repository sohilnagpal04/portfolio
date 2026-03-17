import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, Download, MapPin, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from '../hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission - will be implemented with backend
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
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
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-black dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            I'm currently seeking graduate or junior software engineering opportunities. Let's connect!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="bg-white dark:bg-gray-900/50 border-gray-200 dark:border-gray-800">
                    <CardContent className="p-4">
                      {info.href ? (
                        <a
                          href={info.href}
                          className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          <div className="w-10 h-10 bg-blue-100 dark:bg-blue-600/20 rounded-lg flex items-center justify-center mr-4">
                            <info.icon className="text-blue-600 dark:text-blue-400" size={20} />
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 dark:text-gray-500">{info.label}</p>
                            <p className="font-medium">{info.value}</p>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-center text-gray-700 dark:text-gray-300">
                          <div className="w-10 h-10 bg-blue-100 dark:bg-blue-600/20 rounded-lg flex items-center justify-center mr-4">
                            <info.icon className="text-blue-600 dark:text-blue-400" size={20} />
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 dark:text-gray-500">{info.label}</p>
                            <p className="font-medium">{info.value}</p>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 transition-all duration-300 hover:border-blue-600/50 ${social.color}`}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Download Resume */}
            <Button
              onClick={handleDownloadResume}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg font-medium"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </Button>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="bg-white dark:bg-gray-900/50 border-gray-200 dark:border-gray-800">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-500 focus:border-blue-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-500 focus:border-blue-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your opportunity or project..."
                      required
                      rows={6}
                      className="bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-500 focus:border-blue-600 resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg font-medium"
                  >
                    <Send className="mr-2" size={20} />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;