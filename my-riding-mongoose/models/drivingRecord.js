const mongoose = require("mongoose");

const { Schema } = mongoose;
const {
  Types: { ObjectId },
} = Schema;
const drivingRecordSchema = new Schema(
  {
    drivingId: {
      type: Number,
      required: true,
      unique: true,
    },
    records: {
      type: Array,
      required: true,
    },
    records: [
      {
        date: {
          type: Date,
          required: true,
        },
        lat: {
          type: Number,
          required: true,
        },
        lng: {
          type: Number,
          required: true,
        },
        speed: {
          type: Number,
          required: true,
        },
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
      required: true,
    },
  },
  {
    versionKey: false,
  },
);

module.exports = mongoose.model("DrivingRecord", drivingRecordSchema);
