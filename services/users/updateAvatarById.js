const { User } = require("../../models/usersModel");

const updateAvatarByid = async (id, avatarURL) => {
  const user = await User.findByIdAndUpdate(id, { avatarURL });

  return user;
};

module.exports = updateAvatarByid;
