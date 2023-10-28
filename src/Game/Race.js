import { MissionUtils } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/index.js';

export class Race {
  constructor(CARS, ROUNDS) {
    this.cars = CARS;
    this.rounds = ROUNDS;
  }

  runRace() {
    MissionUtils.Console.print(MESSAGE.roundResult);
    for (let i = 0; i < this.rounds; i++) {
      this.cars.forEach(car => {
        const NAME = car[0];
        let steps = car[1];
        if (choiceGoOrStop()) {
          steps += '-';
        }
        MissionUtils.Console.print(`${NAME} : ${steps}`);
        car[1] = steps;
      });
      MissionUtils.Console.print(`\n`);
    }

    const winner = this.decideWinner();
    MissionUtils.Console.print(`${MESSAGE.winnerResult}${winner}`);

    function choiceGoOrStop() {
      const DICE = MissionUtils.Random.pickNumberInRange(0, 9);
      if (DICE >= 4) {
        return true;
      } else {
        return false;
      }
    }
  }

  decideWinner() {
    let winner = '';
    let maxSteps = 0;
    this.cars.forEach(car => {
      if (car[1].length > maxSteps) {
        winner = car[0];
        maxSteps = car[1].length;
      } else if (car[1].length === maxSteps) {
        winner += `, ${car[0]}`;
      }
    });
  }
}
