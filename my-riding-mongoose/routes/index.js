var express = require("express");
var api = require("../api");

var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

var apiRecord = "/api/record";
// router.get(`${apiRecord}`, api.indexDrivingRecord);
router.get(`${apiRecord}/:drivingId`, api.showDrivingRecord);
router.post(`${apiRecord}/:drivingId`, api.storeDrivingRecord);

var apiRoute = "/api/route";
// router.get(`${apiRoute}`, api.indexRouteRecord);
router.get(`${apiRoute}/:routeId`, api.showRouteRecord);
router.post(`${apiRoute}/:routeId`, api.storeRouteRecord);

module.exports = router;
