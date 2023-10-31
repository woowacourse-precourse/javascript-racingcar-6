import CarProperty from "../model/carProperty.js";

export default class Exception {
  //async
  static CarNames(carNames) {
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
}
