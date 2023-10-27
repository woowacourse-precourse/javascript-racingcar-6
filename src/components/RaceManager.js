import { Console } from '@woowacourse/mission-utils';

class RaceManager {
  constructor(userInputCarsArr, arrForRace) {
    // this.gameInformationArr = gameInformationArr;
    this.userInputCarsArr = userInputCarsArr;
    this.arrForRace = arrForRace;
    this.lengthOfArr = arrForRace[0].length;
    this.baseNumberForCalculate = 3;
    this.resultMessage = '';
    this.arrForAnswer = [];
    this.objForLastTry = {};
    this.keysWithMaxValue = null;
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

      if (k < this.lengthOfArr - 1) {
        this.resultMessage += '\n';
      }
    }

    for (let m = 0; m < this.arrForAnswer.length; m++) {
      if (this.arrForAnswer[m][this.lengthOfArr - 1]) {
        this.objForLastTry[this.userInputCarsArr[m]] =
          this.arrForAnswer[m][this.lengthOfArr - 1].length;
      }
    }

    this.keysWithMaxValue = Object.keys(this.objForLastTry).filter(
      (key) =>
        this.objForLastTry[key] ===
        Math.max(...Object.values(this.objForLastTry))
    );

    return [this.resultMessage, this.keysWithMaxValue.join(', ')];
  }

  moveCar(randomNumberForMove) {
    return randomNumberForMove > this.baseNumberForCalculate ? true : false;
  }
}

export default RaceManager;
