import App from "../src/App.js";

describe("[ERROR] 동작 테스트", () => {
  test("입력받은 레이서 이름의 글자수 제한 ", () => {
    const app = new App();
    const nameOfCarsInput = "TooooLoooooong";
    expect(app.play()).rejects.toThrow("[ERROR]");
  });

  test("입력받은 이름이 문자가 아닐 경우", () => {
    const app = new App();
    const nameOfCarsInput = 123123;
    expect(app.play()).rejects.toThrow("[ERROR]");
  });

  test("입력받은 이름이 공백일 경우", () => {
    const app = new App();
    const nameOfCarsInput = null;
    expect(app.play()).rejects.toThrow("[ERROR]");
  });

  test("입력받은 시도 횟수가 공백일 경우", () => {
    const app = new App();
    const tryNumbersInput = null;
    expect(app.play()).rejects.toThrow("[ERROR]");
  });
});
