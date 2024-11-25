const router = require("express").Router();
const verifyToken = require("../utils/verifyUser");
const postController = require("../controllers/postController");

router.post("/create-post", verifyToken, postController.createPost);
router.get("/get-posts", postController.getPosts);
router.delete(
  "/delete-post/:postId/:userId",
  verifyToken,
  postController.deletePosts
);
router.put(
  "/update-post/:postId/:userId",
  verifyToken,
  postController.updatePost
);

module.exports = router;
