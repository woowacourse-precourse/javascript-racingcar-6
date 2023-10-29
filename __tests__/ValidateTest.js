import Validate from '../src/Game/Validate'; 

describe('Validate 클래스 테스트', () => {
  let validator;

  beforeEach(() => {
    validator = new Validate();
  });

  it('[CORRECT] 중복 없는 자동차 이름 입력', () => {
    expect(() => validator.validateCarName('Car1, Car2, Car3')).not.toThrow();
  });
  
  it('[ERROR} 자동차 1대만 등록', () => {
    expect(() => validator.validateCarName('Car1')).toThrow();
  })
  it('[ERROR} 자동차 이름에 공백 입력', () => {
    expect(() => validator.validateCarName('Car1, ')).toThrow();
  })
  it('[ERROR] 중복된 자동차 이름 입력', () => {
    expect(() => validator.validateCarName('Car1, Car1, Car2')).toThrow();
  });

  it('[ERROR] 5자를 초과한 자동차 이름 입력', () => {
    expect(() => validator.validateCarName('TooLongCarName')).toThrow();
  });

  it('[CORRECT] 규정에 맞는 도전 횟수 입력', () => {
    expect(() => validator.validateTryMoveCount('5')).not.toThrow();
  });

  it('[ERROR] 1이상의 자연수가 아닌 도전 횟수 입력.', () => {
    expect(() => validator.validateTryMoveCount('0')).toThrow();
    expect(() => validator.validateTryMoveCount('abc')).toThrow();
  });
});