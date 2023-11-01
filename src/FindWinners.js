function CheckWinners(forwardCounts, maxForward, i, winners, carList) {
  if (forwardCounts[i] === maxForward) {
    winners.push(carList[i]);
  };
  return winners
};

export function FindWinners(forwardCounts, maxForward, carList) {
  let winners = [];
  for (let i = 0; i < forwardCounts.length; i++) {
    winners = CheckWinners(forwardCounts, maxForward, i, winners, carList)
  };
  return winners;
};