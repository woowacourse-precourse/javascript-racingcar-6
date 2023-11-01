import CustomError from '../src/errors/CustomError';
import InputValidator from '../src/utils/InputValidator';

describe('InputValidator 테스트', () => {
  let validator;

  beforeEach(() => {
    validator = new InputValidator();
  });

  describe('validateCarNames 테스트', () => {
    it('최소 차량 갯수 미달 시 반응 테스트', () => {
      expect(() => {
        validator.validateCarNames(['one']);
      }).toThrow(CustomError);
    });

    it('최대 길이 초과 시 반응 테스트', () => {
      expect(() => {
        validator.validateCarNames(['verylongname', 'short']);
      }).toThrow(CustomError);
    });

    it('공백 입력 시 반응 테스트', () => {
      expect(() => {
        validator.validateCarNames(['   ', '   ']);
      }).toThrow(CustomError);
    });

    it('중복 이름 입력 시 반응 테스트', () => {
      expect(() => {
        validator.validateCarNames(['car', 'car']);
      }).toThrow(CustomError);
    });
  });

  describe('validateRoundNumbers 테스트', () => {
    it('숫자가 아닌 값 입력 시 반응 테스트', () => {
      expect(() => {
        validator.validateRoundsNumber(parseInt('asdf', 10));
      }).toThrow(CustomError);
    });

    it('음수 입력 시 반응 테스트', () => {
      expect(() => {
        validator.validateRoundsNumber(-15);
      }).toThrow(CustomError);
    });

    it('정수가 아닌 수 입력 시 반응 테스트', () => {
      expect(() => {
        validator.validateRoundsNumber(1.5);
      }).toThrow(CustomError);
    });

    it('최소 시도 횟수 미만의 값 입력 테스트', () => {
      expect(() => {
        validator.validateRoundsNumber(0);
      }).toThrow(CustomError);
    });
  });
});
