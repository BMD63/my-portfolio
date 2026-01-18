import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
                Hi! I'm a Frontend Developer with over 3 years of experience specializing in React, Vue, TypeScript, 
              and modern web technologies. I transform complex business requirements into intuitive, 
              high-performance applications that users love.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-6">
              My journey began with curiosity about how websites work and evolved into building solutions 
              that deliver real impact—from e-commerce platforms processing thousands of transactions 
              to gamified marketing tools and AI-powered applications. I focus on writing maintainable, 
              scalable code while staying ahead of industry trends and best practices.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Experience
            </h3>
            <div className="space-y-4 mb-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Frontend Developer
                </h4>
                <p className="text-blue-600 dark:text-blue-400">Staffjet • 05/2023 - Present</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Developing marketing platform for client campaign management with dashboards, 
                  filters, and analytics. Building promotional landing pages for major retail brands 
                  with REST API integration and event tracking. Creating reusable UI components 
                  and improving UX/stability.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Frontend Developer
                </h4>
                <p className="text-blue-600 dark:text-blue-400">Digital Forest Inc • 08/2023 - Present</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Migrating legacy jQuery application to React with TypeScript and Redux. 
                  Implementing responsive design with Tailwind CSS and optimizing performance 
                  through code refactoring. Building multi-page website with Next.js routing.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Frontend Developer
                </h4>
                <p className="text-blue-600 dark:text-blue-400">JS Design Studio • 07/2022 - 06/2023</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Developed architectural design studio website from Figma designs with multilingual 
                  support and SEO optimization. Created landing pages for studio projects in 
                  collaboration with designers and sales team. Managed hosting and content updates.
                </p>
              </div>
  
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Frontend Developer
                </h4>
                <p className="text-blue-600 dark:text-blue-400">Strategy MA • 07/2021 - 06/2022</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Built landing pages from approved designs and enhanced existing company websites. 
                  Implemented new features according to client specifications and made design 
                  and logic improvements.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Education
            </h3>
            <div className="border-l-4 border-green-500 pl-4 mb-6">
              <h4 className="font-semibold text-gray-900 dark:text-white">
                Bachelor of Radio Engineering
              </h4>
              <p className="text-green-600 dark:text-green-400">
                Samara State University • Graduated
              </p>
            </div>

            {/* <p className="text-gray-600 dark:text-gray-300">
              When I'm not coding, you can find me exploring new technologies, contributing to
              open-source projects, or enjoying outdoor activities like hiking and photography.
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;