import ValidateCarName from '../src/ValidateCarName';

describe('자동차 이름 검증 테스트', () => {
  let validator;

  beforeEach(() => {
    validator = new ValidateCarName();
  });

  test('자동차 이름 입력 조건을 모두 충족한 경우', () => {
    const carNames = ['pobi', 'woni', 'jun'];
    expect(() => validator.isValid(carNames)).not.toThrow();
  });

  describe('자동차 이름 길이 검증 테스트', () => {
    test('1글자에서 5글자 사이의 자동차 이름을 입력하지 않은 경우', () => {
      const carNames = ['pobi', 'wonijun'];
      expect(() => validator.isValid(carNames)).toThrow(
        '[ERROR] 1글자에서 5글자 사이의 이름만 입력 가능합니다.'
      );
    });

    test('자동차 이름을 입력하지 않은 경우', () => {
      const carNames = [''];
      expect(() => validator.isValid(carNames)).toThrow(
        '[ERROR] 1글자에서 5글자 사이의 이름만 입력 가능합니다.'
      );
    });

    test('다음에 오는 자동차 이름을 입력하지 않은 경우', () => {
      const carNames = ['pobi', ''];
      expect(() => validator.isValid(carNames)).toThrow(
        '[ERROR] 1글자에서 5글자 사이의 이름만 입력 가능합니다.'
      );
    });
  });

  describe('자동차 이름 문자열 검증 테스트', () => {
    test('영문으로만 이루어지지 않은 자동차 이름을 입력한 경우', () => {
      const carNames = ['woni', 'po비'];
      expect(() => validator.isValid(carNames)).toThrow(
        '[ERROR] 영문으로 이루어진 이름만 입력 가능합니다.'
      );
    });

    test('자동차 이름에 특수 문자를 포함한 경우', () => {
      const carNames = ['woni', '#*?'];
      expect(() => validator.isValid(carNames)).toThrow(
        '[ERROR] 영문으로 이루어진 이름만 입력 가능합니다.'
      );
    });

    test('자동차 이름에 숫자를 포함한 경우', () => {
      const carNames = ['woni', '123'];
      expect(() => validator.isValid(carNames)).toThrow(
        '[ERROR] 영문으로 이루어진 이름만 입력 가능합니다.'
      );
    });
  });

  test('중복되는 자동차 이름을 입력한 경우', () => {
    const carNames = ['jun', 'jun', 'pobi', 'woni'];
    expect(() => validator.isValid(carNames)).toThrow(
      '[ERROR] 중복되는 이름은 입력할 수 없습니다.'
    );
  });
});
