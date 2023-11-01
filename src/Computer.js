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
      const currentStatus = `${car.name} : `.concat("-".repeat(car.position));
      Console.print(currentStatus);
    });
  }

  static printRaceResult(cars) {
    const winnerArray = Computer.findWinner(cars);
    const winnerName = Computer.makeWinnerString(winnerArray);
    const finalMessage = MESSAGE.FINAL_WINNER_MESSAGE.concat(winnerName);
    Console.print(finalMessage);
  }

  static findWinner(cars) {
    let winnerArray = [cars[0].name];
    let maxPositionValue = cars[0].position;

    for (let i = 1; i < cars.length; i += 1) {
      if (cars[i].position > maxPositionValue) {
        maxPositionValue = cars[i].position;
        winnerArray = [cars[i].name];
      } else if (cars[i].position === maxPositionValue) {
        winnerArray.push(cars[i].name);
      }
    }
    return winnerArray;
  }

  static makeWinnerString(winnerArray) {
    if (winnerArray.length > 1) {
      const winnerString = winnerArray.join(", ");
      return winnerString;
    }

    if (winnerArray.length === 1) {
      const winnerString = winnerArray[0];
      return winnerString;
    }

    return null;
  }
}

export default Computer;
