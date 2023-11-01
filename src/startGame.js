import { Console } from '@woowacourse/mission-utils';
import getRandomNumber from './getRandomNumber';

const startGame = async function startGameWithCarNameAndTryCount(CAR_NAME, TRY_COUNT) {
  Console.print('실행 결과');

  while (TRY_COUNT > 0) {
    TRY_COUNT -= 1;

    CAR_NAME.forEach((element) => {
      const RANDOM_NUMBER = getRandomNumber();

      if (RANDOM_NUMBER >= 4) {
        return Console.print(`${element} : -`);
      }
      if (RANDOM_NUMBER < 4) {
        return Console.print(`${element} : `);
      }
    });

  }
}

export default startGame;