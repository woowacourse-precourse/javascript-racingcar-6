import { SPACE } from '../constants/constants.js';

function makeAllMoveCounts(cars) {
  const allMoveCounts = [];
  cars.forEach(({ moveCounts }) => {
    allMoveCounts.push(moveCounts);
  });
  return allMoveCounts;
}

function makeWinnerTemplate(winners, maxMove) {
  return ({ name, moveCounts }) => {
    if (moveCounts === maxMove) {
      winners.push(`${SPACE}${name}`);
    }
  };
}

export default function makeWinner(cars) {
  const allMoveCounts = makeAllMoveCounts(cars);
  const winners = [];
  const maxMove = Math.max(...allMoveCounts);
  cars.forEach(makeWinnerTemplate(winners, maxMove));
  return winners.join(',');
}
