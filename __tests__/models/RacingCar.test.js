import { RacingCar } from '../../src/models/index.js';

describe('RacingCar 테스트', () => {
  test.each([
    {
      initialInfo: { position: 0 },
      randomNumber: RacingCar.MOVE_THRESHOLD,
      expected: { position: 1 },
    },
    {
      initialInfo: { position: 0 },
      randomNumber: RacingCar.MOVE_THRESHOLD - 1,
      expected: { position: 0 },
    },
    {
      initialInfo: { position: 0 },
      randomNumber: RacingCar.MOVE_THRESHOLD + 1,
      expected: { position: 1 },
    },
    {
      initialInfo: { position: 5 },
      randomNumber: RacingCar.MOVE_THRESHOLD,
      expected: { position: 6 },
    },
  ])(
    '입력 받은 position이 $initialInfo.position이고 랜덤한 숫자가 $randomNumber일 때, 예상 position은 $expected.position 이다.',
    ({ initialInfo, randomNumber, expected }) => {
      // given
      const mockRandomGenerator = jest.fn(() => randomNumber);
      const racingCar = new RacingCar(initialInfo, mockRandomGenerator);

      // when
      const updateRacingCarInfo = racingCar.move();

      // then
      expect(updateRacingCarInfo.position).toBe(expected.position);
    },
  );
});
