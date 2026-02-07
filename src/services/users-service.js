import * as UsersRepository from "../repositories/users-repository.js";

export const getUsers = async () => {
  const data = await UsersRepository.findAllUsers();
  //   let response = null;
  //   data.length > 0
  //     ? (response = HttpHelper.ok(data))
  //     : (response = HttpHelper.noContent());
  return data;
};
