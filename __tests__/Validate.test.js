import Validate from '../src/Validate';

describe('Validate 클래스 테스트', () => {
  test('isEmpty 함수 테스트', () => {
    expect(Validate.isEmpty('')).toBe(true);
    expect(Validate.isEmpty('asd')).toBe(false);
  });

  test('isPositiveInteger함수 테스트', () => {
    expect(Validate.isPositiveInteger('123')).toBe(true);
    expect(Validate.isPositiveInteger('-123')).toBe(false);
    expect(Validate.isPositiveInteger('0')).toBe(false);
  });

  test('isInvalidLength 함수 테스트', () => {
    expect(Validate.isInvalidLength('asdasd')).toBe(true);
    expect(Validate.isInvalidLength('asd')).toBe(false);
  });

  test('checkJoinItem 함수 테스트', () => {
    expect(() => Validate.checkJoinItem('')).toThrowError('[ERROR]');
    expect(() => Validate.checkJoinItem('asdf')).not.toThrow();
  });

  test('checkRepeatNumber 함수 테스트', () => {
    expect(() => Validate.checkRepeatNumber('-123')).toThrowError('[ERROR]');
    expect(() => Validate.checkRepeatNumber('123')).not.toThrowError();
  });
});
