import { MissionUtils } from "@woowacourse/mission-utils";
import Car from "./Car";

class CarRace {
  constructor(carsName) {
    this.cars = carsName.map((item) => new Car(item));
  }
  play() {
    this.cars.forEach((car) => {
      car.move();
    });
  }
  showResult() {
    this.cars.forEach((car) => {
      MissionUtils.Console.print(`${car.name} : ${car.track}`);
    });
  }
  checkWinner() {
    let maxTrack = 0;
    const winners = [];
    this.cars.forEach((car) => {
      if (maxTrack < car.track.length) {
        maxTrack = car.track;
      }
    });
    this.cars.forEach((car) => {
      if (maxTrack === car.track) {
        winners.push(car);
      }
    });
    return winners;
  }
  showWinner() {
    const winners = this.checkWinner();
    MissionUtils.Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }
}

export default CarRace;
