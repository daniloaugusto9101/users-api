const userModel = require("../repositories/users-repository");

const getAll = (req, res) => {
  user = userModel.getAll();
  return res.status(200).json(user);
};

module.exports = {
  getAll,
};
