// Semua konten statis situs ada di sini — edit file ini untuk mengganti teks, link, dan angka.
import type { ImageMetadata } from 'astro';
import type { IconName } from './icons';

import creativeDesign from '@/assets/services/creative-design.jpg';
import webDevelopment from '@/assets/services/web-development.jpg';
import digitalMarketing from '@/assets/services/digital-marketing.jpg';
import businessConsulting from '@/assets/services/business-consulting.jpg';
import james from '@/assets/testimonials/james-anderson.jpg';
import michael from '@/assets/testimonials/michael-thompson.jpg';
import david from '@/assets/testimonials/david-miller.jpg';
import christopher from '@/assets/testimonials/christopher-reed.jpg';
import expHyperfolio from '@/assets/about/exp-hyperfolio.svg';
import expCodot from '@/assets/about/exp-codot.svg';
import expPentaclay from '@/assets/about/exp-pentaclay.svg';
import expGreenspire from '@/assets/about/exp-greenspire.svg';
import expKairy from '@/assets/about/exp-kairy.svg';

export const site = {
  name: 'Portox',
  title: 'Portox - Personal Portfolio & Agency Site',
  description:
    'Portox is a personal portfolio & agency site designed to showcase your work. Ideal for freelancers, creative portfolios, creative agencies, digital agencies and personal portfolios.',
  owner: 'Andro',
  email: 'hello.andro@gmail.com',
  contactEmail: 'contact@portox.com',
  phone: '+880 1234 5678 987',
  address: '456 Elm Street, Manchester, United Kingdom',
  mapQuery: 'Framer B.V.',
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Portofolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
];

export const socials: { label: string; href: string; icon: IconName }[] = [
  { label: 'Behance', href: 'https://www.behance.net/', icon: 'behance' },
  { label: 'Dribbble', href: 'https://dribbble.com/', icon: 'dribbble' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: 'linkedin' },
  { label: 'Facebook', href: 'https://www.facebook.com/', icon: 'facebook' },
  { label: 'Instagram', href: 'https://www.instagram.com/', icon: 'instagram' },
];

export const heroStats = [
  { value: 20, suffix: '+', label: 'Years of experience' },
  { value: 2, suffix: 'k+', label: 'Happy clients' },
  { value: 160, suffix: '+', label: 'Country' },
];

export const tools: { label: string; href: string; icon: IconName }[] = [
  { label: 'Sketch', href: 'https://www.sketch.com', icon: 'sketch' },
  { label: 'Framer', href: 'https://www.framer.com', icon: 'framer' },
  { label: 'Figma', href: 'https://www.figma.com', icon: 'figma' },
  { label: 'Webflow', href: 'https://www.webflow.com', icon: 'webflow' },
  { label: 'After Effects', href: 'https://www.adobe.com/products/aftereffects.html', icon: 'after-effects' },
];

export const intro =
  'Welcome to my portfolio! I’m Noval Rizky Nugraha, a Web Developer and AI Engineer based in Indonesia. As an Informatics graduate from Institut Teknologi Nasional Bandung, I specialize in combining web technologies with Artificial Intelligence to build smart, highly dynamic, and futuristic web applications.';

export type Service = {
  title: string;
  description: string;
  image: ImageMetadata;
  stats: { value: number; label: string }[];
};

const serviceStats = [
  { value: 100, label: 'Work done' },
  { value: 97, label: 'Positive reviews' },
  { value: 50, label: 'Repeat clients' },
];

export const services: Service[] = [
  {
    title: 'Creative Design',
    description:
      'My creative strategy and branding service focuses on developing distinctive brand identities that resonate with your audience and communicate your vision effectively. We combine research, storytelling, and design thinking.',
    image: creativeDesign,
    stats: serviceStats,
  },
  {
    title: 'Web Development',
    description:
      'We prioritize clean layouts, intuitive navigation, and seamless interactions to ensure every design enhances usability and drives engagement. Whether it’s a responsive website, a mobile app, or a complex software interface.',
    image: webDevelopment,
    stats: serviceStats,
  },
  {
    title: 'Digital Marketing',
    description:
      'Data-driven campaigns that help brands reach and engage their target audiences effectively. We combine strategy, creativity, and analytics to optimize performance across social media and search engines.',
    image: digitalMarketing,
    stats: serviceStats,
  },
  {
    title: 'Business Consulting',
    description:
      'Whether it’s for websites, mobile apps, or software platforms, I aim to deliver insights and strategies that enhance the user experience, streamline interactions, and align product design with your business goals.',
    image: businessConsulting,
    stats: serviceStats,
  },
];

