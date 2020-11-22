const { param, body } = require("express-validator");

const getValidationRule = {
  id: (name) => {
    return param(name).exists().trim().bail().isInt();
  },
  array: (name) => {
    return body(name).exists().bail().isArray();
  },
  date: (name) => {
    return body(name).exists().trim().bail().isBefore();
  },
  numeric: (name) => {
    return body(name).exists().trim().bail().isNumeric();
  },
};

module.exports = getValidationRule;
