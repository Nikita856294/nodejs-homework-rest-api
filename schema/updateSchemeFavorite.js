const Joi = require("joi");

const updateSchemeFavorite = Joi.object({
  favorite: Joi.boolean().required(),
});

module.exports = updateSchemeFavorite;
