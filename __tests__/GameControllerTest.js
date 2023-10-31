import { Console, Random } from '@woowacourse/mission-utils';
import GameController from '../src/lib/classes/GameController.js';

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
    const racingGame = new GameController({ racingCars, playCount: 3 });

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
    const racingGame = new GameController({ racingCars, playCount: 5 });

    // when
    racingGame.printScore();

    // then
    expect(spyConsolePrint).toHaveBeenCalledTimes(4);

    expect(spyConsolePrint).toHaveBeenNthCalledWith(1, 'pobi : --');
    expect(spyConsolePrint).toHaveBeenNthCalledWith(2, 'jun : -');
    expect(spyConsolePrint).toHaveBeenNthCalledWith(3, 'jena : --');
    expect(spyConsolePrint).toHaveBeenNthCalledWith(4, '\n');
  });

  test('printWinner 함수 테스트', () => {
    // given
    const racingCars = [
      [
        { carName: 'pobi', score: 3 },
        { carName: 'jun', score: 1 },
        { carName: 'jena', score: 2 },
      ],
      [
        { carName: 'pobi', score: 2 },
        { carName: 'jun', score: 3 },
        { carName: 'jena', score: 3 },
      ],
    ];
    const racingGame1 = new GameController({
      racingCars: racingCars[0],
      playCount: 5,
    });
    const racingGame2 = new GameController({
      racingCars: racingCars[1],
      playCount: 5,
    });

    // when
    racingGame1.printWinner();
    racingGame2.printWinner();

    // then
    expect(spyConsolePrint).toHaveBeenCalledTimes(2);
    expect(spyConsolePrint).toHaveBeenNthCalledWith(1, '최종 우승자 : pobi');
    expect(spyConsolePrint).toHaveBeenNthCalledWith(
      2,
      '최종 우승자 : jun, jena',
    );
  });
});
