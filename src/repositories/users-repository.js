let db = [
  { 1: { Nome: "Cliente 1", Idade: "20" } },
  { 2: { Nome: "Cliente 2", Idade: "20" } },
  { 3: { Nome: "Cliente 3", Idade: "20" } },
];

export const findAllUsers = async () => {
  // const users = await prisma.user.findMany();
  return db;
};
