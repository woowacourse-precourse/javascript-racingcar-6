class RaceManager {
  constructor(userInputCarsArr, arrForRace) {
    // this.gameInformationArr = gameInformationArr;
    this.userInputCarsArr = userInputCarsArr;
    this.arrForRace = arrForRace;
    this.baseNumberForCalculate = 3;
    this.resultMessage = '';
    this.arrForAnswer = [];
  }

  runRace() {
    for (let i = 0; i < this.arrForRace.length; i++) {
      let resultPerRace = '';
      const resultPerRaceArr = [];

      for (let j = 0; j < this.arrForRace[i].length; j++) {
        this.moveCar(this.arrForRace[i][j])
          ? (resultPerRace += '-')
          : (resultPerRace += '');
        resultPerRaceArr.push(resultPerRace);
      }
      this.arrForAnswer.push(resultPerRaceArr);
    }

    for (let k = 0; k < this.arrForAnswer[0].length; k++) {
      for (let l = 0; l < this.arrForAnswer.length; l++) {
        this.resultMessage += `${this.userInputCarsArr[l]} : ${this.arrForAnswer[l][k]}\n`;
      }
      this.resultMessage += '\n';
    }

    return this.resultMessage;
  }

  moveCar(randomNumberForMove) {
    return randomNumberForMove > this.baseNumberForCalculate ? true : false;
  }
}

export default RaceManager;
