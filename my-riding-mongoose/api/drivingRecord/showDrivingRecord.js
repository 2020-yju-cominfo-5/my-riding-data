var DrivingRecord = require("../../models/drivingRecord");
var { response, checkValidationResult } = require("../../util");

const showDrivingRecord = async (req, res, next) => {
  const { drivingId } = req.params;
  checkValidationResult(req, res);
  await DrivingRecord.find({
    drivingId,
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
