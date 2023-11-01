import { Console, Random } from "@woowacourse/mission-utils";
import { GAME_MESSAGES, ERROR_MESSAGES } from "./Message";

class App {
  constructor() {
    this.carList = [];
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


}

export default App;
