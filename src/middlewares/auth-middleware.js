import * as AuthService from "../services/auth-service.js";

export const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ message: "Token não fornecido" });
  }

  const isValid = AuthService.validateToken(token);

  if (!isValid) {
    return res.status(401).json({ message: "Token inválido ou expirado" });
  }

  next();
};
