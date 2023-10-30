import { Random } from '@woowacourse/mission-utils';
import RacingGame from '../../src/models/RacingGame.js';

describe('RacingResult 테스트', () => {
  beforeAll(() => {
    Random.pickNumberInRange = () => 4;
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  test.each([
    {
      carNames: ['carA', 'carB'],
      moveCount: 3,
      expectedResults: [
        [
          { carName: 'carA', position: 1 },
          { carName: 'carB', position: 1 },
        ],
        [
          { carName: 'carA', position: 2 },
          { carName: 'carB', position: 2 },
        ],
        [
          { carName: 'carA', position: 3 },
          { carName: 'carB', position: 3 },
        ],
      ],
    },
    {
      carNames: ['car1', 'car2', 'car3'],
      moveCount: 1,
      expectedResults: [
        [
          { carName: 'car1', position: 1 },
          { carName: 'car2', position: 1 },
          { carName: 'car3', position: 1 },
        ],
      ],
    },
  ])(
    '자동차 이름이 $carNames 이고 이동 횟수가 $moveCount 일 때, 예상 결과는 $expectedResults 이다.',
    ({ carNames, moveCount, expectedResults }) => {
      // given
      const racingGame = new RacingGame(carNames, moveCount);

      // when
      const racingResult = racingGame.play();

      // then
      expect(racingResult).toStrictEqual(expectedResults);
    },
  );
});
