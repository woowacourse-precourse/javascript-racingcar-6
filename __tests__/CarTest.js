import { Random } from '@woowacourse/mission-utils';
import Car from '../src/Car';

const mockRandoms = (numbers) => {
  Random.pickNumberInRange = jest.fn();

  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    Random.pickNumberInRange,
  );
};

describe('자동차 테스트', () => {
  test('무작위 값에 따른 자동차 전진', () => {
    // given
    const randoms = [1, 2, 3, 4, 5];
    const output = 2;
    mockRandoms([...randoms]);

    // when
    const car = new Car('foo');

    randoms.forEach(() => {
      car.moveForward();
    });

    // then
    expect(car.moveCount).toEqual(output);
  });
});
