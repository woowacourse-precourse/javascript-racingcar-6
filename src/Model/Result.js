export const getWinners = (cars) => {
  const winners = [];
  const longestDistance = getLongestDistance(cars);

  cars.map((car) => {
    if (isCarWinner(car, longestDistance)) {
      winners.push(car.getName());
    }
  });

  return winners;
}

const getLongestDistance = (cars) => {
  const AscendingSortedDistances = getDistances(cars).sort((a, b) => a - b);

  return AscendingSortedDistances.pop();
}

const getDistances = (cars) => {
  return cars.map((car) => car.getDistance());
}

const isCarWinner = (car, longestDistance) => {
  if (car.getDistance() === longestDistance) {
    return true;
  }

  return false;
}