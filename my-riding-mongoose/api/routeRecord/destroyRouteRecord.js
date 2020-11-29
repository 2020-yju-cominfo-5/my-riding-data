var RouteRecord = require("../../models/routeRecord");
var { response, checkValidationResult } = require("../../util");

const destroyRouteRecord = async (req, res, next) => {
  const { routeId } = req.params;
  checkValidationResult(req, res);

  await RouteRecord.remove({ routeId })
    .then(({ deletedCount }) => {
      if (deletedCount === 0) {
        response(res, 404, "이미 삭제된 경로입니다.");
      }
      response(res, 200, "경로 정보 삭제에 성공하였습니다.");
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};

module.exports = destroyRouteRecord;
