var RouteRecord = require("../../schemas/routeRecord");
var response = require("../../util/response");

const indexRouteRecord = async (req, res, next) => {
  await RouteRecord.find({})
    .then((routeRecord) => {
      console.log(routeRecord);
      response(
        res,
        200,
        "경로 정보 전체목록 조회에 성공하였습니다.",
        routeRecord,
      );
    })
    .catch((err) => {
      console.error(err);
      return next(err);
    });
};

module.exports = indexRouteRecord;
