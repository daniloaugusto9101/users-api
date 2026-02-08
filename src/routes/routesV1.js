import { Router } from "express";
import * as AuthController from "../controllers/auth-controller.js";
import * as UsersController from "../controllers/users-controller.js";
import { authMiddleware } from "../middlewares/auth-middleware.js";

const router = Router();

// Rotas login/logout
router.post("/auth/login", AuthController.login);
router.post("/auth/logout", authMiddleware, AuthController.logout);

// Rotas de usuarios protegidas
router.get("/users", authMiddleware, UsersController.getUsers);
router.get("/users/email/:email", authMiddleware, UsersController.getUserByEmail);
router.get("/users/id/:id", authMiddleware, UsersController.getUserById);
router.post("/users", authMiddleware, UsersController.addUser);
router.delete("/users/:email", authMiddleware, UsersController.deleteUser);
router.delete("/users/id/:id", authMiddleware, UsersController.deleteUserById);
router.put("/users/:id", authMiddleware, UsersController.updateUser);

export default router;
