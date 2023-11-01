import { ERRORMSG } from "../src/constants/message";
import { checkInputTryNumValidation } from "../src/racingGame/utils/validation";

describe("시도횟수 입력 유효성 검사", () => {
  test("숫자만 인식", () => {
    const input = "@";

    expect(() => {
      checkInputTryNumValidation(input);
    }).toThrow(ERRORMSG.invalid_not_number);
  });

  test("최대 시도횟수 초과", () => {
    const input = "11";

    expect(() => {
      checkInputTryNumValidation(input);
    }).toThrow(ERRORMSG.invalid_exceed_max_try);
  });

  test("0 또는 음수", () => {
    const input = "0";

    expect(() => {
      checkInputTryNumValidation(input);
    }).toThrowError(ERRORMSG.invalid_negative);
  });
});
