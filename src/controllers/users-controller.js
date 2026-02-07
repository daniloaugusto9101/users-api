import * as UsersService from "../services/users-service.js";

export const getUsers = async (req, res) => {
  const httpResponse = await UsersService.getUsers();
  return res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getUserByEmail = async (req, res) => {
  const { email } = req.params;
  const httpResponse = await UsersService.getUserByEmail(email);
  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const addUser = async (req, res) => {
  const body = req.body;
  const httpResponse = await UsersService.addUser(body);
  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const deleteUser = async (req, res) => {
  const { email } = req.params;
  const httpResponse = await UsersService.deleteUser(email);
  res.status(httpResponse.statusCode).json(httpResponse.body);
};
