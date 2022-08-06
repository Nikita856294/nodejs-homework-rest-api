const { Contact } = require("../../models/contactsModel");
// const favoriteContacts = require("./favoriteContacts");

const listContacts = async (user, query) => {
  const { id: owner } = user;
  const { page = 1, limit = 5 } = query;
  const skip = (page - 1) * limit;

  const result = await Contact.find({ owner }, "-createdAt -updatedAt", {
    skip,
    limit: Number(limit),
  }).populate("owner", "email subscription");

  return result;
};

module.exports = listContacts;
