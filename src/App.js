import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async play() {
    try {
      const gameSettings = await this.promptGameSettings();
      const gameResults = this.startGame(
        gameSettings.carNames,
        gameSettings.numberOfRounds
      );
      this.displayResults(gameResults);
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async promptGameSettings() {
    const carNames = await this.promptCarNames();
    const numberOfRounds = await this.promptNumberOfRounds();
    return { carNames, numberOfRounds };
  }

  startGame(carNames, numberOfRounds) {
    let cars = carNames.map((name) => ({ name, position: 0 }));

    Console.print("실행결과");
    for (let round = 0; round < numberOfRounds; round++) {
      cars.forEach((car) => {
        if (Random.pickNumberInRange(1, 10) >= 4) {
          car.position += 1;
        }
      });
      this.displayRoundResults(cars);
    }
    return cars;
  }

  displayRoundResults(cars) {
    let resultString = cars
      .map((car) => `${car.name} : ${"-".repeat(car.position)}`) // "name :"과 "-" 사이의 공백을 일치시킵니다.
      .join("\n");
    Console.print(resultString);
  }
  displayResults(cars) {
    const maxPosition = Math.max(...cars.map((car) => car.position));
    const winners = cars
      .filter((car) => car.position === maxPosition)
      .map((car) => car.name);
    Console.print(`최종우승자: ${winners.join(",")}`);
  }

  async promptCarNames() {
    const input = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    const carNames = input.split(",").map((name) => name.trim());
    this.validateCarNames(carNames);
    return carNames;
  }
  async promptNumberOfRounds() {
    const input = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?(1~10회로 제한)"
    );
    const numberOfRounds = Number(input);
    this.validateNumberOfRounds(numberOfRounds);
    return numberOfRounds;
  }

  validateCarNames(carNames) {
    if (carNames.length < 2) {
      throw new Error(
        "[ERROR] 차 리스트가 1개 이하입니다. 2개 이상을 입력해주세요."
      );
    }
    carNames.forEach((name) => {
      if (name.length > 5) {
        throw new Error(
          "[ERROR] 차 이름이 너무 깁니다. 각 이름은 5자 이하로 해주세요."
        );
      }
    });
  }

  validateNumberOfRounds(number) {
    if (
      isNaN(number) ||
      number < 1 ||
      number > 10 ||
      !Number.isInteger(number)
    ) {
      throw new Error("게임 횟수는 숫자이며 1과 10 사이의 정수이어야 합니다.");
    }
  }
}

export default App;

new App().play();
