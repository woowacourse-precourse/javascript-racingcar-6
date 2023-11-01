import { ERROR_MESSAGE, REGEXP } from '../Constants/Constants.js';

class ValidateAttempt {
  /**
   * isValidNumber(): 시도 횟수 검증 메소드 (숫자만 가능)
   * 입력 검증 후 true 또는 false 반환
   */
  isValidNumber = (attempt) => {
    const ATTEMPT_REGEX = REGEXP.attemptRegex.test(attempt);
    return ATTEMPT_REGEX;
  };

  /**
   * isValidAttempt(): 시도 횟수 검증 결과에 따른 에러 처리 메소드
   * 입력 검증 후 false일 경우 에러 처리 후 애플리케이션 종료
   */
  isValidAttempt = (attempt) => {
    if (!this.isValidNumber(attempt)) throw new Error(ERROR_MESSAGE.numberError);
  };
}

export default ValidateAttempt;
