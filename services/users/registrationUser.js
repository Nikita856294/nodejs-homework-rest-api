const { User } = require("../../models/usersModel");
const gravatar = require("gravatar");

const registrationUser = async (email, hashPassword) => {
  const avatarURL = gravatar.url(email);
  const user = await User.create({ email, password: hashPassword, avatarURL });
  return user;
};

module.exports = registrationUser;
