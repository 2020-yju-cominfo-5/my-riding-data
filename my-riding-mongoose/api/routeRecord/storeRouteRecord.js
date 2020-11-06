var RouteRecord = require("../../schemas/routeRecord");
var response = require("../../util/response");

const storeRouteRecord = async (req, res, next) => {
  const routeRecord = new RouteRecord({
    routeId: req.params.routeId,
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
      console.log(err);
      next(err);
    });
};

module.exports = storeRouteRecord;
