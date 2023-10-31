import { Random, Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    try {
      await this.game();
    } catch (error) {
      throw error;
    }
  }
  async cars() {
    const cars = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)."
    );
    const carsArray = cars.split(",").map((car) => car.trim());
    const maxCarName = Math.max(...carsArray.map((car) => car.length));

    if (carsArray.length === 0) {
      throw new Error("[ERROR] 유효하지 않은 자동차 이름입니다.");
    } else if (carsArray.includes("")) {
      throw new Error("[ERROR] 공백은 자동차 이름으로 지정할 수 없습니다.");
    } else if (maxCarName > 5) {
      throw new Error("[ERROR] 자동차 이름은 5자 이하여야 합니다.");
    }
    return carsArray;
  }
  async tryCount() {
    const regex = new RegExp(/^[0-9]{1,}$/);
    const tryCount = await Console.readLineAsync("시도할 횟수는 몇 회인가요?");
    if (!regex.test(tryCount)) {
      throw new Error("[ERROR] 반복 횟수는 숫자로 입력해야 합니다.");
    } else if (Number(tryCount) < 1) {
      throw new Error("[ERROR] 반복 횟수는 1 이상의 숫자여야 합니다.");
    }
    return Number(tryCount);
  }
  async game() {
    const cars = await this.cars();
    const tryCount = await this.tryCount();
    const towardState = new Array(cars.length).fill(0);

    for (let i = 0; i < tryCount; i++) {
      const result = this.toward(cars.length);
      for (let j = 0; j < result.length; j++) {
        result[j] && (towardState[j] += 1);
      }
      this.gameResult(cars, towardState);
      Console.print("");
    }
  }
  toward(length) {
    const result = [];
    for (let i = 0; i < length; i++) {
      result.push(Random.pickNumberInRange(0, 9) >= 4 ? true : false);
    }
    return result;
  }
  gameResult(cars, towardState) {
    cars.forEach((car, i) => {
      Console.print(`${car} : ${"-".repeat(towardState[i])}`);
    });
  }
  winner(cars, finalResult) {
    const maxScore = Math.max(...finalResult);
    const winners = [];
    for (let i = 0; i < cars.length; i++) {
      if (finalResult[i] === maxScore) {
        winners.push(cars[i]);
      }
    }

    const winner = winners.length > 1 ? winners.join(", ") : winners[0];
    Console.print(`최종 우승자 : ${winner}`);
  }
}

export default App;
