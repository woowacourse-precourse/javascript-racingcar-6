export default class Name {
  constructor(string) {
    const trimmedString = string.trim();
    this.#validationSize(trimmedString);
    this.name = trimmedString;
  }

  #validationSize(string) {
    if (0 < string.length <= 5)
      throw new Error("[ERROR] 이름은 최대 5자까지만 가능합나디.");
  }
}
