import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.countRepeat = 0;
    this.raceResult = [];
  }

  getCarNamesArray(carNames) {
    return carNames.split(",");
  }

  checkCarNames(carNamesArray) {
    carNamesArray.forEach((element) => {
      if (element.length > 5)
        throw new Error("[ERROR] 자동차 이름은 5자 이하로 작성해주세요.");
    });
  }

  checkRepeatNumber(repeatNumber) {
    if (isNaN(repeatNumber)) throw new Error("[ERROR] 숫자를 입력해주세요.");
    if (repeatNumber.includes(" "))
      throw new Error("[ERROR] 공백은 넣지 말아주세요.");
  }

  makeObject(carName) {
    const carObject = {
      name: carName,
      result: "",
    };
    this.raceResult.push(carObject);
  }

  makeRandomNumber(raceResult) {
    raceResult.forEach((element) => {
      const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
      element = this.goForward(element, randomNumber);
    });
    return raceResult;
  }

  goForward(element, randomNumber) {
    if (randomNumber >= 4) {
      element.result = element.result.concat("-");
    }
  }

  printResult(raceResult) {
    raceResult.forEach((e) => {
      MissionUtils.Console.print(`${e.name} : ${e.result}\n`);
    });
    MissionUtils.Console.print("\n");
  }

  findlength(raceResult) {
    const lengthArray = [];
    raceResult.forEach((element) => {
      lengthArray.push(element.result.length);
    });
    return lengthArray;
  }

  getWinnerIndex(element, index, maxLength, winnerIndex) {
    if (maxLength === element.result.length) {
      winnerIndex.push(index);
    }
    return winnerIndex;
  }

  makeWinnerIndexArray(raceResult, maxLength) {
    let winnerIndex = [];
    raceResult.forEach((element, index) => {
      winnerIndex = this.getWinnerIndex(element, index, maxLength, winnerIndex);
    });
    return winnerIndex;
  }

  findMaxLength(lengthArray) {
    return Math.max(...lengthArray);
  }

  pushWinnerName(element, index, winnerIndexArray, winnerName) {
    if (winnerIndexArray.includes(index)) {
      winnerName.push(element.name);
    }
    return winnerName;
  }

  makeWinnerArray(raceResult, winnerIndexArray) {
    let winnerName = [];
    raceResult.forEach((element, index) => {
      winnerName = this.pushWinnerName(
        element,
        index,
        winnerIndexArray,
        winnerName
      );
    });
    return winnerName;
  }

  checkWinner(raceResult) {
    /* 한 자동차당 전진한 수를 구하는 함수 */
    const lengthArray = this.findlength(raceResult);
    const maxLength = this.findMaxLength(lengthArray);
    const winnerIndexArray = this.makeWinnerIndexArray(raceResult, maxLength);
    const winnerArray = this.makeWinnerArray(raceResult, winnerIndexArray);
    return winnerArray;
  }

  printWinner(winnerName) {
    const winnerNameString = winnerName.join(", ");
    MissionUtils.Console.print(`최종 우승자 : ${winnerNameString}`);
  }

  async play() {
    const carNames = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    const carNamesArray = this.getCarNamesArray(carNames);
    this.checkCarNames(carNamesArray);
    const repeatNumber = await MissionUtils.Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );
    this.checkRepeatNumber(repeatNumber);
    carNamesArray.forEach((element) => {
      this.makeObject(element);
    });
    while (this.countRepeat < repeatNumber) {
      this.raceResult = this.makeRandomNumber(this.raceResult);
      this.printResult(this.raceResult);
      this.countRepeat++;
    }
    const winnerName = this.checkWinner(this.raceResult);
    this.printWinner(winnerName);
  }
}

export default App;
