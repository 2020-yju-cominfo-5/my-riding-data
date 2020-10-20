const mongoose = require("mongoose");

/**
 * commenter
 *    - 자료형 : ObjectId
 *    - 옵션 : ref 속성의 값이 User
 *    - JOIN 과 비슷한 기능을 할 때 사용
 */

const { Schema } = mongoose;
const {
  Types: { ObjectId },
} = Schema;
const commentSchema = new Schema({
  commenter: {
    type: ObjectId,
    required: true,
    ref: "User",
  },
  comment: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Comment", commentSchema);
