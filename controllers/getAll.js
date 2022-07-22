const contactsMethods = require("../models/contacts");

const getAll = async (req, res, next) => {
  const contacts = await contactsMethods.listContacts();
  res.status(200).json(contacts);
};

module.exports = getAll;
