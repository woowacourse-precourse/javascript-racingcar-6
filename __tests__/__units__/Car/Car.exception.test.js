import ERROR_MESSAGE from '../../../src/constants/error.js';
import { Car } from '../../../src/domain/index.js';

describe('Car 예외 테스트', () => {
  it.each([
    { power: '1' },
    { power: {} },
    { power: [] },
    { power: true },
    { power: null },
    { power: undefined },
  ])('`move(power)`의 인자가 숫자가 아닐 경우 에러를 발생시킨다. (power: $power)', ({ power }) => {
    // given
    const car = new Car();

    expect(() => {
      // when
      car.move(power);
      // then
    }).toThrow(ERROR_MESSAGE.car.isNotNumberMoveArg);
  });
});
