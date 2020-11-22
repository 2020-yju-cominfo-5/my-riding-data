var DrivingRecord = require("../../models/drivingRecord");
var { response, checkValidationResult } = require("../../util");

const storeDrivingRecord = async (req, res, next) => {
  const { drivingId } = req.params;
  checkValidationResult(req, res);

  const drivingRecord = new DrivingRecord({
    drivingId,
  });
  req.body.records.map((record) => {
    drivingRecord.records.push(record);
  });

  await drivingRecord
    .save()
    .then((result) => {
      console.log(result);
      response(res, 201, "라이딩 기록 정보 저장에 성공하였습니다.", result);
    })
    .catch((err) => {
      if (err.code && err.code === 11000) {
        response(res, 409, "이미 등록된 라이딩 기록입니다.");
      }
      console.log(err);
      next(err);
    });
};

module.exports = storeDrivingRecord;
