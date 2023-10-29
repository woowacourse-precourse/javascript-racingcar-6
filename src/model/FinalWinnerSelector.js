const FinalWinnerSelector = {
  evaluate(data) {
    const winners = [];
    let winnerScore = 0;

    data.forEach((progress, name) => {
      winnerScore = Math.max(winnerScore, progress.length);
      if (winnerScore === progress.length) {
        winners.push(name);
      }
    });

    return winners;
  },
};

export default FinalWinnerSelector;
