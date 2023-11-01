import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe('자동차 경주 게임 추가 테스트', () => {
  test.each([[['abcdef,javaji']], [[',eastjun']]])('이름 길이에 대한 예외 처리', async (inputs) => {
    // given
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow('[ERROR]');
  });
  test.each(['0', '-1', 'aa'])('횟수에 대한 예외 처리', async (inputs) => {
    // given
    mockQuestions(['pobi,javaji', inputs]);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow('[ERROR]');
  });
});
