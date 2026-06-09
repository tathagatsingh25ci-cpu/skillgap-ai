import OpenAI from 'openai';

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function generateCareerRoadmap(input: string) {
  const response = await client.responses.create({
    model: 'gpt-4.1-mini',
    input: `Create a personalized career roadmap based on the following profile:\n${input}`
  });

  return response.output[0]?.content[0]?.text ?? '';
}

export async function analyzeResume(input: string) {
  const response = await client.responses.create({
    model: 'gpt-4.1-mini',
    input: `Analyze this resume content for ATS optimization and missing skills:\n${input}`
  });
  return response.output[0]?.content[0]?.text ?? '';
}

export async function generateInterviewPrep(path: string) {
  const response = await client.responses.create({
    model: 'gpt-4.1-mini',
    input: `Generate interview preparation questions and tips for ${path}.` 
  });
  return response.output[0]?.content[0]?.text ?? '';
}
