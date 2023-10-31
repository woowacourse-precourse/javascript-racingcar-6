import App from "../src/App.js";

describe("문자열 테스트", () => {
  test("2대 이상 입력했는지 테스트", () => {
    const ARRAY = ["a"];
    const app = new App();
    expect(() => app.numberOfCarValidity(ARRAY)).toThrow("[ERROR]");
  });
});

