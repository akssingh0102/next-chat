// prisma/seed.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const userCount = await prisma.user.count();

  if (userCount === 0) {
    const user1 = await prisma.user.create({
      data: {
        name: 'admin',
        email: 'admin',
        password: 'admin',
      },
    });

    const user2 = await prisma.user.create({
      data: {
        name: 'Bob',
        email: 'bob@example.com',
        password: 'password123',
      },
    });

    console.log('🌳 Seed data created:', { user1, user2 });
  } else {
    console.log('🌳 Seed data already exists, skipping...');
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
