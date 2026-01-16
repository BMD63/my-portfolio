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
    image: '/projects/bluffs.png',
    technologies: ['Vue', 'JavaScript', 'Firebase'],
    type: 'pet',
    liveUrl: 'https://bluffs.ru',
    githubUrl: 'https://github.com'
  },
  {
    id: 3,
    title: 'Marketing Platform Dashboard',
    description: 'A user dashboard for managing marketing programs with comprehensive tools and analytics. Features include campaign creation and scheduling, performance metrics visualization, audience segmentation, budget tracking, and automated reporting with customizable dashboards.',
    image: '/projects/staffjet.png',
    technologies: ['React', 'TypeScript', 'API'],
    type: 'pet',
    liveUrl: 'https://staffjet.ru',
    githubUrl: 'https://github.com'
  },
  {
    id: 4,
    title: 'Architectural Design Studio Website',
    description: 'A corporate website for an architectural design studio with integrated features. Features include interactive project cost calculator, blog with portfolio showcase, dynamic landing pages system, project gallery with filtering, and client inquiry forms with CRM integration.',
    image: '/projects/jsds.png',
    technologies: ['React', 'Tailwind CSS', 'TypeScript'],
    type: 'pet',
    liveUrl: 'jsds.ru',
    githubUrl: 'https://github.com'
  },
  {
    id: 5,
    title: 'Blog Platform',
    description: 'A full-featured blog platform with markdown support, commenting system, and SEO optimization.',
    image: '/projects/binom.png',
    technologies: ['Vue', 'JavaScript', 'Node.js'],
    type: 'commerce',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com'
  },
  {
    id: 6,
    title: 'Data Visualization Tool',
    description: 'An interactive data visualization tool for analyzing and presenting complex datasets with charts and graphs.',
    image: '/projects/poco.png',
    technologies: ['React', 'D3.js', 'TypeScript'],
    type: 'pet',
    liveUrl: 'https://poco-rus.com',
    githubUrl: 'https://github.com'
  },
  {
    id: 7,
    title: 'Relocation Program Landing Page',
    description: 'A promotional website for "Vkusno i tochka" employee relocation program with database integration. ',
    image: '/projects/goroditochka.png',
    technologies: ['React', 'TypeScript', 'Node.js'],
    type: 'commerce',
    liveUrl: 'https://goroditochka.staffjet.ru',
    githubUrl: 'https://github.com'
  },
   {
    id: 8,
    title: 'Quiz Module',
    description: 'An interactive bluffing game module for the "Remember Everything" quiz application. Players submit fake answers alongside real facts, then vote to identify the truth. ',
    image: '/projects/bluffs.png',
    technologies: ['Vue', 'JavaScript', 'Firebase'],
    type: 'pet',
    liveUrl: 'https://bluffs.ru',
    githubUrl: 'https://github.com'
  },
  {
    id: 9,
    title: 'Marketing Platform Dashboard',
    description: 'A user dashboard for managing marketing programs with comprehensive tools and analytics. Features include campaign creation and scheduling, performance metrics visualization, audience segmentation, budget tracking, and automated reporting with customizable dashboards.',
    image: '/projects/staffjet.png',
    technologies: ['React', 'TypeScript', 'API'],
    type: 'pet',
    liveUrl: 'https://staffjet.ru',
    githubUrl: 'https://github.com'
  },
];
export default projectsData;