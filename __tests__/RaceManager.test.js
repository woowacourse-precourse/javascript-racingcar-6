import { Console, Random } from '@woowacourse/mission-utils';
import RaceManager from '../src/RaceManager';
import validateAttempts from '../src/functions/validateAttempts';

describe('시도 횟수 입력', () => {
  test('시도 횟수 입력 시 입력한 숫자를 반환한다', async () => {
    const input = '5';
    const expected = 5;
    Console.readLineAsync = jest.fn().mockResolvedValue(input);
    const output = await RaceManager.getNumberOfAttempts();
    expect(output).toBe(expected);
  });
});

describe('시도 횟수 입력 예외', () => {
  test.each(['0', '2.5', 'abcd', '-3'])(
    '%s 입력 시 에러를 발생시킨다',
    (input) => {
      expect(() => validateAttempts(input)).toThrow('[ERROR]');
    },
  );

  test('시도 횟수가 30 초과 시, 에러를 발생시킨다', () => {
    const input = 31;
    Console.readLineAsync = jest.fn().mockResolvedValue(input);
    expect(() => validateAttempts(input)).toThrow('[ERROR]');
  });
});

describe('랜덤 숫자 생성', () => {
  test('랜덤 숫자 생성 시 Random.pickNumberInRange를 호출한다', () => {
    const randomSpy = jest.spyOn(Random, 'pickNumberInRange');
    RaceManager.generateRandomNumber();
    expect(randomSpy).toHaveBeenCalled();
  });
});
