import { Console } from '@woowacourse/mission-utils';
import { FORWARD, OUTPUT_MESSAGE } from '../utils/constants';

const OutputView = {
  printMessage: () => {
    Console.print(OUTPUT_MESSAGE.RESULT);
  },
  roundResult: cars => {
    const result = `${cars
      .map(
        car =>
          `${car.name} :${
            car.moveCount
              ? ' '.concat(FORWARD.EXPRESSION.repeat(car.moveCount))
              : ''
          }`,
      )
      .join('\n')}\n`;
    Console.print(result);
  },
  winnerResult: winners => {
    const result = `${OUTPUT_MESSAGE.WINNERS} ${winners.join(', ')}\n`;
    Console.print(result);
  },
};

export default OutputView;
