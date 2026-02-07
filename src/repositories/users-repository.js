let db = [
  {
    name: "Danilo2",
    email: "asd2@asd.com",
    type: "admin",
    password: "123456",
  },
  {
    name: "Danilo",
    email: "asd@asd.com",
    type: "admin",
    password: "123456",
  },
];

export const findAllUsers = async () => {
  // const users = await prisma.user.findMany();
  return db;
};

export const findUsersByEmail = async (email) => {
  return db.filter((item) => {
    if (item.email === email) {
      return item;
    }
  });
};
