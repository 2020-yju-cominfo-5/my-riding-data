var express = require("express");
var {
  // indexRouteRecord,
  showDrivingRecord,
  storeDrivingRecord,
  // indexDrivingRecord,
  showRouteRecord,
  storeRouteRecord,
} = require("../api");
const { param, body } = require("express-validator");

var router = express.Router();

const getRule = {
  id: (name) => {
    return param(name).exists().trim().bail().isInt();
  },
  array: (name) => {
    return body(name).exists().bail().isArray();
  },
  date: (name) => {
    return body(name).exists().trim().bail().isBefore();
  },
  numeric: (name) => {
    return body(name).exists().trim().bail().isNumeric();
  },
};

const route = {
  drivingRecord: {
    index: { url: "/api/record" },
    show: {
      url: "/api/record/:drivingId",
      rule: [getRule.id("drivingId")],
    },
    store: {
      url: "/api/record/:drivingId",
      rule: [
        getRule.id("drivingId"),
        getRule.array("records"),
        getRule.date("records.*.date").isBefore(),
        getRule.numeric("records.*.lat"),
        getRule.numeric("records.*.lng"),
        getRule.numeric("records.*.elevations"),
        getRule.numeric("records.*.speed"),
        getRule.numeric("records.*.distance"),
      ],
    },
  },
  routeRecord: {
    index: { url: "/api/route" },
    show: {
      url: "/api/route/:routeId",
      rule: [getRule.id("routeId")],
    },
    store: {
      url: "/api/route/:routeId",
      rule: [
        getRule.id("routeId"),
        getRule.array("points"),
        getRule.numeric("points.*.lat"),
        getRule.numeric("points.*.lng"),
        getRule.numeric("points.*.elevations"),
        getRule.numeric("points.*.speed"),
        getRule.numeric("points.*.distance"),
      ],
    },
  },
};

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// router.get(route.drivingRecord.index, indexDrivingRecord);
router.get(
  route.drivingRecord.show.url,
  route.drivingRecord.show.rule,
  showDrivingRecord,
);
router.post(
  route.drivingRecord.store.url,
  route.drivingRecord.store.rule,
  storeDrivingRecord,
);

// router.get(route.routeRecord.index, indexRouteRecord);
router.get(
  route.routeRecord.show.url,
  route.routeRecord.show.rule,
  showRouteRecord,
);
router.post(
  route.routeRecord.store.url,
  route.routeRecord.store.rule,
  storeRouteRecord,
);

module.exports = router;
