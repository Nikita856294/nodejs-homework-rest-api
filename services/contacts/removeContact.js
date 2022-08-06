const { Contact } = require("../../models/contactsModel");

const removeContact = async (contactId) => {
  const result = await Contact.findByIdAndRemove(contactId);
  console.log(result);
  return result;
};

module.exports = removeContact;
