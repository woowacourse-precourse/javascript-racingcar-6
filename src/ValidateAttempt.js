class ValidateAttempt {
  constructor() {}

  isValidNumber = (input) => {
    const ATTEMPT_REGEX = /^[0-9]+$/.test(input);
    return ATTEMPT_REGEX;
  };

  isValidAttempt = (input) => {
    if (!this.isValidNumber(input)) throw new Error('[ERROR] 숫자만 입력 가능합니다.');
  };
}

export default ValidateAttempt;
