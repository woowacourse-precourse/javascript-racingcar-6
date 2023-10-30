import { Console } from '@woowacourse/mission-utils';

export class Judge {
  printWinner(winners) {
    const winner = winners.join(', ');
    Console.print(`최종우승자 : ${winner}`);
    return;
  }

  decideWinner(totalScores) {
    const max = this.compareScores(totalScores);
    const winner = Object.keys(totalScores).filter((player) => {
      const score = totalScores[player];
      return score === max;
    });
    return this.printWinner(winner);
  }

  compareScores(totalScores) {
    let max = 0;
    Object.keys(totalScores).map((player) => {
      const score = totalScores[player];
      if (score > max) max = score;
    });
    return max;
  }
}
