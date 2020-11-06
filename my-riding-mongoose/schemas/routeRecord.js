const mongoose = require("mongoose");

const { Schema } = mongoose;
const {
  Types: { ObjectId },
} = Schema;
const routeRecordSchema = new Schema(
  {
    routeId: {
      type: Number,
      required: true,
      unique: true,
    },
    points: {
      type: Array,
      required: true,
    },
    points: [
      {
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
        routeDistance: {
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

module.exports = mongoose.model("RouteRecord", routeRecordSchema);
