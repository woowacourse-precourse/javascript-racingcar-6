import { MissionUtils } from '@woowacourse/mission-utils';
import { getPlayCount } from '../src/functions/gameStart';
import { ERROR_MESSAGE } from '../src/constants/message';

const mockQuestions = input => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    return Promise.resolve(input);
  });
};

describe('시도할 횟수 테스트', () => {
  test('정상적으로 입력한 경우', async () => {
    const input = '5';

    mockQuestions(input);

    await expect(getPlayCount()).resolves.not.toThrow();
  });

  test('문자를 포함해 입력한 경우', async () => {
    const input = '-5';

    mockQuestions(input);

    await expect(getPlayCount()).rejects.toThrow(
      ERROR_MESSAGE.playCount.includeString,
    );
  });

  test('0을 입력한 경우', async () => {
    const input = '0';

    mockQuestions(input);

    await expect(getPlayCount()).rejects.toThrow(
      ERROR_MESSAGE.playCount.includeZero,
    );
  });

  test('입력을 아예 안 한 경우', async () => {
    const input = '';

    mockQuestions(input);

    await expect(getPlayCount()).rejects.toThrow(
      ERROR_MESSAGE.playCount.noInput,
    );
  });
});
