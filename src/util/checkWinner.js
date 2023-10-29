function checkWinner(cars) {
  let maxLocation = cars
    .map((o) => o.distance.length)
    .reduce((max, curr) => (max < curr ? curr : max));

  let winnerList = [];

  for (let i = 0; i < cars.length; i++) {
    if (cars[i].distance.length === maxLocation) {
      winnerList.push(cars[i].name);
    }
  }
  return winnerList;
}

export default checkWinner;
