import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from './Constants';

const Output = {
  printGameResult(cars, gameCount) {
    Console.print(`\n${MESSAGE.OUTPUT_GAME_RESULT}`);

    for (let i = 0; i < gameCount; i++) {
      cars.forEach((car) => {
        const movements = car.movement
          .slice(0, i + 1)
          .join('')
          .replace(/\s+/g, ' ');
        Console.print(`${car.name} : ${movements}`);
      });
      Console.print(' ');
    }
  },

  printFinalWinners(finalWinners) {
    Console.print(`${MESSAGE.OUTPUT_FINAL_WINNER} ${finalWinners}`);
  },
};

export default Output;
