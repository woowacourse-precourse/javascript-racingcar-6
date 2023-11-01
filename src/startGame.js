import { Console } from '@woowacourse/mission-utils';
import getRandomNumber from './getRandomNumber';
import printWinner from './printWinner';

const startGame = async function startGameWithCarNameAndTryCount(CAR_NAME, TRY_COUNT) {
  Console.print('실행 결과');

  const GO_COUNT = Array.from({ length: 5 }, () => 0);

  while (TRY_COUNT > 0) {
    TRY_COUNT -= 1;

    CAR_NAME.forEach((element, index) => {
      const RANDOM_NUMBER = getRandomNumber();

      if (RANDOM_NUMBER >= 4) {
        GO_COUNT[index] += 1;

        return Console.print(`${element} : -`);
      }
      if (RANDOM_NUMBER < 4) {
        return Console.print(`${element} : `);
      }
    });
  }

  printWinner(CAR_NAME, GO_COUNT);
}

export default startGame;