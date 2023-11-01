import { DuplicatedError, RacingCarNameError, RetryCountError } from "../../src/error/CustomErrors.js";
import RacingCarValidator from "../../src/validate/RacingCarValidator.js"

const racingCarValidator = new RacingCarValidator();

describe('RacingCarValidator test', () => {
  test.each([
    [['kim', 'park', 'namgung']],
    [['kim', 'park', '___']],
    [['kim', 'park', 'k i m']],
  ])('func isValidNameArray - 5자 이상 혹은, 영어 대소문자 외 입력 시 에러 확인', (inputs) => {
    const result = () => racingCarValidator.isValidNameArray(inputs);

    expect(result).toThrowError(RacingCarNameError);
  });

  test.each([
    [['kim', 'kim']],
    [['kim', 'park', 'park']],
  ])('func isValidNameArray - 중복 이름 입력 시 에러 확인', (inputs) => {
    const result = () => racingCarValidator.isValidNameArray(inputs);

    expect(result).toThrowError(DuplicatedError);
  });

  test.each([
    [['kim', 'park']],
    [['kim', 'park', 'cho']],
    [['KIM', 'PARK', 'CHO']],
  ])('func isValidNameArray - 정상 작동 확인', (inputs) => {
    const result = () => racingCarValidator.isValidNameArray(inputs);

    expect(result).not.toThrowError(RacingCarNameError || DuplicatedError);
  });

  test.each([
    'five',
    '다섯 번',
    '-1',
    '3.1',
    '0',
  ])('func isValidCount - 숫자가 아니거나, 0 입력 시 에러 확인', (inputs) => {
    const result = () => racingCarValidator.isValidCount(inputs);

    expect(result).toThrowError(RetryCountError);
  });

  test.each([
    '5',
    '35',
    '092',
    '000001',
    '9999',
  ])('func isValidCount - 정상 작동 확인', (inputs) => {
    const result = () => racingCarValidator.isValidCount(inputs);

    expect(result).not.toThrowError(RetryCountError);
  });
});
