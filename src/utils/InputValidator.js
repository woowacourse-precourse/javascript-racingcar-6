class InputValidator {
  checkCarName(name) {
    const regExp = /^[A-Za-z가-힣]{1,5}$/;
    if (regExp.test(name)) {
      return true;
    }
    return false;
  }
}

export default InputValidator;
