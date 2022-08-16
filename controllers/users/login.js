const { userLoginSchema } = require("../../models/usersModel");
const { createError } = require("../../helpers");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { updateToken, findByEmailUser } = require("../../services/users");
const { SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;
  const { error } = userLoginSchema.validate(req.body);
  if (error) {
    throw createError(400);
  }
  const user = await findByEmailUser(email);

  const passCompare = bcryptjs.compareSync(password, user.password);

  if (!passCompare || !user.verify || email !== user.email) {
    throw createError(401, "Email or password is wrong");
  }
  const payload = {
    id: user._id,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "24h" });
  await updateToken(user._id, token);
  res.status(200).json({
    message: "Success",
    code: 200,
    data: {
      token,
    },
  });
};

module.exports = login;
