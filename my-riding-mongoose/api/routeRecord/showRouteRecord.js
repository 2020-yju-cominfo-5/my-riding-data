var RouteRecord = require("../../schemas/routeRecord");
var response = require("../../util/response");

const showRouteRecord = async (req, res, next) => {
  await RouteRecord.find({
    routeId: req.params.routeId,
  })
    .then((routeRecord) => {
      console.log(routeRecord);
      response(res, 200, "경로 정보 조회에 성공하였습니다.", routeRecord);
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};

module.exports = showRouteRecord;
