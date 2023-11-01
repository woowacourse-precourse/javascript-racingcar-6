import { Console, Random } from "@woowacourse/mission-utils";
import { GAME_MESSAGES, ERROR_MESSAGES } from "./Message.js";

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

  // 자동차별 진행 상황 계산 및 출력
  async carRace() {
    Console.print("실행 결과");
    const init = new Array(this.carList.length).fill("");
    this.racing = init;
    this.startCarRace();
  }

  startCarRace() {
    for (let i = 0; i < this.attemptRound; i++){
      this.moveForward();
      this.displayCarRace();
    }
  }

  moveForward() {
    for (let j = 0; j < this.carList.length; j++) {
      const random = Random.pickNumberInRange(0, 9);
      if (random >= 4) {
        this.racing[j] += "-";
      }
    }
  }

  displayCarRace() {
    for (let k = 0; k < this.carList.length; k++) {
      Console.print(this.carList[k] + " : " + this.racing[k]);
    }
    Console.print("");
  }
  

  async carRaceWinner() {
    const progressResult = this.racing.map((progress) => progress.length);
    const maxProgress = Math.max(...progressResult);
    const winners = this.carList.filter((_, index) => progressResult[index] === maxProgress);

    const selectWinner =
      winners.length === 1 ? "최종 우승자 : " + winners[0] : "최종 우승자 : " + winners.join(", ");
    Console.print(selectWinner);
  }

  async play() {
    await this.inputCarName();
    await this.inputRound();
    await this.carRace();
    await this.carRaceWinner();
  }
}

export default App;
