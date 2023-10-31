const { Console, RACING_RESULT } = require('./Constant');

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
};

module.exports = OutputView;
