import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.countRepeat = 0;
    this.raceResultArray = [];
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
    this.raceResultArray.push(carObject);
  }

  makeRandomNumber(raceResultArray) {
    raceResultArray.forEach((element) => {
      const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
      element = this.goForward(element, randomNumber);
    });
    return raceResultArray;
  }

  goForward(element, randomNumber) {
    if (randomNumber >= 4) {
      element.result = element.result.concat("-");
    }
  }

  printResult(raceResultArray) {
    raceResultArray.forEach((e) => {
      MissionUtils.Console.print(`${e.name} : ${e.result}\n`);
    });
    MissionUtils.Console.print("\n");
  }

  findlengthArray(raceResultArray) {
    const lengthArray = [];
    raceResultArray.forEach((element) => {
      lengthArray.push(element.result.length);
    });
    return lengthArray;
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

  findCarRaceWinnerIndexMax(lengthArray) {
    return Math.max(...lengthArray);
  }

  pushWinnerName(element, index, winnerIndexArray, winnerNameArray) {
    if (winnerIndexArray.includes(index)) {
      winnerNameArray.push(element.name);
    }
    return winnerNameArray;
  }

  makeCarRaceWinnerArray(raceResultArray, winnerIndexArray) {
    let winnerNameArray = [];
    raceResultArray.forEach((element, index) => {
      winnerNameArray = this.pushWinnerName(
        element,
        index,
        winnerIndexArray,
        winnerNameArray
      );
    });
    return winnerNameArray;
  }

  checkWinner(raceResultArray) {
    /* 한 자동차당 전진한 수를 구하는 함수 */
    const lengthArray = this.findlength(raceResultArray);
    const winnerIndexMaxNumber = this.findCarRaceWinnerIndexMax(lengthArray);
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

  printWinner(winnerNameArray) {
    const winnerNameString = winnerNameArray.join(", ");
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
      this.raceResultArray = this.makeRandomNumber(this.raceResultArray);
      this.printResult(this.raceResultArray);
      this.countRepeat++;
    }
    const winnerNameArray = this.checkWinner(this.raceResultArray);
    this.printWinner(winnerNameArray);
  }
}

export default App;
