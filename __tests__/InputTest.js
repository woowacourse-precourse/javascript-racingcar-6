import { MissionUtils } from '@woowacourse/mission-utils';
import Input from '../src/Input.js';
import { ErrorMessages } from '../src/Constants';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe('class Input test', () => {
  test('[Exception Test] 이름이 5자 이상인 경우', async () => {
    const input = ['12345,123456'];
    mockQuestions(input);

    await expect(Input.readCarString()).rejects.toThrow(
      ErrorMessages.ERROR_TOO_LONG_NAME,
    );
  });

  test('[Exception Test] 동일한 이름이 존재하는 경우', async () => {
    const input = ['12345,12345'];
    mockQuestions(input);

    await expect(Input.readCarString()).rejects.toThrow(
      ErrorMessages.ERROR_SAME_NAME_EXIST,
    );
  });

  test('[Exception Test] 시도 횟수가 숫자가 아닌 경우', async () => {
    const input = ['Not A Number'];
    mockQuestions(input);

    await expect(Input.readAttemptString()).rejects.toThrow(
      ErrorMessages.ERROR_NOT_A_NUMBER,
    );
  });
});
