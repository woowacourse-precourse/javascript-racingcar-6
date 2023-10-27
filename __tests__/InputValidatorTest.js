import CustomError from '../src/errors/CustomError';
import InputValidator from '../src/utils/InputValidator';

describe('InputValidator', () => {
  let validator;

  beforeEach(() => {
    validator = new InputValidator();
  });

  describe('validateCarNames', () => {
    it('최대 길이 초과 시 반응 테스트', () => {
      expect(() => {
        validator.validateCarNames(['verylongname']);
      }).toThrow(CustomError);
    });

    it('공백 입력 시 반응 테스트', () => {
      expect(() => {
        validator.validateCarNames(['   ']);
      }).toThrow(CustomError);
    });

    it('중복 이름 입력 시 반응 테스트', () => {
      expect(() => {
        validator.validateCarNames(['car', 'car']);
      }).toThrow(CustomError);
    });
  });
});
