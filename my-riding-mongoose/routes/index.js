var express = require("express");
const swaggerJSDoc = require("swagger-jsdoc");
var api = require("../api");
var router = express.Router();

router.get("/record", api.indexDrivingRecord);
router.get("/record/:drivingId", api.showDrivingRecord);
router.post("/record/:drivingId", api.storeDrivingRecord);

module.exports = router;
