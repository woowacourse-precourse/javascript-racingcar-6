export default function makeWinner(cars) {
  const allMoveCounts = [];
  const winners = [];

  cars.forEach(({ name, moveCounts }) => {
    allMoveCounts.push(moveCounts);
  });
  const maxMove = Math.max(...allMoveCounts);
  cars.forEach(({ name, moveCounts }) => {
    if (moveCounts === maxMove) {
      winners.push(name);
    }
  });
  return winners.join(',');
}
