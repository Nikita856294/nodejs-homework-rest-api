const Joi = require("joi");

const addScheme = Joi.object({
  name: Joi.string().min(2).required(),
  email: Joi.string().min(10).required(),
  phone: Joi.string().required(),
});

module.exports = addScheme;
