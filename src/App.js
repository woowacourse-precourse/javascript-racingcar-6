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
    if(randomNumber >= 4) element.result.concat('-');
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
      this.countRepeat++;
    }

  }
}

export default App;
