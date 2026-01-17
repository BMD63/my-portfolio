import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import projectsData from '../constants/projectsList';

// interface Project {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   technologies: string[];
//   type: 'pet' | 'commerce';
//   liveUrl: string;
//   githubUrl?: string;
// }

// const projectsData: Project[] = [
//   {
//     id: 1,
//     title: 'Relocation Program Landing Page',
//     description: 'A promotional website for "Vkusno i tochka" employee relocation program with database integration. ',
//     image: '/projects/goroditochka.png',
//     technologies: ['React', 'TypeScript', 'Node.js'],
//     type: 'commerce',
//     liveUrl: 'https://goroditochka.staffjet.ru',
//     githubUrl: 'https://github.com'
//   },
//   {
//     id: 2,
//     title: 'Quiz Module',
//     description: 'An interactive bluffing game module for the "Remember Everything" quiz application. Players submit fake answers alongside real facts, then vote to identify the truth. ',
//     image: 'public/projects/bluffs.png',
//     technologies: ['Vue', 'JavaScript', 'Firebase'],
//     type: 'pet',
//     liveUrl: 'https://bluffs.ru',
//     githubUrl: 'https://github.com'
//   },
//   {
//     id: 3,
//     title: 'Weather Dashboard',
//     description: 'A responsive weather dashboard with location-based forecasts, interactive maps, and weather alerts.',
//     image: 'public/projects/staffjet.png',
//     technologies: ['React', 'TypeScript', 'API'],
//     type: 'pet',
//     liveUrl: 'https://staffjet.ru',
//     githubUrl: 'https://github.com'
//   },
//   {
//     id: 4,
//     title: 'Portfolio Website',
//     description: 'A modern portfolio website built with React and Tailwind CSS, featuring dark mode and smooth animations.',
//     image: 'https://via.placeholder.com/400x250/7C3AED/FFFFFF?text=Portfolio',
//     technologies: ['React', 'Tailwind CSS', 'TypeScript'],
//     type: 'pet',
//     liveUrl: 'https://example.com',
//     githubUrl: 'https://github.com'
//   },
//   {
//     id: 5,
//     title: 'Blog Platform',
//     description: 'A full-featured blog platform with markdown support, commenting system, and SEO optimization.',
//     image: 'https://via.placeholder.com/400x250/EA580C/FFFFFF?text=Blog',
//     technologies: ['Vue', 'JavaScript', 'Node.js'],
//     type: 'commerce',
//     liveUrl: 'https://example.com',
//     githubUrl: 'https://github.com'
//   },
//   {
//     id: 6,
//     title: 'Data Visualization Tool',
//     description: 'An interactive data visualization tool for analyzing and presenting complex datasets with charts and graphs.',
//     image: 'https://via.placeholder.com/400x250/0891B2/FFFFFF?text=Data+Viz',
//     technologies: ['React', 'D3.js', 'TypeScript'],
//     type: 'pet',
//     liveUrl: 'https://example.com',
//     githubUrl: 'https://github.com'
//   }
// ];

const Projects: React.FC = () => {
  const [techFilter, setTechFilter] = useState<string>('All');
  const [typeFilter, setTypeFilter] = useState<'all' | 'pet' | 'commerce'>('all');
  const [visibleProjects, setVisibleProjects] = useState<number>(6);

  const technologies = ['All', 'React', 'Vue', 'TypeScript', 'JavaScript', 'Node.js'];
  const projectTypes = ['all', 'pet', 'commerce'] as const;

  const filteredProjects = projectsData.filter(project => {
    const techMatch = techFilter === 'All' || project.technologies.includes(techFilter);
    const typeMatch = typeFilter === 'all' || project.type === typeFilter;
    return techMatch && typeMatch;
  });

  const displayedProjects = filteredProjects.slice(0, visibleProjects);

  const loadMore = () => {
    setVisibleProjects(prev => prev + 3);
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {technologies.map(tech => (
            <button
              key={tech}
              onClick={() => setTechFilter(tech)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                techFilter === tech
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-400 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {projectTypes.map(type => (
            <button
              key={type}
              onClick={() => setTypeFilter(type)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                typeFilter === type
                  ? 'bg-purple-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-400 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map(project => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full aspect-[11/8] object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-200 dark:bg-blue-900 text-gray-900 dark:text-blue-200 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition-colors"
                  >
                    <Github size={16} className="mr-1" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {visibleProjects < filteredProjects.length && (
          <div className="text-center mt-8">
            <button
              onClick={loadMore}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Load More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;