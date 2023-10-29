import Validator from '../utils/Validator';
import MESSAGES from '../utils/Messages';

describe('자동차 이름에 대한 유효성 검사 테스트', () => {
  test('5글자 초과의 이름에 대한 유효성 검사', () => {
    const carNamesArray = [['carcar'], ['hyundai'], ['chevrolet']];
    carNamesArray.forEach((carName) => {
      expect(() => Validator.validateCarNames(carName)).toThrow(MESSAGES.invalidNameLength);
    });
  });
  test('5글자 이하의 이름에 대한 유효성 검사', () => {
    const carNamesArray = [['carca'], ['benz'], ['bmw'], ['ca'], ['c']];
    carNamesArray.forEach((carName) => {
      expect(() => Validator.validateCarNames(carName).not.toThrow(MESSAGES.invalidNameLength));
    });
  });
});

describe('시도할 횟수에 대한 유효성 검사 테스트', () => {
  test('1 이상의 양의 정수가 아닌 값에 대한 유효성 검사', () => {
    const trialCounts = [-1, 0, 1.1, '한번'];
    trialCounts.forEach((trialCount) => {
      expect(() => Validator.validateTrialCount(trialCount)).toThrow(MESSAGES.invalidTrialCount);
    });
  });
  test('1 이상의 양의 정수인 값에 대한 유효성 검사', () => {
    const trialCounts = [1, 2, 3, 100];
    trialCounts.forEach((trialCount) => {
      expect(() => Validator.validateTrialCount(trialCount)).not.toThrow(
        MESSAGES.invalidTrialCount,
      );
    });
  });
});
