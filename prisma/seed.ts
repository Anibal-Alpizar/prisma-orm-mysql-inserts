import { PrismaClient } from "@prisma/client";
import { users } from "./seeds/user";
import { posts } from "./seeds/posts";
import { User, Post } from "./types";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: users as User[],
  });
  await prisma.post.createMany({
    data: posts as Post[],
  });
}

main()
  .then(async (): Promise<void> => {
    await prisma.$disconnect();
  })
  .catch(async (e: Error): Promise<void> => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
