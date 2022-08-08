// const auth = require("../../middlewares");
const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/contacts");
const { ctrlWrapper } = require("../../helpers");
const auth = require("../../middlewares/auth");

router.get("/", auth, ctrlWrapper(ctrl.getAll));

router.get("/:contactId", auth, ctrlWrapper(ctrl.getById));

router.post("/", auth, ctrlWrapper(ctrl.add));

router.delete("/:contactId", auth, ctrlWrapper(ctrl.removeById));

router.put("/:contactId", auth, ctrlWrapper(ctrl.updateById));

router.patch("/:contactId", auth, ctrlWrapper(ctrl.updateFavoriteById));

module.exports = router;
