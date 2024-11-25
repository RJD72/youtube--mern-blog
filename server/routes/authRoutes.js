const router = require("express").Router();
const authController = require("../controllers/authController");

router.post("/sign-in", authController.signIn);
router.post("/sign-up", authController.signup);
router.post("/google", authController.google);

module.exports = router;
