import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 bg-white dark:!bg-gray-800 backdrop-blur-md border-b border-gray-200 dark:!border-gray-600"
      style={{ backgroundColor: theme === 'light' ? 'white' : '#374151' }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-gray-800 dark:!text-gray-100">Portfolio</span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {['hero', 'projects', 'challenges', 'skills', 'about', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="!text-gray-700 dark:!text-gray-200 hover:!text-blue-600 dark:hover:!text-blue-400 
                           hover:!bg-gray-100 dark:hover:!bg-gray-700 px-4 py-2 rounded-lg text-sm font-medium 
                           transition-all duration-200"
                  style={{ 
                    backgroundColor: 'transparent',
                    color: theme === 'light' ? '#374151' : '#e5e7eb'
                  }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={toggleLanguage}
              className="px-4 py-2 rounded-lg !text-gray-700 dark:!text-gray-200 
                       hover:!text-blue-600 dark:hover:!text-blue-400 
                       hover:!bg-gray-100 dark:hover:!bg-gray-700 
                       transition-all duration-200 font-medium"
              style={{ 
                backgroundColor: 'transparent',
                color: theme === 'light' ? '#374151' : '#e5e7eb'
              }}
              aria-label="Toggle language"
            >
              {language === 'ru' ? 'RU' : 'EN'}
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg !text-gray-700 dark:!text-gray-200 
                       hover:!text-blue-600 dark:hover:!text-blue-400 
                       hover:!bg-gray-100 dark:hover:!bg-gray-700 
                       transition-all duration-200"
              style={{ 
                backgroundColor: 'transparent',
                color: theme === 'light' ? '#374151' : '#e5e7eb'
              }}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;