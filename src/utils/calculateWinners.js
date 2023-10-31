export function calculateWinners(carList) {
  const maxDistance = Math.max(...carList.map((car) => car.forwardCount));
  const winners = carList
    .filter((car) => car.forwardCount === maxDistance)
    .map((car) => car.name);
  return printWinnersToString(winners);
}

function printWinnersToString(winnerList) {
  if (winnerList.length == 1) {
    return winnerList.join();
  } else {
    return winnerList.join(", ");
  }
}
