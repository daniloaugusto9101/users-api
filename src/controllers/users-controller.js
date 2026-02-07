import * as UsersService from "../services/users-service.js";

export const getUsers = async (req, res) => {
  const httpResponse = await UsersService.getUsers();
  return res.status(httpResponse.statusCode).json(httpResponse.body);
};
