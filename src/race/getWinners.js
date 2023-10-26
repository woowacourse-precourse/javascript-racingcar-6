const getWinners = (result) => {
  const maxPoint = getMaxPoint(result);
  const winners = [];
  for (let j = 0; j < result.length; j++) {
    if (result[j][1].length === maxPoint) winners.push(result[j][0]);
  }
  return winners;
};

const getMaxPoint = (result) => {
  const points = [];
  for (let j = 0; j < result.length; j++) {
    points.push(result[j][1].length);
  }
  return Math.max(...points);
};

export default getWinners;
