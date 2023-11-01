import { Console } from '@woowacourse/mission-utils';
import getRandomNumber from './getRandomNumber';

export default async function showScore(cars, scores) {
  const NEW_SCORES = new Array(cars.length).fill(0);
  const SCORE_PROMISES = cars.map(async (car, index) => {
    const SCORE = await getRandomNumber(scores[index]);
    NEW_SCORES[index] = SCORE;
    Console.print(`${car} : ${'-'.repeat(NEW_SCORES[index])}`);
  });
  await Promise.all(SCORE_PROMISES);
  return NEW_SCORES;
}
