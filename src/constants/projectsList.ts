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
    title: 'Architectural Design Studio Website',
    description: 'A corporate website for an architectural design studio with integrated features. Features include interactive project cost calculator, blog with portfolio showcase, dynamic landing pages system, project gallery with filtering, and client inquiry forms with CRM integration.',
    image: 'projects/jsds.png',
    technologies: ['React', 'Tailwind CSS', 'TypeScript'],
    type: 'commerce',
    liveUrl: 'jsds.ru',
  },
  {
    id: 2,
    title: 'Marketing Platform Dashboard',
    description: 'A user dashboard for managing marketing programs with comprehensive tools and analytics. Features include campaign creation and scheduling, performance metrics visualization, audience segmentation, budget tracking, and automated reporting with customizable dashboards.',
    image: 'projects/staffjet.png',
    technologies: ['Vue', 'TypeScript', 'Pinia', 'Vuetify','API'],
    type: 'commerce',
    liveUrl: 'https://staffjet.ru',
  },
  {
    id: 3,
    title: 'Relocation Program Landing Page',
    description: 'A promotional website for "Vkusno i tochka" employee relocation program with database integration. ',
    image: 'projects/goroditochka.png',
    technologies: ['React', 'TypeScript', 'Zod','API'],
    type: 'commerce',
    liveUrl: 'https://goroditochka.staffjet.ru',
  },
  {
    id: 4,
    title: 'Quiz Module',
    description: 'An interactive bluffing game module for the "Remember Everything" quiz application. Players submit fake answers alongside real facts, then vote to identify the truth. ',
    image: 'projects/bluffs.png',
    technologies: ['React', 'Typescrypt'],
    type: 'pet',
    liveUrl: 'https://bluffs.ru',
    githubUrl: 'https://github.com'
  },
  {
    id: 5,
    title: 'AI Platform',
    description: 'An AI-powered platform creating digital replicas of professional expertise for forecasting and consultation. Features include risk prediction algorithms, personalized recommendations system, digital consciousness replicas with decision-making logic, 24/7 AI advisory access, and legacy preservation tools for corporate, family, and public use.',
    image: 'projects/binom.png',
    technologies: ['React', 'JavaScript', 'Tailwind'],
    type: 'commerce',
    liveUrl: 'https://bmd63.github.io/Binom/',
  },
  {
    id: 6,
    title: 'Online Store',
    description: 'An e-commerce platform for POCO smartphones with full shopping functionality. Features include product catalog with filtering and comparison, shopping cart and checkout process, user authentication and order tracking, product reviews and ratings, and integration with payment systems and inventory management.',
    image: 'projects/poco.png',
    technologies: ['React', 'Tailwind', 'TypeScript'],
    type: 'commerce',
    liveUrl: 'https://poco-rus.com',
  },
  {
    id: 7,
    title: 'Career Landing Page',
    description: 'A recruitment landing page for Perekrestok supermarket chain integrated with corporate database. Features include job format selection quiz, dynamic vacancy updates from HR system, city-based search, and personalized career recommendations.',
    image: 'projects/perekr.png',
    technologies: ['Vue', 'TypeScript', 'Pinia', 'Zod', 'API'],
    type: 'commerce',
    liveUrl: 'https://perekrestok.rabota.staffjet.ru/',
  },
   {
    id: 8,
    title: 'Job Search Service',
    description: 'A simplified job search platform powered by HeadHunter API for streamlined vacancy discovery. Features include minimalist search interface, smart filters with keyword matching, real-time vacancy updates from HH.ru, salary range visualization, one-click application redirects, and saved search preferences.',
    image: 'projects/hha.png',
    technologies: ['Vue', 'Tepescript', 'API'],
    type: 'pet',
    liveUrl: 'https://bmd63.github.io/hh-assistant/',
    githubUrl: 'https://github.com/BMD63/hh-assistant.git'
  },
  {
    id: 9,
    title: 'Gamified Marketing Platform',
    description: 'A gamified marketing platform where users learn through interactive challenges and win prizes. Features include task creation system for brands, answer submission and validation, automated prize distribution among correct answers, user engagement tracking, leaderboards, and campaign analytics dashboard.',
    image: 'projects/priz.png',
    technologies: ['React', 'TypeScript', 'API'],
    type: 'commerce',
    liveUrl: 'https://prizolove.com/',
  },
];
export default projectsData;