import Car from './Car';

class RacingGame {
  constructor(carNames, totalAttempts) {
    this.cars = carNames.split(',').map(name => new Car(name));
    this.totalAttempts = totalAttempts;
  }

  // TODO: Mission 4: 각 차수별 실행 결과 출력 메서드입니다.

  // TODO: Mission 6: 우승자 결정 메서드입니다.
}

export default RacingGame;
