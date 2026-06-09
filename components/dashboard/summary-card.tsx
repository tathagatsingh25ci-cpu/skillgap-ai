import { Info } from 'lucide-react';

interface SummaryCardProps {
  label: string;
  value: string;
  description: string;
}

export function SummaryCard({ label, value, description }: SummaryCardProps) {
  return (
    <div className="glass rounded-3xl border border-white/10 p-6">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm uppercase tracking-[0.24em] text-slate-400">{label}</p>
        <Info className="h-4 w-4 text-slate-400" />
      </div>
      <p className="mt-4 text-4xl font-semibold text-white">{value}</p>
      <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
    </div>
  );
}
