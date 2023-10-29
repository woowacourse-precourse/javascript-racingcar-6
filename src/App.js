import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async play() {
    const cars = await this.getCars();
    const number = await this.getNumber();
    Console.print("\n실행결과");
    let scores = {};
    cars.forEach((car) => (scores[car] = 0));
    for (let i = 0; i < number; i++) {
      this.round(cars, scores);
    }
  }

  async getCars() {
    const inputCars = await Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    const cars = inputCars.split(",");
    for (const car in cars) {
      if (!/^[a-zA-Z0-9]{1,5}$/.test(car)) {
        throw new Error("[ERROR] 올바른 자동차 형식이 아닙니다.");
      }
    }
    return cars;
  }

  async getNumber() {
    const inputNum = await Console.readLineAsync(
        "시도할 횟수는 몇 회인가요?\n"
    );
    if (!/[0-9]/g.test(inputNum)) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
    return +inputNum;
  }

  round(cars, scores) {
    cars.forEach((car) => {
      const n = Random.pickNumberInRange(0, 9);
      if (n >= 4) {
        scores[car] += 1;
      }
    });

    this.printRound(cars, scores);
  }

  printRound(cars, scores) {
    cars.forEach((car) => Console.print(`${car} : ${"-".repeat(scores[car])}`));
    Console.print(" ")
  }
}

export default App;
