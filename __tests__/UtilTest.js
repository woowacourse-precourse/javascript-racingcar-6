import {
  isCarListValid,
  isRacingAttemptsValid,
} from '../src/utils/validator.js';

describe('유효성 검증 함수 테스트', () => {
  test('자동차 리스트 길이', () => {
    const inputs = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
    expect(isCarListValid(inputs)).toBeFalsy();
  });
  test('시도 횟수 범위', () => {
    const input = 40;
    expect(isRacingAttemptsValid(input)).toBeFalsy();
  });
});
