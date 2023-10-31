import { MissionUtils, Console } from "@woowacourse/mission-utils";
import { GAME_INFO } from "./constant.js";

class App {
  constructor() {
    this._carArr = [];
    this._tryNumber = 0;
    this.racingArray = [];
  }

  async play() {
    await this.getInputCar();
    await this.getInputTry();
    await this.createRacingArray();
    await this.playRacing();
  }

  async getInputCar() {
    const carName = await Console.readLineAsync(GAME_INFO.INPUT_CAR);
    this.carArr = carName.split(",");
  }

  set carArr(car) {
    car = car.map((carName) => carName.replace(/\s/g, ""));

    if (car.some((carName) => carName.length > 6)) {
      throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
    }

    this._carArr = car;
  }

  get carArr() {
    return this._carArr;
  }

  async getInputTry() {
    this.tryNumber = await Console.readLineAsync(GAME_INFO.INPUT_TRY);
  }

  set tryNumber(tryValue) {
    tryValue = Number(tryValue);
    if (tryValue === 0) {
      throw new Error("[ERROR] 1회 이상 시도해야 합니다.");
    }

    if (isNaN(tryValue)) {
      throw new Error("[ERROR] 시도 횟수는 숫자여야 합니다.");
    }

    this._tryNumber = tryValue;
  }

  get tryNumber() {
    return this._tryNumber;
  }

  getRandomNumber() {
    const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    return randomNumber;
  }

  forwardOrStop() {
    const isForward = this.getRandomNumber() > 3;
    return isForward;
  }

  goForward() {
    return this.forwardOrStop() ? "-" : "";
  }

  createRacingArray() {
    const carCount = this.carArr.length;
    this.racingArray = Array.from({ length: carCount }, () => "");
    return this.racingArray;
  }

  racingSituationArray(carIndex) {
    this.racingArray[carIndex] += this.goForward();
    return this.racingArray[carIndex];
  }

  showCarAndRacingLength(carIndex) {
    Console.print(`${this.carArr[carIndex]} : ${this.racingArray[carIndex]}`);
  }

  async oneCycleRacing() {
    for (let i = 0; i < this.carArr.length; i++) {
      await this.racingSituationArray(i);
      await this.showCarAndRacingLength(i);
    }
    Console.print(" ");
  }

  async playRacing() {
    Console.print(GAME_INFO.GAME_RESULT);
    for (let i = 0; i < this.tryNumber; i++) {
      await this.oneCycleRacing();
    }
    await this.showWinner();
  }

  getWinner() {
    this.racingArray = this.racingArray.map((x) => x.length);
    const maxRacingLength = Math.max(...this.racingArray);

    const winnerRacers = [];
    this.racingArray.forEach((length, index) => {
      if (length === maxRacingLength) {
        winnerRacers.push(index);
      }
    });

    const winnerRacersName = [
      ...winnerRacers.map((index) => this.carArr[index]),
    ];
    return winnerRacersName.join(", ");
  }

  showWinner() {
    Console.print(`최종 우승자 : ${this.getWinner()}`);
  }
}

export default App;
