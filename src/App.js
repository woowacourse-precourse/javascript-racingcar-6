import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.name = "";
    this.turn = 0;
    this.cars = {};
  }

  showRaceStartMessage() {
    Console.print("\n실행 결과");
  }
  showCarsRacing() {
    for (let item in this.cars) {
      Console.print(`${item} : ${this.cars[item]}`);
    }
    Console.print("\n");
  }
  showRaceWinnerMessage() {
    const raceResult = Object.values(this.cars);
    const winners = [];
    let winnerResult = 0;
    for (let i = 0; i < raceResult.length; i++) {
      if (raceResult[i].length > winnerResult) {
        winnerResult = raceResult[i].length;
      }
    }
    for (let item in this.cars) {
      let length = this.cars[item].length;
      if (length == winnerResult) {
        winners.push(item);
      }
    }
    Console.print(`최종 우승자 : ${winners.join(",")}`);
  }
  splitRacingCarBy(ch) {
    const racingCars = this.name.split(ch);
    for (let i = 0; i < racingCars.length; i++) {
      const name = racingCars[i];
      this.validateUserRacingCars(name);
      this.cars[name] = "";
    }
  }

  get getRandomNumber() {
    return MissionUtils.Random.pickNumberInRange(0, 9);
  }
  get isMoveForward() {
    if (this.getRandomNumber >= 4) {
      return 1;
    }
    return 0;
  }

  moveForward(racingCar) {
    if (this.isMoveForward) {
      this.cars[racingCar] += "-";
    }
  }

  race() {
    const racingCars = Object.keys(this.cars);
    for (let i = 0; i < racingCars.length; i++) {
      const racingCar = racingCars[i];
      this.moveForward(racingCar);
    }
  }

  async play() {}
}
const app = new App();
app.play();

export default App;
