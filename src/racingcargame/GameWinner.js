class GameWinner {
  constructor(carObj) {
    this.carObj = carObj;
    this.winners = [];
  }

  findMaxValue() {
    return Math.max(...Object.values(this.carObj));
  }

  getKeysOfMaxValue(max) {
    this.winners.push(...Object.keys(this.carObj).filter((key) => this.carObj[key] === max));
  }

  printWinners() {
    return this.winners.join(', ');
  }
}

export default GameWinner;
