import App from '../src/App.js';

const app = new App();

describe('자동차 게임 입력값 유효성 검사 테스트', () => {
  test('경주할 자동차 이름을 하나만 입력했을 때 false를 반환하는지 테스트', () => {
    const carNameInput = ['pobi'];
    const result = app.isValidCarNamesInput(carNameInput);
    expect(result).toEqual(false);
  });

  test('게임 시도 횟수를 0으로 입력했을 때 false를 반환하는지 테스트', () => {
    const gameCountInput = 0;
    const result = app.isValidGameCountInput(gameCountInput);
    expect(result).toEqual(false);
  });

  test('게임 시도 횟수를 1보다 큰 숫자로 입력했을 때 true를 반환하는지 테스트', () => {
    const gameCountInput = 3;
    const result = app.isValidGameCountInput(gameCountInput);
    expect(result).toEqual(true);
  });
});
