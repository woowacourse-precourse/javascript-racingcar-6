import { MissionUtils } from "@woowacourse/mission-utils";
import Car from "./Car";

class App {
  #cars = [];

  // 자동차 이름 입력에 대한 유효성 테스트
  static #checkValidCarName(input) {
    if (input.some((carName) => carName.length > 5 || carName.length < 1))
      throw new Error("[ERROR] 1자 이상, 5자 이하의 이름만 사용 가능합니다.");
  }

  // 시도 횟수 입력에 대한 유효성 테스트
  static #checkValidRoundNumber(input) {
    if (Number.isNaN(input) || input < 1)
      throw new Error("[ERROR] 시도 횟수는 1 이상의 숫자여야합니다.");
  }

  // 자동차의 이름들을 입력받는 메소드
  static async #inputCarName() {
    const carNames = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    const carNameArray = carNames.split(",");
    App.#checkValidCarName(carNameArray);
    return carNameArray;
  }

  // 입력받은 자동차들을 참여시키는 메소드
  async #inputCar() {
    const carNameArray = await App.#inputCarName();
    this.#cars = carNameArray.map((carName) => new Car(carName));
  }

  static async #inputRoundNumber() {
    const roundInput = await MissionUtils.Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?"
    );
    const roundNumber = parseInt(roundInput, 10);
    App.#checkValidRoundNumber(roundNumber);
    return roundNumber;
  }

  #playRound() {
    this.#cars.forEach((car) => {
      car.move();
    });
    MissionUtils.Console.print("");
  }

  #printFinalWinner() {
    let winners = [];
    let winnerPosition = -1;
    this.#cars.forEach((car) => {
      if (car.position > winnerPosition) {
        winnerPosition = car.position;
        winners = [car.name];
      } else if (car.position === winnerPosition) {
        winners.push(car.name);
      }
    });
    MissionUtils.Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }

  async play() {
    await this.#inputCar();
    const roundNumber = await App.#inputRoundNumber();
    MissionUtils.Console.print("실행 결과");
    for (let i = 1; i <= roundNumber; i++) {
      this.#playRound();
    }
    this.#printFinalWinner();
  }
}

export default App;
