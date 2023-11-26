import Validate from "../src/model/validate.js";

describe("사용자 인풋 테스트", () => {
  describe("자동차 이름 테스트", () => {
    test("입력한 자동차 이름이 5자가 넘어간다면 에러가 발생한다.", () => {
      const input = ["hyuk", "pobi", "junnnn"];
      expect(() => Validate.isCheckProperLength(input)).toThrow(Error);
    });

    test("쉼표를 통해 자동차의 개수를 2개 이상 입력하지 않으면 에러가 발생한다.", () => {
      const input = ["hyuk"];
      expect(() => Validate.isCheckCarCount(input)).toThrow(Error);
    });

    test("중복된 자동차 이름을 작성하면 에러가 발생한다.", () => {
      const input = ["hyuk", "pobi", "hyuk"];
      expect(() => Validate.isCheckDuplicatedName(input)).toThrow(Error);
    });
  });

  describe("횟수 테스트", () => {
    test("입력한 횟수가 1 ~ 9가 아니면 에러가 발생한다.", () => {
      const input = ["0", "10"];
      input.forEach((number) => {
        expect(() => Validate.isCheckProperRange(number)).toThrow(Error);
      });
    });

    test("입력한 값이 숫자가 아니면 에러를 발생한다.", () => {
      const input = "10s";
      expect(() => Validate.isCheckProperForm(input)).toThrow(Error);
    });
  });
});
