// resultView.js
const { Console } = require('@woowacourse/mission-utils');

const resultView = {
  showRoundResult: (cars) => {
    cars.forEach(car => {
      Console.print(`${car.name} : ${'-'.repeat(car.position)}`);
    });
  },
  showFinalResult: (winners) => {
    Console.print(`최종 우승자: ${winners.join(', ')}`);
  }
};

module.exports = resultView;
