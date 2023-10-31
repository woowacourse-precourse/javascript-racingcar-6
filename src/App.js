import { Console, Random } from '@woowacourse/mission-utils';
import Car from './Car.js';
import {
  ERROR_MESSAGES,
  MAX_NAME_LENGTH,
  MESSAGES,
  MIN_RACE_COUNT,
  MOVE_THRESHOLD,
  RANDOM_MAX,
  RANDOM_MIN,
} from './constant.js';

class App {
  async getUserInput() {
    const userInput = await Console.readLineAsync(MESSAGES.INPUT_CAR_NAMES);
    return userInput.split(',');
  }

  checkInputValid(array) {
    for (let name of array) {
      if (name.length > MAX_NAME_LENGTH) {
        throw new Error(ERROR_MESSAGES.OVER_MAX_NAME);
      } else if (name.length === 0) {
        throw new Error(ERROR_MESSAGES.NO_NAME);
      }
    }
  }

  async getCounts() {
    return parseInt(await Console.readLineAsync(MESSAGES.INPUT_RACING_COUNT));
  }

  checkCountValid(number) {
    if (isNaN(number)) {
      throw new Error(ERROR_MESSAGES.INVALID_NUMBER);
    } else if (!Number.isInteger(number) || number < MIN_RACE_COUNT) {
      throw new Error(ERROR_MESSAGES.NO_INTEGER);
    } else {
      return number;
    }
  }

  createCars(names) {
    return names.map(name => new Car(name));
  }

  executeRacing(cars, count) {
    Console.print('실행 결과');
    while (count > 0) {
      this.moveCarsRandomly(cars);
      this.printCarsPosition(cars);
      Console.print('\n');
      count--;
    }
    return cars;
  }

  moveCarsRandomly(cars) {
    for (let car of cars) {
      let randomNumber = Random.pickNumberInRange(RANDOM_MIN, RANDOM_MAX);
      if (randomNumber >= MOVE_THRESHOLD) {
        car.position++;
      }
    }
    return cars;
  }

  printCarsPosition(cars) {
    for (let car of cars) {
      Console.print(`${car.name} : ${'-'.repeat(car.position)}`);
    }
  }

  printWinner(cars) {
    const maxPosition = Math.max(...cars.map(car => car.position));
    const winners = [];

    for (let car of cars) {
      if (car.position === maxPosition) winners.push(car.name);
    }

    if (winners.length === 0) {
      Console.print('우승자가 없습니다.');
    } else if (winners.length === 1) {
      Console.print(`최종 우승자 : ${winners[0]}`);
    } else {
      Console.print(`최종 우승자 : ${winners.join(', ')}`);
    }
  }

  async play() {
    const names = await this.getUserInput();
    this.checkInputValid(names);
    const count = await this.getCounts();
    this.checkCountValid(count);
    const cars = this.createCars(names);
    this.executeRacing(cars, count);
    this.printWinner(cars);
  }
}

export default App;
