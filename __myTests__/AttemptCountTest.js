import validateAttemptCount from '../src/validates/attemptCount.js';

describe('시도 횟수 검사기 테스트', () => {
  test('정상적인 값 입력 시 숫자로 반환', () => {
    const input = '5';
    const result = validateAttemptCount(input);

    expect(result).toBe(5);
  });
  test('정수가 아닐 경우 예외 발생', () => {
    const input = '1.5';

    expect(() => validateAttemptCount(input)).toThrow(
      '[ERROR] 숫자가 잘못된 형식입니다.',
    );
  });

  test('음수일 경우 예외 발생', () => {
    const input = '-5';

    expect(() => validateAttemptCount(input)).toThrow(
      '[ERROR] 숫자가 잘못된 형식입니다.',
    );
  });
});
