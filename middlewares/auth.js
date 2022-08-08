const { User } = require("../models/usersModel");
const { createError } = require(`../helpers`);
const { SECRET_KEY } = process.env;
const jwt = require("jsonwebtoken");

const auth = async (req, _, next) => {
  const { authorization = " " } = req.headers;
  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer") {
    throw createError(401);
  }
  try {
    const { id } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(id);
    if (!user || !user.token) {
      next(createError(401));
    }
    req.user = user;
    next();
  } catch (error) {
    next(createError(401, error.message));
  }
};

module.exports = auth;
