class Car {
  #name;
  #position = 0;

  constructor(name) {
    this.#name = name;

    this.#validateName();
  }

  #validateName() {
    if (this.#name.length > 5) {
      throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
    }
  }

  move() {
    this.#position += 1;
  }
}

export default Car;
