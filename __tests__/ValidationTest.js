import {checkDuplication, checkInputCount, checkNameValidation} from "../src/App.js";
import * as constants from "../src/constants.js";
describe("유효성 함수 테스트", () => {
  test("checkNameValidation 테스트", () => {
    const input = "5글자이상되는이름";
    expect(() => checkNameValidation(input)).toThrow(constants.NAME_LENGTH_ERROR_MESSAGE);
  });

  test("checkInputCount", () => {
    const input = "숫자가아니다.";
    expect(() => checkInputCount(input)).toThrow(constants.COUNT_TYPE_ERROR_MESSAGE);
  });

  test("checkDUplication 테스트", () => {
    const input = ["car1", "car1", "car2"];

    expect(() => checkDuplication(input)).toThrow(constants.CARS_DUPLICATION_ERROR_MESSAGE);
  });
});
