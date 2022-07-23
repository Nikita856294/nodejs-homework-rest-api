const { createError } = require("../helpers");
const { addScheme } = require("../models/contactsModel");
const { updateStatusContact } = require("../services");

const updateById = async (req, res, next) => {
  const { contactId } = req.params;
  const { body } = req;
  const { error } = addScheme.validate(body);
  if (error) {
    throw createError(400, "missing fields");
  }

  const result = await updateStatusContact(contactId, body);
  if (!result) {
    throw createError(404);
  }
  res.status(200).json({ status: "success", code: 200, result });
};

module.exports = updateById;
