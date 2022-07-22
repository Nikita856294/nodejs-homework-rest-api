const contactsMethods = require("../models/contacts");
const createError = require("../helpers");
const validationScheme = require("../schema/contactsSchemes");

const create = async (req, res, next) => {
  const { name, email, phone } = req.body;
  const { error } = validationScheme.validate(req.body);
  if (error) {
    throw createError(400, error.message);
  }
  const newContact = await contactsMethods.addContact({
    name,
    email,
    phone,
  });
  res.status(201).json(newContact);
};

module.exports = create;
