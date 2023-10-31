const getForwardData = cars => {
  const maxScore = Math.max(...cars.map(car => car.moveCount));
  const getWinnerCars = cars
    .filter(car => car.moveCount === maxScore)
    .map(car => car.name);
  return getWinnerCars;
};

export default getForwardData;
