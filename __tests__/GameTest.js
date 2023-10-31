import { MissionUtils } from '@woowacourse/mission-utils';

import Car from '../src/Car';
import Game from '../src/Game';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

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

describe('자동차 게임: 게임 테스트', () => {
  test('게임 초기 설정', () => {
    const game = new Game();

    expect(game.totalRound).toBe(0);
    expect(game.currentRound).toBe(0);
    expect(game.carArray).toEqual([]);
  });
  test('경주 참여하는 자동차 설정', () => {
    const nameArray = ['pobi', '가나다라', 'apple'];
    const message = nameArray.join(',');
    const logSpy = getLogSpy();

    const game = new Game();
    game.setCarArray(nameArray);

    game.carArray.forEach((v, i) => {
      expect(v).toEqual(new Car(nameArray[i]));
    });

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(message));
  });

  test('이동 횟수 설정', async () => {
    const round = '1';
    mockQuestions([round]);

    const game = new Game();
    await game.setTotalRound();

    expect(game.totalRound).toBe(Number(round));
  });

  test('경주 진행', () => {
    const nameArray = ['pobi', '가나다라', 'apple'];
    const randoms = [3, 4, 6];

    mockRandoms([...randoms]);

    const game = new Game();
    game.setCarArray(nameArray);
    game.play();

    expect(game.currentRound).toBe(1);
    game.carArray.forEach((v, i) => {
      const movement = randoms[i] >= 4 ? 1 : 0;
      expect(v.movement.length).toBe(movement);
    });
  });
});
