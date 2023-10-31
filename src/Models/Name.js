import RacingGameError from "../Errors/RacingGameError.js";

const NAME_SETTINGS = Object.freeze({
  max_name_length: 5,
});

export default class Name {
  constructor(string) {
    const trimmedString = string.trim();
    this.#validationSize(trimmedString);
    this.name = trimmedString;
  }

  #validationSize(string) {
    if (string.length <= 0 || string.length > NAME_SETTINGS.max_name_length)
      throw new RacingGameError("이름은 공백이 아니고 5자 이하여야합니다.");
  }
}
