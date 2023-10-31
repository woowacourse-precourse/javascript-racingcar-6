import { Random, Console } from "@woowacourse/mission-utils";
import { MESSAGE, NUMBER } from "./constant.js";
import Car from "./Car.js";

class Computer {
  static pickRandomNumber() {
    const pickedNumber = Random.pickNumberInRange(
      NUMBER.MIN_RANDOM_PICK,
      NUMBER.MAX_RANDOM_PICK,
    );
    return pickedNumber;
  }

  static generateCars(carNameList) {
    const cars = carNameList.map((carName) => {
      return new Car(carName);
    });
    return cars;
  }

  static runRace(cars, attempts) {
    Console.print(MESSAGE.RACE_RESULT);
    let lap = 1;
    while (lap <= attempts) {
      Computer.runLap(cars);
      Computer.printCurrentStatus(cars);
      Console.print("\n");
      lap += 1;
    }
  }

  static runLap(cars) {
    cars.forEach((car) => {
      const pickedNumber = Computer.pickRandomNumber();
      Computer.evaluateGoOrStop(car, pickedNumber);
    });
  }

  static evaluateGoOrStop(car, pickedNumber) {
    if (pickedNumber >= NUMBER.CAN_FORWARD) {
      car.forward();
    }
  }

  static printCurrentStatus(cars) {
    cars.forEach((car) => {
      const currentStatus = `${car.name} : `.concat("-".repeat(car.location));
      Console.print(currentStatus);
    });
  }
}

export default Computer;
