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
