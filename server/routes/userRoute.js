const userController = require("../controllers/userController");
const verifyToken = require("../utils/verifyUser");

const router = require("express").Router();

router.put("/update/:userId", verifyToken, userController.updateUser);
router.delete("/delete-user/:userId", verifyToken, userController.deleteUser);
router.post("/sign-out", userController.signOut);
router.get("/get-users", verifyToken, userController.getUsers);
router.get("/:userId", userController.getUser);

module.exports = router;
