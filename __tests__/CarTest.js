import { MissionUtils } from '@woowacourse/mission-utils';
import Car from '../src/Car.js';
import { CONSTANT } from '../src/constants/Constant.js';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange,
  );
};

describe('Car 클래스 테스트', () => {
  test.each([
    { input: 'pobi', output: 'pobi : ' },
    { input: 'yuna', output: 'yuna : ' },
  ])('이동 결과에 자동차 이름이 잘 출력되는지 테스트', ({ input, output }) => {
    // when
    const car = new Car(input);
    const result = car.moveForward();
    const regex = new RegExp(output);

    // then
    expect(result).toMatch(regex);
  });

  test.each([
    { input: [5], output: '-' },
    { input: [3], output: '' },
  ])(
    `자동차의 랜덤 숫자에 따라 이동한 결과가 올바른지 테스트 (${CONSTANT.movable}보다 크면 이동) `,
    ({ input, output }) => {
      // given
      mockRandoms(input);

      // when
      const name = 'yuna';
      const car = new Car(name);
      const result = car.moveForward();

      // then
      expect(result).toBe(`${name} : ${output}`);
    },
  );

  test.each([
    { inputs: [1, 4], output: -1 },
    { inputs: [4, 1], output: 1 },
    { inputs: [1, 1], output: 0 },
  ])('다른 자동차와 이동 횟수를 잘 비교하는지 테스트', ({ inputs, output }) => {
    // given
    mockRandoms(inputs);

    const car = new Car('mine');
    car.moveForward();
    const anotherCar = new Car('another');
    anotherCar.moveForward();

    // when
    const result = car.compareWith(anotherCar);

    // then
    expect(result).toBe(output);
  });

  test.each([
    { inputs: [2, 9], output: false },
    { inputs: [9, 2], output: false },
    { inputs: [2, 2], output: true },
  ])('다른 자동차와 이동 횟수가 같은지 비교하는 기능 테스트', ({ inputs, output }) => {
    // given
    mockRandoms(inputs);

    const car = new Car('mine');
    car.moveForward();
    const anotherCar = new Car('another');
    anotherCar.moveForward();

    // when
    const result = car.compareIsSame(anotherCar);

    // then
    expect(result).toBe(output);
  });

  test.each(['pobi', 'yuna'])('자동차의 이름을 잘 반환하는지 테스트', (name) => {
    // when
    const car = new Car(name);

    // then
    expect(car.getCarName()).toBe(name);
  });
});
