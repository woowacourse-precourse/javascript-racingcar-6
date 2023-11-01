const validateRaceCount = (raceCounts) => {
  const raceCountToNumber = parseInt(raceCounts);

  if (Number.isNaN(raceCountToNumber) || raceCountToNumber <= 0) return false;

  return true;
};

export default validateRaceCount;
