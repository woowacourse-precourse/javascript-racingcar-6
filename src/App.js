import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.countRepeat = 0;
    this.raceResultArray = [];
  }

  getUserCarNamesArray(userCarNames) {
    return userCarNames.split(",");
  }

  checkUserCarNames(userCarNamesArray) {
    userCarNamesArray.forEach((element) => {
      if (element.length > 5)
        throw new Error("[ERROR] 자동차 이름은 5자 이하로 작성해주세요.");
    });
  }

  checkRepeatNumber(repeatNumber) {
    if (isNaN(repeatNumber)) throw new Error("[ERROR] 숫자를 입력해주세요.");
    if (repeatNumber.includes(" "))
      throw new Error("[ERROR] 공백은 넣지 말아주세요.");
  }

  makeCarObject(carName) {
    const carObject = {
      name: carName,
      result: "",
    };
    this.raceResultArray.push(carObject);
  }

  makeCarGoForwardOrStop(raceResultArray) {
    raceResultArray.forEach((element) => {
      const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
      element = this.changeCarObjectByRandomNumber(element, randomNumber);
    });
    return raceResultArray;
  }

  changeCarObjectByRandomNumber(element, randomNumber) {
    if (randomNumber >= 4) {
      element.result = element.result.concat("-");
    }
  }

  printCarRaceResult(raceResultArray) {
    raceResultArray.forEach((e) => {
      MissionUtils.Console.print(`${e.name} : ${e.result}\n`);
    });
    MissionUtils.Console.print("\n");
  }

  findNumberThatWentForward(raceResultArray) {
    const forwardNumberArray = [];
    raceResultArray.forEach((element) => {
      forwardNumberArray.push(element.result.length);
    });
    return forwardNumberArray;
  }

  pushWinnerIndexToArray(element, index, winnerIndexMaxNumber, winnerIndex) {
    if (winnerIndexMaxNumber === element.result.length) {
      winnerIndex.push(index);
    }
    return winnerIndex;
  }

  makeCarRaceWinnerIndexArray(raceResultArray, winnerIndexMaxNumber) {
    let winnerIndex = [];
    raceResultArray.forEach((element, index) => {
      winnerIndex = this.pushWinnerIndexToArray(
        element,
        index,
        winnerIndexMaxNumber,
        winnerIndex
      );
    });
    return winnerIndex;
  }

  findCarRaceWinnerIndexMax(forwardNumberArray) {
    return Math.max(...forwardNumberArray);
  }

  pushWinnerNameToArray(element, index, winnerIndexArray, winnerNameArray) {
    if (winnerIndexArray.includes(index)) {
      winnerNameArray.push(element.name);
    }
    return winnerNameArray;
  }

  makeCarRaceWinnerArray(raceResultArray, winnerIndexArray) {
    let winnerNameArray = [];
    raceResultArray.forEach((element, index) => {
      winnerNameArray = this.pushWinnerNameToArray(
        element,
        index,
        winnerIndexArray,
        winnerNameArray
      );
    });
    return winnerNameArray;
  }

  checkCarRaceWinner(raceResultArray) {
    /* 한 자동차당 전진한 수를 구하는 함수 */
    const forwardNumberArray = this.findNumberThatWentForward(raceResultArray);
    const winnerIndexMaxNumber =
      this.findCarRaceWinnerIndexMax(forwardNumberArray);
    const winnerIndexArray = this.makeCarRaceWinnerIndexArray(
      raceResultArray,
      winnerIndexMaxNumber
    );
    const carRaceWinnerArray = this.makeCarRaceWinnerArray(
      raceResultArray,
      winnerIndexArray
    );
    return carRaceWinnerArray;
  }

  printCarRaceWinner(carRaceWinnerNameArray) {
    const winnerNameString = carRaceWinnerNameArray.join(", ");
    MissionUtils.Console.print(`최종 우승자 : ${winnerNameString}`);
  }

  async play() {
    const userCarNames = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    const userCarNamesArray = this.getUserCarNamesArray(userCarNames);
    this.checkUserCarNames(userCarNamesArray);
    const repeatNumber = await MissionUtils.Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );
    this.checkRepeatNumber(repeatNumber);
    userCarNamesArray.forEach((element) => {
      this.makeCarObject(element);
    });
    while (this.countRepeat < repeatNumber) {
      this.raceResultArray = this.makeCarGoForwardOrStop(this.raceResultArray);
      this.printCarRaceResult(this.raceResultArray);
      this.countRepeat++;
    }
    const carRaceWinnerNameArray = this.checkCarRaceWinner(
      this.raceResultArray
    );
    this.printCarRaceWinner(carRaceWinnerNameArray);
  }
}

export default App;
