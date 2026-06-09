import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const { userId, title, summary, missingSkills, prioritySkills } = await request.json();

    if (!userId || !title || !summary) {
      return NextResponse.json({ error: 'Missing required analysis fields' }, { status: 400 });
    }

    const analysis = await prisma.analysis.create({
      data: {
        userId,
        title,
        summary,
        missingSkills,
        prioritySkills
      }
    });

    return NextResponse.json({ analysis });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to save analysis' }, { status: 500 });
  }
}
