import { Console, Random } from "@woowacourse/mission-utils";
import { MESSAGES } from "./const/messages.js";

class App {
  async play() {
    const CARS = await this.getNameInput();
    let count = await this.getCountInput();

    let currentCars = CARS.reduce((acc, car) => {
      return {...acc, [car]: 0}
    }, {})
    
    while (count > 0) {
      const movedCars = this.moveCars(CARS);
      currentCars = {...currentCars, ...this.addMovedCars(currentCars, movedCars)};
      this.printCurrent(currentCars);
      count -= 1;
    }

    this.judgeWinner(currentCars);
  }

  async getNameInput() {
    let names = await Console.readLineAsync(MESSAGES.writeNames);
    names = names.split(',');
    this.checkNameInput(names);
    return names;
  }

  checkNameInput(names) {
    names.forEach((name) => {
      if(name.length > 5) throw new Error(MESSAGES.nameLengthError);
    });
  }

  async getCountInput() {
    let count = await Console.readLineAsync(MESSAGES.writeCount);
    count = parseInt(count);
    this.checkCountInput(count);
    return count;
  }

  checkCountInput(count) {
    if(isNaN(count)) throw new Error(MESSAGES.numberError);
  }   

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

  judgeWinner(currentCars) {
    const highestScore = Math.max(...Object.values(currentCars));
    let winner = Object.keys(currentCars).filter((car) => currentCars[car] === highestScore).join(', ');
    this.printWinner(winner);
  }

  printWinner(winner) {
    Console.print(`${MESSAGES.finalWinner}${winner}`);
  }
}

export default App;