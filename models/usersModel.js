const { Schema, model } = require("mongoose");
const Joi = require("joi");

const userRegistrationSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
  subscription: Joi.string().default("starter"),
  token: Joi.string().default(null),
});

const userLoginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

const userSubscriptionSchema = Joi.object({
  subscription: Joi.string().default("starter").required(),
});

const userSchema = Schema(
  {
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    avatarURL: {
      type: String,
    },
    token: {
      type: String,
      default: null,
    },
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      required: [true, "Verify token is required"],
    },
  },
  { versionKey: false, timestamps: true }
);

const User = model("user", userSchema);

module.exports = {
  User,
  userRegistrationSchema,
  userLoginSchema,
  userSubscriptionSchema,
};
