import App from "../src/App.js";
import { GAME, ERROR } from "./message";

discribe("조건 검증 테스트", () => {
  test("자동차 이름이 5자를 초과할 경우 에러 발생", () => {
    expect(() => App.validateCarName(["abcdef"])).toThrow(ERROR.CAR_NAME);
    expect(() => App.validateCarName(["abc", "efghij"])).toThrow(
      ERROR.CAR_NAME
    );
  });

  test("시도할 횟수가 숫자가 아닐 경우 에러 발생", () => {
    expect(() => App.validateNumber(NaN)).toThrow(ERROR.ATTEMPT_COUNT);
  });
});
