import { FORWARD, OUTPUT_MESSAGE } from './constants';

const getMaxForwardData = cars => {
  const maxScore = Math.max(...cars.map(car => car.moveCount));
  const getWinnerCars = cars
    .filter(car => car.moveCount === maxScore)
    .map(car => car.name);
  return getWinnerCars;
};

const getRoundData = cars => {
  const resultFormat = car =>
    `${car.name} : ${
      car.moveCount > 0 ? FORWARD.EXPRESSION.repeat(car.moveCount) : ''
    }`;
  const result = `${cars.map(resultFormat).join('\n')}\n`;
  return result;
};

const getWinnerData = winners => {
  return `${OUTPUT_MESSAGE.WINNERS} ${winners.join(', ')}\n`;
};

export default { getMaxForwardData, getRoundData, getWinnerData };
