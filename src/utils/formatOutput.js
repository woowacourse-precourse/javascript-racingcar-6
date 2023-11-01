import { FORWARD, OUTPUT_MESSAGE } from './constants';

const findWinningCars = cars => {
  const maxScore = Math.max(...cars.map(car => car.moveCount));
  const winningCars = cars
    .filter(car => car.moveCount === maxScore)
    .map(car => car.name);
  return winningCars;
};

const makeRoundMessage = cars => {
  const resultFormat = car =>
    `${car.name} : ${
      car.moveCount > 0 ? FORWARD.EXPRESSION.repeat(car.moveCount) : ''
    }`;
  const message = `${cars.map(resultFormat).join('\n')}\n`;
  return message;
};

const makeWinnerMessage = winners => {
  const message = `${OUTPUT_MESSAGE.WINNERS} ${winners.join(', ')}`;
  return message;
};

export default {
  findWinningCars,
  makeRoundMessage,
  makeWinnerMessage,
};
