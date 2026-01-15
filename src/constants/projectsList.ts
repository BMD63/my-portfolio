interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  type: 'pet' | 'commerce';
  liveUrl: string;
  githubUrl?: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: 'Relocation Program Landing Page',
    description: 'A promotional website for "Vkusno i tochka" employee relocation program with database integration. ',
    image: '/projects/goroditochka.png',
    technologies: ['React', 'TypeScript', 'Node.js'],
    type: 'commerce',
    liveUrl: 'https://goroditochka.staffjet.ru',
    githubUrl: 'https://github.com'
  },
  {
    id: 2,
    title: 'Quiz Module',
    description: 'An interactive bluffing game module for the "Remember Everything" quiz application. Players submit fake answers alongside real facts, then vote to identify the truth. ',
    image: 'public/projects/bluffs.png',
    technologies: ['Vue', 'JavaScript', 'Firebase'],
    type: 'pet',
    liveUrl: 'https://bluffs.ru',
    githubUrl: 'https://github.com'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A responsive weather dashboard with location-based forecasts, interactive maps, and weather alerts.',
    image: 'public/projects/staffjet.png',
    technologies: ['React', 'TypeScript', 'API'],
    type: 'pet',
    liveUrl: 'https://staffjet.ru',
    githubUrl: 'https://github.com'
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'A modern portfolio website built with React and Tailwind CSS, featuring dark mode and smooth animations.',
    image: 'https://via.placeholder.com/400x250/7C3AED/FFFFFF?text=Portfolio',
    technologies: ['React', 'Tailwind CSS', 'TypeScript'],
    type: 'pet',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com'
  },
  {
    id: 5,
    title: 'Blog Platform',
    description: 'A full-featured blog platform with markdown support, commenting system, and SEO optimization.',
    image: 'https://via.placeholder.com/400x250/EA580C/FFFFFF?text=Blog',
    technologies: ['Vue', 'JavaScript', 'Node.js'],
    type: 'commerce',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com'
  },
  {
    id: 6,
    title: 'Data Visualization Tool',
    description: 'An interactive data visualization tool for analyzing and presenting complex datasets with charts and graphs.',
    image: 'https://via.placeholder.com/400x250/0891B2/FFFFFF?text=Data+Viz',
    technologies: ['React', 'D3.js', 'TypeScript'],
    type: 'pet',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com'
  }
];
export default projectsData;