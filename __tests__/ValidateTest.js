import Validate from "../src/Validate";
import { ERROR } from "../src/constant/message";

const inputs = [",pobi,woni", "pobi,woni,", ",pobi,woni,"];

let validate;

beforeAll(() => {
  validate = new Validate();
});

describe("자동차명 입력에 대한 Validate 클래스 테스트", () => {
  test("자동차 입력시 문자열 맨 앞에 쉼표(,)를 입력하면 안된다.", () => {
    inputs.forEach((input) => {
      expect(validate.eachSideContainComma(input)).toBeTruthy();
    });
  });

  test("자동차 입력시 문자열 맨 앞에 쉼표(,)를 입력하면 에러가 발생한다.", () => {
    inputs.forEach((input) => {
      expect(() => validate.checkEnteredCarsIsValid(input)).toThrow(
        new Error(ERROR.CARS_START_AND_END_WITH_COMMA)
      );
    });
  });
});
