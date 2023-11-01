import { Console } from '@woowacourse/mission-utils';
import getRandomNumber from './getRandomNumber';

export default async function showScore(cars, scores) {
  const newScores = new Array(cars.length).fill(0);
  const scorePromises = cars.map(async (car, index) => {
    const score = await getRandomNumber(scores[index]);
    newScores[index] = score;
    Console.print(`${car} : ${'-'.repeat(newScores[index])}`);
  });
  await Promise.all(scorePromises);
  return newScores;
}
