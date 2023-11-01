import { ERROR } from "../../utils/constants.js";

class CarNames {
  #names = [];

  getNames() {
    return this.#names;
  }

  createValidNameList(inputNamesString) {
    this.checkInputNull(inputNamesString);
    this.parseCarNames(inputNamesString);
    this.checkNamesDuplication();
    this.checkNameBlank();
    this.checkNameLength();
  }

  checkInputNull(inputNamesString) {
    if (inputNamesString === "") {
      throw new Error(ERROR.EMPTY_INPUT);
    }
  }

  parseCarNames(inputNamesString) {
    this.#names = inputNamesString.split(",").map((name) => name.trim());
  }

  checkNamesDuplication() {
    const uniqueNames = new Set(this.#names);

    if (uniqueNames.size !== this.#names.length) {
      throw new Error(ERROR.INVALID_DUPLICATE_NAMES);
    }
  }

  checkNameBlank() {
    for (let i = 0; i < this.#names.length; i += 1) {
      if (this.#names[i] === "") {
        throw new Error(ERROR.INVALID_BLANK_NAME);
      }
    }
  }

  checkNameLength() {
    for (let i = 0; i < this.#names.length; i += 1) {
      if (this.#names[i].length > 5) {
        throw new Error(ERROR.INVALID_NAME_LENGTH);
      }
    }
  }
}

export default CarNames;
