import ValidatorUtil from '../src/utils/validator/utils';

describe('validator test', () => {
  describe('isDelimiter', () => {
    test('올바른 구분자를 가지고 있을 때', () => {
      expect(ValidatorUtil.isDelimiter('fobi,koko,noa')).toBe(true);
    });

    test(' 맞지 않는 구분자를 가지고 있을 때', () => {
      expect(ValidatorUtil.isDelimiter('fobi.koko.noa')).toBe(false);
    });
  });
});
