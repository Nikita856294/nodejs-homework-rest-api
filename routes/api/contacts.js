const express = require("express");
const router = express.Router();
const { ctrlWrapper } = require("../../helpers");
const contactsCtrl = require("../../controllers");

router.get("/", ctrlWrapper(contactsCtrl.getAll));

router.get("/:contactId", ctrlWrapper(contactsCtrl.getById));

router.post("/", ctrlWrapper(contactsCtrl.add));

router.delete("/:contactId", ctrlWrapper(contactsCtrl.removeById));

router.put("/:contactId", ctrlWrapper(contactsCtrl.updateById));

router.patch("/:contactId", ctrlWrapper(contactsCtrl.updateFavoriteById));
module.exports = router;
