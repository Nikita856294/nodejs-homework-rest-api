const { createError } = require("../../helpers");
const { addScheme } = require("../../models/contactsModel");
const { addContact } = require("../../services/contacts");

const create = async (req, res, next) => {
  const { error } = addScheme.validate(req.body);
  if (error) {
    throw createError(400, error.message);
  }
  const { id: owner } = req.user;
  const result = await addContact({ ...req.body, owner });
  res.status(201).json({ status: "success", code: 201, result });
};

module.exports = create;
