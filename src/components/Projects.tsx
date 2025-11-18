import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
    image: 'https://via.placeholder.com/400x250/4F46E5/FFFFFF?text=E-Commerce',
    technologies: ['React', 'TypeScript', 'Node.js'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    image: 'https://via.placeholder.com/400x250/059669/FFFFFF?text=Task+App',
    technologies: ['Vue', 'JavaScript', 'Firebase'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A responsive weather dashboard with location-based forecasts, interactive maps, and weather alerts.',
    image: 'https://via.placeholder.com/400x250/DC2626/FFFFFF?text=Weather',
    technologies: ['React', 'TypeScript', 'API'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com'
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'A modern portfolio website built with React and Tailwind CSS, featuring dark mode and smooth animations.',
    image: 'https://via.placeholder.com/400x250/7C3AED/FFFFFF?text=Portfolio',
    technologies: ['React', 'Tailwind CSS', 'TypeScript'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com'
  },
  {
    id: 5,
    title: 'Blog Platform',
    description: 'A full-featured blog platform with markdown support, commenting system, and SEO optimization.',
    image: 'https://via.placeholder.com/400x250/EA580C/FFFFFF?text=Blog',
    technologies: ['Vue', 'JavaScript', 'Node.js'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com'
  },
  {
    id: 6,
    title: 'Data Visualization Tool',
    description: 'An interactive data visualization tool for analyzing and presenting complex datasets with charts and graphs.',
    image: 'https://via.placeholder.com/400x250/0891B2/FFFFFF?text=Data+Viz',
    technologies: ['React', 'D3.js', 'TypeScript'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com'
  }
];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [visibleProjects, setVisibleProjects] = useState<number>(6);

  const technologies = ['All', 'React', 'Vue', 'TypeScript', 'JavaScript', 'Node.js'];

  const filteredProjects = filter === 'All'
    ? projectsData
    : projectsData.filter(project => project.technologies.includes(filter));

  const displayedProjects = filteredProjects.slice(0, visibleProjects);

  const loadMore = () => {
    setVisibleProjects(prev => prev + 3);
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              onClick={() => setFilter(tech)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === tech
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {tech}
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
                className="w-full h-48 object-cover"
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
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded"
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