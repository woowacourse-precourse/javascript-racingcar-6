import { FORWARD_THRESHOLD } from '../constants/setting.js';
import generateRandomNumber from '../util/generator.js';
import OutputView from '../view/output.js';

class RacingController {
  /**
   * 레이싱 보드에 자동차들의 이름을 추가하고 시도 횟수를 저장하는 생성자
   * @param {string[]} racingCarNames 자동차들의 이름
   * @param {number} attemptCount 시도 횟수
   */
  constructor(racingCarNames, attemptCount) {
    // key: 자동차의 이름, value: 전진 거리
    this.racingBoard = racingCarNames.reduce((acc, carName) => {
      return { ...acc, [carName]: 0 };
    }, {});

    this.attemptCount = attemptCount;
    this.maxDistance = 0;
  }

  /**
   * 시도 횟수만큼 레이싱을 시작하는 함수
   */
  start() {
    OutputView.printRacingStart();

    for (let i = 0; i < this.attemptCount; i += 1) {
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
   * @returns {boolean} 랜덤 숫자가 FORWARD_THRESHOLD(4) 이상이라면 true를 반환
   */
  isForwardRacingCar() {
    const randomNumber = generateRandomNumber();

    return randomNumber >= FORWARD_THRESHOLD;
  }

  /**
   * 현재 레이싱의 최대 거리를 갱신하는 함수
   * @param {number} distance 자동차의 전진 거리
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
      .filter(carName => this.racingBoard[carName] === this.maxDistance)
      .join(', ');

    OutputView.printRacingFinalWinners(winners);
  }
}

export default RacingController;
