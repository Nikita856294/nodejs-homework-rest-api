const { createError } = require("../helpers");
const { getContactById } = require("../services");

const getById = async (req, res, next) => {
  const { contactId } = req.params;

  const result = await getContactById(contactId);
  if (!result) {
    throw createError(404);
  }
  res.status(200).json({ result });
};

module.exports = getById;
