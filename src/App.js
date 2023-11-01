import { Console, Random } from '@woowacourse/mission-utils';
import { MESSAGES } from './messages.js';
import { validateCarNamesInput, validateNumberOfAttemptsInput } from './validation.js';

class App {
  async play() {
    await Console.readLineAsync(MESSAGES.CAR_NAME).then(async (cars) => {
      const carArr = cars.split(',');

      validateCarNamesInput(carArr);

      const map = new Map();
      carArr.forEach((car) => map.set(car, 0));

      await Console.readLineAsync(MESSAGES.NUMBER_OF_ATTEMPTS).then((attemptsNumber) => {
        validateNumberOfAttemptsInput(attemptsNumber);

        Console.print(MESSAGES.RESULT);

        [...Array(parseInt(attemptsNumber))].forEach(() => {
          carArr.forEach((car) => {
            const randomNum = Random.pickNumberInRange(0, 9);
            if (randomNum >= 4) {
              map.set(car, map.get(car) + 1);
            }

            Console.print(`${car} : ${'-'.repeat(map.get(car))}`);
          });
          Console.print('\n');
        });

        const winners = [];
        const sortCars = [...map].sort((a, b) => b[1] - a[1]);
        const max = sortCars[0][1];

        sortCars.forEach(([car, carNum]) => {
          if (carNum === max) {
            winners.push(car);
          }
        });

        Console.print(MESSAGES.WINNER.concat(winners.join(', ')));
      });
    });
  }
}

export default App;
