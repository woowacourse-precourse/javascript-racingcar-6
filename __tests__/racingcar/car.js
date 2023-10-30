import Car from '../../src/racingcar/car.js';

describe('경주할 자동차 이름을 입력받는다.', () => {
  test('이름은 쉼표(,)를 기준으로 구분한다.', () => {
    // given
    const input = 'car1, car2';

    // when
    const car = new Car();
    const result = car.isValidValue(input);

    // then
    expect(result).toBeTruthy();
  });

  test.each([
    'car1',
    'car1 car2',
    '1234567',
    'car1, car1',
    '',
  ])('이름에 대한 예외 처리', input => {
    // when
    const car = new Car();
    const result = car.isValidValue(input);

    // then
    expect(result).toBeFalsy();
  });
});
