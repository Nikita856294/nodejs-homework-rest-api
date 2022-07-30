const { createError } = require("../helpers");
const { updateSchemeFavorite } = require("../models/contactsModel");
const { updateStatusContact } = require("../services");

const updateFavoriteById = async (req, res, next) => {
  const { contactId } = req.params;
  const { body } = req;
  const { error } = updateSchemeFavorite.validate(body);
  if (error) {
    throw createError(400, "missing fields favorite");
  }

  const result = await updateStatusContact(contactId, body);
  if (!result) {
    throw createError(404);
  }
  res.status(200).json({ status: "success", code: 200, result });
};

module.exports = updateFavoriteById;
