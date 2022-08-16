const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/users");
const { ctrlWrapper } = require("../../helpers");
const { auth, upload } = require("../../middlewares");

router.post("/signup", ctrlWrapper(ctrl.registration));
router.post("/signin", ctrlWrapper(ctrl.login));
router.post("/verify", ctrlWrapper(ctrl.reverification));
router.get("/logout", auth, ctrlWrapper(ctrl.logout));
router.get("/current", auth, ctrlWrapper(ctrl.getCurrent));
router.get("/verify/:verificationToken", ctrlWrapper(ctrl.verification));
router.patch("/", auth, ctrlWrapper(ctrl.updateSubscriptionById));
router.patch(
  "/avatars",
  auth,
  upload.single("avatarURL"),
  ctrlWrapper(ctrl.updateAvatar)
);

module.exports = router;
