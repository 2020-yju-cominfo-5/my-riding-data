var RouteRecord = require("../../schemas/routeRecord");
var response = require("../../util/response");

const showRouteRecord = async (req, res, next) => {
  await RouteRecord.find({
    routeId: req.params.routeId,
  })
    .then((routeRecord) => {
      console.log(routeRecord);
      if (routeRecord.length === 0) {
        response(res, 404, "등록되지 않은 경로입니다.");
      }
      response(res, 200, "경로 정보 조회에 성공하였습니다.", routeRecord);
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};

module.exports = showRouteRecord;
