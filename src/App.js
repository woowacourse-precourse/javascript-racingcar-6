import { MissionUtils } from "@woowacourse/mission-utils";
class App {
  validateCar = (cars) => {
    for (let car of cars) {
      if (car.length > 5) {
        throw new Error("[ERROR] 자동차 이름은 5글자 이하입니다.");
      }
    }
  };

  validationCarName = (cars) => {
    try {
      this.validateCar(cars);
    } catch (error) {
      MissionUtils.Console.print("에러");
      return false;
    }
    return true;
  };

  carCreate = (cars) => {
    let car = new Map();
    for (let carName of cars) {
      car.set(carName, 0);
    }
    return car;
  };

  createCarName = async () => {
    const input = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    const cars = input.split(",");
    this.validateCar(cars);
    let inputAttempts = await MissionUtils.Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );
    let car = this.carCreate(cars);
    this.attempts(cars, car, inputAttempts);
  };

  async attempts(cars, car, inputAttempts) {
    MissionUtils.Console.print("\n실행 결과");
    while (inputAttempts > 0) {
      this.racingGame(cars, car);
      this.racingResult(cars, car);
      inputAttempts--;
    }
    this.winner(cars, car);
  }

  winner = (cars, car) => {
    const winner = this.getWinner(cars, car);
    this.printWinner(winner);
  };

  getWinner = (cars, car) => {
    console.log(cars, car);
    let winnerScore = this.winnerScore(car);
    let winner = [];
    let index = 0;
    for (let carScore of cars) {
      const winnerCar = car.get(carScore);
      if (winnerCar == winnerScore) {
        winner[index] = carScore;
        index++;
      }
    }
    return winner;
  };

  winnerScore = (car) => {
    let winnerScore = -1;
    for (let score of car.values()) {
      if (score > winnerScore) {
        winnerScore = score;
      }
    }
    return winnerScore;
  };

  printWinner = (winner) => {
    let result = "";
    for (let finalWinner of winner) {
      result += finalWinner + ", ";
    }
    result = result.substring(0, result.length - 2);
    MissionUtils.Console.print("최종 우승자 : " + result);
  };

  racingGame = (cars, car) => {
    for (let carName of cars) {
      const moveNumber = MissionUtils.Random.pickNumberInRange(0, 9);
      let move = 0;
      if (moveNumber >= 4) {
        move = 1;
      }
      car.set(carName, car.get(carName) + move);
    }
  };

  racingResult = (cars, car) => {
    for (let carName of cars) {
      const score = car.get(carName);
      let result = "";
      for (let i = 0; i < score; i++) {
        result += "-";
      }
      MissionUtils.Console.print(carName + " : " + result);
    }
    MissionUtils.Console.print("");
  };

  async play() {
    this.createCarName();
  }
}

export default App;
