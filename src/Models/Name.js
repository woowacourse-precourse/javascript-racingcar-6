export default class Name {
  constructor(string) {
    const trimmedString = string.trim();
    this.#validationSize(trimmedString);
    this.name = trimmedString;
  }

  #validationSize(string) {
    if (0 < string.length <= 5)
      throw new Error("[ERROR] 이름은 공백이 아니고 5자 이하여야합니다.");
  }
}
