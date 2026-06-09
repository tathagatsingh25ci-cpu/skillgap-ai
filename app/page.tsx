import Link from 'next/link';
import { ArrowRight, CheckCircle2, Rocket, Sparkles, Shield, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { FeatureCard } from '@/components/feature-card';
import { HeroPreview } from '@/components/hero-preview';
import { PricingCard } from '@/components/pricing-card';
import { TestimonialCard } from '@/components/testimonial-card';

const features = [
  { title: 'AI Resume Analysis', description: 'Score your resume for ATS, keywords, and achievements.' },
  { title: 'GitHub Profile Analysis', description: 'Understand repo quality, activity, and contributions.' },
  { title: 'Skill Gap Detection', description: 'Identify the exact skills you need to reach your goal.' },
  { title: 'Personalized Roadmaps', description: 'Receive 30-day, 90-day, and 6-month guided plans.' },
  { title: 'Project Recommendations', description: 'Get tailored project ideas for beginner to advanced levels.' },
  { title: 'Interview Preparation', description: 'Practice technical and behavioral questions by career path.' },
  { title: 'Career Readiness Score', description: 'Track readiness across skills, resume, and interview strength.' },
  { title: 'Job Match Analysis', description: 'Match your profile to job listings and see missing requirements.' }
];

const careerPaths = [
  { category: 'Software Engineering', paths: ['Full Stack Developer', 'Frontend Developer', 'Backend Developer', 'Mobile Developer', 'DevOps Engineer', 'Cloud Engineer'] },
  { category: 'Artificial Intelligence', paths: ['AI Engineer', 'Machine Learning Engineer', 'Deep Learning Engineer', 'NLP Engineer', 'Computer Vision Engineer', 'Generative AI Engineer', 'Prompt Engineer'] },
  { category: 'Data', paths: ['Data Analyst', 'Data Scientist', 'Data Engineer', 'Business Analyst'] },
  { category: 'Cybersecurity', paths: ['Security Analyst', 'Penetration Tester', 'SOC Analyst', 'Ethical Hacker'] },
  { category: 'Electronics', paths: ['Embedded Engineer', 'VLSI Engineer', 'FPGA Engineer', 'IoT Engineer'] },
  { category: 'Networking', paths: ['Network Engineer', 'Cloud Network Engineer'] },
  { category: 'Design', paths: ['UI Designer', 'UX Designer', 'Product Designer'] },
  { category: 'Management', paths: ['Product Manager', 'Technical Product Manager', 'Program Manager'] }
];

const pricing = [
  {
    title: 'Free',
    price: '0',
    description: 'Start your first analysis with essential career guidance.',
    items: ['1 analysis/month', 'Basic roadmap', 'Career readiness score']
  },
  {
    title: 'Pro',
    price: '9',
    description: 'Unlimited analysis with advanced career intelligence.',
    items: ['Unlimited analyses', 'Advanced roadmaps', 'Resume optimization', 'GitHub insights']
  },
  {
    title: 'Premium',
    price: '19',
    description: 'All Pro features plus AI mentor and job matching tools.',
    items: ['AI mentor chat', 'Interview preparation', 'Job match insights', 'Career simulator']
  }
];

const testimonials = [
  {
    name: 'Aisha Patel',
    role: 'Frontend Engineer @ Nova Labs',
    quote: 'SkillGap AI turned my scattered experience into a focused roadmap. I landed interviews for roles I had been targeting for months.'
  },
  {
    name: 'Daniel Kim',
    role: 'Data Scientist',
    quote: 'The resume and GitHub analysis exposed blind spots I never knew I had. The AI mentor answers feel like working with a career coach.'
  },
  {
    name: 'Monica Lee',
    role: 'Product Manager',
    quote: 'The job match feature helped me understand requirements before applying. The roadmap is practical and keeps me accountable.'
  }
];

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.24),_transparent_18%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.18),_transparent_20%)]" />
      <section className="relative mx-auto flex min-h-[calc(100vh-64px)] max-w-7xl flex-col justify-center px-6 py-10 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur-xl">
              <Sparkles className="h-4 w-4 text-violet-300" />
              AI career guidance designed for ambitious professionals.
            </div>
            <div className="max-w-2xl space-y-6">
              <p className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Discover the Skills Standing Between You and Your Dream Career
              </p>
              <p className="text-lg leading-8 text-slate-300 sm:text-xl">
                Upload your resume and GitHub profile. Get AI-powered skill gap analysis, personalized learning roadmaps, project recommendations, and career insights.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <Link href="/dashboard">Analyze My Skills</Link>
              </Button>
              <Button variant="secondary" asChild>
                <Link href="#demo">View Demo</Link>
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:max-w-3xl">
              <Card className="panel-glass p-5">
                <h3 className="text-sm font-medium text-violet-200">Career Readiness</h3>
                <p className="mt-3 text-sm text-slate-300">Scores for technical skills, interview readiness, resume, and projects in one dashboard.</p>
              </Card>
              <Card className="panel-glass p-5">
                <h3 className="text-sm font-medium text-violet-200">Personalized Roadmaps</h3>
                <p className="mt-3 text-sm text-slate-300">Receive a 30-day, 90-day, and 6-month plan tailored to your target career.</p>
              </Card>
            </div>
          </div>
          <div className="relative">
            <HeroPreview />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-violet-300">How it works</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Turn career ambiguity into a clear action plan.</h2>
            <p className="max-w-xl text-slate-400">Follow a seamless four-step workflow: upload your resume, connect GitHub, choose a goal, and receive AI-driven recommendations.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {['Upload Resume', 'Connect GitHub', 'Choose Career Goal', 'Receive AI Analysis'].map((step, index) => (
              <Card key={step} className="glass p-6">
                <p className="text-sm uppercase tracking-[0.18em] text-slate-400">Step {index + 1}</p>
                <h3 className="mt-3 text-xl font-semibold text-white">{step}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10" id="demo">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-violet-300">Features</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Everything you need to build a career roadmap that works.</h2>
            <p className="max-w-xl text-slate-400">From resume optimization to job match insights and AI mentor assistance, SkillGap AI gives you the tools to close your skill gaps faster.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <FeatureCard key={feature.title} title={feature.title} description={feature.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-3">
          {pricing.map((plan) => (
            <PricingCard key={plan.title} plan={plan} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="space-y-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-violet-300">Testimonials</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Trusted by ambitious learners and rising professionals.</h2>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-violet-300">Supported career paths</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Build for the career path you want.</h2>
            <p className="max-w-xl text-slate-400">Choose your ambition and let AI recommend skills, projects, and interview prep that matches your target domain.</p>
          </div>
          <div className="grid gap-3">
            {careerPaths.map((section) => (
              <Card key={section.category} className="glass p-6">
                <h3 className="text-lg font-semibold text-white">{section.category}</h3>
                <div className="mt-4 flex flex-wrap gap-2 text-sm text-slate-300">
                  {section.paths.map((path) => (
                    <span key={path} className="rounded-full bg-white/5 px-3 py-1">{path}</span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
