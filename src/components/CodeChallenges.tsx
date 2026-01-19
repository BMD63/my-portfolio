import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { ExternalLink, Clock } from 'lucide-react';
import challengesData from '../constants/tests';

const CodeChallenges: React.FC = () => {
  return (
    <section id="challenges" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Code Examples
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Most interesting technical challenges and coding exercises completed during interviews and assessments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {challengesData.map(challenge => (
            <div
              key={challenge.id}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                    {challenge.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {challenge.company}
                  </p>
                </div>
                {challenge.timeSpent && (
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Clock size={16} className="mr-1" />
                    {challenge.timeSpent}
                  </div>
                )}
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {challenge.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {challenge.technologies.map(tech => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4">
                <a
                  href={challenge.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition-colors"
                >
                  <FaGithub size={16} className="mr-1" />
                  Code
                </a>
                {challenge.liveUrl && (
                  <a
                    href={challenge.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodeChallenges;