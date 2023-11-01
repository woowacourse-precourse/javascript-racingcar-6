import isValidCarNameString from '../src/modules/isValidCarNameString';
import isValidAttempNumber from '../src/modules/isValidAttempNumber';

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
    input = 'pobi,woni,juniiii';
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

  // 시도 횟수 입력 유효성 검사
  test('시도 횟수는 숫자만 포함되어야 한다.', () => {
    input = '123';
    result = isValidAttempNumber(input);

    expect(result).toBeTruthy();

    input = '1e3';
    result = isValidAttempNumber(input);

    expect(result).toBeFalsy();

    input = '123 1';
    result = isValidAttempNumber(input);

    expect(result).toBeFalsy();
  });
});
