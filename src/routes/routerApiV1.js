const express = require("express");
const useController = require("../controllers/userController");
const router = express.Router();

let db = [
  { 1: { Nome: "Cliente 1", Idade: "20" } },
  { 2: { Nome: "Cliente 2", Idade: "20" } },
  { 3: { Nome: "Cliente 3", Idade: "20" } },
];

router.get("/users", useController.getAll);

router.use("/", (req, res) => {
  res.status(200);
  res.send(`Bem vindo! Página inicial da API`);
});

// router.post("/users", (req, res) => {
//   const body = req.body;
//   if (!body) {
//     return res.status(400).end();
//   }
//   db.push(body);
//   return res.json(body);
// });

// router.delete("/users/:id", (req, res) => {
//   const id = req.params.id;
//   let newDB = db.filter((item) => {
//     if (!item[id]) {
//       return item;
//     }
//   });
//   db = newDB;
//   res.send(newDB);
// });

router.use("/", (req, res) => {
  res.status(200);
  res.send(`Bem vindo a minha API`);
});

module.exports = router;
