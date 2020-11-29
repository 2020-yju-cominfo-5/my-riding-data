var express = require("express");
var {
  // indexRouteRecord,
  showDrivingRecord,
  storeDrivingRecord,
  destroyDrivingRecord,
  // indexDrivingRecord,
  showRouteRecord,
  storeRouteRecord,
  destroyRouteRecord,
} = require("../api");
const { getValidationRule } = require("../util");

var router = express.Router();

const route = {
  drivingRecord: {
    index: { url: "/api/record" },
    show: {
      url: "/api/record/:drivingId",
      rule: [getValidationRule.id("drivingId")],
    },
    store: {
      url: "/api/record/:drivingId",
      rule: [
        getValidationRule.id("drivingId"),
        getValidationRule.array("records"),
        getValidationRule.date("records.*.date"),
        getValidationRule.numeric("records.*.lat"),
        getValidationRule.numeric("records.*.lng"),
        getValidationRule.numeric("records.*.speed"),
      ],
    },
    destroy: {
      url: "/api/record/:drivingId",
      rule: [getValidationRule.id("drivingId")],
    },
  },
  routeRecord: {
    index: { url: "/api/route" },
    show: {
      url: "/api/route/:routeId",
      rule: [getValidationRule.id("routeId")],
    },
    store: {
      url: "/api/route/:routeId",
      rule: [
        getValidationRule.id("routeId"),
        getValidationRule.array("points"),
        getValidationRule.numeric("points.*.lat"),
        getValidationRule.numeric("points.*.lng"),
      ],
    },
    destroy: {
      url: "/api/record/:drivingId",
      rule: [getValidationRule.id("drivingId")],
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
router.delete(
  route.drivingRecord.destroy.url,
  route.drivingRecord.destroy.rule,
  destroyDrivingRecord,
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
router.delete(
  route.routeRecord.destroy.url,
  route.routeRecord.destroy.rule,
  destroyRouteRecord,
);

module.exports = router;
