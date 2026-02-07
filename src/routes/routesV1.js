import { Router } from "express";
import * as UsersController from "../controllers/users-controller.js";

const router = Router();

router.get("/users", UsersController.getUsers);

router.get("/users/:email", UsersController.getUserByEmail);

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

// router.use("/", (req, res) => {
//   res.status(200);
//   res.send(`Bem vindo a minha API`);
// });

export default router;
