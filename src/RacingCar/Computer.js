import { Console, Random } from "@woowacourse/mission-utils";

class Computer {
  moveCars(cars) {
    const movedCars = {};
    cars.forEach((car) => {
      const RANDOM_NUMBER = this.createRandomNumber();
      if(RANDOM_NUMBER >= 4) movedCars[car] = 1;
    });
    return movedCars;
  }
  
  createRandomNumber() {
    const RANDOM_NUMBER = Random.pickNumberInRange(0, 9);
    return RANDOM_NUMBER;
  }

  addMovedCars(currentCars, movedCars) {
    Object.keys(movedCars).forEach((car) => {
      currentCars[car] += movedCars[car]
    });
    return currentCars;
  }

  printCurrent(currentCars) {
    Object.keys(currentCars).forEach((car) => {
      Console.print(`${car} : ${'-'.repeat(currentCars[car])}`);
    })
    Console.print('\n');
  }
}

export default Computer;