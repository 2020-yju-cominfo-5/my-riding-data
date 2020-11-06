var swaggerUi = require("swagger-ui-express");
var swaggerJsdoc = require("swagger-jsdoc");
var express = require("express");

const router = express.Router();

const options = {
  // swagger 문서 설정
  swaggerDefinition: {
    // openapi: "3.0.0",
    info: {
      title: "My Riding API List(Mongo DB)",
      version: "0.0.1",
      description: "라이딩 기록, 경로 정보 조회 및 저장",
    },
    host: "localhost:3000",
    basePath: "/api",
  },
  // swagger api 가 존재하는 곳
  apis: ["./util/swagger.yml"],
};

const specs = swaggerJsdoc(options);
router.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true }),
);

module.exports = router;
