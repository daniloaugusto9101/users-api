import * as UsersRepository from "../repositories/users-repository.js";
import * as HttpHelper from "../utils/http-helper.js";

export const getUsers = async () => {
  const data = await UsersRepository.findAllUsers();
  let response = HttpHelper.notFound();
  data.length > 0
    ? (response = HttpHelper.ok(data))
    : (response = HttpHelper.notFound());
  return response;
};

export const getUserByEmail = async (email) => {
  try {
    const data = await UsersRepository.findUsersByEmail(email);
    let response = null;
    data.length > 0
      ? (response = HttpHelper.ok(data))
      : (response = HttpHelper.notFound());
    return response;
  } catch (error) {
    return HttpHelper.serverError();
  }
};

export const addUser = async (body) => {
  const data = await UsersRepository.insertUser(body);
  let response = null;
  data
    ? (response = await HttpHelper.ok(data))
    : (response = await HttpHelper.notFound());
  return response;
};

export const deleteUser = async (email) => {
  const data = await UsersRepository.deleteUser(email);
  let response = null;
  data
    ? (response = await HttpHelper.ok(data))
    : (response = await HttpHelper.notFound());
  return response;
};

export const updateUser = async (email, body) => {
  const data = await UsersRepository.updateUser(email, body);
  let response = null;
  data
    ? (response = await HttpHelper.ok(data))
    : (response = await HttpHelper.notFound());
  return response;
};
