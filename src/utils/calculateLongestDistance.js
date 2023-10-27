export function calculateLongestDistance(carList) {
  const gameDistances = carList.map(car => carList[car].length);
  return Math.max(...gameDistances);
}
