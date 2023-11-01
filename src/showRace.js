import { Console } from '@woowacourse/mission-utils';
import STRINGS from './constants/strings';
import showScore from './showScore';
import getWinners from './getWinners';

export default async function showRace(cars, rounds) {
  let scores = new Array(cars.length).fill(0);
  Console.print(STRINGS.GAME_RESULT);
  for (let round = 0; round < rounds; round += 1) {
    const UPDATED_SCORES = await showScore(cars, scores);
    scores = UPDATED_SCORES;
  }
  const WINNERS = await getWinners(cars, scores);
  Console.print(STRINGS.GAME_WINNER + WINNERS.join(', '));
}
