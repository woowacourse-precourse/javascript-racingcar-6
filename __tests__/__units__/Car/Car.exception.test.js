import { Car } from '../../../src/domain/index.js';

import ERROR_MESSAGE from '../../../src/constants/error.js';

import DUMMY_INPUTS from '../../constants/dummy.js';

describe('Car 예외 테스트', () => {
  it.each(DUMMY_INPUTS.withoutNumber)(
    '`move(power)`의 인자가 숫자가 아닐 경우 에러를 발생시킨다. (power: $power)',
    ({ input }) => {
      // given
      const car = Car.of();

      expect(() => {
        // when
        car.move(input);
        // then
      }).toThrow(ERROR_MESSAGE.car.isNotNumberMoveArg);
    },
  );
});
