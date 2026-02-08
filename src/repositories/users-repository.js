let db = [
  {
    id: 1,
    name: "Danilo2",
    email: "asd2@asd.com",
    type: "admin",
    password: "123456",
  },
  {
    id: 2,
    name: "Danilo",
    email: "asd@asd.com",
    type: "admin",
    password: "123456",
  },
  {
    id: 3,
    name: "Danilo",
    email: "asd@asd.com",
    type: "admin",
    password: "123456",
  },
  {
    id: 4,
    name: "Danilo",
    email: "asd@asd.com",
    type: "admin",
    password: "123456",
  },
];

let currentId = 10;

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
