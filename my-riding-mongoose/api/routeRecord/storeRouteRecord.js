var RouteRecord = require("../../models/routeRecord");
var { response, checkValidationResult } = require("../../util");

const storeRouteRecord = async (req, res, next) => {
  const { routeId } = req.params;
  checkValidationResult(req, res);

  const routeRecord = new RouteRecord({
    routeId,
  });
  req.body.points.map((point) => {
    routeRecord.points.push(point);
  });

  await routeRecord
    .save()
    .then((result) => {
      console.log(result);
      response(res, 201, "경로 정보 저장에 성공하였습니다.", result);
    })
    .catch((err) => {
      if (err.code && err.code === 11000) {
        response(res, 409, "이미 등록된 라이딩 경로입니다.");
      }
      console.log(err);
      next(err);
    });
};

module.exports = storeRouteRecord;
