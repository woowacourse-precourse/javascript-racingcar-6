export default function assessWinner(cars) {
  let winnerScore = 0;
  let winner = [];

  cars.forEach(car => {
    if (car.position.length === winnerScore) {
      winner.push(car.name);
    }
    if (car.position.length > winnerScore) {
      winnerScore = car.position.length;
      winner = [];
      winner.push(car.name);
    }
  });
  return winner;
}
