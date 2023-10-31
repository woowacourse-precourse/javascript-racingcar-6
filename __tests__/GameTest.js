import App from '../src/App';
import { MissionUtils } from '@woowacourse/mission-utils';
const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};
describe('게임 테스트', () => {
  test('라운드 테스트', () => {
    const result = 'pobi : ----';
    const players = ['pobi'];
    const playersMove = [4];
    const logSpy = getLogSpy();
    const app = new App();
    app.printRound(players, playersMove);

    expect(logSpy).toBeCalledWith(result);
  });
  test('결과 테스트', () => {
    const players = ['pobi', 'woni', 'jun'];
    const playersMove = [4, 3, 2];
    const app = new App();
    const winner = app.printWinner(players, playersMove);

    expect(winner).toContain('pobi');
  });
  test('0이하 예외 처리', () => {
    async (inputNumber = 0) => {
      const app = new App();

      await expect(app.validateGames(inputNumber)).rejects.toThrow();
    };
  });
});
