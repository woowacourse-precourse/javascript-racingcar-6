import App from "../src/App";

describe("시도할 횟수 예외 처리", () => {
  let app;
  beforeEach(() => {
    app = new App();
  });

  test("숫자인지 검사", () => {
    expect(() => app.isTryCountVaild("#")).toThrow(
      "[ERROR] 숫자만 입력 가능합니다."
    );
  });

  test("정수인지 검사", () => {
    expect(() => app.isTryCountVaild("1.2")).toThrow(
      "[ERROR] 정수만 입력 가능합니다."
    );
  });

  test("자연수인지 검사", () => {
    expect(() => app.isTryCountVaild("-3")).toThrow(
      "[ERROR] 자연수만 입력 가능합니다."
    );
  });

  test("문자열 상태 검사", () => {
    expect(() => app.isTryCountVaild("13")).not.toThrow();
  });

  test("정상 실행 검사", () => {
    expect(() => app.isTryCountVaild("13")).not.toThrow();
  });
});
