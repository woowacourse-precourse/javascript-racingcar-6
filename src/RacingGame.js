import { Console } from '@woowacourse/mission-utils';
import Dice from './Dice.js';

export default class RacingGame {
  constructor(judge) {
    this.judge = judge;
  }

  play(rounds, cars) {
    const initializedCars = this.initializeScore(cars);
    let totalScores = initializedCars;
    Console.print('\n실행 결과');
    for (let i = 0; i < rounds; i += 1) {
      const currentScores = this.getDiceScore(cars);
      const updatedScores = this.validateScores(currentScores, totalScores);
      totalScores = updatedScores;
      this.printScores(totalScores);
    }
    return this.judge.decideWinner(totalScores);
  }

  initializeScore(cars) {
    const initialized = {};
    cars.forEach((car) => {
      initialized[car] = 0;
    });
    return initialized;
  }

  getDiceScore(cars) {
    const scores = {};
    cars.forEach((car) => {
      scores[car] = Dice.roll();
    });
    return scores;
  }

  validateScores(currentScores, totalScores) {
    const newScores = { ...totalScores };
    Object.keys(currentScores).forEach((car) => {
      const score = currentScores[car];
      if (score >= 4) newScores[car] += 1;
    });
    return newScores;
  }

  printScores(result) {
    Object.keys(result).forEach((car) => {
      const score = '-'.repeat(result[car]);
      Console.print(`${car} : ${score}`);
    });
    Console.print('\n');
  }
}
