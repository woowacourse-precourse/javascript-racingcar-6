import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.countRepeat = 0;
    this.raceResultArray = [];
  }

  getUserCarNamesArray(userCarNames) {
    return userCarNames.split(',');
  }

  checkUserCarNames(userCarNamesArray) {
    userCarNamesArray.forEach((element) => {
      if(element.length > 5) throw new Error('[ERROR] 자동차 이름은 5자 이하로 작성해주세요.');
    });
  }

  checkRepeatNumber(repeatNumber) {
    if(isNaN(repeatNumber)) throw new Error('[ERROR] 숫자를 입력해주세요.');
    if(repeatNumber.includes(' ')) throw new Error('[ERROR] 공백은 넣지 말아주세요.');
  }

  makeCarObject(carName){
    const carObject = {
      name: carName,
      result: '',
    }
    this.raceResultArray.push(carObject);
  }

  makeCarGoForwardOrStop(raceResultArray) {
    raceResultArray.forEach((element) => {
      const randomNumber = MissionUtils.Random.pickNumberInRange(0,9);
      element = this.changeCarObjectByRandomNumber(element, randomNumber);
    });
    return raceResultArray;
  }

  changeCarObjectByRandomNumber(element, randomNumber) {
    if(randomNumber >= 4) {
      element.result = element.result.concat('-');
    }
  }

  printCarRaceResult(raceResultArray) {
    raceResultArray.forEach((e) => {
      MissionUtils.Console.print(`${e.name} : ${e.result}\n`);
    });
    MissionUtils.Console.print('\n');
  }

  findNumberThatWentForward(raceResultArray) {
    const forwardNumberArray = [];
    raceResultArray.forEach((element) => {
      forwardNumberArray.push(element.result.length);
    });
    return forwardNumberArray;
  }

  findCarRaceWinner(forwardNumberArray) {
    const winnerIndexArray = [];
    const forwardMaxNumber = Math.max(forwardNumberArray);
    forwardNumberArray.forEach((element, index) => {
      if(forwardMaxNumber === element.result.max) {
        winnerIndexArray.push(index);
      }
    });
    return winnerIndexArray;
  }

  makeCarRaceArray(raceResultArray, winnerIndexArray) {
    const carRaceWinnerArray = [];
    raceResultArray.forEach((element, index) => {
      if(winnerIndexArray.includes(index)) {
        carRaceWinnerArray.push(element);
      }
    });
    return carRaceWinnerArray;
  }

  checkCarRaceWinner(raceResultArray) {
    /* 한 자동차당 전진한 수를 구하는 함수 */
    const forwardNumberArray = this.findNumberThatWentForward(raceResultArray);
    const winnerIndexArray = this.findCarRaceWinner(forwardNumberArray);
    const carRaceWinnerArray = this.makeCarRaceArray(raceResultArray, winnerIndexArray);
    return carRaceWinnerArray;
  }

  async play() {
    const userCarNames = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
    const userCarNamesArray = this.getUserCarNamesArray(userCarNames);
    this.checkUserCarNames(userCarNamesArray);
    const repeatNumber = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    this.checkRepeatNumber(repeatNumber);
    userCarNamesArray.forEach((element) => { this.makeCarObject(element); });
    while(this.countRepeat < repeatNumber) {
      this.raceResultArray = this.makeCarGoForwardOrStop(this.raceResultArray);
      this.printCarRaceResult(this.raceResultArray);
      this.countRepeat++;
    }
    const carRaceWinnerArray = this.checkCarRaceWinner(this.raceResultArray);    
  }
}

export default App;