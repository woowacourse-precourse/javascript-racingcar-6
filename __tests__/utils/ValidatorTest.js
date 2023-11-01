/* eslint-disable no-undef */
import Validator from '../../src/utils/Validator';

describe('Validator', () => {
  describe('isValidCarName', () => {
    it('모든 자동차 이름이 유효하다면 true와 reason으로 빈 문자열을 반환해야한다.', () => {
      const carNames = ['car1', 'car2', 'car3'];
      const result = Validator.isValidCarName(carNames);
      expect(result.isValid).toBe(true);
      expect(result.reason).toBe('');
    });

    it('너무 긴 자동차 이름이 있다면 false와 이유를 반환해야 한다.', () => {
      const carNames = ['car1', 'car2', 'car3', 'thisIsAVeryLongCarName'];
      const result = Validator.isValidCarName(carNames);
      expect(result.isValid).toBe(false);
      expect(result.reason).toBe('자동차 이름은 5자 이하만 가능합니다.');
    });

    it('중복된 자동차 이름이 있다면 false와 이유를 반환해야 한다.', () => {
      const carNames = ['car1', 'car2', 'car2'];
      const result = Validator.isValidCarName(carNames);
      expect(result.isValid).toBe(false);
      expect(result.reason).toBe('중복된 자동차 이름이 존재합니다.');
    });
  });

  describe('isValidTrialCount', () => {
    it('시도 횟수가 올바르다면 true와 reason으로 빈 문자열을 반환해야 한다', () => {
      const trialCount = 5;
      const result = Validator.isValidTrialCount(trialCount);
      expect(result.isValid).toBe(true);
      expect(result.reason).toBe('');
    });

    it('1보다 작은 값이 입력되면 false와 이유를 반환해야 한다.', () => {
      const trialCount = 0;
      const result = Validator.isValidTrialCount(trialCount);
      expect(result.isValid).toBe(false);
      expect(result.reason).toBe('시도 횟수는 1 이상의 자연수만 가능합니다.');
    });

    it('정수가 아닌 값이 입력되면 false와 이유를 반환해야 한다.', () => {
      const trialCount = 1.5;
      const result = Validator.isValidTrialCount(trialCount);
      expect(result.isValid).toBe(false);
      expect(result.reason).toBe('입력값은 정수만 가능합니다.');
    });

    it('숫자가 아닌 값이 입력되면 false와 이유를 반환해야 한다.', () => {
      const trialCount = '5';
      const result = Validator.isValidTrialCount(trialCount);
      expect(result.isValid).toBe(false);
      expect(result.reason).toBe('입력값은 정수만 가능합니다.');
    });
  });
});
