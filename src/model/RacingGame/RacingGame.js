import { Console } from "../../utils/console/console.js";
import RacingCar from "../RacingCar/RacingCar.js";
import IncorrectFormatError from "../../error/IncorrectFormatError.js";
import { RacingGameState } from "../../constants/game.js";
import { getRandomNumber } from "../../utils/random/random.js";
import { RacingGameMessage } from "../../utils/message/message.js";
import OutOfRangeError from "../../error/OutOfRangeError.js";
import Log from "../Log/Log.js";

class RacingGame {
  #gameLogs;
  #racingCars;
  #totalCount;
  #currentCount;
  constructor() {
    this.#gameLogs = new Log(RacingGameState.MAX_LOG_LENGTH);
    this.#racingCars = [];
    this.#totalCount = 0;
    this.#currentCount = 0;
  }

  async start() {
    // 자동차 이름 입력 받기
    const nameInput = await Console.readLineAsync(RacingGameMessage.nameTitle());
    const names = nameInput.split(",");

    // 이름이 MAX_NAME_LENGTH를 초과하면 OutOfRangeError
    if (names.some((name) => name.length > RacingGameState.MAX_NAME_LENGTH)) {
      throw new OutOfRangeError(RacingGameState.MAX_NAME_LENGTH);
    }

    // RacingCar 객체 생성 & racingCars에 push
    names.forEach((name) => this.#racingCars.push(new RacingCar(name)));

    // 시도 횟수 입력 받기
    const countInput = await Console.readLineAsync(RacingGameMessage.countTitle());
    const count = Number(countInput);

    // 시도 횟수가 숫자가 아니면 IncorrectFormatError
    if (isNaN(count)) {
      throw new IncorrectFormatError();
    }
    this.#totalCount = count;

    // totalCount 만큼 게임 진행
    this.#gameLogs.push(RacingGameMessage.resultTitle());
    while (this.run());

    // 우승자 출력
    const winners = this.getWinners();
    this.#gameLogs.push(RacingGameMessage.winner(winners.join(", ")));

    // 모아둔 게임 로그 전부 출력
    this.#gameLogs.flush();
  }

  run() {
    // racingCar들 각각 게임 진행
    this.#racingCars.forEach((racingCar) => {
      // 무작위 값이 MIN_NUMBER 이상이면 이동
      const randomNumber = getRandomNumber(
        RacingGameState.START_NUMBER,
        RacingGameState.END_NUMBER
      );
      const isMove = randomNumber >= RacingGameState.MIN_NUMBER;
      if (isMove) {
        racingCar.move();
      }

      // 현재 결과 출력
      const log = racingCar.getLog();
      this.#gameLogs.push(log);
    });
    // 한 줄 띄어쓰기
    this.#gameLogs.push("");

    // count 횟수 증가 시키고 진행 가능 여부 리턴
    return ++this.#currentCount < this.#totalCount;
  }

  // 우승자 반환 string[]
  getWinners() {
    const maxCount = Math.max(...this.#racingCars.map((racingCar) => racingCar.getCount()));
    return this.#racingCars
      .filter((racingCar) => racingCar.getCount() === maxCount)
      .map((racingCar) => racingCar.getName());
  }

  addGameLog(msg) {
    this.#gameLogs;
  }
}

export default RacingGame;
