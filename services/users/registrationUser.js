const { User } = require("../../models/usersModel");
const gravatar = require("gravatar");

const registrationUser = async (email, hashPassword, verificationToken) => {
  const avatarURL = gravatar.url(email);
  const user = await User.create({
    email,
    password: hashPassword,
    avatarURL,
    verificationToken,
  });
  return user;
};

module.exports = registrationUser;
