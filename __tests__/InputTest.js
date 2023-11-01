import ValidateCarName from '../src/ValidateCarName';

describe('이름 입력 테스트', () => {
    let validator;
  
    beforeEach(() => {
      validator = new ValidateCarName();
    });
  
    test('이름 입력 조건 충족시', () => {
      const carNames = ['pobi', 'ji', 'hyun'];
      expect(() => validator.isValid(carNames)).not.toThrow();
    });
  
    describe('이름 길이 테스트', () => {
      test('1 ~ 5글자 사이가 아닐시', () => {
        const carNames = ['pobi', 'jihyun'];
        expect(() => validator.isValid(carNames)).toThrow(
          '[ERROR] 1글자에서 5글자 사이의 이름만 입력 가능합니다.'
        );
      });
  
      test('이름이 공백일시', () => {
        const carNames = [''];
        expect(() => validator.isValid(carNames)).toThrow(
          '[ERROR] 1글자에서 5글자 사이의 이름만 입력 가능합니다.'
        );
      });
  
      test('다음이 공백일시', () => {
        const carNames = ['pobi', ''];
        expect(() => validator.isValid(carNames)).toThrow(
          '[ERROR] 1글자에서 5글자 사이의 이름만 입력 가능합니다.'
        );
      });
    });
  
    describe('이름 문자열 테스트', () => {
      test('영문만이 아닐시', () => {
        const carNames = ['ji', 'hyuㄴ'];
        expect(() => validator.isValid(carNames)).toThrow(
          '[ERROR] 영문으로 이루어진 이름만 입력 가능합니다.'
        );
      });
  
      test('특수 문자를 포함시', () => {
        const carNames = ['ji', '!+*'];
        expect(() => validator.isValid(carNames)).toThrow(
          '[ERROR] 영문으로 이루어진 이름만 입력 가능합니다.'
        );
      });
  
      test('숫자를 포함시', () => {
        const carNames = ['ji', '123'];
        expect(() => validator.isValid(carNames)).toThrow(
          '[ERROR] 영문으로 이루어진 이름만 입력 가능합니다.'
        );
      });
    });
  
    test('중복되는 이름을 입력시', () => {
      const carNames = ['ji', 'ji', 'hyun', 'an'];
      expect(() => validator.isValid(carNames)).toThrow(
        '[ERROR] 중복되는 이름은 입력할 수 없습니다.'
      );
    });
  });
