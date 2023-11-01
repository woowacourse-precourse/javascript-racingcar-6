import { Console } from '@woowacourse/mission-utils';
import RacingCar from '../RacingCar/index.js';

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('게임 결과에 따른 우승자 판별 테스트', () => {
  test('우승자 판별', () => {
    const soleWinner = {
      alpha: 3,
      beta: 5,
      delta: 2,
      eta: 0,
    };
    const multipleWinner = {
      alpha: 3,
      beta: 3,
      delta: 2,
      eta: 3,
    };
    const allWinner = {
      alpha: 3,
      beta: 3,
      delta: 3,
      eta: 3,
    };
    const inputs = [soleWinner, multipleWinner, allWinner];
    const outputs = ['beta', 'alpha, beta, eta', 'alpha, beta, delta, eta'];
    const logSpy = getLogSpy();

    const raceResult = new RacingCar();

    inputs.forEach((input, idx) => {
      raceResult.endGame(input);
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(outputs[idx]));
    });
  });
});
