import { MissionUtils } from '@woowacourse/mission-utils';
import Car from '../src/Car.js';
import { CONSTANT } from '../src/Constant.js';

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
  ])('자동차의 이동 결과에 이름이 잘 출력되는지 테스트', ({ input, output }) => {
    const car = new Car(input);
    const result = car.moveForward();
    const regex = new RegExp(output);

    expect(result).toMatch(regex);
  });

  test.each([
    { input: [5], output: '-' },
    { input: [3], output: '' },
  ])(
    `자동차의 랜덤 숫자에 따라 이동한 결과가 올바른지 테스트 (${CONSTANT.movable}보다 크면 이동) `,
    ({ input, output }) => {
      mockRandoms(input);

      const name = 'yuna';
      const car = new Car(name);
      const result = car.moveForward();

      expect(result).toBe(`${name} : ${output}`);
    },
  );

  test.each([
    { input: [1, 4], output: -1 },
    { input: [4, 1], output: 1 },
    { input: [1, 1], output: 0 },
  ])('다른 자동차와 이동 횟수를 잘 비교하는지 테스트', ({ input, output }) => {
    mockRandoms(input);

    const car = new Car('mine');
    car.moveForward();
    const anotherCar = new Car('another');
    anotherCar.moveForward();
    const result = car.compareToMax(anotherCar);

    expect(result).toBe(output);
  });

  test.each([
    { input: [2, 9], output: false },
    { input: [9, 2], output: false },
    { input: [2, 2], output: true },
  ])('다른 자동차와 이동 횟수가 같은지 비교하는 기능 테스트', ({ input, output }) => {
    mockRandoms(input);

    const car = new Car('mine');
    car.moveForward();
    const anotherCar = new Car('another');
    anotherCar.moveForward();
    const result = car.compareIsSame(anotherCar);

    expect(result).toBe(output);
  });

  test.each(['pobi', 'yuna'])('자동차의 이름을 잘 반환하는지 테스트', (name) => {
    const car = new Car(name);

    expect(car.getCarName()).toBe(name);
  });
});
