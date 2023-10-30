export function FindWinners(forwardCounts, maxForward, carList) {
  const winners = [];

  for (let i = 0; i < forwardCounts.length; i++) {
    if (forwardCounts[i] === maxForward) {
      winners.push(carList[i]);
    };
  };
  return winners;
}