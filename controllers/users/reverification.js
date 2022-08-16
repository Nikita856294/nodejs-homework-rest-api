const { userReverificationSchema, User } = require("../../models/usersModel");
const { createError } = require("../../helpers");
const { sendMail } = require("../../helpers");

const reverification = async (req, res) => {
  const { email } = req.body;
  const { error } = userReverificationSchema.validate(req.body);
  if (error) {
    throw createError(400, "missing required field email");
  }
  const user = await User.findOne({ email });
  if (user.verify) {
    throw createError(400, "User has already been passed");
  }
  const mail = {
    to: email,
    subject: "Повторное подтверждение почты",
    html: `<a target="_blank" href="http://localhost:5000/api/users/verify/${user.verificationToken}">Нажмите для подтвержения почты</a>`,
  };
  await sendMail(mail);
  res.status(200).json({
    status: "Success",
    code: 200,
    message: "Verification email sent",
  });
};

module.exports = reverification;
