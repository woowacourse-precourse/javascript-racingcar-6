import ValidationUtil from './ValidationUtil.js';

class Validation {

  // 사용자가 입력한 차 이름 입력값 검증
  static validateCarNameInput(input) {
    ValidationUtil.isemptyInput(input);
    ValidationUtil.isNoComma(input);
  }

  // 각 차이름 검증
  static validateCarNames(carNames) {
    ValidationUtil.validateDuplicateCarName(carNames);
    for (let index in carNames) {
      ValidationUtil.isNoInputafterComma(carNames[index]);
      ValidationUtil.isexceedsFiveCharacters(carNames[index]);
    }
  }
  
  // 시도할 횟수 입력값 검증
  static validateAttemptCountInput(input) {
    ValidationUtil.isemptyInput(input);
    ValidationUtil.isNotNumber(input);
    ValidationUtil.isNotPositiveInteger(input);
  }
}
export default Validation;
