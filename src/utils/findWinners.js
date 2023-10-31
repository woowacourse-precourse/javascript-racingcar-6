const findWinners = cars => {
  const carsStatus = [];
  const winners = [];

  cars.map(car => carsStatus.push(car.getStatus().length));
  cars.map(car => {
    if (Math.max(...carsStatus) === car.getStatus().length) winners.push(car.getName());
  });

  return winners;
};

export default findWinners;
