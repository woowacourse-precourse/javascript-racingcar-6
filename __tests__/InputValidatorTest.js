import InputValidator from "../src/validators/InputValidator.js";
import { ERROR_MSG } from "../src/constants/Constants.js";

describe("InputValidator 테스트", () => {
  test("validateCarNames 테스트", () => {
    expect(() => {
      InputValidator.validateCarNames([]);
    }).toThrow(ERROR_MSG.EMPTY_CAR_NAME);

    expect(() => {
      InputValidator.validateCarNames(["a", "b", "a"]);
    }).toThrow(ERROR_MSG.DUPLICATE_CAR_NAME);

    expect(() => {
      InputValidator.validateCarNames(["abcdeabcde"]);
    }).toThrow(ERROR_MSG.INVALID_CAR_NAME_LENGTH);
  });

  test("validateRaceCount 테스트", () => {
    expect(() => {
      InputValidator.validateRaceCount("");
    }).toThrow(ERROR_MSG.EMPTY_RACE_COUNT);

    expect(() => {
      InputValidator.validateRaceCount("abc");
    }).toThrow(ERROR_MSG.INVALID_RACE_COUNT);

    expect(() => {
      InputValidator.validateRaceCount("0");
    }).toThrow(ERROR_MSG.INVALID_RACE_COUNT);
  });
});
