const contactsMethods = require("../models/contacts");
const createError = require("../helpers");

const getById = async (req, res, next) => {
  const { contactId } = req.params;
  const contact = await contactsMethods.getContactById(contactId);
  if (!contact) {
    throw createError(404);
  }
  res.status(200).json(contact);
};

module.exports = getById;
