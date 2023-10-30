import App from "../src/App.js";

describe("차 이름 유효성 검사 함수 테스트", () => {
  const app = new App();

  test("차 이름이 비어있을때 false반환", () => {
    const invalidInput = "";

    expect(app.isValid(invalidInput)).toBe(false);
  });

  test("차 이름이 whiteSpace일 때 false반환", () => {
    const invalidSpace = " ";
    const invalidTab = "    ";

    expect(app.isValid(invalidSpace)).toBe(false);
    expect(app.isValid(invalidTab)).toBe(false);
  });

  test("차 이름의 길이가 5보다 클때 false반환", () => {
    const invalidLength = "123456";

    expect(app.isValid(invalidLength)).toBe(false);
  });

  test("차 이름이 올바른 경우 true반환", () => {
    const validName = "test1";
    expect(app.isValid(validName)).toBe(true);
  });
});
