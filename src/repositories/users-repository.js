let db = [
  { 1: { Nome: "Cliente 1", Idade: "20" } },
  { 2: { Nome: "Cliente 2", Idade: "20" } },
  { 3: { Nome: "Cliente 3", Idade: "20" } },
];

const getAll = () => {
  return db;
};

module.exports = {
  getAll,
};
