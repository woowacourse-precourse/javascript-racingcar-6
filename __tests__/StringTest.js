import { checkIsValidNumber, isUserInputValid, splitCarsInput } from '../src/utils.js';

describe('차 입력 문자열 유효성 검증 함수 테스트', () => {
  test('입력에 공백 있으면 에러', () => {
    const input = 'ab, abc, abcd';
    expect(() => isUserInputValid(input)).toThrow('[ERROR]');
  });

  test('이름에 숫자가 있으면 에러', () => {
    const input = 'abc,ases1,abc';
    expect(() => isUserInputValid(input)).toThrow('[ERROR]');
  });

  test('이름이 5글자가 넘어가면 에러', () => {
    const input = 'abcdef,abc,abcd';
    expect(() => isUserInputValid(input)).toThrow('[ERROR]');
  });

  test('같은 이름이 존재한다면 에러', () => {
    const input = 'abc,abc,abcd';
    expect(() => splitCarsInput(input)).toThrow('[ERROR]');
  });

  test('차가 10대 이상이라면 에러', () => {
    const input = 'a,b,c,d,e,f,g,h,i,j,k,l,n,m';
    expect(() => splitCarsInput(input)).toThrow('[ERROR]');
  });
});

describe('횟수 입력 유효성 검증 함수 테스트', () => {
  test('수가 50 이상이면 에러', () => {
    const input = '51';
    expect(() => checkIsValidNumber(input)).toThrow('[ERROR]');
  });

  test('숫자가 아니라면 에러', () => {
    const input = '51a';
    expect(() => checkIsValidNumber(input)).toThrow('[ERROR]');
  });
});
