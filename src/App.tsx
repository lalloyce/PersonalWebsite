import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaGithub, FaArrowRight } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import Navigation from './components/Navigation';
import ParticleBackground from './components/ParticleBackground';
import SkillBar from './components/SkillBar';
import ProjectCard from './components/ProjectCard';
import Timeline from './components/Timeline';

function App() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('sending');

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAIL_SERVICE_ID!,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID!,
        {
          from_name: contactForm.name,
          from_email: contactForm.email,
          message: contactForm.message,
        },
        process.env.REACT_APP_EMAIL_USER_ID!
      );

      setSubmitStatus('success');
      setContactForm({ name: '', email: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitStatus('error');

      // Reset error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }
  };

  const projects = [
    {
      title: "Zaida Agri-Solutions Platform",
      description: "A comprehensive platform for managing agricultural innovations and sustainable development initiatives.",
      tags: ["React", "Node.js", "MongoDB", "Sustainable Agriculture"],
      githubUrl: "https://github.com/lalloyce",
    },
    {
      title: "Impact Measurement Dashboard",
      description: "Data visualization platform for tracking and analyzing development impact metrics.",
      tags: ["TypeScript", "D3.js", "Express", "Analytics"],
      githubUrl: "https://github.com/lalloyce",
    },
    {
      title: "Rural Tech Adoption Platform",
      description: "Mobile-first platform for promoting agricultural technology in rural communities.",
      tags: ["React Native", "Firebase", "AgTech", "Mobile"],
      githubUrl: "https://github.com/lalloyce",
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      <Navigation />
      
      {/* Hero Section */}
      <header id="home" className="relative bg-gradient-to-r from-primary via-primary-light to-primary-dark text-white min-h-screen flex items-center">
        <ParticleBackground />
        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl"
          >
            <motion.h1 
              className="text-6xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Lawrence Juma
            </motion.h1>
            <motion.p 
              className="text-2xl text-accent mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Impact-Driven Strategist & Entrepreneur
            </motion.p>
            <motion.div 
              className="flex justify-center space-x-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <a href="mailto:lalloyce@gmail.com" className="text-white hover:text-accent transition-colors duration-300">
                <FaEnvelope className="w-8 h-8" />
              </a>
              <a href="https://www.linkedin.com/in/lalloyce" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors duration-300">
                <FaLinkedin className="w-8 h-8" />
              </a>
              <a href="https://github.com/lalloyce" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors duration-300">
                <FaGithub className="w-8 h-8" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="bg-white py-20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-primary mb-8 text-center">About Me</h2>
            <div className="bg-neutral-50 p-8 rounded-2xl shadow-lg">
              <p className="text-lg text-gray-700 leading-relaxed">
                Impact-driven strategist, entrepreneur, and project manager with expertise in scaling high-impact initiatives 
                and implementing data-driven systems in resource-constrained environments. As Founder and CEO of Zaida 
                Agri-Solutions, I lead efforts to combat climate change through regenerative agriculture and sustainable 
                development solutions, with a strong focus on youth empowerment and mission alignment.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-gradient-to-b from-primary to-primary-dark text-white py-20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Skills & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="space-y-6">
                <SkillBar skill="Strategic Impact Analysis" level={95} color="#FF6B35" />
                <SkillBar skill="Project Management" level={90} color="#FF6B35" />
                <SkillBar skill="Data-Driven Decision Making" level={88} color="#FF6B35" />
              </div>
              <div className="space-y-6">
                <SkillBar skill="Sustainable Development" level={92} color="#FFB800" />
                <SkillBar skill="Leadership" level={85} color="#FFB800" />
                <SkillBar skill="Risk Management" level={87} color="#FFB800" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-white py-20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-primary mb-12 text-center">Professional Journey</h2>
            <Timeline />
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-neutral-100 py-20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-primary mb-12 text-center">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-neutral-50 py-20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-primary mb-12 text-center">Get in Touch</h2>
            <form onSubmit={handleContactSubmit} className="max-w-2xl mx-auto space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={submitStatus === 'sending'}
                  className={`
                    px-8 py-3 rounded-lg font-semibold text-white
                    transition-all duration-300 transform
                    ${submitStatus === 'sending' 
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-secondary hover:bg-accent hover:scale-105'
                    }
                  `}
                >
                  {submitStatus === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </div>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-600 text-center font-medium"
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-600 text-center font-medium"
                >
                  Failed to send message. Please try again later.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-dark text-white py-8">
        <div className="section-container">
          <div className="text-center">
            <div className="flex justify-center space-x-6 mb-4">
              <a href="mailto:lalloyce@gmail.com" className="text-white hover:text-accent transition-colors duration-300">
                <FaEnvelope className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/lalloyce" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors duration-300">
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a href="https://github.com/lalloyce" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors duration-300">
                <FaGithub className="w-6 h-6" />
              </a>
            </div>
            <p className="text-gray-400">&copy; 2024 Lawrence Juma. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
