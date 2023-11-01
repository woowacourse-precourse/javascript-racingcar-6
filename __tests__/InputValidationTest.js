import InputValidation from '../src/InputValidation.js';

describe('자동차 이름 입력: 예외 처리 테스트', () => {
  test('이름이 5자 이상이면 오류 발생', () => {
    expect(() => InputValidation.isCarNameValid('porsche')).toThrowError();
  });

  test('이름 미입력 시 오류 발생', () => {
    expect(() => InputValidation.isCarNameValid('')).toThrowError();
  });

  test('자동차가 2대 미만이면 오류 발생', () => {
    expect(() => InputValidation.isCarNameValid('pobi')).toThrowError();
  });

  test('자동차 이름이 중복되면 오류 발생', () => {
    expect(() => InputValidation.isCarNameValid('pobi,pobi')).toThrowError();
  });
});

describe('시도 횟수 입력: 예외 처리 테스트', () => {
  test('숫자가 아닌 것 입력하면 오류 발생', () => {
    expect(() => InputValidation.isRoundCountValid('abc')).toThrowError();
  });
  test('음수 입력하면 오류 발생', () => {
    expect(() => InputValidation.isRoundCountValid('-3')).toThrowError();
  });
  test('정수가 아닌 수 입력하면 오류 발생', () => {
    expect(() => InputValidation.isRoundCountValid('1.23')).toThrowError();
  });
});
