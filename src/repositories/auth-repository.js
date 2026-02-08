let userAuth = [
  {
    id: 1,
    name: "admin",
    email: "admin@spsgroup.com.br",
    type: "admin",
    password: "1234",
  },
];

export const findAccessUserByEmail = async (email) => {
  const user = userAuth.find((user) => user.email === email);
  return user ? [user] : [];
};
