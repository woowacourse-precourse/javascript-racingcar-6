import { ERRORMSG } from "../src/constants/message";
import { checkInputTryNumValidation } from "../src/racingGame/utils/validation";

describe("시도횟수 입력 유효성 검사", () => {
  test("0 또는 음수", () => {
    const inputs = "0";

    expect(() => {
      checkInputTryNumValidation(inputs);
    }).toThrow(ERRORMSG.invalid_negative);
  });
  test("숫자만 인식", () => {
    const input = "@";

    expect(() => {
      checkInputTryNumValidation(input);
    }).toThrow(ERRORMSG.invalid_not_number);
  });

  test("최대 시도횟수 초과", () => {
    const input = "100";

    expect(() => {
      checkInputTryNumValidation(input);
    }).toThrow(ERRORMSG.invalid_exceed_max_try);
  });
});
