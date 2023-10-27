import Validator from '../src/classes/Validator';
import { ERROR_MESSAGE } from '../src/constant/message';

describe('자동차 이름 입력값 유효성 테스트', () => {
  test('공백 입력 시 에러 반환 테스트', () => {
    expect(() => Validator.emptyInput(' ')).toThrow(new Error(ERROR_MESSAGE.EMPTY_INPUT));
  });
});
