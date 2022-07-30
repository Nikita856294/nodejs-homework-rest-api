const { Schema, model } = require("mongoose");
const Joi = require("joi");

const updateSchemeFavorite = Joi.object({
  favorite: Joi.boolean().required(),
});

const addScheme = Joi.object({
  name: Joi.string().min(2).required(),
  email: Joi.string().min(10).required(),
  phone: Joi.string().required(),
});

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

const Contact = model("contact", contactSchema);

module.exports = { Contact, addScheme, updateSchemeFavorite };
