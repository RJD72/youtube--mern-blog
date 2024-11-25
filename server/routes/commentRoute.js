const router = require("express").Router();
const verifyToken = require("../utils/verifyUser");
const commentController = require("../controllers/commentController");

router.post("/create-comment", verifyToken, commentController.createComment);
router.get("/get-post-comments/:postId", commentController.getPostComments);
router.put(
  "/like-comment/:commentId",
  verifyToken,
  commentController.likeComment
);
router.put(
  "/edit-comment/:commentId",
  verifyToken,
  commentController.editComment
);
router.delete(
  "/delete-comment/:commentId",
  verifyToken,
  commentController.deleteComment
);
router.get("/get-comments", verifyToken, commentController.getComments);

module.exports = router;
