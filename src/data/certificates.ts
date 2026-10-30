// Daftar sertifikat. Tambah sertifikat baru: taruh gambarnya di src/assets/certificates/ (nama file: penerbit-judul.jpg),
// import di bawah, lalu tambahkan satu entri. Urutan tampil otomatis dari tanggal terbaru.
// `featured: true` = ikut tampil di masonry halaman Home (maks. HOME_CERTIFICATE_LIMIT).
import type { ImageMetadata } from 'astro';

import claudeApi from '@/assets/certificates/claude-building-with-the-claude-api.jpg';
import claudeCode101 from '@/assets/certificates/claude-code-101.jpg';
import claudeCodeInAction from '@/assets/certificates/claude-code-in-action.jpg';
import claudeGoogleCloud from '@/assets/certificates/claude-on-google-cloud.jpg';
import dicodingAws from '@/assets/certificates/dicoding-cloud-genai-aws.jpg';
import dicodingKiro from '@/assets/certificates/dicoding-spec-driven-development-kiro.jpg';
import dicodingProject from '@/assets/certificates/dicoding-project-management.jpg';
import hackerrankProblemSolving from '@/assets/certificates/hackerrank-problem-solving-basic.jpg';
import huaweiAi from '@/assets/certificates/huawei-hcia-ai.jpg';
import huaweiCloud from '@/assets/certificates/huawei-hcia-cloud-computing.jpg';
import huaweiPython from '@/assets/certificates/huawei-python-programming.jpg';

export type Certificate = {
  title: string;
  issuer: string;
  date: string; // YYYY-MM-DD
  image: ImageMetadata;
  credentialUrl?: string;
  featured?: boolean;
};

export const HOME_CERTIFICATE_LIMIT = 8;

const all: Certificate[] = [
  {
    title: 'Building with the Claude API',
    issuer: 'Claude Academy',
    date: '2026-10-23',
    image: claudeApi,
    credentialUrl: 'https://academy.claude.com/verify/57180b7823236b7efc0547246e2b649d',
    featured: true,
  },
  {
    title: 'Claude Code in Action',
    issuer: 'Claude Academy',
    date: '2026-10-23',
    image: claudeCodeInAction,
    credentialUrl: 'https://academy.claude.com/verify/1b98d0949d0fe0243129888c68976320',
    featured: true,
  },
  {
    title: 'Claude on Google Cloud',
    issuer: 'Claude Academy',
    date: '2026-10-23',
    image: claudeGoogleCloud,
    credentialUrl: 'https://academy.claude.com/verify/d71f9f73fd1cf1734edfbb2ad1256b10',
  },
  {
    title: 'Claude Code 101',
    issuer: 'Claude Academy',
    date: '2026-10-14',
    image: claudeCode101,
    credentialUrl: 'https://academy.claude.com/verify/942f2cacf7e8c4381c79f2593aefc41c',
  },
  {
    title: 'Belajar Dasar Cloud dan Gen AI di AWS',
    issuer: 'Dicoding Indonesia',
    date: '2026-10-30',
    image: dicodingAws,
    credentialUrl: 'https://www.dicoding.com/certificates/81P2K46GQXOY',
    featured: true,
  },
  {
    title: 'Spec-Driven Development dengan Kiro',
    issuer: 'Dicoding Indonesia',
    date: '2026-09-05',
    image: dicodingKiro,
    credentialUrl: 'https://www.dicoding.com/certificates/1OP874VD8ZQK',
    featured: true,
  },
  {
    title: 'Belajar Dasar Manajemen Proyek',
    issuer: 'Dicoding Indonesia',
    date: '2025-11-07',
    image: dicodingProject,
    credentialUrl: 'https://www.dicoding.com/certificates/98XW8588WPM3',
  },
  {
    title: 'HCIA-Cloud Computing V5.5 Course',
    issuer: 'Huawei ICT Academy',
    date: '2026-10-30',
    image: huaweiCloud,
    featured: true,
  },
  {
    title: 'Problem Solving (Basic)',
    issuer: 'HackerRank',
    date: '2025-10-22',
    image: hackerrankProblemSolving,
    credentialUrl: 'https://www.hackerrank.com/certificates/073d96870f18',
    featured: true,
  },
  {
    title: 'HCIA-AI V3.5 Course',
    issuer: 'Huawei Talent Online',
    date: '2024-08-13',
    image: huaweiAi,
    featured: true,
  },
  {
    title: 'Python Programming Basics',
    issuer: 'Huawei Talent Online',
    date: '2023-12-06',
    image: huaweiPython,
    featured: true,
  },
];

export const certificates = [...all].sort((a, b) => b.date.localeCompare(a.date));

export const featuredCertificates = certificates.filter((c) => c.featured).slice(0, HOME_CERTIFICATE_LIMIT);

export const formatCertificateDate = (date: string) =>
  new Date(`${date}T00:00:00Z`).toLocaleDateString('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' });
