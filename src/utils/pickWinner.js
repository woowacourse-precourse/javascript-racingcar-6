export const pickWinner = (carData) => {
  const maxResultLength = Math.max(
    ...carData.map((data) => data.result.length),
  );
  const winners = carData
    .filter((data) => data.result.length === maxResultLength)
    .map((winner) => winner.name);
  return winners;
};
