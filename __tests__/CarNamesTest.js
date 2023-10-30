import getAndValidateCarNames from '../src/CarNames';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    return Promise.resolve(inputs);
  });
};

describe('CarNames.js 테스트', () => {
  test('작동 테스트', async () => {
    const inputs = 'sk,lg,kia';
    const outputs = ['sk', 'lg', 'kia'];

    mockQuestions(inputs);

    const result = await getAndValidateCarNames(inputs);

    expect(result).toEqual(outputs);
  });

  test('예외 - 대문자', async () => {
    const inputs = 'SK,Lg,kia';

    mockQuestions(inputs);

    await expect(getAndValidateCarNames(inputs)).rejects.toThrowError(
      '[ERROR] 이름의 형식이 잘못됐습니다.'
    );
  });

  test('예외 - 숫자', async () => {
    const inputs = 'sk,lg1,lg2';

    mockQuestions(inputs);

    await expect(getAndValidateCarNames(inputs)).rejects.toThrowError(
      '[ERROR] 이름의 형식이 잘못됐습니다.'
    );
  });

  test('예외 - 5글자 초과', async () => {
    const inputs = 'lotte,hanwha,lg';

    mockQuestions(inputs);

    await expect(getAndValidateCarNames(inputs)).rejects.toThrowError(
      '[ERROR] 이름의 형식이 잘못됐습니다.'
    );
  });

  test('예외 - 이름 하나', async () => {
    const inputs = 'lotte';

    mockQuestions(inputs);

    await expect(getAndValidateCarNames(inputs)).rejects.toThrowError(
      '[ERROR] 이름은 두 개 이상 입력해야 합니다.'
    );
  });

  test('예외 - 중복', async () => {
    const inputs = 'kia,kt,kia';

    mockQuestions(inputs);

    await expect(getAndValidateCarNames(inputs)).rejects.toThrowError(
      '[ERROR] 이름은 중복될 수 없습니다.'
    );
  });
});
