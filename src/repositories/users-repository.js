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
  return db;
};

export const findUsersByEmail = async (email) => {
  return db.filter((item) => {
    if (item.email === email) {
      return item;
    }
  });
};

export const insertUser = async (users) => {
  db.push(users);
  return users;
};

export const deleteUser = async (email) => {
  const index = db.findIndex((item) => item.email === email);

  if (index !== -1) {
    db.splice(index, 1);
    return true;
  }

  return false;
};

export const updateUser = async (email, body) => {
  const index = db.findIndex((item) => item.email === email);

  if (index !== -1) {
    db[index] = body;
    return db[index];
  }

  return false;
};
