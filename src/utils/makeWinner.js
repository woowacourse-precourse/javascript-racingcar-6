import { SPACE } from '../constants/constants.js';

export default function makeWinner(cars) {
  const allMoveCounts = [];
  const winners = [];

  cars.forEach(({ moveCounts }) => {
    allMoveCounts.push(moveCounts);
  });
  const maxMove = Math.max(...allMoveCounts);
  cars.forEach(({ name, moveCounts }) => {
    if (moveCounts === maxMove) {
      winners.push(`${SPACE}${name}`);
    }
  });
  return winners.join(',');
}
