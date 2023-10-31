import { MissionUtils } from "@woowacourse/mission-utils";
import AppError from "./AppError.js";
import Car from "./Car.js";

const REGEX_NUMBER = /^[0-9]+$/;

const print = (message) => MissionUtils.Console.print(message);
const question = async (message) => MissionUtils.Console.readLineAsync(message);

class App {
  #status = "idle";

  #cars = [];

  #round = null;

  async play() {
    await this.#transition("setting");
  }

  async #transition(status) {
    this.#status = status;
    await this.#transitionEffect();
  }

  async #transitionEffect() {
    switch (this.#status) {
      case "idle": {
        break;
      }
      case "setting": {
        const namesInput = await question("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
        const names = namesInput.split(",").map((name) => name.trim());
        if (names.some((name) => name === "" || name.length > 5)) throw new AppError("자동차의 이름은 1자이상 5자 이하만 가능합니다.");

        const roundInput = await question("시도할 횟수는 몇 회인가요?\n");
        if (!REGEX_NUMBER.test(roundInput)) throw new AppError("숫자만 입력해주세요.");
        const round = Number(roundInput);
        if (round === 0) throw new AppError("1 이상의 숫자로 입력해주세요.");

        const cars = names.map((name) => new Car(name));

        this.#cars = cars;
        this.#round = round;

        await this.#transition("start");
        break;
      }
      case "start": {
        print("\n실행 결과");
        while (this.#round > 0) {
          this.#cars.forEach((car) => car.move());
          print(this.#getSnapshot());
          this.#round -= 1;
        }

        await this.#transition("finish");
        break;
      }
      case "finish": {
        const winners = this.#findWinners();
        print(`최종 우승자 : ${winners.map((winner) => winner.getName()).join(", ")}`);
        break;
      }
      default: {
        break;
      }
    }
  }

  #getSnapshot() {
    return this.#cars.reduce((acc, car) => acc.concat(`${car.getName()} : ${"-".repeat(car.getMileage())}\n`), "");
  }

  #findWinners() {
    const maxMileage = Math.max(...this.#cars.map((car) => car.getMileage()));
    return this.#cars.filter((car) => car.getMileage() >= maxMileage);
  }
}

export default App;
