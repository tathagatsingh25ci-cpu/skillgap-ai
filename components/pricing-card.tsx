import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface PricingCardProps {
  plan: {
    title: string;
    price: string;
    description: string;
    items: string[];
  };
}

export function PricingCard({ plan }: PricingCardProps) {
  return (
    <Card className="glass p-8">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-violet-300">{plan.title}</p>
          <p className="mt-4 text-5xl font-semibold text-white">${plan.price}</p>
        </div>
        {plan.price !== '0' ? (
          <span className="rounded-full bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate-300">
            Popular
          </span>
        ) : null}
      </div>
      <p className="mt-6 text-sm leading-7 text-slate-400">{plan.description}</p>
      <div className="mt-8 space-y-3">
        {plan.items.map((item) => (
          <div key={item} className="flex items-center gap-3 text-sm text-slate-300">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-violet-500/15 text-violet-200">✓</span>
            {item}
          </div>
        ))}
      </div>
      <Button className="mt-8 w-full">Choose {plan.title}</Button>
    </Card>
  );
}
