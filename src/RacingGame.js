import { MissionUtils } from '@woowacourse/mission-utils';
import Car from './Car';

class RacingGame {
  constructor(carNames, totalAttempts) {
    this.cars = carNames.split(',').map(name => new Car(name));
    this.totalAttempts = totalAttempts;
  }

  // TODO: Mission 4: 각 차수별 실행 결과 출력 메서드입니다.
  playGame() {
    for (let attempt = 0; attempt < this.totalAttempts; attempt += 1) {
      MissionUtils.Console.print(`시도 ${attempt + 1}:`);
      this.cars.forEach(car => {
        car.move();
        MissionUtils.Console.print(`${car.name} : ${'-'.repeat(car.position)}`);
      });
    }
  }

  // TODO: Mission 6: 우승자 결정 메서드입니다.
}

export default RacingGame;
