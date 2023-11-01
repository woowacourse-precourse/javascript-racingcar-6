import Validator from '../utils/Validator';
import MESSAGES from '../utils/Messages';

const invalidCarNamesArray = [['carcar'], ['hyundai'], ['chevrolet']];
const validCarNamesArray = [['carca'], ['benz'], ['bmw'], ['ca'], ['c']];
const invalidTrialCountArray = [-1, 0, 1.1, '한번'];
const validTrialCountArray = [1, 2, 3, 100];

describe('유효성 검사 테스트', () => {
  test.each([
    [invalidCarNamesArray, Validator.validateCarNames, MESSAGES.invalidNameLength],
    [invalidTrialCountArray, Validator.validateTrialCount, MESSAGES.invalidTrialCount],
  ])('유효성 검사 시 에러가 발생하는 경우(자동차 이름,시도 횟수)', (inputs, callback, message) => {
    inputs.forEach((input) => {
      expect(() => callback(input)).toThrow(message);
    });
  });

  test.each([
    [validCarNamesArray, Validator.validateCarNames],
    [validTrialCountArray, Validator.validateTrialCount],
  ])('유효성 검사 시 에러가 발생하지 않는 경우(자동차 이름,횟수)', (inputs, callback) => {
    inputs.forEach((input) => {
      expect(() => callback(input)).not.toThrow();
    });
  });
});
