import ValidationError from '../../src/error/ValidationError.js';
import DefaultError from '../../src/error/DefaultError.js';

describe('커스텀 에러 테스트', () => {
  const throwError = () => {
    throw new ValidationError('test');
  };

  test(`에러는 ${DefaultError.ERROR_PREFIX}를 포함해야한다.`, () => {
    expect(throwError).toThrow(DefaultError.ERROR_PREFIX);
  });
});
