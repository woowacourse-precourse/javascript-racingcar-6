import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  print(message) {
    Console.print(message);
  },

  printRacingResult(racingResult) {
    racingResult.forEach((progress, vehicleName) => Console.print(`${vehicleName} : ${progress}`));
  },
};

export default OutputView;
