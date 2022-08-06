const { Contact } = require("../../models/contactsModel");

const addContact = async (body) => {
  const result = await Contact.create(body);
  return result;
};

module.exports = addContact;
