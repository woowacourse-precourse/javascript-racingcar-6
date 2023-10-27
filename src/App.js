import { attemptsInput, carNamesInput } from './helpers/userInput.js';

import { Console } from '@woowacourse/mission-utils';
import Race from './Race.js';

class App {
  async play() {
    const carNameList = await carNamesInput();
    const numberOfAttempts = await attemptsInput();

    const racingCarItem = new Race(carNameList, numberOfAttempts);
    racingCarItem.startRace();

    const findWinner = () => {
      let maxNumber = -Infinity;
      let winners = [];
      for (const car of racingCarItem.cars) {
        const moveCountResult = car.position;
        if (moveCountResult > maxNumber) {
          maxNumber = moveCountResult;
          winners = [car];
        } else if (moveCountResult === maxNumber) {
          winners.push(car);
        }
      }
      return winners;
    };

    const winnerNames = [...findWinner()].map((i) => i.name);
    Console.print(`최종 우승자 : ${winnerNames}`);
  }
}

export default App;
