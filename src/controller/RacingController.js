import { Random } from "@woowacourse/mission-utils";

import OutputView from "../view/OutputView.js";

class RacingController {
  carsObject = {};
  attemptCount = 0;
  maxDistance = 0;

  constructor(racingCarNames, attemptCount) {
    racingCarNames.forEach((racingCarName) => {
      this.carsObject[racingCarName] = 0;
    });

    this.attemptCount = attemptCount;
  }

  start() {
    OutputView.printRacingStart();

    for (let i = 0; i < this.attemptCount; i++) {
      this.playRound();
    }
  }

  playRound() {
    Object.entries(this.carsObject).forEach(([carName, carDistance]) => {
      if (this.isForwardRacingCar()) {
        this.carsObject[carName] = carDistance + 1;
        this.renewMaxDistance(this.carsObject[carName]);
      }

      OutputView.printCurrentRacingCar(carName, this.carsObject[carName]);
    });
    OutputView.printSpacing();
  }

  isForwardRacingCar() {
    const randomNumber = Random.pickNumberInRange(0, 9);
    if (randomNumber >= 4) {
      return true;
    }

    return false;
  }

  renewMaxDistance(distance) {
    if (distance > this.maxDistance) {
      this.maxDistance = distance;
    }

    return;
  }

  end() {
    OutputView.printRacingFinalWinners(this.carsObject, this.maxDistance);
  }
}

export default RacingController;
