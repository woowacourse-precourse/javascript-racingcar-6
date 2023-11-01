export default async function getWinners(cars, scores) {
  const MAX_SCORE = Math.max(...scores);
  const WINNERS = cars.filter((car, index) => scores[index] === MAX_SCORE);
  return WINNERS;
}
