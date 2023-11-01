import { Console } from "@woowacourse/mission-utils";

import { MESSAGE } from "../constatnts/index.js";

class GameView {
  constructor() {
    this.init();
  }

  init() {
    Console.print(MESSAGE.GAME_INIT);
  }

  // 3-3. 입력된 횟수에 대해 각 횟수마다 실행 결과를 출력한다
  printEachResult(cars) {
    cars.forEach((car) => {
      const { name, position } = car;

      Console.print(`${name} : ${'-'.repeat(position)}`);
    });
    Console.print('');
  }

  // 3-4. 최종 우승자를 결정하고 출력한다
  printFinalResult(cars) {
    const maxPosition = Math.max(...cars.map(car => car.position));
    const winners = cars.filter((car) => car.position === maxPosition);

    const winnerNames = winners.map(winner => winner.name).join(", ");
    Console.print(`${MESSAGE.GAME_RESULT} : ${winnerNames}`);
  }
}

export default GameView;
