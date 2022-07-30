const { Contact } = require("../models/contactsModel");

const listContacts = async () => {
  const result = await Contact.find({});
  return result;
};

module.exports = listContacts;
