import { Console } from '@woowacourse/mission-utils';

export default class Judge {
  printWinner(winners) {
    const winner = winners.join(', ');
    Console.print(`최종우승자 : ${winner}`);
    return winner;
  }

  decideWinner(totalScores) {
    const max = this.getHigestScore(totalScores);
    const winner = Object.keys(totalScores).filter((player) => {
      const score = totalScores[player];
      return score === max;
    });
    return this.printWinner(winner);
  }

  getHigestScore(totalScores) {
    let max = 0;
    Object.keys(totalScores).forEach((player) => {
      const score = totalScores[player];
      if (score > max) max = score;
    });
    return max;
  }
}
