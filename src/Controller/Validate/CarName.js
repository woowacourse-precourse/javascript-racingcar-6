const outputView = require("../../View/outputView");
import { ERROR } from "../../Utils/Message";

class CarName {
  #input;

  constructor(input) {
    this.#input = input.split(",");
  }

  // 에러메세지 전달
  async validate() {
    if (this.check()) {
      await outputView.printError(ERROR.CAR_NAME);
      return false;
    }
    return true;
  }

  // 유효성 검사
  check() {
    return this.isAnotherStr() || this.isDuplicate() || this.isNameLength();
  }

  // 자동차이름 5글자 이하
  isNameLength() {
    let check = false;
    this.#input.forEach((carname) => {
      if (carname.length > 5 || carname.length < 1) {
        check = true;
      }
    });
    return check;
  }

  // 문자 유효성검사
  isAnotherStr() {
    const regex = /^[가-힣|a-z|A-Z|]/;
    let check = false;
    this.#input.forEach((carname) => {
      carname.split("").forEach((value) => {
        if (!regex.test(value)) {
          check = true;
        }
      });
    });
    return check;
  }

  // 중복 검사
  isDuplicate() {
    let check = false;
    this.#input.forEach((carname) => {
      carname.split("").forEach((carnameArr) => {
        if (new Set(carnameArr).size != 3) {
          check = true;
        }
      });
    });
    return check;
  }

  emptyName(){
    let check = false;
    if (this.carname === "" || this.carname.split(",").some((name) => name === "")) {
      check = true;
    }
    return check;
  }
}

module.exports = CarName;
