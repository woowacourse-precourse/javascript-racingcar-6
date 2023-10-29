import { Random } from "@woowacourse/mission-utils";

import OutputView from "../view/OutputView.js";

class RacingController {
  racingBoard = {};
  attemptCount = 0;
  maxDistance = 0;

  constructor(racingCarNames, attemptCount) {
    racingCarNames.forEach((racingCarName) => {
      this.racingBoard[racingCarName] = 0;
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
    Object.entries(this.racingBoard).forEach(([carName, carDistance]) => {
      if (this.isForwardRacingCar()) {
        this.racingBoard[carName] = carDistance + 1;
        this.renewMaxDistance(this.racingBoard[carName]);
      }

      OutputView.printCurrentRacingCar(carName, this.racingBoard[carName]);
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
    OutputView.printRacingFinalWinners(this.racingBoard, this.maxDistance);
  }
}

export default RacingController;
