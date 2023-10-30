const { roundValidate } = require("../src/validate");

describe("정확한 라운드 값 형식 확인", () => {
  test("입력한 내용이 특수문자 및 공백을 포함했는지 확인", () => {
    return expect(() => roundValidate("1 2.3")).rejects.toThrow();
  });
});
