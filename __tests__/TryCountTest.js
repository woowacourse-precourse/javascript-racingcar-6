import getAndValidateTryCount from '../src/TryCount';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    return Promise.resolve(inputs);
  });
};

describe('TryCount.js 테스트', () => {
  test('작동 테스트', async () => {
    const inputs = '4';
    const outputs = 4;

    mockQuestions(inputs);

    const result = await getAndValidateTryCount(inputs);

    expect(result).toEqual(outputs);
  });

  test('예외 - 영어', async () => {
    const inputs = 'four';

    mockQuestions(inputs);

    await expect(getAndValidateTryCount(inputs)).rejects.toThrowError(
      '[ERROR] 횟수는 숫자만 입력해야 합니다.'
    );
  });

  test('예외 - 식', async () => {
    const inputs = '12/4';

    mockQuestions(inputs);

    await expect(getAndValidateTryCount(inputs)).rejects.toThrowError(
      '[ERROR] 횟수는 숫자만 입력해야 합니다.'
    );
  });

  test('예외 - 0', async () => {
    const inputs = '0';

    mockQuestions(inputs);

    await expect(getAndValidateTryCount(inputs)).rejects.toThrowError(
      '[ERROR] 횟수는 1이상의 자연수를 입력해야 합니다.'
    );
  });
});
