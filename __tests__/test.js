import App from "../src/App.js";

describe("test입니다", () => {
  test("에러체크", async () => {
  
    const app = new App();

    expect(() => app.ValidInputDataType('a')).toThrow("[ERROR]");
    expect(() => app.ValidInput('')).toThrow("[ERROR]");
  });
});
