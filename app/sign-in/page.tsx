'use client';

import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-surface py-16 px-6 text-slate-100 sm:px-10">
      <div className="mx-auto max-w-md rounded-[2rem] border border-white/10 bg-slate-950/80 p-10 shadow-soft backdrop-blur-xl">
        <h1 className="text-3xl font-semibold text-white">Welcome back</h1>
        <p className="mt-3 text-slate-400">Sign in to continue your AI-powered career analysis.</p>
        <div className="mt-8">
          <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
        </div>
      </div>
    </div>
  );
}
