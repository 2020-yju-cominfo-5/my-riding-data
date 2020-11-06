var DrivingRecord = require("../../schemas/drivingRecord");
var response = require("../../util/response");

const storeDrivingRecord = async (req, res, next) => {
  const drivingRecord = new DrivingRecord({
    drivingId: req.params.drivingId,
  });
  req.body.records.map((record) => {
    drivingRecord.records.push(record);
  });

  await drivingRecord
    .save()
    .then((result) => {
      console.log(result);
      response(res, 201, "라이딩 정보 저장에 성공하였습니다.", result);
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};

module.exports = storeDrivingRecord;
