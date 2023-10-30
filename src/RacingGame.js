import { Console } from '@woowacourse/mission-utils';
import { Dice } from './Dice.js';
import { Judge } from './Judge.js';

export class RacingGame {
  constructor() {
    this.dice = new Dice();
    this.judge = new Judge();
  }
  play(gameCount, cars) {
    const initializedCars = this.initializeScore(cars);
    let totalScores = initializedCars;
    for (let i = 0; i < gameCount; i++) {
      const scores = this.getScore(cars);
      const result = this.validateScores(scores, totalScores);
      this.printScores(result);
      totalScores = result;
    }
    this.judge.decideWinner(totalScores);
  }

  initializeScore(cars) {
    const initialized = {};
    cars.forEach((car) => (initialized[car] = 0));
    return initialized;
  }

  getScore(cars) {
    const scores = {};
    cars.forEach((car) => (scores[car] = this.dice.roll()));
    return scores;
  }

  validateScores(scores, totalScores) {
    Object.keys(scores).forEach((car) => {
      const score = scores[car];
      if (score >= 4) totalScores[car] += 1;
    });
    return totalScores;
  }

  printScores(result) {
    Object.keys(result).forEach((car) => {
      const score = '-'.repeat(result[car]);
      Console.print(`${car} : ${score}`);
    });
    Console.print('\n');
  }
}
