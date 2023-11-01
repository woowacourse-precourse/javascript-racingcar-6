import { MissionUtils, Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    console.log(MissionUtils.Random.pickNumberInList([1, 2, 3]));

    class Car {
      constructor(name) {
        this.name = name;
        this.position = 0;
      }

      move() {
        if (MissionUtils.Random.pickNumberInRange(0, 9) >= 4) {
          this.position++;
        }
      }

      toString() {
        return `${this.name} : ${'-'.repeat(this.position)}`;
      }
    }

    class RacingGame {
      constructor() {
        this.cars = [];
      }

      start() {
        this.getCarNames();
        this.getNumberOfAttempts();
        this.playGame();
      }

      getCarNames() {
        Console.print('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
        const carNames = Console.readLineAsync().split(',').map(name => name.trim());
        if (carNames.some(name => name.length > 5)) {
          throw new Error("[ERROR] 자동차 이름은 5자 이하로 입력 가능합니다.");
        }
        this.cars = carNames.map(name => new Car(name));
      }

      getNumberOfAttempts() {
        Console.print('시도할 횟수는 몇 회인가요?');
        const numberOfAttempts = parseInt(Console.readLineAsync(), 10);
        if (isNaN(numberOfAttempts)) {
          throw new Error("[ERROR] 숫자만 입력 가능합니다.");
        }
        this.numberOfAttempts = numberOfAttempts;
      }

      playGame() {
        Console.print('\n실행 결과');
        for (let i = 0; i < this.numberOfAttempts; i++) {
          this.cars.forEach(car => car.move());
          this.printRoundResult();
        }
        this.printWinners();
      }

      printRoundResult() {
        this.cars.forEach(car => Console.print(car.toString()));
        Console.print(''); // 라운드 결과 구분을 위한 빈 줄 출력
      }

      printWinners() {
        const maxPosition = Math.max(...this.cars.map(car => car.position));
        const winners = this.cars.filter(car => car.position === maxPosition);
        const winnerNames = winners.map(winner => winner.name).join(', ');
        Console.print(`\n최종 우승자 : ${winnerNames}`);
      }
    }
  }
}

const app = new App();
app.play();

