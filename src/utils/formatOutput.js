import { FORWARD, OUTPUT_MESSAGE } from './constants';

const findWinningCars = cars => {
  const maxScore = Math.max(...cars.map(car => car.moveCount));
  const getWinnerCars = cars
    .filter(car => car.moveCount === maxScore)
    .map(car => car.name);
  return getWinnerCars;
};

const convertRoundResultToString = cars => {
  const resultFormat = car =>
    `${car.name} : ${
      car.moveCount > 0 ? FORWARD.EXPRESSION.repeat(car.moveCount) : ''
    }`;
  const result = `${cars.map(resultFormat).join('\n')}\n`;
  return result;
};

const makeWinnerMessage = winners => {
  return `${OUTPUT_MESSAGE.WINNERS} ${winners.join(', ')}`;
};

export default {
  findWinningCars,
  convertRoundResultToString,
  makeWinnerMessage,
};
