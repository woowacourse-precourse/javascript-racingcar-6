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
      throw new Error("[ERROR] 이름을 입력해 주세요.");
    }
  }

  parseCarNames(inputNamesString) {
    this.#names = inputNamesString.split(",").map((name) => name.trim());
  }

  checkNamesDuplication() {
    const uniqueNames = new Set(this.#names);

    if (uniqueNames.size !== this.#names.length) {
      throw new Error("[ERROR] 중복된 이름이 있습니다.");
    }
  }

  checkNameBlank() {
    for (let i = 0; i < this.#names.length; i += 1) {
      if (this.#names[i] === "") {
        throw new Error("[ERROR] 이름은 공백이 될 수 없습니다.");
      }
    }
  }

  checkNameLength() {
    for (let i = 0; i < this.#names.length; i += 1) {
      if (this.#names[i].length > 5) {
        throw new Error("[ERROR] 5글자 이하의 이름을 입력해주세요.");
      }
    }
  }
}

export default CarNames;
