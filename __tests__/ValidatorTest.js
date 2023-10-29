import Validator from '../utils/Validator';
import MESSAGES from '../utils/Messages';

describe('자동차 이름에 대한 유효성 검사 테스트', () => {
  test('5글자 초과의 이름에 대한 유효성 검사', () => {
    const input = [['carcar'], ['hyundai'], ['chevrolet']];
    input.forEach((cars) => {
      expect(() => Validator.validateCarNames(cars)).toThrow(MESSAGES.invalidNameLength);
    });
  });
  test('5글자 이하의 이름에 대한 유효성 검사', () => {
    const input = [['carca'], ['benz'], ['bmw'], ['ca'], ['c']];
    input.forEach((cars) => {
      expect(() => Validator.validateCarNames(cars).not.toThrow(MESSAGES.invalidNameLength));
    });
  });
});

describe('시도할 횟수에 대한 유효성 검사 테스트', () => {
  test('1 이상의 양의 정수가 아닌 값에 대한 유효성 검사', () => {
    const input = [-1, 0, 1.1, '한번'];
    input.forEach((trialCount) => {
      expect(() => Validator.validateTrialCount(trialCount)).toThrow(MESSAGES.invalidTrialCount);
    });
  });
  test('1 이상의 양의 정수인 값에 대한 유효성 검사', () => {
    const input = [1, 2, 3, 100];
    input.forEach((trialCount) => {
      expect(() => Validator.validateTrialCount(trialCount)).not.toThrow(
        MESSAGES.invalidTrialCount,
      );
    });
  });
});
