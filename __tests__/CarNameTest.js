import { Console } from '@woowacourse/mission-utils';
import Inputs from '../utils/Inputs';

const mockInputs = (input) => {
  Console.readLineAsync = jest.fn();
  Console.readLineAsync.mockImplementationOnce(() => Promise.resolve(input));
};

describe('자동차 이름 입력 테스트', () => {
  const createRacingcarGame = (input) => {
    mockInputs(input);
    return new Inputs();
  };

  const testInvalidInput = async (input, errorMessage) => {
    await expect(async () => createRacingcarGame(input).returnCarNames()).rejects.toThrowError(errorMessage);
  };

  test('5자 초과되는 이름이 있는 경우 예외 처리', async () => {
    const input = 'qweqwe,pobi,woni,jun';
    const errorMessage = '[ERROR] 잘못된 입력입니다.';
    await testInvalidInput(input, errorMessage);
  });

  test('빈 문자를 포함할 경우 예외 처리', async () => {
    const input = 'pobi, ,jun';
    const errorMessage = '[ERROR] 잘못된 입력입니다.';
    await testInvalidInput(input, errorMessage);
  });

  test('입력값이 없을 경우 예외 처리', async () => {
    const input = '';
    const errorMessage = '[ERROR] 잘못된 입력입니다.';
    await testInvalidInput(input, errorMessage);
  });

  test('중복되는 이름이 있는 경우 예외 처리', async () => {
    const input = 'pobi,pobi,woni,jun';
    const errorMessage = '[ERROR] 중복된 이름입니다.';
    await testInvalidInput(input, errorMessage);
  });
});
