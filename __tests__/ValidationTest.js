import Validator from '../src/utils/Validator.js';
import ERROR from '../src/constants/Error.js';

const {
  NON_EXIST,
  ONLY_ONE,
  GAP,
  LENGTH,
  DUPLICATE,
  NOT_NUMBER,
  NOT_NATURAL_NUMBER,
} = ERROR;

describe('자동차 이름 입력 유효성 검사 테스트', () => {
  test('입력된 값이 없을 경우', () => {
    const carNames = '';

    const testNull = () => {
      Validator.validateRacingCars(carNames);
    };

    expect(testNull).toThrow(NON_EXIST);
  });

  test('입력된 자동차가 중복된 자동차일 경우', () => {
    const carNames = 'pobi,woni,pobi';

    const testDuplicate = () => {
      Validator.validateRacingCars(carNames);
    };

    expect(testDuplicate).toThrow(DUPLICATE);
  });

  test('입력된 자동차의 이름에 공백이 포함된 경우', () => {
    const carNames = 'test, test1,test2, ';

    const testGap = () => {
      Validator.validateRacingCars(carNames);
    };

    expect(testGap).toThrow(GAP);
  });

  test('입력된 자동차의 이름이 하나인 경우', () => {
    const carNames = 'pobi';

    const testGap = () => {
      Validator.validateRacingCars(carNames);
    };

    expect(testGap).toThrow(ONLY_ONE);
  });

  test('입력된 자동차의 이름이 5자를 초과한 경우', () => {
    const carNames = 'pobies,woni,poni2';

    const testGap = () => {
      Validator.validateRacingCars(carNames);
    };

    expect(testGap).toThrow(LENGTH);
  });
});

describe('시도 횟수 입력 유효성 검사 테스트', () => {
  test('입력된 값이 없을 경우', () => {
    const attemptNumber = '';

    const testNull = () => {
      Validator.validateAttemptNumber(attemptNumber);
    };

    expect(testNull).toThrow(NON_EXIST);
  });

  test('입력된 시도횟수에 공백이 포함된 경우', () => {
    const attemptNumber = ' 5';

    const testGap = () => {
      Validator.validateAttemptNumber(attemptNumber);
    };

    expect(testGap).toThrow(GAP);
  });

  test('입력된 시도횟수가 숫자가 아닌 경우', () => {
    const attemptNumber = 'A';

    const testNumber = () => {
      Validator.validateAttemptNumber(attemptNumber);
    };

    expect(testNumber).toThrow(NOT_NUMBER);
  });

  test('입력된 시도횟수가 자연수가 아닌 경우', () => {
    const attemptNumber = 0;

    const testNaturalNumber = () => {
      Validator.validateAttemptNumber(attemptNumber);
    };

    expect(testNaturalNumber).toThrow(NOT_NATURAL_NUMBER);
  });
});
