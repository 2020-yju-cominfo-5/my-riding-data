var swaggerUi = require("swagger-ui-express");
var swaggerJsdoc = require("swagger-jsdoc");
var express = require("express");

const router = express.Router();

const options = {
  // swagger 문서 설정
  swaggerDefinition: {
    info: {
      title: "Test API",
      version: "1.0.0",
      description: "Test API with express",
    },
    host: "localhost:3000",
    basePath: "/",
  },
  // swagger api 가 존재하는 곳
  apis: ["../routes/index.js"],
};

const specs = swaggerJsdoc(options);

router.use("/", swaggerUi.serve, swaggerUi.setup(specs));

module.exports = router;
