import App from "../src/App";

const app = new App();

describe("입력 유효성 검사", () => {
  describe("자동차 이름 검사", () => {
    test("이름이 5자 이하인 경우", () => {
      expect(() => app.validateCarName("car12")).not.toThrow();
    });

    test("이름이 5자를 초과하는 경우", () => {
      expect(() => app.validateCarName("car123456")).toThrow(
        "[ERROR] 자동차 이름은 5자 이하만 가능합니다."
      );
    });

    test("자동차 이름을 1개 이하로 입력한 경우", () => {
      expect(() => app.validateNumberOfCars(["car"])).toThrow(
        "[ERROR] 자동차 이름은 2개 이상이어야 합니다."
      );
    });
  });

  describe("자동차 이름 구분자 검사", () => {
    test("이름이 쉼표로 구분된 경우", () => {
      expect(() => app.validateCarNameSeparator("car1,car2")).not.toThrow();
    });

    test("이름이 쉼표 외 다른 문자로 구분된 경우", () => {
      expect(() => app.validateCarNameSeparator("car1;car2")).toThrow(
        "[ERROR] 자동차 이름은 쉼표(,)로만 구분해야 합니다."
      );
    });
  });

  describe("시도 횟수 검사", () => {
    test("시도 횟수가 1 미만의 숫자일 경우", () => {
      expect(() => app.validateTrialCount("0")).toThrow(
        "[ERROR] 시도할 횟수는 양의 숫자여야 합니다."
      );
    });
  });
});
