import findKeysByValue from '../../../utils/findKeysByValue';

const getWinners = (racingResult) => {
  const racingCarPositions = Object.values(racingResult);
  const maxPosition = Math.max(...racingCarPositions);
  const winners = findKeysByValue(racingResult, maxPosition);
  return winners;
};

export default getWinners;
