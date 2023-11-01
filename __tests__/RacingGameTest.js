import RacingGame from '../src/RacingGame.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('RacingGame class', () => {
  describe('레이싱 게임 진행', () => {
    test('게임 시작시 초기화 확인', () => {
      const game = new RacingGame('a,b,c', 5);
      expect(game.carNameList).toEqual(['a', 'b', 'c']);
      expect(game.carPosition).toEqual({
        a: 0,
        b: 0,
        c: 0,
      });
    });

    test('주어진 횟수만큼 라운드가 진행 되는지 확인', () => {
      const game = new RacingGame('a,b,c', 5);
      const playRoundSpy = jest.spyOn(game, 'playRound');

      game.start();

      expect(playRoundSpy).toHaveBeenCalledTimes(5);
    });

    test('전진 조건에 따라 자동차가 이동하는지 확인', () => {
      const game = new RacingGame('a,b', 1);
      const isMovingForwardSpy = jest.spyOn(game, 'isMovingForward');
      isMovingForwardSpy.mockReturnValueOnce(true);
      isMovingForwardSpy.mockReturnValueOnce(false);

      game.playRound();
      expect(game.carPosition).toEqual({ a: 1, b: 0 });
    });

    test('라운드 실행 결과 자동차들의 이름과 위치출력 확인', () => {
      const inputs = ['a,b', 2];
      const outputs = ['a : ', 'b : -', 'a : -', 'b : --'];
      const logSpy = getLogSpy();

      const game = new RacingGame(...inputs);
      const isMovingForwardSpy = jest.spyOn(game, 'isMovingForward');

      isMovingForwardSpy.mockReturnValueOnce(false);
      isMovingForwardSpy.mockReturnValueOnce(true);
      isMovingForwardSpy.mockReturnValueOnce(true);
      isMovingForwardSpy.mockReturnValueOnce(true);
      game.start();
      console.log(game.carPosition);
      outputs.forEach((output) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
      });
    });

    test('랜덤값이 4이상인 경우에만 자동차가 전진하는지 확인', () => {
      MissionUtils.Random.pickNumberInRange = jest.fn(() => 4); // 모든 자동차가 전진
      const game = new RacingGame('a,b,c', 3);
      game.movingCarPosition();
      expect(game.carPosition).toEqual({ a: 1, b: 1, c: 1 });
      MissionUtils.Random.pickNumberInRange = jest.fn(() => 0); // 모든 자동차가 멈춤
      game.movingCarPosition();
      expect(game.carPosition).toEqual({ a: 1, b: 1, c: 1 });
      MissionUtils.Random.pickNumberInRange = jest.fn(() => 9); // 모든 자동차가 전진
      game.movingCarPosition();
      expect(game.carPosition).toEqual({ a: 2, b: 2, c: 2 });
    });
  });

  describe('레이싱 게임 완료 후 우승자출력 ', () => {
    test('우승자 판정 winner를 제대로 구하는지 확인 : winner 1명 ', () => {
      const game = new RacingGame('a,b,c', 5);

      // Set the #carPosition to specific values.
      game.carPosition = {
        a: 2,
        b: 4,
        c: 3,
      };

      game.calculateWinner();

      expect(game.winner).toEqual(['b']);
    });
    test('우승자 판정 winner를 제대로 구하는지 확인 : winner 1명 이상 ', () => {
      const game = new RacingGame('a,b,c', 5);

      game.carPosition = {
        a: 4,
        b: 4,
        c: 4,
      };

      game.calculateWinner();

      expect(game.winner).toEqual(['a', 'b', 'c']);
    });

    test('우승자 수에 따라 올바른 출력확인', () => {
      const inputs = ['a,b,c,d', 2];
      const logSpy = getLogSpy();

      const game = new RacingGame(...inputs);

      game.winner = ['a'];
      game.printWinner();
      expect(logSpy).toHaveBeenCalledWith('최종 우승자 : a');
      logSpy.mockClear();
      game.winner = ['a', 'b', 'c'];
      game.printWinner();
      expect(logSpy).toHaveBeenCalledWith('최종 우승자 : a, b, c');

      // expect(game.carPosition).toEqual({ a: 1, b: 0 });
    });
  });
});
