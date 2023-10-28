import { ErrorMessage } from "../message/errorMessage";
import { getRandomNumber } from "./random";

describe("getRandomNumber 유효성 체크", () => {
  test("parameter 값 : start = end => return start", () => {
    const number = getRandomNumber(0, 0);
    expect(number).toBe(0);
  });

  test("parameter 값 : start < end => return start ~ end 사이 값", () => {
    const start = 0;
    const end = 10;
    const number = getRandomNumber(start, end);
    expect(number).toBeGreaterThanOrEqual(start);
    expect(number).toBeLessThanOrEqual(end);
  });

  test("parameter 값 : start > end => IncorrectParameterError", () => {
    const getRandomNumberError = () => getRandomNumber(10, 0);
    const errorMessage = ErrorMessage.incorrectParameterErrorMessage();
    expect(getRandomNumberError).toThrow(`[ERROR] ${errorMessage}`);
  });

  test("parameter 값 : 숫자가 아닐 경우 => IncorrectFormatError", () => {
    const getRandomNumberError = () => getRandomNumber("10", "0");
    const errorMessage = ErrorMessage.incorrectFormatErrorMessage();
    expect(getRandomNumberError).toThrow(`[ERROR] ${errorMessage}`);
  });
});
