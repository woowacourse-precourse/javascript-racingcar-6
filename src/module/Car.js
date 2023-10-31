class Car {
  #name;
  #goCount;

  constructor() {
    this.#name = "";
    this.#goCount = 0;
  }

  get name() {
    return this.#name;
  }

  set name(input) {
    const nameLength = input.length;

    if (nameLength >= 1 && nameLength <= 5) {
      this.#name = input;
    } else {
      throw new Error('[ERROR] 1자 이상 5자 이하의 문자가 입력되지 않음');
    }
  }
}

export default Car;
