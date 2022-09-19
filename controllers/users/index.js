const registration = require("./registration");
const login = require("./login");
const logout = require("./logout");
const getCurrent = require("./getCurrent");
const updateSubscriptionById = require("./updateSubscriptionById");
const updateAvatar = require("./updateAvatar");
const verification = require("./verification");
const reverification = require("./reverification");

module.exports = {
  registration,
  login,
  logout,
  getCurrent,
  updateSubscriptionById,
  updateAvatar,
  verification,
  reverification,
};
