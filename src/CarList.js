import { Console } from "@woowacourse/mission-utils";
import Car from "./Car.js";
import MESSAGE from "./constants/message.js";

class CarList {
  cars = [];
  maxScore = -1;

  async setCarList(carInput) {
    const carInputArray = carInput.split(",");
    carInputArray.map((data) => {
      if (data.length > 5) throw new Error(MESSAGE.OVER_NAMELENGTH_MSG);
    });
    carInputArray.map((carName) => this.cars.push(new Car(carName)));
  }

  getCarList() {
    return this.cars;
  }

  printCarListScore(tryNumber) {
    Array.from({ length: tryNumber }).map(() => {
      this.cars.map((car) => {
        car.printScore();
      });
      Console.print("");
    });
  }

  printFinalResult() {
    this.cars.map((data) => (this.maxScore = Math.max(this.maxScore, data.score)));
    const result = this.cars.filter((data) => this.maxScore === data.score);
    const lastWinner = result.map((data) => data.name).join(", ");
    Console.print(`최종 우승자 : ${lastWinner}`);
  }
}

export default CarList;
