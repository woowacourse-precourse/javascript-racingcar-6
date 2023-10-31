const { Console, RACING_RESULT, RACING_FINAL_WINNER } = require('../Constant');

const OutputView = {
  printRacingResult() {
    Console.print(RACING_RESULT);
  },

  printRaceResult() {
    Console.print(RACING_RESULT);
  },

  printMoveCar(carInfo) {
    Console.print(`${carInfo.name} : ${'-'.repeat(carInfo.position)}`);
  },

  printWinners(winners) {
    if (winners.length > 1) {
      Console.print(`${RACING_FINAL_WINNER}${winners.join(', ')}`);
    } else {
      Console.print(`${RACING_FINAL_WINNER}${winners}`);
    }
  },
};

module.exports = OutputView;
