var express = require("express");
var DrivingRecord = require("../schemas/drivingRecord");
var router = express.Router();
const test_data = {
  drivingId: 1,
  records: [
    {
      date: "2020-01-01 00:00:00",
      record: {
        latitude: "lat1",
        longtitude: "lng1",
        altitude: "alt1",
        speed: 11,
        drivingDistance: 2.1,
        angleDirection: 21,
      },
    },
    {
      date: "2020-01-01 00:00:01",
      record: {
        latitude: "lat2",
        longtitude: "lng2",
        altitude: "alt2",
        speed: 12,
        drivingDistance: 2.2,
        angleDirection: 22,
      },
    },
  ],
};
/* GET home page. */
router.get("/", async (req, res, next) => {
  await DrivingRecord.find({})
    .then((drivingRecord) => {
      // TODO TEST DATA
      drivingRecord = test_data;
      console.log(drivingRecord);
      res.status(200).json(drivingRecord);
    })
    .catch((err) => {
      console.error(err);
      return next(err);
    });
});

router.post("/", async (req, res, next) => {
  // const drivingRecord = new drivingRecord({
  //   drivingId: req.body.drivingId,
  //   userId: req.body.userId,
  // });
  console.log(res);
  await DrivingRecord.find({})
    .then((drivingRecord) => {
      console.log("req");
      console.log(req.body);
      res.status(200).json({ message: "success" });
    })
    .catch((err) => {
      console.log(err);
      return next(err);
    });
});

module.exports = router;
