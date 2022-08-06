const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/users");
const { ctrlWrapper } = require("../../helpers");
const auth = require("../../middlewares");

router.post("/signup", ctrlWrapper(ctrl.registration));
router.post("/signin", ctrlWrapper(ctrl.login));
router.get("/logout", auth, ctrlWrapper(ctrl.logout));
router.get("/current", auth, ctrlWrapper(ctrl.getCurrent));
router.patch("/", auth, ctrlWrapper(ctrl.updateSubscriptionById));

module.exports = router;
