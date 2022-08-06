const { createError } = require("../../helpers");
const { updateToken, findByIdUser } = require("../../services/users");

const logout = async (req, res) => {
  const { _id } = req.user;
  console.log(_id);
  const user = await findByIdUser(_id);
  if (!user) {
    throw createError(401);
  }
  await updateToken(_id);
  res.status(204).send();
};

module.exports = logout;
