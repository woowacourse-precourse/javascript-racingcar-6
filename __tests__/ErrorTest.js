import App from "../src/App.js";

describe("[ERROR] 동작 테스트", () => {
  test("입력받은 레이서 이름의 글자수 제한 ", () => {
    const app = new App();
    const nameOfCarsInput = "TooooLoooooong";
    expect(() => app.checkNameOfCarsLength(nameOfCarsInput)).toThrowError(
      "[ERROR] 이름은 다섯자 이하만 가능합니다."
    );
  });

  test("입력받은 이름이 문자가 아닐 경우", () => {
    const app = new App();
    const nameOfCarsInput = 123123;
    expect(() => app.checkNameOfCarsLength(nameOfCarsInput)).toThrowError(
      "[ERROR] 문자로 입력해주세요"
    );
  });
});
