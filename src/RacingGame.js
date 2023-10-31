import Car from './Car';
import Input from './utils/Input';
import Output from './utils/Output';

class RacingGame {
  #cars;

  constructor(totalAttempts) {
    this.#cars = [];
    this.totalAttempts = totalAttempts;
  }

  // TODO: Mission 7: 게임 시작 메서드입니다.
  async start() {
    const cars = await Input.startGame();
    this.#car(cars);
    const count = await Input.moveCount();
    for (let i = 0; i < count; i += 1) this.playGame();
    const winners = this.determineWinner();
    Output.winner(winners);
  }

  #car(cars) {
    cars.forEach(car => this.#cars.push(new Car(car)));
  }

  // TODO: Mission 4: 각 차수별 실행 결과 출력 메서드입니다.
  playGame() {
    for (let attempt = 0; attempt < this.totalAttempts; attempt += 1) {
      Output.roundAttempt(attempt);
    }
    this.#cars.forEach(car => {
      car.move();
      Output.roundResult(car);
    });
  }

  // TODO: Mission 6: 우승자 결정 메서드입니다.
  determineWinner() {
    const maxPosition = Math.max(...this.#cars.map(car => car.position));
    const winners = this.#cars
      .filter(car => car.position === maxPosition)
      .map(car => car.name);
    return winners;
  }
}

export default RacingGame;
