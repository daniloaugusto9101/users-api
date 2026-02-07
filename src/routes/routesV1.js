import { Router } from "express";
import * as UsersController from "../controllers/users-controller.js";

const router = Router();

router.get("/users", UsersController.getUsers);

router.get("/users/:email", UsersController.getUserByEmail);

router.post("/users", UsersController.addUser);

router.delete("/users/:email", UsersController.deleteUser);

router.put("/users/:email", UsersController.updateUser);

export default router;
