const drivingRecord = require("../../schemas/drivingRecord");
var DrivingRecord = require("../../schemas/drivingRecord");
var response = require("../../util/response");

const showDrivingRecord = async (req, res, next) => {
  await DrivingRecord.find({
    drivingId: req.params.drivingId,
  })
    .then((drivingRecord) => {
      console.log(drivingRecord);
      if (drivingRecord.length === 0) {
        response(res, 404, "등록되지 않은 라이딩 기록입니다.");
      }
      response(
        res,
        200,
        "라이딩 기록 정보 조회에 성공하였습니다.",
        drivingRecord,
      );
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};

module.exports = showDrivingRecord;
