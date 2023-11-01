import { Console, Random } from "@woowacourse/mission-utils";

class App {
  carArray = [];
  tryNumber = 0;

  async play() {
    this.carArray = await this.inputCars();
    this.tryNumber = await this.inputTryNum();
    for (let i = 0; i < this.tryNumber; i++) {
      this.moveCar();
      this.showDistance();
    }
    this.showWinner();
  }

  async inputCars() {
    const input_name = await Console.readLineAsync(
      "경주할 자동차 이름을 입력해주세요.(쉼표(,) 기준으로 구분)"
    );
    const carNames = input_name.split(',');
    const carArray = carNames.map(name => ({ name, distance: 0 }));
    carArray.forEach((car) => {
      if (car.name.length > 5) {
        throw new Error("[ERROR] 이름의 형식이 잘못되었습니다.");
      }
    });
  
    return carArray;
  }

  async inputTryNum() {
    const input_num = await Console.readLineAsync(
      "시도할 횟수를 입력해주세요."
    );
    this.tryNumber = parseInt(input_num, 10);

    if (isNaN(this.tryNumber)) {
      throw new Error("[ERROR] 입력 형식이 잘못되었습니다.");
    };

    return this.tryNumber;
  };

  moveCar() {
    this.carArray.forEach((car) => {
      if (Random.pickNumberInRange(0, 9) >= 4) {
        car.distance += 1;
      }
    });
  }

  showDistance() {
    this.carArray.forEach((car) => {
      const distanceText = '-'.repeat(car.distance);
      Console.print(`${car.name} : ${distanceText}`);
    });
  }

  showWinner() {
    const max = Math.max(...this.carArray.map((car) => car.distance));
    const winner = this.carArray.filter((car) => car.distance === max).map((car) => car.name);
    const winnerText = winner.join(", ");
    Console.print(`최종 우승자 : ${winnerText}`);
  }
}

export default App;