import { Console, Random } from '@woowacourse/mission-utils';
import RacingGame from '../src/racingcar/lib/classes/RacingGame';

let spyConsolePrint;

const mockRandoms = (numbers) => {
  Random.pickNumberInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    Random.pickNumberInRange,
  );
};

beforeEach(() => {
  spyConsolePrint = jest.spyOn(Console, 'print');
});

afterEach(() => {
  spyConsolePrint.mockRestore();
});

describe('자동차 경주 게임', () => {
  test('countScore 함수 테스트', () => {
    // given
    const racingCars = [
      { carName: 'pobi', score: 0 },
      { carName: 'jun', score: 0 },
      { carName: 'jena', score: 0 },
    ];
    const randoms = [3, 5, 3, 6, 9, 4, 3, 3, 5];
    mockRandoms(randoms);
    const racingGame = new RacingGame({ racingCars, playCount: 3 });

    // when
    for (let i = 0; i < racingGame.playCount; i += 1) {
      racingGame.countScore();
    }

    // then
    expect(racingGame.racingCars[0].score).toBe(1);
    expect(racingGame.racingCars[1].score).toBe(2);
    expect(racingGame.racingCars[2].score).toBe(2);
  });

  test('printScore 함수 테스트', () => {
    // given
    const racingCars = [
      { carName: 'pobi', score: 2 },
      { carName: 'jun', score: 1 },
      { carName: 'jena', score: 2 },
    ];
    const racingGame = new RacingGame({ racingCars, playCount: 5 });

    // when
    racingGame.printScore();

    // then
    expect(spyConsolePrint).toHaveBeenCalledTimes(4);

    expect(spyConsolePrint).toHaveBeenNthCalledWith(1, 'pobi : --');
    expect(spyConsolePrint).toHaveBeenNthCalledWith(2, 'jun : -');
    expect(spyConsolePrint).toHaveBeenNthCalledWith(3, 'jena : --');
    expect(spyConsolePrint).toHaveBeenNthCalledWith(4, '\n');
  });
});
