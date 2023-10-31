import Validate from '../src/Validate';

describe('Validate', () => {
  it('자동차 이름의길이가 5이하 true', () => {
    const validCars = ['pobi', 'woni'];
    expect(Validate.isCarNameLengthValid(validCars)).toBe(true);
  });

  it('자동차 이름의길이가 5초과 false', () => {
    const invalidCars = ['pobi222', 'woni'];
    expect(Validate.isCarNameLengthValid(invalidCars)).toBe(false);
  });

  it('자동차는 2대 이상이어야 합니다.', () => {
    const enoughCars = ['pobi', 'woni'];
    expect(Validate.minCarsNumber(enoughCars)).toBe(true);
  });

  it('자동차 1대이거나, 1대보다 적을 경우', () => {
    const notEnoughCars = ['pobi'];
    expect(Validate.minCarsNumber(notEnoughCars)).toBe(false);
  });

  it('입력값이 숫자인 경우 true를 반환합니다.', () => {
    expect(Validate.isNumber(123)).toBe(true);
  });

  it('입력값이 숫자가 아닌 경우 false를 반환합니다.', () => {
    expect(Validate.isNumber('abc')).toBe(false);
  });

  it('최소 1번 이상 시도해야합니다. 1번 이상 시도하지 않을경우 false', () => {
    expect(Validate.minTryNumber(0)).toBe(false);
  });

  it('최소 1번 이상 시도할 경우 true', () => {
    expect(Validate.minTryNumber(1)).toBe(true);
  });
});
