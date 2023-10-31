import App from '../src/App.js';

describe('에러 반환 테스트', () => {
  test('자동차 이름이 두 대 미만인 경우 에러 반환', () => {
    const app = new App();
    const cars = ['Alley'];
    const raceTimes = '5';

    expect(() => app.handleErrors(cars, raceTimes)).toThrow('[ERROR]');
  });

  test('중복된 자동차 이름을 입력한 경우 에러 반환', () => {
    const app = new App();
    const cars = ['Alley', 'Tami', 'Alley'];
    const raceTimes = '5';

    expect(() => app.handleErrors(cars, raceTimes)).toThrow('[ERROR]');
  });

  test('유효하지 않은 자동차 이름을 입력한 경우 에러 반환', () => {
    const app = new App();
    const cars = ['Alley', 'Tami', '123!'];
    const raceTimes = '5';

    expect(() => app.handleErrors(cars, raceTimes)).toThrow('[ERROR]');
  });

  test('자동차 이름이 다섯 글자를 초과한 경우 에러 반환', () => {
    const app = new App();
    const cars = ['Alley', 'Tami', 'Yunaaaaaaa'];
    const raceTimes = '5';

    expect(() => app.handleErrors(cars, raceTimes)).toThrow('[ERROR]');
  });

  test('유효하지 않은 자동차 경주 횟수를 입력한 경우 에러 반환', () => {
    const app = new App();
    const cars = ['Alley', 'Tami', 'Yuna'];
    const raceTimes = 'abc';

    expect(() => app.handleErrors(cars, raceTimes)).toThrow('[ERROR]');
  });

  test('자동차 경주 횟수로 음수를 입력한 경우 에러 반환', () => {
    const app = new App();
    const cars = ['Alley', 'Tami', 'Yuna'];
    const raceTimes = '-5';

    expect(() => app.handleErrors(cars, raceTimes)).toThrow('[ERROR]');
  });
});