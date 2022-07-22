const contactsMethods = require("../models/contacts");
const createError = require("../helpers");
const validationScheme = require("../schema/contactsSchemes");

const updateById = async (req, res, next) => {
  const { contactId } = req.params;
  const { body } = req;
  const { error } = validationScheme.validate(body);
  if (error) {
    throw createError(400, "missing fields");
  }
  const result = await contactsMethods.updateContact(contactId, body);
  if (!result) {
    throw createError(404);
  }
  res.status(200).json(result);
};

module.exports = updateById;
