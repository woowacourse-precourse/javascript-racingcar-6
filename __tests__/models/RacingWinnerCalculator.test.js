import { RacingWinnerCalculator } from '../../src/models/index.js';

describe('RacingWinnerCalculator 테스트', () => {
  test.each([
    {
      input: [
        { carName: 'a', position: 9 },
        { carName: 'd', position: 6 },
        { carName: 'b', position: 8 },
        { carName: 'c', position: 0 },
      ],
      expected: 'a',
    },
    {
      input: [
        { carName: 'a', position: 9 },
        { carName: 'h', position: 9 },
        { carName: 'b', position: 8 },
        { carName: 'c', position: 8 },
      ],
      expected: 'a, h',
    },
    {
      input: [
        { carName: 'a', position: 5 },
        { carName: 'b', position: 5 },
        { carName: 'c', position: 5 },
      ],
      expected: 'a, b, c',
    },
  ])('자동차 경주에서 우승자는 $expected 이다.', ({ input, expected }) => {
    // given
    const calculator = new RacingWinnerCalculator(input);

    // when
    const result = calculator.calculateRacingWinners();

    // then
    expect(result).toBe(expected);
  });
});
