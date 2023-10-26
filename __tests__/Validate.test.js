import Validate from '../src/Validate';

describe('Validate 클래스 테스트', () => {
  test('isNotValidNumber함수 테스트', () => {
    expect(Validate.isPositiveInteger('123123')).toBe(true);
    expect(Validate.isPositiveInteger('asdasd')).toBe(false);
    expect(Validate.isPositiveInteger('-123')).toBe(false);
    expect(Validate.isPositiveInteger('0')).toBe(false);
  });
});
