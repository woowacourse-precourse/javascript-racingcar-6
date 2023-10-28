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

  test("numberOutOfRangeErrorMessage", () => {
    const num = 10;
    const res = ErrorMessage.numberOutOfRangeErrorMessage(num);
    expect(res).toBe(`${num}이하의 숫자를 입력해 주세요.`);
  });
});
