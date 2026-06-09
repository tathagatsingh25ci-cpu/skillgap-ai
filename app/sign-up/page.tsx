'use client';

import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-surface py-16 px-6 text-slate-100 sm:px-10">
      <div className="mx-auto max-w-md rounded-[2rem] border border-white/10 bg-slate-950/80 p-10 shadow-soft backdrop-blur-xl">
        <h1 className="text-3xl font-semibold text-white">Create your account</h1>
        <p className="mt-3 text-slate-400">Start discovering your skill gaps and actionable roadmap.</p>
        <div className="mt-8">
          <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
        </div>
      </div>
    </div>
  );
}
