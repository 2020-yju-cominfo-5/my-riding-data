var express = require("express");
var api = require("../api");

var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/record", api.indexDrivingRecord);
router.get("/record/:drivingId", api.showDrivingRecord);
router.post("/record/:drivingId", api.storeDrivingRecord);

router.get("/route", api.indexRouteRecord);
router.get("/route/:routeId", api.showRouteRecord);
router.post("/route/:routeId", api.storeRouteRecord);

module.exports = router;
