const { userRegistrationSchema } = require("../../models/usersModel");
const { createError } = require("../../helpers");
const bcryptjs = require("bcryptjs");
const { findByEmailUser, registrationUser } = require("../../services/users");

const registration = async (req, res) => {
  const { email, password } = req.body;
  const { error } = userRegistrationSchema.validate(req.body);
  if (error) {
    throw createError(400, error.message);
  }
  const user = await findByEmailUser(email);
  if (user) {
    throw createError(409, "Email in use");
  }
  const salt = bcryptjs.genSaltSync(10);
  const hashPassword = bcryptjs.hashSync(password, salt);

  const result = await registrationUser(email, hashPassword);

  res.status(201).json({
    message: "Success",
    code: 201,
    data: {
      user: {
        email: result.email,
        subscription: result.subscription,
      },
    },
  });
};

module.exports = registration;
