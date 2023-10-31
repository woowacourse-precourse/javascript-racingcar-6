import { RacingGameState } from "../../constants/game.js";
import { ErrorMessage } from "./message.js";

describe("errorMessage 검증", () => {
  test("basicErrorMessage", () => {
    const msg = test;
    const res = ErrorMessage.basicErrorMessage(msg);

    expect(res).toBe(`[ERROR] ${msg}`);
  });

  test("incorrectFormatErrorMessage", () => {
    const res = ErrorMessage.incorrectFormatErrorMessage();

    expect(res).toBe("잘못된 형식입니다.");
  });

  test("incorrectFormatErrorMessage", () => {
    const res = ErrorMessage.incorrectParameterErrorMessage();

    expect(res).toBe("잘못된 매개변수입니다.");
  });

  test("outOfRangeErrorMessage", () => {
    const num = 10;
    const res = ErrorMessage.outOfRangeErrorMessage();
    const resWithParam = ErrorMessage.outOfRangeErrorMessage(num);

    expect(res).toBe(`${RacingGameState.MAX_NAME_LENGTH}자 이하로 입력해 주세요.`);
    expect(resWithParam).toBe(`${num}자 이하로 입력해 주세요.`);
  });
});
