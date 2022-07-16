const express = require("express");
const router = express.Router();
const contactsMethods = require("../../models/contacts");
const validationScheme = require("../../schema/contactsSchemes");
const createError = require("../../helpers");

router.get("/", async (req, res, next) => {
  try {
    const contacts = await contactsMethods.listContacts();
    res.status(200).json(contacts);
  } catch (error) {
    next(error);
  }
});

router.get("/:contactId", async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const contact = await contactsMethods.getContactById(contactId);
    if (!contact) {
      throw createError(404);
    }
    res.status(200).json(contact);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { name, email, phone } = req.body;
    const { error } = validationScheme.validate(req.body);
    if (error) {
      throw createError(400, error.message);
    }
    const newContact = await contactsMethods.addContact({
      name,
      email,
      phone,
    });
    res.status(201).json(newContact);
  } catch (error) {
    next(error);
  }
});

router.delete("/:contactId", async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await contactsMethods.removeContact(contactId);
    if (!result) {
      throw createError(404);
    }
    res.status(200).json({ message: "contact deleted" });
  } catch (error) {
    next(error);
  }
});

router.put("/:contactId", async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const { body } = req;
    const { error } = validationScheme.validate(body);
    if (error) {
      throw createError(400, "missing fields");
    }
    const result = await contactsMethods.updateContact(contactId, body);
    if (!result) {
      throw createError(404);
    }
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
