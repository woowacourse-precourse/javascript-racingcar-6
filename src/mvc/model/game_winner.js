class GameWinner {
  constructor(RESULT) {
    this.RESULT = RESULT;
  }

  findMaxAdvance() {
    const VALUES = Object.values(this.RESULT);
    return Math.max(...VALUES.flat());
  }

  findWinner() {
    const MAX_ADVANCE = this.findMaxAdvance();
    const RACING_CAR = Object.keys(this.RESULT);
    const WINNER = RACING_CAR
      .filter((carName) => this.RESULT[carName].at(-1) === MAX_ADVANCE);
    return WINNER;
  }
}

export default GameWinner;
