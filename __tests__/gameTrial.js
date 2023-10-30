const Game = require('../src/Game');
const Car = require('../src/Car');
const { MissionUtils } = require('@woowacourse/mission-utils');

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};
const car1 = new Car('kwani');
const car2 = new Car('pobi');
const carArray = [car1, car2];
const game = new Game();
const logSpy = getLogSpy();

describe(' Car 의 전진결과를 출력하는 함수 gameTrial()', () => {
  test(' 전진 결과를 잘 출력 하는지 ', () => {
    // 정지, 전진은 goForward.js 에서 테스트
    game.gameTrial(carArray,1)
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('kwani : '));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('pobi : '));
  });
});
