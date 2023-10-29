class InputValidator {
  checkCarName(name) {
    const regExp = /^[A-Za-z가-힣]{1,5}$/;
    if (regExp.test(name)) {
      return true;
    }
    return false;
  }

  checkMoveCount(count) {
    const regExp = /^(?:[1-9]+\d*)$/;
    if (regExp.test(count)) {
      return true;
    }
    return false;
  }
}

export default InputValidator;
