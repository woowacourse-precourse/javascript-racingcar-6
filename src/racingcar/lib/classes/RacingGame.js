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
      // 게임 로직
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
}
export default RacingGame;
