const drivingRecord = require("../../schemas/drivingRecord");
var DrivingRecord = require("../../schemas/drivingRecord");
var response = require("../../util/response");

const showDrivingRecord = async (req, res, next) => {
  await DrivingRecord.find({
    drivingId: req.params.drivingId,
  })
    .then((drivingRecord) => {
      console.log(drivingRecord);
      response(res, 200, "라이딩 정보 조회에 성공하였습니다.", drivingRecord);
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};

module.exports = showDrivingRecord;
