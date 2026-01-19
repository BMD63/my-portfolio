import React from 'react';
import { FaGithub, FaLinkedin, FaTelegramPlane, FaReact } from 'react-icons/fa';
import { SiTypescript, SiVuedotjs } from 'react-icons/si';
import { Mail } from 'lucide-react';
import contactsData from '../constants/contacts';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-500">
            <img 
              src="cvphoto.jpg" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          Frontend Developer
        </h1>

        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Crafting beautiful, responsive web experiences with modern technologies.
          Passionate about clean code and user-centered design.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button
            onClick={() => scrollToSection('projects')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            View Projects
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Get In Touch
          </button>
        </div>

        <div className="flex justify-center space-x-6 mb-8">
          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
            <FaReact size={20} />
            <span>React</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
            <SiVuedotjs size={20} />
            <span>Vue.js</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
            <SiTypescript size={20} />
            <span>TypeScript</span>
          </div>
          {/* <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
            <SiVite size={20} />
            <span>Vite</span>
          </div> */}
        </div>

        <div className="flex justify-center space-x-6">
          <a
            href={contactsData.git}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a
            href={contactsData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href={`mailto:${contactsData.mail}`}
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Mail size={24} />
          </a>
          <a
            href={`https://t.me/${contactsData.telegram}`}
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <FaTelegramPlane size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;