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

  test("입력받은 이름이 공백일 경우", () => {
    const app = new App();
    const nameOfCarsInput = null;
    expect(() => app.checkNameOfCarsLength(nameOfCarsInput)).toThrowError(
      "[ERROR] 경주할 자동차 이름을 입력해주세요"
    );
  });

  test("입력받은 시도 횟수가 공백일 경우", () => {
    const app = new App();
    const tryNumbersInput = null;
    expect(() => app.checkTryNumber(tryNumbersInput)).toThrowError(
      "[ERROR] 시도 횟수를 입력해주세요"
    );
  });

  test("입력받은 시도 횟수가 숫자가 아닐경우", () => {
    const app = new App();
    const tryNumbersInput = "우테코사랑해용";
    expect(() => app.checkTryNumber(tryNumbersInput)).toThrowError(
      "[ERROR] 숫자를 입력해주세요"
    );
  });
});
