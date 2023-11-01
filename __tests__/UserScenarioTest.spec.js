import { validateCarName } from '../src/utils/validateFn';
import { ERROR_MESSAGE } from '../src/constant/message';

describe('1. 자동차 이름을 입력 했을때', () => {
  test('1-1. 입력이 잘못되었을때', async () => {
    // 유효성 검사
    const invalidInputArr = [
      ['dong', 'gyuuuun', 'kim'],
      ['dong', '', 'kim'],
      ['do ng', 'gy   ', 'kim'],
      ['dong', 'dong'],
    ];

    const errorMessage = [
      ERROR_MESSAGE.INVALID_CAR_NAME_LENGTH,
      ERROR_MESSAGE.INVALID_CAR_NAME_LENGTH,
      ERROR_MESSAGE.INVALID_CAR_NAME_CHAR,
      ERROR_MESSAGE.INVALID_CAR_NAME_UNIQUE,
    ];

    for (let i = 0; i < invalidInputArr.length; i++) {
      expect(() => validateCarName(invalidInputArr[i])).toThrow(
        errorMessage[i],
      );
    }
  });
});
