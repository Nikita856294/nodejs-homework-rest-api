const { User } = require("../../models/usersModel");

const updateToken = async (id, token = null) => {
  console.log(token);
  const user = await User.findByIdAndUpdate(id, { token });
  return user;
};

module.exports = updateToken;
