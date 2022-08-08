const { User, userSubscriptionSchema } = require("../../models/usersModel");
const { createError } = require("../../helpers");

const updateSubscriptionById = async (req, res) => {
  const { id } = req.user;
  const { error } = userSubscriptionSchema.validate(req.body);
  if (error) {
    throw createError(400, error.message);
  }
  const user = User.findById(id);
  if (!user) {
    throw createError(401);
  }
  const result = await User.findByIdAndUpdate(
    id,
    { ...req.body },
    { new: true }
  );
  res.status(200).json({
    message: "Success",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = updateSubscriptionById;
