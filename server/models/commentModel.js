const mongoose = require("mongoose");

/**
 * Comment Schema Definition
 * Defines the structure for comment documents in MongoDB
 */
const commentSchema = new mongoose.Schema(
  {
    // The actual content/text of the comment
    content: {
      type: String,
      required: true,
    },
    // Reference to the post this comment belongs to
    postId: {
      type: String,
      required: true,
    },
    // Reference to the user who created the comment
    userId: {
      type: String,
      required: true,
    },
    // Array to store user IDs who liked this comment
    likes: {
      type: Array,
      default: [],
    },
    // Counter for total number of likes
    numberOfLikes: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true } // Automatically manage createdAt and updatedAt timestamps
);

// Export the Comment model
module.exports = mongoose.model("Comment", commentSchema);