export type Testimonial = { quote: string; name: string; role: string; image: ImageMetadata };

export const testimonials: Testimonial[] = [
  {
    quote:
      'Thanks to the team’s creativity and precision, our project was truly smooth, seamless, efficient, and visually stunning.',
    name: 'James Anderson',
    role: 'UX Designer',
    image: james,
  },
  {
    quote:
      'Working with them felt smooth and seamless, with every step being professional, insightful, and results-driven.',
    name: 'Michael Thompson',
    role: 'Frontend Developer',
    image: michael,
  },
  {
    quote:
      'Their innovative approach transformed our ideas into a cohesive, user-friendly solution that exceeded all our expectations.',
    name: 'David Miller',
    role: 'Product Manager',
    image: david,
  },
  {
    quote:
      'The process was efficient and inspiring, combining expertise, creativity, and dedication to produce outstanding work.',
    name: 'Christopher Reed',
    role: 'Creative Director',
    image: christopher,
  },
];

export const process = {
  discovery: {
    title: 'Discovery',
    description: 'I’ll draft a few layouts to make sure we’re aligned on the structure, interactions, and overall direction.',
  },
  wireframe: {
    title: 'Wireframe',
    description: "I'll whip up some wireframes to make sure we're all on the same page about where we're headed.",
  },
  design: {
    title: 'Design',
    description: "I'll check out the art direction and animation for the experience, making sure it fits well with your target.",
  },
  build: {
    title: 'Build',
    description: "Once the designs are all set, I'll team up with a creative developer to make the vision a reality.",
  },
  deliver: {
    title: 'Deliver',
    description: "Finally, I'll put together and send you the project assets and guidelines right on schedule.",
  },
};

export const faqs = [
  {
    question: 'What services do you offer?',
    answer:
      'There are many types of services we offer, ranging from design and development to marketing and consulting, but each project is tailored individually, ensuring a unique solution that fits your needs perfectly.',
  },
  {
    question: 'How long does a project take?',
    answer:
      'Project durations vary depending on complexity and requirements, but we always aim to deliver on time while maintaining quality, and we keep clients updated throughout the process to avoid surprises.',
  },
  {
    question: 'What is your pricing model?',
    answer:
      'Pricing can differ based on the project scope, complexity, and specific requirements, but we provide transparent quotes upfront so there are no hidden costs or unexpected charges along the way.',
  },
  {
    question: 'Do you offer post-project support?',
    answer:
      'After a project is completed, we provide ongoing support and maintenance to ensure everything functions smoothly, address any issues quickly, and help clients get the most out of the final product.',
  },
];

export const aboutStats = [
  { value: 75, suffix: '+', label: 'Projects done' },
  { value: 100, suffix: '%', label: 'Positive reviews' },
];

export const experience = [
  { role: 'Product Designer', site: 'hyperfolio.framer.website', period: '2023 - Present', icon: expHyperfolio },
  { role: 'UX Designer', site: 'codot.framer.website', period: '2019 - 2023', icon: expCodot },
  { role: 'Lead Product Designer', site: 'pentaclay.com', period: '2016 - 2018', icon: expPentaclay },
  { role: 'Senior Product Designer', site: 'greenspire.framer.website', period: '2015 - 2016', icon: expGreenspire },
  { role: 'UI/UX Designer', site: 'kairy.framer.website', period: '2014 - 2015', icon: expKairy },
];

export const awards = [
  { name: 'Dribbble', description: 'Elegant pixels for refined web artistry', year: '2016' },
  { name: 'Awwwards', description: 'Digital dreamscapes for immersive experiences', year: '2019' },
  { name: 'Behance', description: 'Innovative interfaces for modern applications', year: '2022' },
  { name: 'Awwwards', description: 'Creating web masterpieces for users', year: '2024' },
];

export const contactOptions = {
  services: services.map((s) => s.title),
  budgets: ['20k - 30k', '30k - 50k', '60k - 70k'],
};
