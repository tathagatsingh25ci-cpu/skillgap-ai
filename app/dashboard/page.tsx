import { auth, redirectToSignIn } from '@clerk/nextjs';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Layers, MessageCircle, Sparkles, Trophy } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { SkillChart } from '@/components/dashboard/skill-chart';
import { SummaryCard } from '@/components/dashboard/summary-card';

export default function DashboardPage() {
  const { userId } = auth();

  if (!userId) {
    redirectToSignIn();
  }

  const topSkills = ['React', 'TypeScript', 'Docker', 'SQL', 'AWS'];
  const missingSkills = ['System Design', 'GraphQL', 'Kubernetes', 'CICD'];

  return (
    <main className="relative min-h-screen bg-surface px-6 py-10 text-slate-100 sm:px-10 lg:px-16">
      <div className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.22),_transparent_20%),linear-gradient(180deg,_rgba(15,23,42,0.95),_transparent)]" />
      <div className="relative mx-auto max-w-7xl space-y-8">
        <div className="flex flex-col gap-4 rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 backdrop-blur-xl shadow-soft sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-violet-300">Dashboard</p>
            <h1 className="mt-3 text-4xl font-semibold text-white">Your personalized career command center</h1>
            <p className="mt-3 max-w-2xl text-slate-400">Analyze your profile, track readiness, and close the skills that matter most for your dream role.</p>
          </div>
          <div className="flex flex-col items-start gap-3 sm:items-end">
            <p className="rounded-full bg-white/5 px-4 py-2 text-sm text-slate-200">Welcome back, your AI mentor is waiting.</p>
            <Link href="/dashboard" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-sky-500 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5">
              Explore updates <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <section className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <SummaryCard label="Readiness score" value="72%" description="Your current career readiness with actionable improvements." />
              <SummaryCard label="GitHub score" value="84" description="Repository quality, contributions and code health." />
            </div>
            <Card className="glass rounded-[2rem] p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-violet-300">Project recommendations</p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">Build the right portfolio pieces</h2>
                </div>
                <Sparkles className="h-6 w-6 text-sky-300" />
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {['Expense Tracker', 'AI Resume Analyzer', 'Job Portal'].map((project) => (
                  <div key={project} className="rounded-3xl bg-slate-900/80 p-4 text-sm text-slate-300">
                    <p className="font-semibold text-white">{project}</p>
                    <p className="mt-2 text-xs text-slate-500">Project recommended for your next step.</p>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="glass rounded-[2rem] p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-violet-300">Priority skills</p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">Grow these next</h2>
                </div>
                <Layers className="h-6 w-6 text-violet-300" />
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-900/80 p-5">
                  <p className="text-sm text-slate-400">Current skills</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {topSkills.map((skill) => (
                      <span key={skill} className="rounded-full bg-white/5 px-3 py-1 text-sm text-slate-200">{skill}</span>
                    ))}
                  </div>
                </div>
                <div className="rounded-3xl bg-slate-900/80 p-5">
                  <p className="text-sm text-slate-400">Missing skills</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {missingSkills.map((skill) => (
                      <span key={skill} className="rounded-full bg-violet-500/10 px-3 py-1 text-sm text-violet-200">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
          <div className="space-y-6">
            <SkillChart />
            <Card className="glass rounded-[2rem] p-6">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-violet-300">AI mentor</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">Ask what to learn next</h3>
                </div>
                <MessageCircle className="h-6 w-6 text-sky-300" />
              </div>
              <div className="mt-6 rounded-[2rem] bg-slate-950/80 p-6">
                <p className="text-sm text-slate-400">What should I learn next to qualify for a senior frontend role?</p>
                <p className="mt-4 text-sm leading-7 text-slate-200">
                  Focus on advanced TypeScript patterns, component architecture, scalable CSS solutions, and production-ready cloud deployment with containerization.
                </p>
                <div className="mt-6 flex items-center justify-between rounded-3xl bg-white/5 px-4 py-3 text-sm text-slate-300">
                  <span>Next milestone</span>
                  <span className="font-semibold text-white">Launch 3 portfolio projects</span>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </main>
  );
}
