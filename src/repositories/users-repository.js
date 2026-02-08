let db = [
  {
    id: 1,
    name: "Carlos Almeida",
    email: "carlos.almeida@teste.com",
    type: "admin",
    password: "admin123",
  },
  {
    id: 2,
    name: "Mariana Souza",
    email: "mariana.souza@teste.com",
    type: "user",
    password: "user123",
  },
  {
    id: 3,
    name: "Rafael Costa",
    email: "rafael.costa@teste.com",
    type: "user",
    password: "rafael456",
  },
  {
    id: 4,
    name: "Ana Pereira",
    email: "ana.pereira@teste.com",
    type: "admin",
    password: "ana789",
  },
];

let currentId = 5;

export const findAllUsers = async () => {
  return db;
};

export const findUsersByEmail = async (email) => {
  return db.filter((item) => {
    if (item.email === email) {
      return item;
    }
  });
};

export const findUsersById = async (id) => {
  return db.filter((item) => {
    if (item.id === id) {
      return item;
    }
  });
};

export const insertUser = async (user) => {
  const newUser = {
    id: currentId++,
    ...user,
  };

  db.push(newUser);
  return newUser;
};

export const deleteUser = async (email) => {
  const index = db.findIndex((item) => item.email === email);

  if (index !== -1) {
    db.splice(index, 1);
    return true;
  }

  return false;
};

export const deleteUserById = async (id) => {
  const index = db.findIndex((item) => item.id === id);

  if (index !== -1) {
    db.splice(index, 1);
    return true;
  }

  return false;
};

export const updateUser = async (id, body) => {
  const index = db.findIndex((item) => item.id === id);
  if (index === -1) return false;

  const { id: _, ...rest } = body;

  db[index] = {
    ...db[index],
    ...rest,
  };

  return db[index];
};
