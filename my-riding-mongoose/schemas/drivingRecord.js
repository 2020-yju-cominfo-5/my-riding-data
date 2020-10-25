const mongoose = require("mongoose");

const { Schema } = mongoose;
const {
  Types: { ObjectId },
} = Schema;
const drivingRecordSchema = new Schema({
  drivingId: {
    type: Number,
    required: true,
    unique: true,
  },
  records: {
    type: Array,
  },
  records: [
    {
      date: {
        type: Date,
        required: true,
      },
      latitude: {
        type: Number,
        required: true,
      },
      longitude: {
        type: Number,
        required: true,
      },
      altitude: {
        type: Number,
        required: true,
      },
      speed: {
        type: Number,
        required: true,
      },
      drivingDistance: {
        type: Number,
        required: true,
      },
      angleDirection: {
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
});

module.exports = mongoose.model("DrivingRecord", drivingRecordSchema);
