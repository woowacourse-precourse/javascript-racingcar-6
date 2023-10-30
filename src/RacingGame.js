import { Console } from '@woowacourse/mission-utils';
import { Dice } from './Dice.js';

export class RacingGame {
  constructor() {
    this.dice = new Dice();
  }
  play(gameCount, cars) {
    const initializedCars = this.initializeScore(cars);
    let previousResult = initializedCars;
    for (let i = 0; i < gameCount; i++) {
      const scores = this.getScore(cars);
      const result = this.validateScores(scores, previousResult);
      previousResult = result;
    }
    this.printScores(previousResult);
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
