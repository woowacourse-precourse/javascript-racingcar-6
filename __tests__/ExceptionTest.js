import App from "../src/App";

describe("입력값 유효성 검사", () => {
  test("자동차 이름이 5자를 넘기거나 0자인 경우 에러 문구 반환", () => {
    const app = new App();
    const carNames = ["overfive", "woni", "jun"];
    const totalRound = 3;

    expect(() => app.validateInput(carNames, totalRound)).toThrow(
      "[ERROR] 이름은 1자 이상, 5자 이하만 가능합니다."
    );
  });

  test("시도할 횟수가 0-9 범위를 벗어났을 경우 에러 문구 반환 - 초과인 경우", () => {
    const app = new App();
    const carNames = ["pobi", "woni", "jun"];
    const totalRound = 11;

    expect(() => app.validateInput(carNames, totalRound)).toThrow(
      "[ERROR] 0과 9사이의 자연수만 입력 가능합니다."
    );
  });

  test("시도할 횟수가 0-9 범위를 벗어났을 경우 에러 문구 반환 - 음수인 경우", () => {
    const app = new App();
    const carNames = ["pobi", "woni", "jun"];
    const totalRound = -1;

    expect(() => app.validateInput(carNames, totalRound)).toThrow(
      "[ERROR] 0과 9사이의 자연수만 입력 가능합니다."
    );
  });
});
