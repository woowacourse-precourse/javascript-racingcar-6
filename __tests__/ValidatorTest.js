import { ERROR_MESSAGE } from '../src/constants/messages';
import Validator from '../src/utils/Validator';

describe('Validator Test', () => {
  test.each(['', ' ', 'pobi,', 'pobi, ', 'pobi,javajigi'])(
    '자동차 이름이 형식에 맞지 않으면 에러를 던집니다.',
    (input) => {
      expect(() => {
        Validator.isValidateCarName(input);
      }).toThrow(ERROR_MESSAGE.carName);
    },
  );

  test.each(['', ' ', '1f'])('숫자가 아닌 값은 에러를 던집니다.', (input) => {
    expect(() => {
      Validator.isValidateAttemps(input);
    }).toThrow(ERROR_MESSAGE.attemps);
  });

  test('시도 횟수 타입은 숫자이다.', () => {
    expect(Validator.isValidateAttemps('1')).toBeTruthy();
  });
});
