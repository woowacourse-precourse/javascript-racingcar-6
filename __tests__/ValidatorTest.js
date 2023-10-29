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
