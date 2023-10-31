import App from "../src/App.js";

describe("[ERROR] 동작 테스트", () => {
  test("입력받은 레이서 이름의 글자수 제한 ", () => {
    const app = new App();
    const nameOfCarsInput = "TooooLoooooong";
    expect(() => app.checkNameOfCarsLength(nameOfCarsInput)).toThrowError(
      "[ERROR] 이름은 다섯자 이하만 가능합니다."
    );
  });
