const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.user.upsert({
    where: { email: 'demo@skillgap.ai' },
    update: {},
    create: {
      clerkId: 'demo-user',
      email: 'demo@skillgap.ai',
      name: 'Demo User',
      profile: {
        create: {
          headline: 'Aspiring software engineer',
          careerGoal: 'Full Stack Developer',
          portfolioUrl: 'https://demo.portfolio',
          linkedInUrl: 'https://linkedin.com/in/demo',
          githubUsername: 'demo'
        }
      },
      resume: {
        create: {
          filename: 'resume.pdf',
          fileType: 'application/pdf',
          atsScore: 84,
          formatting: 'Strong formatting with clear sections',
          keywords: 'React, Node.js, TypeScript, AWS',
          suggestions: 'Add measurable achievements and system design examples.'
        }
      },
      githubAnalysis: {
        create: {
          score: 84,
          topLanguages: ['JavaScript', 'TypeScript', 'Python'],
          repoCount: 14,
          readmeQuality: 'High quality with actionable examples',
          commitConsistency: 'Steady contributions over 12 months'
        }
      },
      subscription: {
        create: {
          tier: 'PRO',
          status: 'active'
        }
      },
      skillScore: {
        create: {
          technical: 72,
          project: 68,
          resume: 84,
          interview: 73,
          readiness: 76
        }
      }
    }
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
