class Error {
  checkCarName(input) {
    this.checkCarNameOver(input);
    this.checkCarNameWrong(input);
  }
  checkCarNameOver(input) {
    const name_arr = input.split(",");
    const exist_overlength = name_arr.some((name) => name.length > 5);
    if (exist_overlength) {
      throw new Error("[ERROR] 이름이 5글자 초과입니다");
    }
  }
  checkCarNameWrong(input) {
    const exist_wrong_name = filtered_name_arr.some((name) =>
      /^[a-zA-Z]+$/.test(name)
    );
    if (exist_wrong_name) {
      throw new Error("[ERROR] 이름이 잘못된 형식입니다.");
    }
  }
  checkTryNumber(input) {
    if (isNaN(input) || input[0] == 0) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
  }
}

export default Error;
