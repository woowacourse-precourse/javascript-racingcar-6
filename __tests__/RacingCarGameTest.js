import App from '../src/App.js';
import Random from '../src/Random.js';

const getCarNames = (input) => {
  const app = new App();

  const carNames = [];
  const cars = app.makeCars(input);
  cars.forEach((car) => {
    const { name } = car;
    carNames.push(name);
  });
  return carNames;
};

describe('경주 게임 관련 테스트', () => {
  test('자동차 이름이 저장 되었는지 확인', () => {
    const input = 'pobi,min,haha,mu';
    const validInput = ['pobi', 'min', 'haha', 'mu'];

    expect(getCarNames(input)).toStrictEqual(validInput);
  });

  test('자동차 전진 배열 변환  확인', () => {
    const input = [1, 2, 5, 7, 8];
    const validInput = [' ', ' ', '-', '-', '-'];

    expect(Random.convertToHyphenOrSpace(input)).toStrictEqual(validInput);
  });
});
