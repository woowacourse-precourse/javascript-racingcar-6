import { Console, Random } from "@woowacourse/mission-utils";

class GameView {
  constructor() {
    this.init();
  }

  init() {
    Console.print("\n실행 결과");
  }

  startGame(carInstance) {
    const { cars, tryCount } = carInstance;

    for (let i = 0; i < tryCount; i += 1) {
      const newPositions = cars.map((car) => {
        const randomValue = this.getRandomNumber();

        // 3-2. 무작위 값이 4 이상일 경우 해당 자동차를 전진시킨다
        if (randomValue >= 4) {
          return car.position + 1;
        }

        return car.position;
      });

      cars.forEach((car, idx) => {
        Object.assign(car, { position: newPositions[idx] });
      });

      this.printEachResult(cars);
    }

    this.printFinalResult(cars);
  }

  // 3-1. 각 자동차마다 무작위 값을 구한다
  getRandomNumber() {
    return Random.pickNumberInRange(0, 9);
  }

  // 3-3. 입력된 횟수에 대해 각 횟수마다 실행 결과를 출력한다
  printEachResult(cars) {
    cars.forEach((car) => {
      const { name, position } = car;

      Console.print(`${name} : ${"-".repeat(position)}`);
    });
    Console.print("");
  }

  // 3-4. 최종 우승자를 결정하고 출력한다
  printFinalResult(cars) {
    const maxPosition = Math.max(...cars.map((car) => car.position));
    const winners = cars.filter((car) => car.position === maxPosition);

    const winnerNames = winners.map((winner) => winner.name).join(", ");
    Console.print(`최종 우승자 : ${winnerNames}`);
  }
}

export default GameView;
