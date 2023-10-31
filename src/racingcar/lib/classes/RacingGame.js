import { Console, Random } from '@woowacourse/mission-utils';
import { PRINT_MESSAGE } from '../constants/messages';
import OPTIONS from '../constants/options';

class RacingGame {
  constructor({ racingCars, playCount }) {
    this.racingCars = racingCars;
    this.playCount = playCount;
  }

  startRacingGame() {
    Console.print(PRINT_MESSAGE.NEW_LINE, PRINT_MESSAGE.PLAY_RESULT);
    let currentPlayCount = 0;
    while (this.playCount > currentPlayCount) {
      this.countScore();
      this.printScore();
      currentPlayCount += 1;
    }
    this.printWinner();
  }

  countScore() {
    this.racingCars.forEach((_, index) => {
      const randomNumber = Random.pickNumberInRange(
        OPTIONS.MIN_NUM,
        OPTIONS.MAX_NUM,
      );
      if (randomNumber >= OPTIONS.FORWARD_MINIMUM) {
        this.racingCars[index].score += 1;
      }
    });
  }

  printScore() {
    this.racingCars.forEach((racingCar) => {
      const score = PRINT_MESSAGE.SCORE_BAR.repeat(racingCar.score);
      Console.print(PRINT_MESSAGE.formatCarScore(racingCar.carName, score));
    });
    Console.print(PRINT_MESSAGE.NEW_LINE);
  }

  printWinner() {
    const winner = this.getWinnerList();
    Console.print(PRINT_MESSAGE.winnerList(winner));
  }

  getWinnerList() {
    let winner = [];
    let mostScore = 0;
    this.racingCars.forEach((racingCar) => {
      mostScore = Math.max(mostScore, racingCar.score);
    });
    winner = this.racingCars
      .filter((racingCar) => racingCar.score === mostScore)
      .map((car) => car.carName)
      .join(PRINT_MESSAGE.SEPARATOR);
    return winner;
  }
}
export default RacingGame;
