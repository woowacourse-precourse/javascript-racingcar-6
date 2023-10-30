export const pickWinner = (car) => {
  const maxResultLength = Math.max(...car.map((car) => car.result.length));
  const winners = car
    .filter((car) => car.result.length === maxResultLength)
    .map((car) => car.name);
  return winners;
};
