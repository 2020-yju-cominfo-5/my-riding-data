var express = require("express");
var api = require("../api");
const drivingRecord = require("../schemas/drivingRecord");
var DrivingRecord = require("../schemas/drivingRecord");
var router = express.Router();

// router.get("/", api.indexDrivingRecord);
router.get("/:drivingId", api.showDrivingRecord);
router.post("/:drivingId", api.storeDrivingRecord);

module.exports = router;
