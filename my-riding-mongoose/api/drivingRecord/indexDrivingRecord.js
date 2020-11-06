var DrivingRecord = require("../../schemas/drivingRecord");
var response = require("../../util/response");

const indexDrivingRecord = async (req, res, next) => {
  await DrivingRecord.find({})
    .then((drivingRecord) => {
      console.log(drivingRecord);
      response(
        res,
        200,
        "라이딩 기록 정보 전체목록 조회에 성공하였습니다.",
        drivingRecord,
      );
    })
    .catch((err) => {
      console.error(err);
      return next(err);
    });
};

module.exports = indexDrivingRecord;
