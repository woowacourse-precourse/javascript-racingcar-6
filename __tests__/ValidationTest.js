import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App.js';

const mockQuestion = (input) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    return Promise.resolve(input);
  });
};

describe('사용자 입력값 검증 테스트', () => {
  test('경주할 자동차 이름 입력', async () => {
    const input = 'm,mi,min,minj,minji';

    mockQuestion(input);

    const game = new App();
    await game.enterCarNames();

    expect(game.carNameList).toEqual(['m', 'mi', 'min', 'minj', 'minji']);
  });

  test.each([['minji,minzzy'], ['imminji,'], ['minji, ']])(
    '이름에 대한 예외 처리',
    async (inputs) => {
      mockQuestion(inputs);

      const game = new App();

      await expect(game.enterCarNames()).rejects.toThrow('[ERROR]');
    }
  );

  test('자동차 전진 시도 횟수 입력', async () => {
    const input = 10;

    mockQuestion(input);

    const game = new App();
    await game.enterGameRound();

    expect(game.round).toEqual(10);
  });

  test.each([['0'], ['a'], ['#'], [''], ['한글'], [' ']])(
    '횟수에 대한 예외 처리',
    async (inputs) => {
      mockQuestion(inputs);

      const game = new App();

      await expect(game.enterGameRound()).rejects.toThrow('[ERROR]');
    }
  );
});
