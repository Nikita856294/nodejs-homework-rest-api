const { User } = require("../../models/usersModel");

const registrationUser = async (email, hashPassword) => {
  const user = await User.create({ email, password: hashPassword });
  return user;
};

module.exports = registrationUser;
