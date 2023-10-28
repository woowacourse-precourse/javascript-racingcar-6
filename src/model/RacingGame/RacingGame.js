import { Console } from "../../utils/console/console.js";
import RacingCar from "../RacingCar/RacingCar.js";
import IncorrectFormatError from "../../error/IncorrectFormatError.js";
import { RacingGameState } from "../../constanst/game.js";
import { getRandomNumber } from "../../utils/random/random.js";

class RacingGame {
  #racingCars;
  #totalCount;
  #currentCount;
  constructor() {
    this.#racingCars = [];
    this.#totalCount = 0;
    this.#currentCount = 0;
  }

  async start() {
    // 시작 메시지
    Console.print("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");

    // 자동차 이름 입력 받기 & RacingCar 객체 생성
    const names = await Console.readLineAsync();
    names.split(",").forEach((name) => this.#racingCars.push(new RacingCar(name)));

    // 시도 횟수 입력
    const count = await Console.readLineAsync();
    if (isNaN(Number(count))) {
      throw new IncorrectFormatError();
    }
    this.#totalCount = count;

    // totalCount 만큼 게임 진행
    Console.print("실행 결과");
    while (this.run());

    // 우승자 출력
    const winners = this.getWinners();
    Console.print(`최종 우승자 : ${winners.join(", ")}`);
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
      Console.print(log);
    });
    // 한 줄 띄어쓰기
    Console.print();

    // count 횟수 증가 시키고 진행 가능 여부 리턴
    return ++this.#currentCount < this.#totalCount;
  }

  // 우승자 반환 string[]
  getWinners() {
    let maxCount = 0;
    this.#racingCars.forEach((racingCar) => (maxCount = Math.max(maxCount, racingCar.getCount())));
    return this.#racingCars
      .filter((racingCar) => racingCar.getCount() === maxCount)
      .map((racingCar) => racingCar.getName());
  }
}

export default RacingGame;
