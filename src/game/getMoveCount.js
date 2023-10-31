import { Console, Random } from '@woowacourse/mission-utils';

function getMoveCount(cars, raceCount) {
  const MOVE_COUNT = new Array(cars.length).fill(0);
  for (let i = 0; i < raceCount; i += 1) {
    for (let j = 0; j < MOVE_COUNT.length; j += 1) {
      const RANDOM_NUMBER = Random.pickNumberInRange(0, 9);
      if (RANDOM_NUMBER >= 4) MOVE_COUNT[j] += 1;
      Console.print(`${cars[j]} : ${'-'.repeat(MOVE_COUNT[j])}`);
    }
    Console.print('');
  }
  return MOVE_COUNT;
}

export default getMoveCount;
