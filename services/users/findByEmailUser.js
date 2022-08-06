const { User } = require("../../models/usersModel");

const findByEmailUser = async (email) => {
  const user = await User.findOne({ email });
  return user;
};

module.exports = findByEmailUser;
