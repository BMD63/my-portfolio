import React from 'react';
import { Github, ExternalLink, Clock } from 'lucide-react';
import challengesData from '../constants/tests';

// interface Challenge {
//   id: number;
//   company: string;
//   title: string;
//   description: string;
//   technologies: string[];
//   githubUrl: string;
//   liveUrl?: string;
//   timeSpent?: string;
// }

// const challengesData: Challenge[] = [
//   {
//     id: 1,
//     company: 'TechCorp',
//     title: 'Real-time Chat Application',
//     description: 'Build a real-time chat application with WebSocket integration, user authentication, and message persistence.',
//     technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
//     githubUrl: 'https://github.com',
//     liveUrl: 'https://example.com',
//     timeSpent: '2 weeks'
//   },
//   {
//     id: 2,
//     company: 'StartupXYZ',
//     title: 'Data Dashboard',
//     description: 'Create an interactive dashboard for visualizing sales data with charts, filters, and export functionality.',
//     technologies: ['Vue', 'D3.js', 'TypeScript', 'Express'],
//     githubUrl: 'https://github.com',
//     timeSpent: '1 week'
//   },
//   {
//     id: 3,
//     company: 'DevAgency',
//     title: 'E-commerce Product Page',
//     description: 'Design and implement a responsive product page with image gallery, reviews, and add-to-cart functionality.',
//     technologies: ['React', 'Tailwind CSS', 'Redux'],
//     githubUrl: 'https://github.com',
//     liveUrl: 'https://example.com',
//     timeSpent: '3 days'
//   },
//   {
//     id: 4,
//     company: 'CodeChallenge.io',
//     title: 'Algorithm Visualizer',
//     description: 'Build an interactive tool to visualize sorting algorithms with step-by-step execution and performance metrics.',
//     technologies: ['JavaScript', 'HTML5 Canvas', 'CSS'],
//     githubUrl: 'https://github.com',
//     timeSpent: '1 week'
//   }
// ];

const CodeChallenges: React.FC = () => {
  return (
    <section id="challenges" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Code Challenges
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
                  <Github size={16} className="mr-1" />
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