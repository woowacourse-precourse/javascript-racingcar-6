const selectWinner = (cars, carsWithMoveNum) => {
  let winner = [];
  cars.forEach((car) => {
    if (!winner.length) {
      winner.push(car);
    } else if (carsWithMoveNum[winner] === carsWithMoveNum[car]) {
      winner.push(car);
    } else if (carsWithMoveNum[winner] < carsWithMoveNum[car]) {
      winner.length = 0;
      winner.push(car);
    } else {
    }
  });
  return winner;
};

export default selectWinner;
