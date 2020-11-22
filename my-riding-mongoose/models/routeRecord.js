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
        lat: {
          type: Number,
          required: true,
        },
        lng: {
          type: Number,
          required: true,
        },
        elevations: {
          type: Number,
          required: true,
        },
        distance: {
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
