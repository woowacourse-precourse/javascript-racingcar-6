export default async function getWinners(cars, scores) {
  const maxScore = Math.max(...scores);
  const winners = cars.filter((car, index) => scores[index] === maxScore);
  return winners;
}
