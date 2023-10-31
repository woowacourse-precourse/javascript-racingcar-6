import {
  isCarNameValidLength,
  isRaceCountValidNumber,
} from '../src/functions/validation';

describe('Validation 함수 테스트', () => {
  test('자동차 이름의 길이가 5 이하면 true 반환', () => {
    const carName = 'happy';
    const isValidLength = isCarNameValidLength(carName);
    expect(isValidLength).toBe(true);
  });

  test('자동차 이름의 길이가 5 초과면 false 반환', () => {
    const carName = 'javascript';
    const isValidLength = isCarNameValidLength(carName);
    expect(isValidLength).toBe(false);
  });

  test('경주 횟수가 숫자로 입력된 경우 true 반환', () => {
    const raceCount = '5';
    const isValidNumber = isRaceCountValidNumber(raceCount);
    expect(isValidNumber).toBe(true);
  });

  test('경주 횟수가 숫자로 입력되지 않을 경우 false 반환', () => {
    const raceCount = 'haha';
    const isValidNumber = isRaceCountValidNumber(raceCount);
    expect(isValidNumber).toBe(false);
  });
});
