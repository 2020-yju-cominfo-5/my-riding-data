const mongoose = require("mongoose");

/**
 * 1. mongoose 모듈의 Schema 생성사를 사용해 스키마 생성
 * 2. 필드를 각각 정의
 *    - String, Number, Date, Buffer, Boolean, Mixed, ObjectId, Array
 *    - 몽고 디비의 자료형과 살짝 다름, 편의를 위해 종류 수를 줄여둠
 *    - required 나 default 등의 옵션이 필요하지 않다면 간단하게 자료형만 명시
 *    - Date.now(데이터 생성 당시의 시간)
 * 3. mongoose 의 model() 로 스키마와 몽고디비 컬렉션을 연결하는 모델 생성
 */

const { Schema } = mongoose;
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  },
  married: {
    type: Boolean,
    required: true,
  },
  comment: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
