const { User } = require("../../models/usersModel");

const findByIdUser = async (id) => {
  const user = await User.findById(id);
  return user;
};

module.exports = findByIdUser;
