import { NextResponse } from 'next/server';
import { generateCareerRoadmap, analyzeResume, generateInterviewPrep } from '@/lib/openai';

export async function POST(request: Request) {
  try {
    const { type, content } = await request.json();

    if (!type || !content) {
      return NextResponse.json({ error: 'Request missing type or content' }, { status: 400 });
    }

    if (type === 'roadmap') {
      const result = await generateCareerRoadmap(content);
      return NextResponse.json({ result });
    }

    if (type === 'resume') {
      const result = await analyzeResume(content);
      return NextResponse.json({ result });
    }

    if (type === 'interview') {
      const result = await generateInterviewPrep(content);
      return NextResponse.json({ result });
    }

    return NextResponse.json({ error: 'Unsupported type' }, { status: 400 });
  } catch (error) {
    return NextResponse.json({ error: 'OpenAI request failed' }, { status: 500 });
  }
}
