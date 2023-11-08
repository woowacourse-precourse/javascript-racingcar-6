import { mockQuestions, mockRandoms, getLogSpy } from '../testUtils';
import Car from '../src/Car';
import Game from '../src/Game';

describe('자동차 게임: 게임 테스트', () => {
  let game;
  beforeEach(() => {
    game = new Game();
  });
  test('게임 초기 설정', () => {
    expect(game.totalRound).toBe(0);
    expect(game.currentRound).toBe(0);
    expect(game.carArray).toEqual([]);
  });
  test('경주 참여하는 자동차 설정', () => {
    const nameArray = ['pobi', '가나다라', 'apple'];
    const message = nameArray.join(',');
    const logSpy = getLogSpy();

    game.setCarArray(nameArray);

    game.carArray.forEach((v, i) => {
      expect(v).toEqual(new Car(nameArray[i]));
    });

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(message));
  });

  test('이동 횟수 설정', async () => {
    const round = '1';
    mockQuestions([round]);

    await game.setTotalRound();

    expect(game.totalRound).toBe(Number(round));
  });

  test('경주 진행', () => {
    const nameArray = ['pobi', '가나다라', 'apple'];
    const randoms = [3, 4, 6];

    mockRandoms([...randoms]);

    game.setCarArray(nameArray);
    game.play();

    expect(game.currentRound).toBe(1);
    game.carArray.forEach((v, i) => {
      const movement = randoms[i] >= 4 ? 1 : 0;
      expect(v.movement.length).toBe(movement);
    });
  });
});
