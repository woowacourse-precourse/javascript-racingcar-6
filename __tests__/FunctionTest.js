import RacingGame from '../src/components/RacingGame';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe('유효성 테스트', () => {
  test.each([[['red,darkred,lightyellow']], [['red,blue,greeeen']]])(
    '차 이름 5글자 이하 여부 확인',
    async (inputs) => {
      mockQuestions(inputs);
      const racingGame = new RacingGame();

      await expect(racingGame.start()).rejects.toThrow('[ERROR]');
    }
  );

  test.each([[['-1']], [['-2']]])('경주 횟수 입력 숫자 양의 정수 여부 확인', async (inputs) => {
    mockQuestions(inputs);
    const racingGame = new RacingGame();

    await expect(racingGame.start()).rejects.toThrow('[ERROR]');
  });
});
