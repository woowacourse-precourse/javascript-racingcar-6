import isValidCarNameString from '../src/modules/isValidCarNameString';

let result;
let input = '';

describe('유효성 검사 함수 테스트', () => {
  // 자동차 이름 입력 유효성 검사
  test('입력에 공백이 포함될 수 없다.', () => {
    input = 'pobi, woni,jun';
    result = isValidCarNameString(input);
    expect(result).toBeFalsy();
  });

  test('이름은 5자 이하만 가능하다.', () => {
    input = 'pobiiiiii,woni,jun';
    result = isValidCarNameString(input);

    expect(result).toBeFalsy();
  });

  test('이름은 빈 문자열이면 안된다.', () => {
    input = 'pobi,woni,,jun';
    result = isValidCarNameString(input);

    expect(result).toBeFalsy();
  });

  test('중복된 이름을 입력할 수 없다.', () => {
    input = 'pobi,pobi,jun';
    result = isValidCarNameString(input);

    expect(result).toBeFalsy();
  });
});
