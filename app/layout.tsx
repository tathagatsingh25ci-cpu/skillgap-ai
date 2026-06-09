import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';

export const metadata: Metadata = {
  title: 'SkillGap AI | Know what you\'re missing. Build what matters.',
  description:
    'Discover missing skills for your dream career with AI-powered resume, GitHub, and career readiness analysis.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://skillgap-ai.vercel.app'),
  openGraph: {
    title: 'SkillGap AI',
    description:
      'AI-powered skill gap analysis, personalized roadmaps, and career readiness tracking.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://skillgap-ai.vercel.app',
    siteName: 'SkillGap AI',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SkillGap AI',
    description:
      'Know what you\'re missing. Build what matters with AI career roadmap generation.'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-surface text-slate-100">
        <ClerkProvider>{children}</ClerkProvider>
      </body>
    </html>
  );
}
