interface Challenge {
  id: number;
  company: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  timeSpent?: string;
}

const challengesData: Challenge[] = [
  {
    id: 1,
    company: 'TechCorp',
    title: 'Real-time Chat Application',
    description: 'Build a real-time chat application with WebSocket integration, user authentication, and message persistence.',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    timeSpent: '2 weeks'
  },
  {
    id: 2,
    company: 'StartupXYZ',
    title: 'Data Dashboard',
    description: 'Create an interactive dashboard for visualizing sales data with charts, filters, and export functionality.',
    technologies: ['Vue', 'D3.js', 'TypeScript', 'Express'],
    githubUrl: 'https://github.com',
    timeSpent: '1 week'
  },
  {
    id: 3,
    company: 'DevAgency',
    title: 'E-commerce Product Page',
    description: 'Design and implement a responsive product page with image gallery, reviews, and add-to-cart functionality.',
    technologies: ['React', 'Tailwind CSS', 'Redux'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    timeSpent: '3 days'
  },
  {
    id: 4,
    company: 'CodeChallenge.io',
    title: 'Algorithm Visualizer',
    description: 'Build an interactive tool to visualize sorting algorithms with step-by-step execution and performance metrics.',
    technologies: ['JavaScript', 'HTML5 Canvas', 'CSS'],
    githubUrl: 'https://github.com',
    timeSpent: '1 week'
  }
];

export default challengesData;