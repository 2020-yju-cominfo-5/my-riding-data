const drivingRecord = require("../schemas/drivingRecord");
var DrivingRecord = require("../schemas/drivingRecord");
var response = require("../util/response");

// TODO 전체 목록 조회?
const indexDrivingRecord = async (req, res, next) => {
  await DrivingRecord.find({})
    .then((drivingRecord) => {
      console.log(drivingRecord);
      response(
        res,
        200,
        "주행정보 전체 목록 조회에 성공하였습니다.",
        drivingRecord,
      );
    })
    .catch((err) => {
      console.error(err);
      return next(err);
    });
};

module.exports = indexDrivingRecord;
