import * as AuthRepository from "../repositories/auth-repository.js";
import * as HttpHelper from "../utils/http-helper.js";

const activeSessions = new Map();

const generateToken = (userId) => {
  return Buffer.from(`${userId}-${Date.now()}`).toString("base64");
};

export const validateToken = (token) => {
  return activeSessions.has(token);
};

export const login = async (email, password) => {
  try {
    if (!email || !password) {
      return HttpHelper.badRequest({ message: "Email e senha são obrigatórios" });
    }

    const users = await AuthRepository.findAccessUserByEmail(email);

    if (!users) {
      return HttpHelper.notFound("Usuário não encontrado");
    }

    const user = users[0];

    if (user.password !== password) {
      return HttpHelper.badRequest({ message: "Senha incorreta" });
    }

    const { password: _, ...userData } = user;

    const token = generateToken(userData.id);

    activeSessions.set(token, userData.id);

    return HttpHelper.ok({
      message: "Login realizado com sucesso",
      user: userData,
      token,
    });
  } catch (error) {
    console.error("Erro no login:", error);
    return HttpHelper.serverError();
  }
};

export const logout = (token) => {
  activeSessions.delete(token);
  return true;
};
