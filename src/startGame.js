import { Console } from '@woowacourse/mission-utils';
import getRandomNumber from './getRandomNumber';
import printWinner from './printWinner';

const startGame = async function startGameWithCarNameAndTryCount(CAR_NAME, TRY_COUNT) {
  Console.print('실행 결과');

  const GO_COUNT = Array.from({ length: CAR_NAME.length }, () => 0);

  while (TRY_COUNT > 0) {
    TRY_COUNT -= 1;

    CAR_NAME.forEach(async (element, index) => {
      const RANDOM_NUMBER = await getRandomNumber();

      if (RANDOM_NUMBER >= 4) {
        GO_COUNT[index] += 1;
      }

      Console.print(`${element} : ${'-'.repeat(GO_COUNT[index])}`);
    });
  }

  return GO_COUNT;
}

export default startGame;