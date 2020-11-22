const { validationResult } = require("express-validator");
var response = require("./response");

const checkValidationResult = (req, res) => {
  if (!validationResult(req).isEmpty()) {
    response(res, 422, "잘못된 요청 값입니다.");
  }
};

module.exports = checkValidationResult;
