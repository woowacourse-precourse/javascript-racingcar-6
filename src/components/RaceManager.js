class RaceManager {
  constructor(arrForRace) {
    // this.gameInformationArr = gameInformationArr;
    this.arrForRace = arrForRace;
    this.baseNumberForCalculate = 3;
    this.resultMessage = '';
  }

  runRace() {}

  moveCar(randomNumberForMove) {
    return randomNumberForMove > this.baseNumberForCalculate ? '-' : '';
  }
}

export default RaceManager;
