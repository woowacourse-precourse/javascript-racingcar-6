import validator from '../src/validator/validator';

describe('validateCarName Test', () => {
  test('중복된 자동차 이름이 있는 경우, 예외를 발생시킨다.', () => {
    const carNames = ['car1', 'car2', 'car2'];

    expect(() => validator.validateCarName(carNames)).toThrow('[ERROR]');
  });

  test('자동차 이름이 5자 이상일 경우, 예외를 발생시킨다.', () => {
    const carNames = ['car1', 'car2', 'longCarName'];

    expect(() => validator.validateCarName(carNames)).toThrow('[ERROR]');
  });

  test('자동차 이름이 null인 경우, 예외를 발생시킨다.', () => {
    const carNames = ['', 'car2', 'car2'];

    expect(() => validator.validateCarName(carNames)).toThrow('[ERROR]');
  });

  test('자동차 이름이 올바르게 입력되었을 경우, 예외를 발생시키지 않는다.', () => {
    const carNames = ['car1', 'car2', 'car3'];

    expect(() => validator.validateCarName(carNames)).not.toThrow();
  });
});

describe('validateCance Test', () => {
  test('입력값이 숫자가 아닌 경우, 예외를 발생시킨다.', () => {
    const number = 'string';

    expect(() => validator.validateChance(number)).toThrow('[ERROR]');
  });

  test('입력값이 0 이하의 숫자인 경우, 예외를 발생시킨다.', () => {
    const number = -1;

    expect(() => validator.validateChance(number)).toThrow('[ERROR]');
  });

  test('입력값이 null인 경우, 예외를 발생시킨다.', () => {
    const number = '';

    expect(() => validator.validateChance(number)).toThrow('[ERROR]');
  });

  test('입력값이 정수가 아닌 경우, 예외를 발생시킨다.', () => {
    const number = '0.1';

    expect(() => validator.validateChance(number)).toThrow('[ERROR]');
  });

  test('입력값에 문제가 없을 경우, 예외를 발생시키지 않는다.', () => {
    const number = 3;

    expect(() => validator.validateChance(number)).not.toThrow();
  });
});
