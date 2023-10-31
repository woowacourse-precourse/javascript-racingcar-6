import { RULES } from '../src/constants';
import carNamingValidation from '../src/validator/carNamingValidation';
import trialCountValidation from '../src/validator/trialCountValidation';

describe('test in carNamingValidation', () => {
  test('빈 문자열 검사', () => {
    // given
    const input = '';
    // when
    const output = carNamingValidation.validation.empty.isInvalid(input);
    // then
    expect(output).toBeTruthy();
  });

  test('구분자로 나눠진 배열의 중복 원소 검사', () => {
    // given
    const input = 'abante, sonata, grandeur';
    // when
    const output = carNamingValidation.validation.duplication.isInvalid(input);
    // then
    expect(output).toBeFalsy();
  });

  test('문자열 양쪽 사이드 존재 문법 오류 검사', () => {
    // given
    const input = ',abante, sonata, grandeur';
    // when
    const output =
      carNamingValidation.validation.sidesOfSyntaxSeperator.isInvalid(input);
    // then
    expect(output).toBeTruthy();
  });

  test('문자열 문법 오류 검사', () => {
    // given
    const input = ',abante, sonata, grandeur';
    // when
    const output =
      carNamingValidation.validation.sidesOfSyntaxSeperator.isInvalid(input);
    // then
    expect(output).toBeTruthy();
  });

  test(`배열 원소 ${RULES.namingMaxLength}자리 이하 검사`, () => {
    // given
    const input = 'abante,sonata,grander';
    // when
    const output = carNamingValidation.validation.maxLength.isInvalid(input);
    // then
    expect(output).toBeTruthy();
  });
});


describe('test in trialCountValidation', () => {
  test('시도 횟수 숫자타입 검사', () => {
    // given
    const input = '123';
    // when
    const output = trialCountValidation.validation.typeOfNumber.isInvalid(input);
    // then
    expect(output).toBeFalsy();
  });
});

