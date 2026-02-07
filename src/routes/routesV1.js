import { Router } from "express";
import * as UsersController from "../controllers/users-controller.js";

const router = Router();

router.get("/users", UsersController.getUsers);

router.get("/users/email/:email", UsersController.getUserByEmail);

router.get("/users/id/:id", UsersController.getUserById);

router.post("/users", UsersController.addUser);

router.delete("/users/:email", UsersController.deleteUser);

router.delete("/users/id/:id", UsersController.deleteUserById);

router.put("/users/:id", UsersController.updateUser);

export default router;
