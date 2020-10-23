var express = require("express");
var DrivingRecord = require("../schemas/drivingRecord");
var router = express.Router();

/* GET home page. */
router.get("/", async (req, res, next) => {
  // res.render('index', { title: 'Express' });
  await DrivingRecord.find({})
    .then((drivingRecord) => {
      console.log(drivingRecord);
      res.status(200).json(drivingRecord);
    })
    .catch((err) => {
      console.error(err);
      return next(err);
    });
});

module.exports = router;
