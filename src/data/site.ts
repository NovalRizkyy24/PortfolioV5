// Semua konten statis situs ada di sini — edit file ini untuk mengganti teks, link, dan angka.
import type { ImageMetadata } from 'astro';
import type { IconName } from './icons';

import webDevelopment from '@/assets/services/web-development.jpg';
import aiIntegration from '@/assets/services/ai-integration.jpg';
import machineLearningData from '@/assets/services/machine-learning-data.jpg';
import devops from '@/assets/services/devops.jpg';

export const site = {
  name: 'Noval Rizky Nugraha',
  title: 'Noval Rizky Nugraha | Fullstack Developer',
  description:
    'Portfolio of Noval Rizky Nugraha, a fullstack developer and AI engineer from Indonesia building web applications, AI agents, and IoT projects.',
  owner: 'Noval Rizky Nugraha',
  email: 'novalrizkynugraha@gmail.com',
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
];

export const socials: { label: string; href: string; icon: IconName }[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/novalrizky/', icon: 'linkedin' },
  { label: 'Instagram', href: 'https://www.instagram.com/novalrizky24_/', icon: 'instagram' },
  { label: 'GitHub', href: 'https://github.com/NovalRizkyy24', icon: 'github' },
];

// Awal pengalaman, untuk menghitung "Years of experience" di hero (otomatis bertambah tiap September)
export const careerStart = new Date('2022-09-01');

export const intro =
  'Welcome to my portfolio! I’m Noval Rizky Nugraha, a Web Developer and AI Engineer based in Indonesia. As an Informatics graduate from Institut Teknologi Nasional Bandung, I specialize in combining web technologies with Artificial Intelligence to build smart, highly dynamic, and futuristic web applications.';

export type Service = {
  title: string;
  description: string;
  image: ImageMetadata;
  /** Teknologi yang dipakai, tampil sebagai pill di bawah deskripsi */
  tools: string[];
};

export const services: Service[] = [
  {
    title: 'Web Development',
    description:
      'Fast, responsive, and easy-to-maintain websites and web apps, from landing pages to full dashboards. I focus on clean code, smooth interactions, and a great experience on every device.',
    image: webDevelopment,
    tools: ['React', 'Next.js', 'Astro', 'Tailwind CSS', 'Laravel', 'MySQL'],
  },
  {
    title: 'AI Integration',
    description:
      'Bringing AI features into web applications, such as chatbots, automatic summaries, smart search, and recommendations, so your product becomes smarter and more useful for its users.',
    image: aiIntegration,
    tools: ['Python', 'FastAPI', 'LangChain', 'OpenAI API', 'Claude API'],
  },
  {
    title: 'Machine Learning & Data',
    description:
      'Processing data and building prediction or classification models, then presenting the results inside an application so they turn into insights you can act on.',
    image: machineLearningData,
    tools: ['Python', 'Pandas', 'Scikit-learn', 'TensorFlow', 'Jupyter'],
  },
  {
    title: 'DevOps & Developer Tools',
    description:
      'Setting up deployment pipelines, containers, and automation so applications are easy to release, monitor, and maintain over time.',
    image: devops,
    tools: ['Git', 'GitHub Actions', 'Docker', 'Linux', 'Vercel'],
  },
];

export type Experience = {
  period: string;
  title: string;
  org: string;
  type: 'Education' | 'Organization' | 'Internship' | 'Freelance';
  /** Poin-poin detail; kosongkan dulu, tampil sebagai daftar bila diisi */
  points: string[];
};

// Urut dari yang terbaru (berdasarkan tanggal mulai)
export const experience: Experience[] = [
  {
    period: 'Sep 2025 – Oct 2026',
    title: 'Freelance Web GIS Developer',
    org: 'MBG Distribution Map · Diskominfo Kota Bandung',
    type: 'Freelance',
    points: [
      'Built an interactive web map of the Free Nutritious Meals (MBG) program across Bandung',
      'Mapped 41 SPPG kitchens, 1,798 schools, and 472 urban farming groups over district and sub-district boundaries',
      'Clustered more than 2,000 markers with Leaflet.markercluster, color-coded per layer with detail popups',
      'Added layer toggles, location search, locate-me, and basemap switching',
      'Kept all data as static GeoJSON so the map needs no backend and is easy to update',
    ],
  },
  {
    period: 'Jun 2025 – Sep 2025',
    title: 'Fullstack Developer',
    org: 'Dinas Komunikasi dan Informatika (Diskominfo) Kota Bandung',
    type: 'Internship',
    points: [
      'Built an asset inventory web app with four complete business workflows and multi-level approvals',
      'Implemented role-based access control (RBAC) for six user roles',
      'Generated official documents automatically as PDF files',
      'Gave every item a QR code that opens a public information page',
      'Automated testing with Jest and Supertest, running in CI on GitHub Actions',
    ],
  },
  {
    period: 'Mar 2025 – Oct 2025',
    title: 'Sponsorship Staff',
    org: 'Himpunan Mahasiswa Informatika (HMIF)',
    type: 'Organization',
    points: [
      'Secured strategic partnerships through research, deal negotiation, and timely execution of sponsor promotions',
      'Grew sponsorship by identifying prospects, building relationships, and negotiating mutually beneficial deals',
      'Monitored sponsor promotion rights (hashtags, logos, posting schedules) on social media and during events',
    ],
  },
  {
    period: 'Jun 2024 – Dec 2024',
    title: 'Human Resources Staff',
    org: 'Himpunan Mahasiswa Informatika (HMIF)',
    type: 'Organization',
    points: [
      'Managed a structured and objective selection process for event leaders',
      'Designed and ran team-building activities to strengthen collaboration',
      'Built a member performance evaluation system based on participation and contribution',
    ],
  },
  {
    period: 'Sep 2022 – Sep 2026',
    title: 'Bachelor of Informatics (S1) · GPA 3.70/4.00',
    org: 'Institut Teknologi Nasional Bandung (ITENAS)',
    type: 'Education',
    points: [],
  },
];

export const contactPurposes = ['Freelance Project', 'Job Opportunity', 'Collaboration', 'Technical Discussion', 'Other'];
