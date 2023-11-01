import errorMessages from '../constants/errorMessages';

const validateRaceCount = (raceCounts) => {
  const raceCountToNumber = parseInt(raceCounts);

  if (Number.isNaN(raceCountToNumber))
    throw new Error(errorMessages.NOT_NUMBER);

  if (raceCountToNumber <= 0)
    throw new Error(errorMessages.NOT_IN_RANGE_NUMBER);
    
  return true;
};

export default validateRaceCount;
