import trialCountValidation from '../../src/validator/trialCountValidation';

describe('test in trialCountValidation', () => {
  test('시도 횟수 숫자타입 검사', () => {
    // given
    const input = '123';
    // when
    const output =
      trialCountValidation.validation.typeOfNumber.isInvalid(input);
    // then
    expect(output).toBeFalsy();
  });
});
