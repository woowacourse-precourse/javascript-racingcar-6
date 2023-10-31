import App from "../src/App.js";
import ERROR_MESSAGE from "../src/constant/errorMessage.js";

describe('시도 횟수 유효성 테스트', () => {
  test('정상 값 입력 시 통과', () => {
    const app = new App();
    const input = 3;

    expect(() => {
      app.checkValidTrialNum(input);
    }).not.toThrow();
  });

  test('숫자가 아닐 경우 에러 반환', () => {
    const app = new App();
    const input = NaN;

    expect(() => {
      app.checkValidTrialNum(input);
    }).toThrow(ERROR_MESSAGE.not_number);
  });

  test('숫자의 크기가 0 이하일 경우 에러 반환', () => {
    const app = new App();
    const input = 0;

    expect(() => {
      app.checkValidTrialNum(input);
    }).toThrow(ERROR_MESSAGE.less_than_one_trial);
  });

  test('숫자에 공백이 포함될 경우 에러 반환', () => {
    const app = new App();
    const input = '1 2';

    expect(() => {
      app.checkValidTrialNum(input);
    }).toThrow(ERROR_MESSAGE.has_space);
  });
});
