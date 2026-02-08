import * as AuthService from "../services/auth-service.js";

export const login = async (req, res) => {
  const { email, password } = req.body;
  const httpResponse = await AuthService.login(email, password);
  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const logout = async (req, res) => {
  const token = req.headers.authorization?.replace("Bearer ", "");

  if (!token) {
    return res.status(400).json({ message: "Token não fornecido" });
  }

  AuthService.logout(token);

  res.status(200).json({ message: "Logout realizado com sucesso" });
};
