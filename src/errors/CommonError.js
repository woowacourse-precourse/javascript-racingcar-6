class CommonError {
  static checkEmpty(inputList) {
    if (inputList.trim() === "") {
      throw new Error("[ERROR] 입력값이 비어 있습니다.");
    }
  }
}

export default CommonError;
