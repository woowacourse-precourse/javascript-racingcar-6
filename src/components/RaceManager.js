class RaceManager {
  constructor(gameResultObj) {
    this.gameResultObj = gameResultObj;
    this.baseNumberForCalculate = 3;
    this.resultMessage = '';
  }

  runRace() {}

  moveCar(randomNumberForMove) {
    return randomNumberForMove > this.baseNumberForCalculate ? '-' : '';
  }
}

export default RaceManager;
