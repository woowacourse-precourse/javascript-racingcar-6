import { RULES } from '../src/constants';
import RacingCar from '../src/RacingCar';

describe('test goAhead method in RacingCar', () => {
  test.each([
    {
      input: {
        name: 'a',
        randomNumber: RULES.goMinStandardNumber,
      },
      expected: { name: 'a', position: 1 },
    },
    {
      input: {
        name: 'b',
        randomNumber: RULES.goMinStandardNumber - 1,
      },
      expected: { name: 'b', position: 0 },
    },
    {
      input: {
        name: 'c',
        randomNumber: RULES.goMinStandardNumber,
      },
      expected: { name: 'c', position: 1 },
    },
  ])(
    'RacingCar의 position은 input.randomNumber >= RULES.goMinStandardNumber(4)을 만족하면 1칸 전진한다.',
    ({ input: { name, randomNumber }, expected }) => {
      // given
      const car = RacingCar.createRacingCar(name);
      // when
      if (randomNumber >= RULES.goMinStandardNumber) car.goAhead(randomNumber);
      // then
      expect(car.position).toBe(expected.position);
    },
  );
});
