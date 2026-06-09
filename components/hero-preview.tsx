import { Activity, BarChart3, Sparkles, Trophy } from 'lucide-react';

export function HeroPreview() {
  return (
    <div className="glass relative overflow-hidden rounded-[2rem] border border-white/10 p-6 shadow-soft">
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="absolute -left-10 bottom-10 h-32 w-32 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="space-y-6">
        <div className="flex items-center justify-between rounded-3xl bg-slate-950/70 p-4">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Skill readiness</p>
            <p className="text-3xl font-semibold text-white">72%</p>
          </div>
          <div className="rounded-3xl bg-slate-900/80 p-3 text-sky-300">
            <Sparkles className="h-5 w-5" />
          </div>
        </div>
        <div className="space-y-4 rounded-[2rem] bg-slate-950/70 p-5">
          <div className="flex items-center justify-between text-slate-300">
            <span>Resume Score</span>
            <span className="text-white font-semibold">84</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-5/6 rounded-full bg-gradient-to-r from-violet-500 to-sky-500" />
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {['Projects', 'Skills', 'Interview'].map((label) => (
              <div key={label} className="rounded-3xl bg-slate-900/80 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-500">{label}</p>
                <p className="mt-3 text-xl font-semibold text-white">{label === 'Projects' ? '78' : label === 'Skills' ? '68' : '73'}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-4 rounded-[2rem] bg-slate-950/70 p-5">
          <div className="flex items-center justify-between text-slate-300">
            <div className="flex items-center gap-2 text-slate-200">
              <Activity className="h-5 w-5 text-violet-300" />
              <span>Missing Skills</span>
            </div>
            <span className="text-sm text-slate-400">Priority</span>
          </div>
          <div className="grid gap-2 text-sm text-slate-300 sm:grid-cols-2">
            {['React', 'SQL', 'Docker', 'AWS', 'System Design', 'TypeScript'].map((skill) => (
              <div key={skill} className="rounded-3xl bg-white/5 px-4 py-3">{skill}</div>
            ))}
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-[2rem] bg-slate-950/70 p-5">
            <div className="flex items-center gap-2 text-slate-300">
              <BarChart3 className="h-5 w-5 text-sky-300" />
              <span>Career simulator</span>
            </div>
            <p className="mt-4 text-3xl font-semibold text-white">85%</p>
            <p className="mt-2 text-sm text-slate-400">Potential readiness if you learn React, SQL, and Docker.</p>
          </div>
          <div className="rounded-[2rem] bg-slate-950/70 p-5">
            <div className="flex items-center gap-2 text-slate-300">
              <Trophy className="h-5 w-5 text-violet-300" />
              <span>Job match</span>
            </div>
            <p className="mt-4 text-3xl font-semibold text-white">91%</p>
            <p className="mt-2 text-sm text-slate-400">Your profile aligns with senior frontend roles at top companies.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
