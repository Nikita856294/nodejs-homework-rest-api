// const fs = require('fs/promises')

const fs = require("fs/promises");
const contactsPath = require("./contactsPath");
const updateContacts = require("./updateContactsById");

const listContacts = async () => {
  const contacts = await fs.readFile(contactsPath, "utf-8");
  return JSON.parse(contacts);
};

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const findContact = contacts.find((contact) => contact.id === contactId);
  if (!findContact) {
    return null;
  }
  return findContact;
};
const removeContact = async (id) => {
  const contacts = await listContacts();
  const idx = contacts.findIndex((contact) => contact.id === id);
  if (idx === -1) {
    return null;
  }
  const newContacts = contacts.filter((_, index) => index !== idx);
  await updateContacts(newContacts);
  return contacts[idx];
};

const addContact = async (name, email, phone) => {
  const contacts = await listContacts();
  const lastContact = contacts.length - 1;

  const newContact = {
    id: `${Number(contacts[lastContact].id) + 1}`,
    name,
    email,
    phone,
  };
  contacts.push(newContact);
  await updateContacts(contacts);
  return newContact;
};

const updateContact = async (contactId, { name, email, phone }) => {
  const contacts = await listContacts();
  const idx = contacts.findIndex((contact) => contact.id === contactId);
  if (idx === -1) {
    return null;
  }

  contacts[idx] = { id: contactId, name, email, phone };
  updateContacts(contacts);
  return contacts[idx];
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
