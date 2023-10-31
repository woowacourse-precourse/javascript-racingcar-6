import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe('findWinner', () => {
  test('우승자 탐색', () => {
    // given
    const app = new App();
    app.players = [
      { name: 'jeong', moveAttempts: 3 },
      { name: 'yeung', moveAttempts: 5 },
      { name: 'jin', moveAttempts: 7 },
      { name: 'max', moveAttempts: 7 },
    ];

    // when
    const WINNER = app.findWinner();

    // then
    expect(WINNER).toBe('최종 우승자 : jin, max');
  });
});

describe('playerMoveCount', () => {
  test('생성된 Random number가 4 이상이라면, moveAttempts를 증가시킨다.', () => {
    // given
    mockRandoms([4]);
    const player = { name: 'jeong', moveAttempts: 0 };

    // when
    const app = new App();
    app.playerMoveCount(player);

    // then
    expect(player.moveAttempts).toBe(1);
  });

  describe('playerStatus', () => {
    test('플레이어 이름과 이동 횟수 표시', () => {
      // given
      const player = { name: 'jeong', moveAttempts: 5 };

      // when
      const app = new App();
      const STATUS = app.playerStatus(player);

      // then
      expect(STATUS).toBe('jeong : -----');
    });
  });
});
