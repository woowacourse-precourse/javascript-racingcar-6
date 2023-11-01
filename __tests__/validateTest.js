import { RACING_ERROR } from '../src/constants/constants.js';
import {
  validateCarName,
  validateMoveCount,
  validateNameDuplicate,
} from '../src/utils/validate.js';

describe('자동차 이름 유효성 검사', () => {
  test('자동차 이름이 5자를 초과하면 에러', () => {
    const input = 'pobiiii';

    expect(() => validateCarName(input)).toThrow(
      RACING_ERROR.NAME_LENGTH_ERROR,
    );
  });

  test('자동차 이름이 1자를 미만이면 에러', () => {
    const input = '';

    expect(() => validateCarName(input)).toThrow(RACING_ERROR.NAME_EMPTY_ERROR);
  });

  test('자동차 이름이 중복이면 에러', () => {
    const input = ['pobi', 'pobi'];

    expect(() => validateNameDuplicate(input)).toThrow(
      RACING_ERROR.NAME_DUPLICATE,
    );
  });
});

describe('이동 횟수 유효성 검사', () => {
  test('숫자 이외의 문자를 입력했을 경우 에러', () => {
    const input = '24a';

    expect(() => validateMoveCount(input)).toThrow(
      RACING_ERROR.MOVE_COUNT_ONLY_NUMBER,
    );
  });

  test('입력한 숫자가 양의 정수가 아닌 경우 경우 에러', () => {
    const input = '-20';

    expect(() => validateMoveCount(input)).toThrow(
      RACING_ERROR.MOVE_COUNT_POSITIVE_NUMBER,
    );
  });
});
