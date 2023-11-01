import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App.js';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('게임 진행 및 중간 결과 테스트', () => {
  test('게임 진행에 따른 실행 결과', () => {
    const carNames = ['min', 'zzy'];
    const randoms = [2, 7, 4, 6];
    const outputs = ['min : -', 'zzy : --'];
    const logSpy = getLogSpy();

    mockRandoms([...randoms]);

    const game = new App();
    game.carNameList = carNames;
    game.round = 2;

    game.progressGame();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});

describe('최종 우승자 출력 테스트', () => {
  test('최종 우승자가 한 명일 때', () => {
    const cars = [
      { name: 'min', forwardCount: 3 },
      { name: 'zzy', forwardCount: 1 },
    ];
    const outputs = ['최종 우승자 : min'];
    const logSpy = getLogSpy();

    const game = new App();
    game.carInfoList = cars;
    game.printWinner();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('최종 우승자가 공동 우승자일 때', () => {
    const cars = [
      { name: 'bin', forwardCount: 3 },
      { name: 'zzy', forwardCount: 1 },
      { name: 'hye', forwardCount: 3 },
    ];
    const outputs = ['최종 우승자 : bin, hye'];
    const logSpy = getLogSpy();

    const game = new App();
    game.carInfoList = cars;
    game.printWinner();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
