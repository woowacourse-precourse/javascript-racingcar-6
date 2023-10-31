import { ERROR_MESSAGE } from '../src/Util/message';
import { checkErrorInputName, checkErrorPlayNumber } from '../src/Util/validation';

describe('자동차 이름 입력', () => {
  test('[자동차 이름] 입력값 정상', () => {
    // Arrange
    const input = ['pobi', 'jun', 'seok'];
    // Act
    const resultFn = () => checkErrorInputName(input);
    // Assert
    expect(resultFn).not.toThrow();
  });
  test('[자동차 이름] 입력값 없음', () => {
    // Arrange
    const input = [''];
    // Act
    const resultFn = () => checkErrorInputName(input);
    // Assert
    expect(resultFn).toThrow(ERROR_MESSAGE.empty);
  });
  test('[자동차 이름] 이름 중복', () => {
    // Arrange
    const input = ['jun', 'seok', 'seok'];
    // Act
    const resultFn = () => checkErrorInputName(input);
    // Assert
    expect(resultFn).toThrow(ERROR_MESSAGE.duplicate);
  });
  test('[자동차 이름] 이름 길이 5자 초과', () => {
    // Arrange
    const input = ['jun', 'junseok'];
    // Act
    const resultFn = () => checkErrorInputName(input);
    // Assert
    expect(resultFn).toThrow(ERROR_MESSAGE.length);
  });
});

describe('시도 횟수 입력', () => {
  test('[시도 횟수] 입력값 정상', () => {
    // Arrange
    const input = 5;
    // Act
    const resultFn = () => checkErrorPlayNumber(input);
    // Assert
    expect(resultFn).not.toThrow();
  });
  test('[시도 횟수] 숫자가 아닌 값', () => {
    // Arrange
    const input = 'test';
    // Act
    const resultFn = () => checkErrorPlayNumber(input);
    // Assert
    expect(resultFn).toThrow(ERROR_MESSAGE.type);
  });

  test('[시도 횟수] 1 이상의 정수가 아닌 값', () => {
    // Arrange
    const input = -8;
    // Act
    const resultFn = () => checkErrorPlayNumber(input);
    // Assert
    expect(resultFn).toThrow(ERROR_MESSAGE.scope);
  });
});
