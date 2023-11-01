import App from "../src/App";

const app = new App();

describe("입력 유효성 검사", () => {
  describe("자동차 이름 검사", () => {

    test("이름이 5자를 초과하는 경우", () => {
      expect(() => app.validateCarName("westwood")).toThrow(
        "[ERROR] 자동차 이름은 5자 이하만 가능합니다."
      );
    });
  });

  describe("시도 횟수 검사", () => {
    test("시도 횟수가 1 미만의 숫자일 경우", () => {
      expect(() => app.validateCount("0")).toThrow(
        "[ERROR] 시도할 횟수는 양의 숫자여야 합니다."
      );
    });
  });
});
