const { Contact } = require("../models/contactsModel");

const getContactById = async (contactId) => {
  const result = await Contact.findById(contactId);
  return result;
};

module.exports = getContactById;
