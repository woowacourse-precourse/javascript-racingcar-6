import { MissionUtils } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE } from '../src/constants/Message.js';
import { Round } from '../src/models/index.js';

describe('자동차 경주 게임: 이동 횟수', () => {
  describe('입력한 이동 횟수의 유효성 검사', () => {
    test('이동 횟수는 1이상 10이하의 숫자여야 하며, 그렇지 않을 경우 오류가 발생', () => {
      const WRONG_ROUNDS = ['12', '0', '', ' ', 'one', '하나'];

      const correctRound = MissionUtils.Random.pickNumberInRange(1, 10);

      WRONG_ROUNDS.forEach((v) => {
        expect(() => new Round(v)).toThrow(ERROR_MESSAGE.roundError);
      });

      expect(new Round(correctRound.toString()).getNumber()).toBe(correctRound);
    });
  });

  // describe('이동 횟수에 대한 게임 진행 테스트', () => {
  //   test('입력한 이동 횟수만큼 게임 진행', async () => {
  //     const round = '3';
  //     const MOVING_FORWARD = 4;
  //     const STOP = 3;
  //     const inputs = ['pobi,woni', round];
  //     const outputs = [
  //       'pobi : -',
  //       'woni : ',
  //       'pobi : --',
  //       'woni : ',
  //       'pobi : ---',
  //       'woni : -',
  //     ];
  //     const randoms = [
  //       MOVING_FORWARD,
  //       STOP,
  //       MOVING_FORWARD,
  //       STOP,
  //       MOVING_FORWARD,
  //       MOVING_FORWARD,
  //     ];
  //     const logSpy = getLogSpy(jest);

  //     mockQuestions(inputs);
  //     mockRandoms([...randoms]);

  //     const app = new App();
  //     await app.play();

  //     outputs.forEach((output) => {
  //       expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  //     });
  //   });
  // });
});
