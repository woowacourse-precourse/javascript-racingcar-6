const findWinners = cars => {
  const maxStatusLength = Math.max(...cars.map(car => car.getStatus().length));
  const winners = cars
    .filter(car => car.getStatus().length === maxStatusLength)
    .map(car => car.getName());

  return winners;
};

export default findWinners;
