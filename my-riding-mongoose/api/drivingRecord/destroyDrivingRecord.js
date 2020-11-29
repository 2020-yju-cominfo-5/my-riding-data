var DrivingRecord = require("../../models/drivingRecord");
var { response, checkValidationResult } = require("../../util");

const destroyDrivingRecord = async (req, res, next) => {
  const { drivingId } = req.params;
  checkValidationResult(req, res);

  await DrivingRecord.remove({ drivingId })
    .then(({ deletedCount }) => {
      if (deletedCount === 0) {
        response(res, 404, "이미 삭제된 라이딩 기록입니다.");
      }
      response(res, 200, "라이딩 기록 삭제에 성공하였습니다.");
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};

module.exports = destroyDrivingRecord;
