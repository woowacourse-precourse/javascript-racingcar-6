import validate from '../src/Validate.js';
import errorMessage from '../src/Constant.js';

describe('입력값 검증 테스트', () => {
  test('입력값에 쉼표가 없을 경우', () => {
    const input = '홍길동';
    expect(() => validate.carName(input)).toThrow(
      errorMessage.INSUFFICIENT_CARS,
    );
  });

  test('자동차를 1대 등록했을 경우', () => {
    const input = '홍길동,';
    expect(() => validate.carName(input)).toThrow(
      errorMessage.INSUFFICIENT_CARS,
    );
  });

  test('5자를 초과한 자동차명이 포함되어있을 경우', () => {
    const input = '홍길동, 가나다라마바사';
    expect(() => validate.carName(input)).toThrow(errorMessage.CAR_NAME_LENGTH);
  });
});
