import { Console } from '@woowacourse/mission-utils';
import Input from '../src/Input';
import Participant from '../src/Participant';
import { ERROR } from '../src/constant';

describe('Input 클래스 테스트', () => {
  const mockConsoleReadLineAsync = (input) => {
    Console.readLineAsync = jest.fn();
    Console.readLineAsync.mockResolvedValue(input);
  };

  test('getJoinList 함수 작동 테스트 (각 이름 앞뒤 공백 제거)', async () => {
    const INPUT = ' tae , yoon ';
    mockConsoleReadLineAsync(INPUT);

    const result = await Input.getJoinList();

    const expectedParticipants = INPUT.split(',').map((name) => new Participant(name.trim()));
    expect(result).toEqual(expectedParticipants);
  });

  test('getJoinList 함수 에러 테스트', async () => {
    const INPUT = ' tae , yooooooooon ';
    mockConsoleReadLineAsync(INPUT);

    try {
      await Input.getJoinList();
      expect(true).toBe(false);
    } catch (error) {
      expect(error.message).toBe(ERROR.participant);
    }
  });

  test('getRepeatNumber 함수 작동 테스트', async () => {
    const INPUT = '123';
    mockConsoleReadLineAsync(INPUT);

    const result = await Input.getRepeatNumber();
    expect(result).toBe(INPUT);
  });

  test('getRepeatNumber 함수 에러 테스트', async () => {
    const INPUT = 'abc';
    mockConsoleReadLineAsync(INPUT);

    try {
      await Input.getRepeatNumber();
      expect(true).toBe(false);
    } catch (error) {
      expect(error.message).toBe(ERROR.repeatNumber);
    }
  });
});
