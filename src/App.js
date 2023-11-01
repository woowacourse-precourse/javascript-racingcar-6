import Car from './Car.js';
class App {
  async play() {
    try {
      const carNames = await this.inputCarNames();
      const round = await this.inputRound();

      const cars = carNames.map((name) => new Car(name));

      console.log('\n실행 결과');
      for (let i = 0; i < round; i++) {
        cars.forEach((car) => car.move());
        this.printStatus(cars);
        console.log();
      }

      const winners = this.getWinners(cars);
      this.printWinners(winners);
    } catch (error) {
      console.error(error.message);
    }
  }

  async inputCarNames() {
    const input = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.\n'
    );
    return input.split(',').map((name) => name.trim());
  }

  async inputRound() {
    const input = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    return Number(input);
  }

  printStatus(cars) {
    cars.forEach((car) => {
      console.log(`${car.name} : ${'-'.repeat(car.position)}`);
    });
  }

  getWinners(cars) {
    const maxPosition = Math.max(...cars.map((car) => car.position));
    return cars.filter((car) => car.position === maxPosition).map((car) => car.name);
  }

  printWinners(winners) {
    console.log(`최종 우승자 : ${winners.join(', ')}`);
  }
}

export default App;