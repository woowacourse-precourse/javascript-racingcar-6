import { Console } from "@woowacourse/mission-utils";
import { CarController, NumberGenerator } from "./index.js";

class CarGame {
  #carControllers;

  #attemptIterations;

  constructor(names, attemptIterations) {
    this.#carControllers = names.map((name) => CarController.create(name));
    this.#attemptIterations = attemptIterations;
  }

  static createCarGame(names, attemptIterations) {
    return new CarGame(names, attemptIterations);
  }

  play() {
    Console.print("");
    Console.print("실행 결과");

    for (let i = 0; i < parseInt(this.#attemptIterations, 10); i += 1) {
      const results = this.#carControllers.map((carController) => {
        this.moveForward(carController);

        return `${carController.getNames()} : ${"-".repeat(
          carController.getDistance(),
        )}`;
      });

      // 결과 출력
      Console.print(results.join("\n"));
      Console.print("");
    }

    // 게임 종료 후 최종 우승자를 결정하고 출력
    this.compare();
  }

  compare() {
    const maxDistance = Math.max(
      ...this.#carControllers.map((carController) =>
        carController.getDistance(),
      ),
    );
    const winners = this.#carControllers.filter(
      (carController) => carController.getDistance() === maxDistance,
    );
    Console.print(
      `최종 우승자 : ${winners.map((winner) => winner.getNames()).join(", ")}`,
    );
  }

  moveForward(carController) {
    const randomOutcome = NumberGenerator.createRandomNumber();

    if (randomOutcome === "MOVING_FORWARD") {
      carController.incrementDistance();
    }
  }
}

// export default CarGame;
export default CarGame;
