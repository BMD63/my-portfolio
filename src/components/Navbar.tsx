import React, { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
// import { useLanguage } from '../contexts/LanguageContext';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  // const { language, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const title = "<Sergei.Chechet/>";
  const navItems = ['hero', 'projects', 'code examples', 'skills', 'about', 'contact'];

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 bg-white dark:!bg-gray-800 backdrop-blur-md border-b border-gray-200 dark:!border-gray-600"
      style={{ backgroundColor: theme === 'light' ? 'white' : '#374151' }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Логотип */}
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-gray-800 dark:!text-gray-100">{title}</span>
          </div>

          {/* Десктопное меню */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {navItems.map((section) => (
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
            {/* 
            Кнопка переключения языка (закомментировано)
            <button
              onClick={toggleLanguage}
              className="hidden sm:block px-4 py-2 rounded-lg !text-gray-700 dark:!text-gray-200 
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
            */}

            {/* Кнопка переключения темы */}
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

            {/* Бургер-меню для мобильных */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg !text-gray-700 dark:!text-gray-200 
                       hover:!text-blue-600 dark:hover:!text-blue-400 
                       hover:!bg-gray-100 dark:hover:!bg-gray-700 
                       transition-all duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Мобильное меню */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:!bg-gray-800 border-t border-gray-200 dark:!border-gray-600">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-3 py-2 rounded-md !text-gray-700 dark:!text-gray-200 
                           hover:!text-blue-600 dark:hover:!text-blue-400 
                           hover:!bg-gray-100 dark:hover:!bg-gray-700 
                           text-base font-medium transition-all duration-200"
                  style={{ 
                    backgroundColor: 'transparent',
                    color: theme === 'light' ? '#374151' : '#e5e7eb'
                  }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
              
              {/*
              Кнопка переключения языка в мобильном меню (закомментировано)
              <button
                onClick={toggleLanguage}
                className="block w-full text-left px-3 py-2 rounded-md !text-gray-700 dark:!text-gray-200 
                         hover:!text-blue-600 dark:hover:!text-blue-400 
                         hover:!bg-gray-100 dark:hover:!bg-gray-700 
                         text-base font-medium transition-all duration-200 mt-2"
                style={{ 
                  backgroundColor: 'transparent',
                  color: theme === 'light' ? '#374151' : '#e5e7eb'
                }}
                aria-label="Toggle language"
              >
                {language === 'ru' ? 'Русский' : 'English'}
              </button>
              */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;