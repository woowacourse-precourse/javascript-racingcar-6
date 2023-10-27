export default class RaceRound {
  constructor(input) {
    this.#validationType(input);
    this.raceRound = Number(input);
  }

  #validationType(input) {
    if (isNaN(input)) {
      throw new Error("[ERROR] 입력된 값이 숫자가 아닙니다.");
    }
  }
}
