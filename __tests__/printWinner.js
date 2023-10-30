const Game = require('../src/Game');
const Car = require('../src/Car');
const { MissionUtils } = require('@woowacourse/mission-utils');

const car1 = new Car('kwani');
const car2 = new Car('pobi');
const carArray = [car1, car2];
const game = new Game();

describe(' 우승자를 출력하는 함수 printWinner()', () => {
  const getLogSpy = () => {
    const logSpy = jest.spyOn(MissionUtils.Console, 'print');
    logSpy.mockClear();
    return logSpy;
  };
  test('단독 우승', async () => {
    const logSpy = getLogSpy();
    game.printWinner([car1]);
    expect(logSpy).toHaveBeenCalledWith('최종 우승자 : kwani');
  });
  test('공동 우승', async () => {
    const logSpy = getLogSpy();
    game.printWinner(carArray);
    expect(logSpy).toHaveBeenCalledWith('최종 우승자 : kwani, pobi');
  });
});
