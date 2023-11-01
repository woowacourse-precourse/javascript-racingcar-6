import { Console, Random } from '@woowacourse/mission-utils';
import { MESSAGES } from './messages.js';
import { validateCarNamesInput, validateNumberOfAttemptsInput } from './validation.js';

class App {
  async play() {
    const input = await Console.readLineAsync(MESSAGES.CAR_NAME);
    const cars = input.split(',');

    validateCarNamesInput(cars);

    const carMap = new Map();
    cars.forEach((car) => carMap.set(car, 0));

    const numberOfAttempts = await Console.readLineAsync(MESSAGES.NUMBER_OF_ATTEMPTS);

    validateNumberOfAttemptsInput(numberOfAttempts);
    Console.print(MESSAGES.RESULT);

    [...Array(parseInt(numberOfAttempts))].forEach(() => {
      cars.forEach((car) => {
        const randomNum = Random.pickNumberInRange(0, 9);

        if (randomNum >= 4) {
          carMap.set(car, carMap.get(car) + 1);
        }

        Console.print(`${car} : ${'-'.repeat(carMap.get(car))}`);
      });
      Console.print('\n');
    });

    const winners = [];
    const sortCars = [...carMap].sort((a, b) => b[1] - a[1]);
    const max = sortCars[0][1];

    sortCars.forEach(([car, cnt]) => {
      if (cnt === max) {
        winners.push(car);
      }
    });

    Console.print(MESSAGES.WINNER.concat(winners.join(', ')));
  }
}

export default App;
