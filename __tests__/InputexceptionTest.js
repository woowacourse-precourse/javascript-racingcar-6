import { handleInputName, handleInputRound } from '../src/utils/HandleInput';
import { mockQuestions } from './ApplicationTest';

describe('자동차 스트링 예외처리', () => {
  test('5글자가 넘는 이름은 예외로 처리', async () => {
    const input = ['cake,apple,banana'];
    mockQuestions(input);

    const result = handleInputName();
    await expect(result).rejects.toThrow('[ERROR]');
  });

  test('중복된 이름 예외로 처리', async () => {
    const input = ['cake,caake,cake'];
    mockQuestions(input);
    const result = handleInputName();
    await expect(result).rejects.toThrow(
      '[ERROR] : 중복된 이름은 사용할 수 없습니다.',
    );
  });

  test('쉼표가 아닌 마침표 입력시 예외 처리', async () => {
    const input = ['apple,cake.ban'];
    mockQuestions(input);
    const result = handleInputName();
    await expect(result).rejects.toThrow('[ERROR]');
  });
});

describe('라운드 횟수 입력 예외처리', () => {
  test('문자가 포함되어 있거나 숫자를 입력하지 않은 경우 예외로 처리', async () => {
    const input = ['1a', 'bab'];
    mockQuestions(input);
    const result = handleInputRound();
    await expect(result).rejects.toThrow('[ERROR]');
  });

  test('0 이하의 숫자 입력 시 예외로 처리', async () => {
    const input = ['0'];
    mockQuestions(input);
    const result = handleInputRound();
    await expect(result).rejects.toThrow('[ERROR]');
  });
});
