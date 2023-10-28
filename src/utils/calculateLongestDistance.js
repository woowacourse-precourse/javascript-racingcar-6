export function calculateLongestDistance(carModles) {
  const maxPosition = Math.max(...carModles.map(car => car.position.length));
  return maxPosition;
}
