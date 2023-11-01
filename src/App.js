import { Console, Random } from "@woowacourse/mission-utils";
import { GAME_MESSAGES, ERROR_MESSAGES } from "./Message";

class App {
  constructor() {
    this.carList = [];
    this.attemptRound = 0;
  }
  
  // 경주할 자동차 이름 받기 & 유효성 검사
  async inputCarName() {
    const carName = await Console.readLineAsync(GAME_MESSAGES.START);
    const carArray = carName.split(",");
    this.isValidCar(carArray);
    this.carList = carArray;
  }

  isValidCar(carArray) {
    carArray.forEach(car => {
      if (car.length > 5) {
        throw new Error(ERROR_MESSAGES.OVER_FIVE);
      }
      if (car.trim() === "") {
        throw new Error(ERROR_MESSAGES.EMPTY_NAME);
      }
    });
    if (carArray.length < 2) {
        throw new Error(ERROR_MESSAGES.SOLO_NAME);
      }
  }

  // 시도할 횟수 입력 받기 & 유효성 검사
  async inputRound() {
    const attemptRound = await Console.readLineAsync(GAME_MESSAGES.ATTEMPT);
    this.isValidRound(attemptRound);
  }

  isValidRound(attemptRound) {
    if (isNaN(+attemptRound)) {
      throw new Error(ERROR_MESSAGES.NOT_NUMBER);
    }
    if (+attemptRound < 1) {
      throw new Error(ERROR_MESSAGES.UNDER_ONE);
    }
    this.attemptRound = +attemptRound;
  }

}

export default App;
