export class Judge {
  decideWinner(totalScores) {
    let max = 0;
    Object.keys(totalScores).map((player) => {
      const score = totalScores[player];
      if (score > max) max = score;
    });
    const winner = Object.keys(totalScores).filter((player) => {
      const score = totalScores[player];
      return score === max;
    });
    return winner;
  }
}
