import validate from '../src/validate/Validate.js';
import ERROR_MESSAGE from '../src/constant/ErrorMessage';

describe('자동차명 입력 테스트', () => {
  test('입력값에 쉼표가 없을 경우', () => {
    const input = '홍길동';
    expect(() => validate.carName(input)).toThrow(
      ERROR_MESSAGE.INSUFFICIENT_CARS,
    );
  });

  test('자동차를 1대 등록했을 경우', () => {
    const input = '홍길동,';
    expect(() => validate.carName(input)).toThrow(
      ERROR_MESSAGE.INSUFFICIENT_CARS,
    );
  });

  test('5자를 초과한 자동차명이 포함되어있을 경우', () => {
    const input = '홍길동, 가나다라마바사';
    expect(() => validate.carName(input)).toThrow(
      ERROR_MESSAGE.CAR_NAME_LENGTH,
    );
  });
});

describe('이동 횟수 입력 테스트', () => {
  test('입력값이 0일 경우', () => {
    const input = '0';
    expect(() => validate.playCount(input)).toThrow(
      ERROR_MESSAGE.NON_POSITIVE_PLAYCOUNT,
    );
  });

  test('입력값이 음수일 경우', () => {
    const input = '-1';
    expect(() => validate.playCount(input)).toThrow(
      ERROR_MESSAGE.NON_NUMERIC_PLAYCOUNT,
    );
  });

  test('입력값이 숫자가 아닐 경우', () => {
    const input = '가나다';
    expect(() => validate.playCount(input)).toThrow(
      ERROR_MESSAGE.NON_NUMERIC_PLAYCOUNT,
    );
  });
});
