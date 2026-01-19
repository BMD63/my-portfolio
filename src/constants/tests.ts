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
    company: 'Dobry Cofe',
    title: 'Adaptive User Page',
    description: `Build a users page in Nuxt.js (SSR mode) with Vuetify, featuring collapsible sidebar, 
    skeleton loading state, and progressive data fetching. Implement user factory as a plugin and focus 
    on clean SCSS structure with responsive desktop/mobile layouts.`,
    technologies: ['Vue 2', 'Nuxt.js', 'Typescript 5.9', 'Vuetify','SCSS', 'Vite 7.2'],
    githubUrl: 'https://github.com/BMD63/dobryi-coffee.git',
    // liveUrl: 'https://example.com',
    timeSpent: '1 day'
  },
  {
    id: 2,
    company: 'NDA Protected Client',
    title: 'Airline Services E-commerce MVP',
    description: 'React-based web app for booking additional airline services with interactive cart, real-time price calculation, dark theme toggle, and persistent localStorage state.',
    technologies: ['React 19.2', 'Tailwind CSS', 'TypeScript 5.9', 'Zustand 5.0', 'Vite 7.2'],
    githubUrl: 'https://github.com/BMD63/airline-services.git',
    timeSpent: '1 day'
  },
  {
    id: 3,
    company: 'LUiS+',
    title: 'Expert Consultation Sticker Component',
    description: 'TypeScript/Nuxt 4/Vue 3 component featuring two-page layout with strict design adherence, animated sticker navigation, and responsive positioning across devices.',
    technologies: ['Vue 3', 'SCSS', 'NUXT 4', 'TypeScript 5.9', 'Vite 7.2', 'Zod', ],
    githubUrl: 'https://github.com/BMD63/sticker-module.git',
    liveUrl: 'https://https://bmd63.github.io/sticker-module/',
    timeSpent: '2 days'
  },
  {
    id: 4,
    company: 'NDA Protected Client',
    title: 'Jujutsu Monitoring Dashboard',
    description: 'Build a real-time anomaly tracking dashboard with SSE updates every 5 seconds, optimistic UI updates for spirit captures (30% error rate simulation), cyclic respawn system, Zod validation, and TanStack Query state management following Feature Sliced Design architecture.',
    technologies: ['React 18', 'Next.js 14', 'SCSS Modules', 'TypeScript 5.9', 'Zod', 'Tanstack Query', 'Docker', 'Vite 7.2'],
    githubUrl: 'https://github.com/BMD63/Jujutsu-Dashboard.git',
    timeSpent: '1 day'
  }
];

export default challengesData;