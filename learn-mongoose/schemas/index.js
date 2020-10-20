const mongoose = require("mongoose");

module.exports = () => {
  const connect = () => {
    // <<-- 개발 환경이 아닐 때, 몽구스가 생성하는 쿼리 내용을 콘솔을 통해 확인
    if (process.env.NODE_ENV !== "production") {
      mongoose.set("debug", true);
    }
    // -->>

    // <<-- 몽구스와 몽고디비를 연결, 몽고디비 주소로 접속
    /**
     * 접속을 시도하는 주소의 데이터베이스 : admin
     * 실제로 사용할 데이터베이스 : nodejs
     *   -> 두 번째 인자로 dbName 옵션
     * 마지막 인자 콜백 함수 : 연결 여부 확인
     */
    mongoose.connect(
      "mongodb://localhost:27017/admin",
      {
        dbName: "nodejs",
      },
      (error) => {
        if (error) {
          console.log("몽고디비 연결 에러", error);
        } else {
          console.log("몽고디비 연결 성공");
        }
      },
    );
  }; // -->>

  connect();

  // <<-- 몽구스 커넥션에 이벤트 리스너 추가
  /**
   * 에러 발생 시 에러 내용을 기록
   * 연결 종료 시, 재 연결을 시도
   */
  mongoose.connection.on("error", (error) => {
    console.error("몽고디비 연결 에러", error);
  });
  mongoose.connection.on("disconnected", () => {
    console.error("몽고디비 연결이 끊겼습니다. 연결을 재시도합니다.");
    connect();
  });
  // -->>

  // <<-- User 스키마와 Comment 스키마와 연결
  require("./user");
  require("./comment");
  // -->>
};
