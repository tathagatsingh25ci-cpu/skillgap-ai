import { Card } from '@/components/ui/card';

interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="glass p-6">
      <p className="text-lg leading-8 text-slate-200">“{testimonial.quote}”</p>
      <div className="mt-6 border-t border-white/10 pt-5">
        <p className="font-semibold text-white">{testimonial.name}</p>
        <p className="text-sm text-slate-400">{testimonial.role}</p>
      </div>
    </Card>
  );
}
