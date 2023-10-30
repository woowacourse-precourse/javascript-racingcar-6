import { Console, Random } from '@woowacourse/mission-utils';

class RacingGame {
  constructor({ racingCars, playCount }) {
    this.racingCars = racingCars;
    this.playCount = playCount;
  }

  startRacingGame() {
    Console.print('실행 결과');
    let currentPlayCount = 0;
    while (this.playCount > currentPlayCount) {
      this.countScore();
      this.playCount();
      currentPlayCount += 1;
    }
    // 우승자 출력
  }

  countScore() {
    this.racingCars.forEach((_, index) => {
      const randomNumber = Random.pickNumberInRange(0, 9);
      if (randomNumber >= 4) {
        this.racingCars[index].score += 1;
      }
    });
  }

  printScore() {
    this.racingCars.forEach((racingCar) => {
      const score = '-'.repeat(racingCar.score);
      Console.print(`${racingCar.carName} : ${score}`);
    });
    Console.print('\n');
  }

  printWinner() {
    const winner = this.getWinnerList();
    Console.print(`최종 우승자 : ${winner}`);
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
      .join(', ');
    return winner;
  }
}
export default RacingGame;
