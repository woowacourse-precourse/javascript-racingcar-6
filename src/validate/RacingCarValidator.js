class RacingCarValidator {

  #isValidName(str) {

    // racingCar 이름의 타입에 대한 기능 요구사항이 없었지만, 영문 대소문자로 한정
    const regExp = /^[a-zA-Z]{1,5}$/
    return regExp.test(str);
  }

  isValidNameArray(nameArray) {
    return nameArray.every(this.#isValidName);
  }
}

export default RacingCarValidator;
