const checkGameCount = (raceCounts) => {
  const raceCountToNumber = parseInt(raceCounts);
  if (Number.isNaN(raceCountToNumber) || raceCountToNumber <= 0) return false;

  return true;
};

export default checkGameCount;
