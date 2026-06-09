'use client';

import { ResponsiveContainer, RadialBarChart, RadialBar, Legend } from 'recharts';

const data = [
  { name: 'Technical', value: 72, fill: '#8b5cf6' },
  { name: 'Projects', value: 68, fill: '#38bdf8' },
  { name: 'Resume', value: 84, fill: '#c084fc' },
  { name: 'Interview', value: 73, fill: '#60a5fa' }
];

export function SkillChart() {
  return (
    <div className="glass rounded-[2rem] p-6 text-slate-100">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-violet-300">Skill readiness</p>
          <h3 className="text-2xl font-semibold text-white">Overall score</h3>
        </div>
      </div>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart innerRadius="10%" outerRadius="90%" data={data} startAngle={180} endAngle={-360}>
            <RadialBar minAngle={15} background clockWise dataKey="value" cornerRadius={20} />
            <Legend iconSize={8} layout="vertical" verticalAlign="middle" align="right" formatter={(value: string) => <span className="text-sm text-slate-200">{value}</span>} />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
