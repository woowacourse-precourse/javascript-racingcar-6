import InputValidator from '../src/domain/InputValidator';

describe('InputValidator', () => {
  const inValidCountCars = [0, 1];
  const invalidCarNames = ['아메리칸드림', ''];
  const invalidRounds = ['0', '-1', '', '10a', 'a10', 'abc', '!'];
  const invalidUniqueName = ['자동차', '슈퍼카', '자동차'];

  test.each(inValidCountCars)('입력한 자동차의 이름이 2개 이상인지 테스트한다.', (count) => {
    expect(InputValidator.hasValidCountCars(count)).toBe(false);
  });

  test.each(invalidCarNames)('자동차 이름이 1글자 이상 5글자 이하인지 테스트한다.', (carName) => {
    expect(InputValidator.hasValidCarName(carName)).toBe(false);
  });

  test('중복되는 이름이 있는지 테스트한다.', () => {
    expect(InputValidator.hasValidUniqueName(invalidUniqueName)).toBe(false);
  });

  test.each(invalidRounds)('시도할 횟수가 1이상인 숫자인지 테스트한다.', (round) => {
    expect(InputValidator.hasValidRoundNumber(round)).toBe(false);
  });
});
