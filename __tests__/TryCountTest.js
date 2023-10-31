import { Console } from '@woowacourse/mission-utils';
import Inputs from '../src/utils/Inputs';

const mockInputs = (input) => {
  Console.readLineAsync = jest.fn();
  Console.readLineAsync.mockImplementationOnce(() => Promise.resolve(input));
};

describe('시도할 횟수 입력 테스트', () => {
  const createRacingcarGame = (input) => {
    mockInputs(input);
    return new Inputs();
  };

  const testInvalidInput = async (input, errorMessage) => {
    await expect(async () => createRacingcarGame(input).getTryCount()).rejects.toThrowError(errorMessage);
  };

  test('0일 경우 예외 처리', async () => {
    const input = '0';
    const errorMessage = '[ERROR] 시도 횟수는 양의 정수여야 합니다.';
    await testInvalidInput(input, errorMessage);
  });

  test('소수를 입력한 경우', async () => {
    const input = '3.5';
    const errorMessage = '[ERROR] 시도 횟수는 양의 정수여야 합니다.';
    await testInvalidInput(input, errorMessage);
  });

  test('문자를 입력한 경우', async () => {
    const input = 'abc';
    const errorMessage = '[ERROR] 시도 횟수는 양의 정수여야 합니다.';
    await testInvalidInput(input, errorMessage);
  });

  test('아무 값도 입력하지 않은 경우', async () => {
    const input = '';
    const errorMessage = '[ERROR] 시도 횟수는 양의 정수여야 합니다.';
    await testInvalidInput(input, errorMessage);
  });
});
