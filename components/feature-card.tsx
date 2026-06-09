import { CheckCircle2 } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface FeatureCardProps {
  title: string;
  description: string;
}

export function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <Card className="flex flex-col gap-2 p-6">
      <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-violet-500/10 text-violet-200">
        <CheckCircle2 className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm leading-6 text-slate-400">{description}</p>
    </Card>
  );
}
