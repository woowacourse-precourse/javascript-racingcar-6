import { ErrorMessage } from "./errorMessage";

describe("errorMessage 검증", () => {
  test("basicErrorMessage", () => {
    const msg = test;
    const res = ErrorMessage.basicErrorMessage(msg);
    expect(res).toBe(`[ERROR] ${msg}`);
  });
  test("incorrectFormatErrorMessage", () => {
    const res = ErrorMessage.incorrectFormatErrorMessage("test");
    expect(res).toBe("숫자가 잘못된 형식입니다.");
  });
  test("numberOutOfRangeErrorMessage", () => {
    const num = 10;
    const res = ErrorMessage.numberOutOfRangeErrorMessage(num);
    expect(res).toBe(`${num}이하의 숫자를 입력해 주세요.`);
  });
});
