import MakeRandomNumber from './MakeRandomNumber.js';

class PlayRacingCar {
  constructor(name) {
    this.name = name;
    this.advance = 0;
  }

  advanceIfOverFour() {
    if (MakeRandomNumber() >= 4) this.advance += 1;
  }

  changeAdvanceToHyphen() {
    return '-'.repeat(this.advance);
  }

  printAdvanceResult() {
    return `${this.name} : ${this.changeAdvanceToHyphen()}`;
  }

  resetAdvance() {
    this.advance = 0;
  }
}

export default PlayRacingCar;
