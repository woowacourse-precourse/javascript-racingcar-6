import getRandomNumber from "../util/generator.js";
import OutputView from "../view/OutputView.js";

class RacingController {
  racingBoard = {};
  attemptCount = 0;
  maxDistance = 0;

  /**
   * 레이싱 보드에 자동차들의 이름을 추가하고 시도 횟수를 저장하는 생성자
   * @param {string[]} racingCarNames 자동차들의 이름
   * @param {number} attemptCount 시도 횟수
   */
  constructor(racingCarNames, attemptCount) {
    racingCarNames.forEach((racingCarName) => {
      this.racingBoard[racingCarName] = 0;
    });

    this.attemptCount = attemptCount;
  }

  /**
   * 시도 횟수만큼 레이싱을 시작하는 함수
   */
  start() {
    OutputView.printRacingStart();

    for (let i = 0; i < this.attemptCount; i++) {
      this.playRound();
    }
  }

  /**
   * 라운드를 실행하는 함수
   */
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

  /**
   * 자동차의 전진 여부를 판단하는 함수
   * @returns {boolean} 랜덤 숫자가 4 이상이라면 전진
   */
  isForwardRacingCar() {
    const randomNumber = getRandomNumber();
    if (randomNumber >= 4) {
      return true;
    }

    return false;
  }

  /**
   * 현재 레이싱의 최대 거리를 갱신하는 함수
   * @param {number} distance 자동차의 이동 거리
   */
  renewMaxDistance(distance) {
    if (distance > this.maxDistance) {
      this.maxDistance = distance;
    }
  }

  /**
   * 현재 레이싱의 최대 거리와 동일한 차들의 목록을 구한 후, 우승자를 발표하는 함수
   */
  end() {
    const winners = Object.keys(this.racingBoard)
      .filter((carName) => this.racingBoard[carName] === this.maxDistance)
      .join(",");

    OutputView.printRacingFinalWinners(winners);
  }
}

export default RacingController;
