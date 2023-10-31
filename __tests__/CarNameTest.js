import { ERROR_MESSAGE } from '../src/Util/message';
import { checkErrorInputName } from '../src/Util/validation';

describe('자동차 이름 입력', () => {
  test('[자동차 이름] 입력값 정상', () => {
    const input = ['pobi', 'jun', 'seok'];
    const resultFn = () => checkErrorInputName(input);
    expect(resultFn).not.toThrow();
  });
  test('[자동차 이름] 입력값 없음', () => {
    const input = [''];
    const resultFn = () => checkErrorInputName(input);
    expect(resultFn).toThrow(ERROR_MESSAGE.empty);
  });
  test('[자동차 이름] 이름 중복', () => {
    const input = ['jun', 'seok', 'seok'];
    const resultFn = () => checkErrorInputName(input);
    expect(resultFn).toThrow(ERROR_MESSAGE.duplicate);
  });
  test('[자동차 이름] 이름 길이 5자 초과', () => {
    const input = ['jun', 'junseok'];
    const resultFn = () => checkErrorInputName(input);
    expect(resultFn).toThrow(ERROR_MESSAGE.length);
  });
});
