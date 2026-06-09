import { auth, redirectToSignIn } from '@clerk/nextjs';
import { BarChart3, Users, Wallet } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function AdminPage() {
  const { userId } = auth();

  if (!userId) {
    redirectToSignIn();
  }

  return (
    <main className="min-h-screen bg-surface px-6 py-10 text-slate-100 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 backdrop-blur-xl shadow-soft">
          <p className="text-sm uppercase tracking-[0.3em] text-violet-300">Admin panel</p>
          <h1 className="mt-3 text-4xl font-semibold text-white">View users, subscriptions, and app analytics.</h1>
          <p className="mt-3 max-w-2xl text-slate-400">Monitor platform usage, active subscriptions, and aggregate skill gap trends.</p>
        </div>

        <div className="grid gap-6 xl:grid-cols-3">
          <Card className="glass p-6">
            <div className="flex items-center gap-3 text-violet-300"><Users className="h-5 w-5" /> <span className="text-sm uppercase tracking-[0.24em]">Users</span></div>
            <p className="mt-4 text-4xl font-semibold text-white">1,280</p>
            <p className="mt-2 text-sm text-slate-400">Active members this month.</p>
          </Card>
          <Card className="glass p-6">
            <div className="flex items-center gap-3 text-sky-300"><Wallet className="h-5 w-5" /> <span className="text-sm uppercase tracking-[0.24em]">Revenue</span></div>
            <p className="mt-4 text-4xl font-semibold text-white">$47.5k</p>
            <p className="mt-2 text-sm text-slate-400">Monthly recurring subscription revenue.</p>
          </Card>
          <Card className="glass p-6">
            <div className="flex items-center gap-3 text-violet-300"><BarChart3 className="h-5 w-5" /> <span className="text-sm uppercase tracking-[0.24em]">Retention</span></div>
            <p className="mt-4 text-4xl font-semibold text-white">89%</p>
            <p className="mt-2 text-sm text-slate-400">Users retained after their first roadmap.</p>
          </Card>
        </div>

        <Card className="glass p-6">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-violet-300">Usage analytics</p>
              <h2 className="mt-2 text-2xl font-semibold text-white">Top insights</h2>
            </div>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-slate-900/80 p-5">
              <p className="text-sm text-slate-400">Most requested career path</p>
              <p className="mt-4 text-lg font-semibold text-white">Full Stack Developer</p>
            </div>
            <div className="rounded-3xl bg-slate-900/80 p-5">
              <p className="text-sm text-slate-400">Most common missing skill</p>
              <p className="mt-4 text-lg font-semibold text-white">System Design</p>
            </div>
          </div>
        </Card>
      </div>
    </main>
  );
}
