import Validation from '../src/Validation';
import { ERROR } from '../src/Constants';

describe('게임 시행 횟수 입력 테스트', () => {
  test('정규식으로 입력값이 자연수인지 확인', () => {
    const validInput = '3';
    const errorInput = ' ';

    expect(() => Validation.validateGameCountNaturalNumber(validInput)).not.toThrow();
    expect(() => Validation.validateGameCountNaturalNumber(errorInput)).toThrow(ERROR.GAME_COUNT_TYPE);
  });
});
