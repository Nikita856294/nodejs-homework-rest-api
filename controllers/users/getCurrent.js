const { User } = require("../../models/usersModel");
const { createError } = require("../../helpers");

const getCurrent = async (req, res) => {
  const { id, email, subscription } = req.user;
  const user = await User.findById(id);
  if (!user) {
    throw createError(401);
  }
  res.status(200).json({
    message: "Success",
    code: 200,
    data: {
      email,
      subscription,
    },
  });
};

module.exports = getCurrent;
