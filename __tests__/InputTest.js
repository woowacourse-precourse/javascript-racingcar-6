import { Validation } from "../src/Constants.js";

describe("차 이름 입력 테스트", () => {
  test("차 이름이 5자 이상", () => {
    const input = ["123456,123", "123,1234567", "123456,123456"];
    input.forEach((v) => {
      expect(() => Validation(v)).toThrow("[ERROR]");
    });
  });
});
