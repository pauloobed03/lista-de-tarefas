// test.js
import { PrismaClient } from "./src/generated/prisma/index.js"; // IMPORTANTE: apontar para index.js
const prisma = new PrismaClient();

async function main() {
  const tarefas = await prisma.tarefas.findMany();
  console.log(tarefas);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
