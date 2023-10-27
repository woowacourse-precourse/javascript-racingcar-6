import Validate from "../src/Validate";
import { ERROR } from "../src/constant/message";

const inputsWithComma = [",pobi,woni", "pobi,woni,", ",pobi,woni,"];
const inputsWithInvalidCarName = [
  ["", "pobi"],
  ["pobi", ""],
  ["pobi", "pobibi"],
  ["pobii", "pobibi"],
];
const inputsWithInvalidCarsLength = [["q"], ["qw"], ["qwe"], ["qwer"]];
const inputsWithBlank = [
  ["pob i", "woni"],
  ["pob i", "w oni"],
  ["po bi", "wo ni"],
];
const inputsWithDuplicate = [
  ["pobi", "pobi"],
  ["qwer", "qwer"],
  ["woni", "woni"],
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

  test("자동차의 개수가 2개 미만이라면 false 반환.", () => {
    inputsWithInvalidCarsLength.forEach((input) => {
      expect(validate.minCarsLength(input)).toBeFalsy();
    });
  });

  test("자동차의 개수가 2개 이상이라면 true 반환.", () => {
    const inputsWithValidCarName = [
      ["pobi", "woni"],
      ["pobi", "w", "qwer"],
      ["p", "woni", "asdf", "qwer"],
      ["p", "woni", "asdf", "qwer", "zxcv"],
    ];

    inputsWithValidCarName.forEach((input) => {
      expect(validate.minCarsLength(input)).toBeTruthy();
    });
  });

  test("자동차의 개수가 2개 미만이라면 에러가 발생한다.", () => {
    inputsWithInvalidCarsLength.forEach((input) => {
      expect(() => validate.checkEachOfCarsIsValid(input)).toThrow(
        new Error(ERROR.CARS_LENGTH)
      );
    });
  });

  test("자동차 이름에 공백이 포함되지 않았다면 false 반환.", () => {
    const inputsWithoutBlank = [
      ["pobi", "woni"],
      ["qwer", "weaar"],
      ["as", "lie"],
    ];

    inputsWithoutBlank.forEach((input) => {
      expect(validate.eachCarNameHasBlank(input)).toBeFalsy();
    });
  });

  test("자동차 이름에 공백이 포함되었다면 true 반환.", () => {
    inputsWithBlank.forEach((input) => {
      expect(validate.eachCarNameHasBlank(input)).toBeTruthy();
    });
  });

  test("자동차 이름에 공백이 포함되었다면 에러가 발생한다.", () => {
    inputsWithBlank.forEach((input) => {
      expect(() => validate.checkEachOfCarsIsValid(input)).toThrow(
        new Error(ERROR.CAR_NAME_HAS_BLANK)
      );
    });
  });

  test("중복되는 자동차 이름이 없다면 false 반환.", () => {
    const inputsWithoutDuplicate = [
      ["pobi", "woni"],
      ["qwer", "weaar"],
      ["as", "lie"],
    ];

    inputsWithoutDuplicate.forEach((input) => {
      expect(validate.anyDuplicateCarName(input)).toBeFalsy();
    });
  });

  test("중복되는 자동차 이름이 있다면 true 반환.", () => {
    inputsWithDuplicate.forEach((input) => {
      expect(validate.anyDuplicateCarName(input)).toBeTruthy();
    });
  });

  test("중복되는 자동차 이름이 있다면 에러가 발생한다.", () => {
    inputsWithDuplicate.forEach((input) => {
      expect(() => validate.checkEachOfCarsIsValid(input)).toThrow(
        new Error(ERROR.CARS_NAME_DUPLICATED)
      );
    });
  });
});
