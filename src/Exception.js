class Exception {
  CAR_NAME_DUPLICATE_ERROR = "[ERROR] 자동차의 이름은 한 번씩만 사용할 수 있습니다.";
  CAR_NAME_BLANK_ERROR = "[ERROR] 자동차 이름에 공백은 포함될 수 없습니다.";
  CAR_NAME_COUNT_ERROR = "[ERROR] 자동차의 이름을 2개 이상 입력해주세요.";
  CAR_NAME_LENGTH_ERROR = "[ERROR] 자동차의 이름을 4자 이하로 정해주세요.";
  INVALID_TYPE_TRY_ERROR = "[ERROR] 시도할 횟수를 숫자로 입력해주세요.";
  TRY_COUNT_ERROR = "[ERROR] 시도할 횟수를 1회 이상 입력해주세요.";

  carNameInputException(userInput) {
    if(userInput.length <= 1) {
      throw new Error(this.CAR_NAME_COUNT_ERROR);
    }
    else if(userInput == '' || userInput[userInput.length-1] == '') {
      throw new Error(this.CAR_NAME_BLANK_ERROR);
    }
    else if(userInput.some(name => name.length >= 5)) {
      throw new Error(this.CAR_NAME_LENGTH_ERROR);
    }
    else if(userInput.length != [...new Set(userInput)].length) {
      throw new Error(this.CAR_NAME_DUPLICATE_ERROR);
    }
    else {
      return userInput;
    }
  }
  numberInputException(userInput) {
    if(!Number(userInput)) {
      throw new Error(this.INVALID_TYPE_TRY_ERROR);
    }
    else if(userInput == 0) {
      throw new Error(this.TRY_COUNT_ERROR);
    }
  }
}
export default Exception;