import Validate from "../src/Validate";
import { ERROR } from "../src/constant/message";

const inputsWithComma = [",pobi,woni", "pobi,woni,", ",pobi,woni,"];
const inputsWithInvalidCarName = [
  ["", "pobi"],
  ["pobi", ""],
  ["pobi", "pobibi"],
  ["pobii", "pobibi"],
];

let validate;

beforeAll(() => {
  validate = new Validate();
});

describe("자동차명 입력에 대한 Validate 클래스 테스트", () => {
  test("자동차 입력시 문자열 양 끝에 한 쪽이라도 쉼표(,)를 입력하면 true 반환.", () => {
    inputsWithComma.forEach((input) => {
      expect(validate.eachSideContainComma(input)).toBeTruthy();
    });
  });

  test("자동차 입력시 문자열 양 끝에 쉼표(,)가 없으면 false 반환", () => {
    const inputsWithoutComma = [
      "pobi,woni",
      " pobi,woni",
      "pobi,woni ",
      " pobi,woni ",
      "pobi ,woni",
      "pobi, woni",
    ];

    inputsWithoutComma.forEach((input) => {
      expect(validate.eachSideContainComma(input)).toBeFalsy();
    });
  });

  test("자동차 입력시 문자열 양 끝에 한 쪽이라도 쉼표(,)를 입력하면 에러가 발생한다.", () => {
    inputsWithComma.forEach((input) => {
      expect(() => validate.checkEnteredCarsIsValid(input)).toThrow(
        new Error(ERROR.CARS_START_AND_END_WITH_COMMA)
      );
    });
  });

  test("각 자동차의 이름이 1자 이상, 5자 이하가 아니라면 false 반환.", () => {
    inputsWithInvalidCarName.forEach((input) => {
      expect(validate.eachCarNameLength(input)).toBeFalsy();
    });
  });

  test("각 자동차의 이름이 1자 이상, 5자 이하라면 true 반환.", () => {
    const inputsWithValidCarName = [
      ["pobi", "woni"],
      ["pobi", "w"],
      ["p", "woni"],
      ["pobib", "wonin"],
    ];

    inputsWithValidCarName.forEach((input) => {
      expect(validate.eachCarNameLength(input)).toBeTruthy();
    });
  });

  test("각 자동차의 이름이 1자 이상, 5자 이하가 아니라면 에러가 발생한다.", () => {
    inputsWithInvalidCarName.forEach((input) => {
      expect(() => validate.checkEachOfCarsIsValid(input)).toThrow(
        new Error(ERROR.CAR_NAME_LENGTH)
      );
    });
  });
});
