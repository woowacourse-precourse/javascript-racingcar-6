import { CAR_NAMES, CARS, RACING } from "../../src/constants/carRacing";
import { ERROR_MESSAGE } from "../../src/constants/messages";
import Validator from "../../src/models/validator";

describe("자동차 이름 입력 유효성 테스트", () => {
  test("자동차 이름의 길이가 최소 길이보다 작은 경우 에러 발생", () => {
    const carNames = "pobi,";

    expect(() => {
      Validator.validateInputCarNames(carNames).toThorw(ERROR_MESSAGE.INPUT_CAR_NAMES_TOO_SHORT);
    })
  });

  test("자동차 이름의 길이가 최대 길이보다 긴 경우 에러 발생", () => {
    const carNames = `pobi,jiwoos`;

    expect(() => {
      Validator.validateInputCarNames(carNames).toThorw(ERROR_MESSAGE.INPUT_CAR_NAMES_TOO_LONG);
    })
  });

  test("자동차 이름이 중복된 경우 에러를 발생시킨다.", () => {
    const carNames = `jiwoo,jiwoo`;

    expect(() => {
      Validator.validateInputCarNames(carNames).toThorw(ERROR_MESSAGE.INPUT_CAR_NAME_IS_DUPLICATED);
    })
  });

  test("자동차 대수가 최소 대수 미만으로 입력한 경우", () => {
    const carNames = `pobi`;

    expect(() => {
      Validator.validateInputCarNames(carNames).toThorw(ERROR_MESSAGE.INPUT_CARS_LESS_THAN_TWO);
    })
  });
});
