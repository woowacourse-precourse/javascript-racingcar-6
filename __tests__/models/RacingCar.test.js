import { RacingCar } from '../../src/models/index.js';

describe('RacingCar 테스트', () => {
  test.each([
    {
      input: {
        racingCarInfo: { carName: 'A', position: 0 },
        randomNumber: RacingCar.MOVE_THRESHOLD,
      },
      expected: { carName: 'A', position: 1 },
    },
    {
      input: {
        racingCarInfo: { carName: 'B', position: 0 },
        randomNumber: RacingCar.MOVE_THRESHOLD - 1,
      },
      expected: { carName: 'B', position: 0 },
    },
    {
      input: {
        racingCarInfo: { carName: 'C', position: 0 },
        randomNumber: RacingCar.MOVE_THRESHOLD + 1,
      },
      expected: { carName: 'C', position: 1 },
    },
    {
      input: {
        racingCarInfo: { carName: 'D', position: 5 },
        randomNumber: RacingCar.MOVE_THRESHOLD,
      },
      expected: { carName: 'D', position: 6 },
    },
  ])(
    '입력 받은 자동차의 position이 $input.racingCarInfo.position 이고 랜덤 숫자가 $input.randomNumber일 때, 예상 position은 $expected.position 이다.',
    ({ input: { randomNumber, racingCarInfo }, expected }) => {
      // given
      const racingCar = new RacingCar(racingCarInfo);

      // when
      const updateRacingCarInfo = racingCar.move(randomNumber);

      // then
      expect(updateRacingCarInfo.position).toBe(expected.position);
    },
  );
});
