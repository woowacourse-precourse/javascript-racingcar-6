import {
  splitAndTrim,
  validateCarNames,
  validateNumberInput,
} from '../src/utils';

describe('유효성 검사 테스트', () => {
  describe('splitAndTrim', () => {
    it('빈 값 입력에 대한 예외처리', () => {
      const validInput = '';
      expect(() => splitAndTrim(validInput)).toThrow('[ERROR]');
    });
  });

  describe('validateCarNames', () => {
    it('유효한 자동차 이름에 대해 true를 반환', () => {
      const validInput = ['Car1', 'Car2', 'Car3'];
      expect(validateCarNames(validInput)).toBe(true);
    });

    it('빈 문자열 자동차 이름에 대한 예외처리', () => {
      const validInput = ['Car1', '', 'Car3'];
      expect(() => validateCarNames(validInput)).toThrow('[ERROR]');
    });

    it('자동차 이름은 5자 이상인 경우에 대한 예외처리', () => {
      const validInput = ['Car1', 'Car2', 'Car999'];
      expect(() => validateCarNames(validInput)).toThrow('[ERROR]');
    });

    it('자동차 이름은 최소 2개 이상이여햐 하는 경우에 대한 예외처리', () => {
      const validInput = ['Car1'];
      expect(() => validateCarNames(validInput)).toThrow('[ERROR]');
    });

    it('중복된 자동차 이름이 들어온 경우에 대한 예외처리', () => {
      const validInput = ['Car1', 'Car1'];
      expect(() => validateCarNames(validInput)).toThrow('[ERROR]');
    });
  });

  describe('validateNumberInput', () => {
    it('유효한 숫자 입력에 대해 true를 반환', () => {
      const validInput = '5';
      expect(validateNumberInput(validInput)).toBe(true);
    });

    it('숫자가 아닌 입력에 대한 예외처리', () => {
      const validInput = 'abc';
      expect(() => validateNumberInput(validInput)).toThrow('[ERROR]');
    });

    it('소수점 포함 숫자 입력에 대한 예외처리', () => {
      const validInput = '3.14';
      expect(() => validateNumberInput(validInput)).toThrow('[ERROR]');
    });

    it('유효한 음수 숫자 입력에 대한 예외처리', () => {
      const validInput = '-1';
      expect(() => validateNumberInput(validInput)).toThrow('[ERROR]');
    });
  });
});
