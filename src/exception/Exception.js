import CarProperty from "../model/carProperty.js";

export default class Exception {
  static carNames(carNames) {
    const carArray = CarProperty.splitStringMakeArray(carNames);
    if (carArray.includes("")) {
      throw new Error("[ERROR] 이름이 없는 자동차가 있습니다.");
    }
    if (carArray.some(Exception.isLengthOverFive)) {
      throw new Error("[ERROR] 이름은 5자 이하여야 합니다.");
    }
  }
  static isLengthOverFive(name) {
    if (name.length > 5) return true;
  }

  static attempNumbers(number) {
    if (this.isNumber(number) || number === "0") {
      throw new Error("[ERROR] 1이상의 숫자값을 입력해주세요.");
    }
  }
  static isNumber(input) {
    const regexr = /^\d+$/;
    return !regexr.test(input);
  }
}
