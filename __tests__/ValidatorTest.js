import Validator from '../utils/Validator';

describe('Validator Test', () => {
  test.each(['', ' ', 'pobi,', 'pobi, ', 'pobi,javajigi'])(
    '자동차 이름이 형식에 맞지 않으면 에러를 던집니다.',
    (input) => {
      expect(() => {
        Validator.isValidateCarName(input);
      }).toThrow('[ERROR] 자동차 이름이 올바르지 않습니다.');
    },
  );

  test.each(['', ' ', '1f'])('숫자가 아닌 값은 에러를 던집니다.', (input) => {
    expect(() => {
      Validator.isValidateAttemps(input);
    }).toThrow('[ERROR] 숫자만 입력해주세요.');
  });
});
