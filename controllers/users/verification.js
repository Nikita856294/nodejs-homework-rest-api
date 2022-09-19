const { User } = require("../../models/usersModel");
const { createError } = require("../../helpers");

const verification = async (req, res) => {
  const { verificationToken } = req.params;
  const user = await User.findOne({ verificationToken });
  if (!user) {
    throw createError(404);
  }
  await User.findByIdAndUpdate(user._id, {
    verify: true,
    verificationToken: null,
  });
  res.status(200).json({
    status: "Success",
    code: 200,
    message: "Verification successful",
  });
};

module.exports = verification;
