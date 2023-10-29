import GameManager from '../src/classes/gameManager';
import RacingGame from '../src/classes/racingGame';
import { MissionUtils } from '@woowacourse/mission-utils';

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('어플리케이션 테스트', () => {
  const outputs = ['js', 'py', 'algo'];
  const racingGame = new RacingGame('js, py, algo');

  test('사용자 입력이 콘솔에 잘 출력되는지 테스트', () => {
    const logSpy = getLogSpy();
    const game = racingGame.play(4);
    let status = game.next();

    while (!status.done) {
      GameManager.printStatus(status.value);
      status = game.next();
    }

    // logSpy 모의함수가 호출되면(toHaveBeenCalledWith), outputs를 포함하고 있을것이다.
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
