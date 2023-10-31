const getFinalWinner = (carDic) => {
  const cars = Object.entries(carDic);
  cars.sort((a, b) => a[1].length - b[1].length);
  const winnerForwardCount = cars[cars.length - 1][1].length;
  return cars
    .filter((car) => car[1].length === winnerForwardCount)
    .map((car) => car[0]);
};

export default getFinalWinner;
