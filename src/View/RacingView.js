import { Console, Random } from "@woowacourse/mission-utils";

class RacingView {
  constructor(car) {
    this.car = car;

    this.race();
  }

  race() {
    const { cars, tryCount } = this.car;
    Console.print("\n실행 결과");

    for (let i = 0; i < tryCount; i += 1) {
      const newPositions = cars.map((car) => {
        const randomValue = Random.pickNumberInRange(0, 9);

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
  }

  printEachResult(cars) {
    cars.forEach((car) => {
      const { name, position } = car;

      Console.print(`${name} : ${"-".repeat(position)}`);
    });
    Console.print("");
  }

  printFinalResult(cars) {
    const maxPosition = Math.max(...cars.map((car) => car.position));
    const winners = cars.filter((car) => car.position === maxPosition);

    const winnerNames = winners.map((winner) => winner.name).join(", ");
    Console.print(`최종 우승자 : ${winnerNames}`);
  }
}

export default RacingView;
