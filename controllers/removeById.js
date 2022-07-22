const contactsMethods = require("../models/contacts");
const createError = require("../helpers");

const removeById = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await contactsMethods.removeContact(contactId);
  if (!result) {
    throw createError(404);
  }
  res.status(200).json({ message: "contact deleted" });
};

module.exports = removeById;
