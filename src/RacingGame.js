import { Console } from '@woowacourse/mission-utils';

export class RacingGame {
  constructor(dice, judge) {
    this.dice = dice;
    this.judge = judge;
  }

  play(gameCount, cars) {
    const initializedCars = this.initializeScore(cars);
    let totalScores = initializedCars;
    Console.print('실행 결과');
    for (let i = 0; i < gameCount; i++) {
      const scores = this.getScore(cars);
      const result = this.validateScores(scores, totalScores);
      totalScores = result;
      this.printScores(totalScores);
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
