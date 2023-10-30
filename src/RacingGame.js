import { Console } from '@woowacourse/mission-utils';
import { Dice } from './Dice.js';

export class RacingGame {
  constructor() {
    this.dice = new Dice();
  }
  play(gameCount, cars) {
    const initializedCars = this.initializeScore(cars);
    const scores = this.getScore(initializedCars);
    const result = this.validateScores(scores, initializedCars);
    this.printScores(result);
  }

  initializeScore(cars) {
    const initialized = {};
    cars.forEach((car) => (initialized[car] = 0));
    return initialized;
  }

  getScore(cars) {
    const scores = {};
    Object.keys(cars).forEach((car) => (scores[car] = this.dice.roll()));
    return scores;
  }

  validateScores(scores, previousResult) {
    Object.keys(scores).forEach((car) => {
      const score = scores[car];
      if (score >= 4) previousResult[car] += 1;
    });
    return previousResult;
  }

  printScores(result) {
    Object.keys(result).forEach((car) => {
      const score = '-'.repeat(result[car]);
      Console.print(`${car} : ${score}`);
    });
  }
}
