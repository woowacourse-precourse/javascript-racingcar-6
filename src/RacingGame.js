import { Console } from "@woowacourse/mission-utils";

class RacingGame {
  static play(racingCars, gameRoundCount) {
    Console.print("\n실행 결과");

    Array.from({ length: gameRoundCount }, () => {
      racingCars.forEach((racingCar) => {
        racingCar.playRound();
      });
      Console.print("");
    });

    this.printWinners(racingCars);
  }

  static printWinners(racingCars) {
    const maxDistance = Math.max(
      ...racingCars.map((racingCar) => racingCar.distance)
    );

    const winners = racingCars
      .filter((racingCar) => racingCar.distance === maxDistance)
      .map((racingCar) => racingCar.name);

    Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }
}

export default RacingGame;
