import { DuplicatedError, RacingCarNameError, RetryCountError } from "../error/CustomErrors.js";

class RacingCarValidator {
  #isValidName(input) {

    // RacingCar 이름의 타입에 대한 기능 요구사항이 없었지만, 영문 대소문자로 한정
    const regExp = /^[a-zA-Z]{1,5}$/;
    return regExp.test(input);
  }

  isValidNameArray(nameArray) {
    if (!nameArray.every(this.#isValidName)) {
      throw new RacingCarNameError(nameArray);
    }

    if (new Set(nameArray).size !== nameArray.length) {
      throw new DuplicatedError(nameArray);
    }
  }

  isValidCount(input) {
    const regExp = /^[0-9]*$/;
    
    if (!regExp.test(input) || input === '0') {
      throw new RetryCountError(input);
    }
  }
}

export default RacingCarValidator;
