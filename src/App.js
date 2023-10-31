import { Console } from "@woowacourse/mission-utils";
import Input from "./Input.js";
import Car from "./Car.js";

class App {
  async initGame() {
    const input = new Input();
    // CarName 입력 -> Car 배열 생성
    const carNames = await input.inputCarName();
    this.cars = [];
    carNames.forEach((carName) => this.cars.push(new Car(carName)));
    // 시도 횟수 입력
    this.tryNum = await input.inputTryNum();

    this.roundStart();
  }

  roundStart() {
    let round = 1;
    Console.print("실행 결과");
    while (round++ <= this.tryNum) {
      this.gameRound();
    }
    this.gameFinished();
  }

  gameRound() {
    this.cars.forEach((car) => {
      car.move();
      Console.print(car + "");
    });
    Console.print("\n");
  }

  getWinners() {
    const maxDistance = Math.max.apply(
      null,
      this.cars.map((car) => car.distance)
    );
    return this.cars.filter((car) => car.distance === maxDistance);
  }

  gameFinished() {
    const winners = this.getWinners();
    let winnerText = "최종 우승자 : ";
    // 우승자 1명인 경우
    if (winners.length === 1) {
      winnerText += winners[0].carName;
      Console.print(winnerText);
      return;
    }
    // 우승자 여러명일 경우
    winners.forEach((car, idx) => {
      if (idx < winners.length - 1) {
        winnerText += car.carName + ", ";
        return;
      }
      winnerText += car.carName;
    });
    Console.print(winnerText);
  }

  async play() {
    await this.initGame();
  }
}

export default App;
