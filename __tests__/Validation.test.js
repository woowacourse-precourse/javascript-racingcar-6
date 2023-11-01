import Validation from '../src/util/Validation';

describe('자동차 이름 테스트', () => {
  test('입력한 자동차 이름이 에러없이 잘 나오는지 테스트 => 에러 발생 X', () => {
    expect(() => {
      const inputString = '투싼,아반떼';
      const input = inputString.split(',');
      Validation.validateCarNames(input);
    }).not.toThrow();
  });

  test('입력한 자동차 이름 5자 이하가 아닌경우 => 에러 발생 O', () => {
    expect(() => {
      const inputString = '포르쉐,포르쉐자동차';
      const input = inputString.split(',');
      Validation.validateCarNames(input);
    }).toThrow('[ERROR] ');
  });

  test('입력한 자동차 이름이 중복된 경우 => 에러 발생 O', () => {
    expect(() => {
      const inputString = '포르쉐,포르쉐';
      const input = inputString.split(',');
      Validation.validateCarNames(input);
    }).toThrow('[ERROR] ');
  });

  test('입력한 자동차 이름이 빈값("")인 경우 => 에러 발생 O', () => {
    expect(() => {
      const inputString = '';
      const input = inputString.split(',');
      Validation.validateCarNames(input);
    }).toThrow('[ERROR] ');
  });

  test('입력한 자동차 이름이 여러개의 빈값("   ")인 경우 => 에러 발생 O', () => {
    expect(() => {
      const inputString = '';
      const input = inputString.split(',');
      Validation.validateCarNames(input);
    }).toThrow('[ERROR] ');
  });

  test('입력한 자동차 이름에 공백이 포함될 경우 => 에러 발생 O', () => {
    expect(() => {
      const inputString = '자동차 ,자동차  ';
      const input = inputString.split(',');
      Validation.validateCarNames(input);
    }).toThrow('[ERROR] ');
  });
});

describe('총 시도횟수 테스트', () => {
  test('입력한 시도횟수가 1이상의 숫자일 경우 => 에러 발생 X', () => {
    expect(() => {
      const inputString = '5';
      Validation.validateTotalRounds(inputString);
    }).not.toThrow();
  });

  test('입력한 시도횟수가 0인 경우 => 에러 발생 O', () => {
    expect(() => {
      const inputString = '0';
      Validation.validateTotalRounds(inputString);
    }).toThrow('[ERROR] ');
  });

  test('입력한 시도횟수가 음수인 경우 => 에러 발생 O', () => {
    expect(() => {
      const inputString = '-1';
      Validation.validateTotalRounds(inputString);
    }).toThrow('[ERROR] ');
  });

  test('입력한 시도횟수가 문자가 포함된 경우 => 에러 발생 O', () => {
    expect(() => {
      const inputString = '5회';
      Validation.validateTotalRounds(inputString);
    }).toThrow('[ERROR] ');
  });

  test('입력한 시도횟수가 공백인 경우 => 에러 발생 O', () => {
    expect(() => {
      const inputString = '';
      Validation.validateTotalRounds(inputString);
    }).toThrow('[ERROR] ');
  });
});
