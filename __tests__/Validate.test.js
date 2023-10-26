import Validate from '../src/Validate';

describe('Validate 클래스 테스트', () => {
  test('isNotValidNumber함수 테스트', () => {
    expect(Validate.isNotValidNumber('123123')).toBe(false);
    expect(Validate.isNotValidNumber('asdasd')).toBe(true);
    expect(Validate.isNotValidNumber('asd123')).toBe(true);
  });
});
