const mongoose = require("mongoose");

const { Schema } = mongoose;
const {
  Types: { ObjectId },
} = Schema;
const drivingRecordSchema = new Schema({
  drivingId: {
    type: Number,
    unique: true,
    required: true,
  },
  records: {
    type: [
      {
        date: {
          type: Date,
          required: true,
        },
        record: {
          type: Object,
          properties: {
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
        },
      },
    ],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

module.exports = mongoose.model("DrivingRecord", drivingRecordSchema);
