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

  async play() {
    const userCarNames = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
    const userCarNamesArray = this.getUserCarNamesArray(userCarNames);
    this.checkUserCarNames(userCarNamesArray);
    const repeatNumber = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    this.checkRepeatNumber(repeatNumber);
    userCarNamesArray.forEach((element) => {
      this.makeCarObject(element);
    });
  }
}

export default App;
