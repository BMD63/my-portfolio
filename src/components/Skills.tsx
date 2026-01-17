import React from 'react';
import {
  Code,
  Palette,
  Wrench,
  TestTube,
  Globe,
  Server
} from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillsData: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: <Code size={24} />,
    skills: ['React', 'Vue', 'TypeScript', 'JavaScript', 'HTML', 'CSS']
  },
  {
    title: 'Styling',
    icon: <Palette size={24} />,
    skills: ['Tailwind CSS', 'CSS Modules', 'Styled Components', 'SASS']
  },
  {
    title: 'Tools',
    icon: <Wrench size={24} />,
    skills: ['Vite', 'Git', 'Webpack', 'Figma', 'VS Code']
  },
  {
    title: 'Testing',
    icon: <TestTube size={24} />,
    skills: ['Jest', 'Vitest', 'Cypress', 'React Testing Library']
  },
  {
    title: 'Backend',
    icon: <Server size={24} />,
    skills: ['Node.js', 'Express', 'REST API', 'GraphQL']
  },
  {
    title: 'Other',
    icon: <Globe size={24} />,
    skills: ['Redux', 'Firebase', 'MongoDB', 'Responsive Design']
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm border border-gray-200 dark:border-gray-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;