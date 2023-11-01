import { Random, Console } from "@woowacourse/mission-utils";
import Car from "./Car.js";

class App {
  async play() {
    try {
      const carNames = await this.getCarNames();
      const rounds = await this.getRounds();

      const cars = carNames.map((name) => new Car(name));

      this.startRace(cars, rounds);
      this.displayWinners(cars);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }

  // 자동차 이름을 입력받는 함수
  async getCarNames() {
    const carNamesInput = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분) \n"
    );
    this.validateCarNameSeparator(carNamesInput);

    const carNames = carNamesInput.split(",");
    carNames.forEach((carName) => this.validateCarName(carName));

    this.validateNumberOfCars(carNames);

    return carNames;
  }

  // 시도 횟수를 입력받는 함수
  async getRounds() {
    const roundsInputs = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요? \n"
    );
    this.validateTrialCount(roundsInputs);

    return Number(roundsInputs);
  }

  // 레이싱 경주 실행 함수
  startRace(cars, rounds) {
    Console.print("\n실행 결과");

    for (let i = 0; i < rounds; i++) {
      cars.forEach((car) => {
        const randomNumber = Random.pickNumberInRange(0, 9);
        car.moveForward(randomNumber);
      });
      cars.forEach((car) => Console.print(car.displayRaceResults()));

      Console.print("\n");
    }
  }

  // position에 따라 우승자를 출력하는 함수
  displayWinners(cars) {
    const maxPosition = Math.max(...cars.map((car) => car.position));
    const winners = cars
      .filter((car) => car.position === maxPosition)
      .map((car) => car.name);

    Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }

  // 자동차 이름 길이가 5자 이하인지 검사하는 함수
  validateCarName(carName) {
    if (carName.length > 5) {
      throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
    }
  }

  // 자동차 이름을 쉼표로 구분하여 입력했는지 검사하는 함수
  validateCarNameSeparator(carNamesInput) {
    const forbiddenChars = [" ", ";", ":", "|", "&", "$", "%", "@", "!", "*"];

    forbiddenChars.forEach((char) => {
      if (carNamesInput.includes(char)) {
        throw new Error("[ERROR] 자동차 이름은 쉼표(,)로만 구분해야 합니다.");
      }
    });
  }

  // 자동차 이름을 2개 이상 입력했는지 검사하는 함수
  validateNumberOfCars(carNames) {
    if (carNames.length <= 1) {
      throw new Error("[ERROR] 자동차 이름은 2개 이상이어야 합니다.");
    }
  }

  // 시도 횟수에 숫자 외 다른 값을 입력했는지 검사하는 함수
  validateTrialCount(trialCount) {
    if (isNaN(Number(trialCount)) || trialCount <= 0) {
      throw new Error("[ERROR] 시도할 횟수는 양의 숫자여야 합니다.");
    }
  }
}

export default App;
