// Semua konten statis situs ada di sini — edit file ini untuk mengganti teks, link, dan angka.
import type { ImageMetadata } from 'astro';
import type { IconName } from './icons';

import webDevelopment from '@/assets/services/web-development.jpg';
import aiIntegration from '@/assets/services/ai-integration.jpg';
import machineLearningData from '@/assets/services/machine-learning-data.jpg';
import devops from '@/assets/services/devops.jpg';

export const site = {
  name: 'Portox',
  title: 'Portox - Personal Portfolio & Agency Site',
  description:
    'Portox is a personal portfolio & agency site designed to showcase your work. Ideal for freelancers, creative portfolios, creative agencies, digital agencies and personal portfolios.',
  owner: 'Andro',
  email: 'novalrizkynugraha@gmail.com',
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Portofolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
];

export const socials: { label: string; href: string; icon: IconName }[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/novalrizky/', icon: 'linkedin' },
  { label: 'Instagram', href: 'https://www.instagram.com/novalrizky24_/', icon: 'instagram' },
  { label: 'GitHub', href: 'https://github.com/NovalRizkyy24', icon: 'github' },
];

export const heroStats = [
  { value: 20, suffix: '+', label: 'Years of experience' },
  { value: 2, suffix: 'k+', label: 'Happy clients' },
  { value: 160, suffix: '+', label: 'Country' },
];

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
    org: 'Freelance',
    type: 'Freelance',
    points: [],
  },
  {
    period: 'Jun 2025 – Sep 2025',
    title: 'Internship',
    org: 'Dinas Komunikasi dan Informatika Kota Bandung (Diskominfo)',
    type: 'Internship',
    points: [],
  },
  {
    period: 'Sep 2023 – Oct 2025',
    title: 'Active Board Member',
    org: 'Himpunan Mahasiswa Informatika (HMIF)',
    type: 'Organization',
    points: [],
  },
  {
    period: 'Sep 2022 – Oct 2026',
    title: 'Bachelor of Informatics (S1)',
    org: 'Institut Teknologi Nasional (ITENAS)',
    type: 'Education',
    points: [],
  },
];

export const contactPurposes = ['Freelance Project', 'Job Opportunity', 'Collaboration', 'Technical Discussion', 'Other'];
