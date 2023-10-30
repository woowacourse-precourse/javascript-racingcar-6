import { Console } from "@woowacourse/mission-utils";

export default class App {
  constructor() {
    this.player = "";
    this.race = "";
  }

  async play() {
    await this.getCarsName();
    await this.getTotalRound();
  }

  async getCarsName() {
    const cars = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    const validCars = isValidCars(cars);
    this.player = validCars;
  }

  async getTotalRound() {
    const round = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    const validRound = isValidRound(round);
    this.race = validRound;
  }
}

function isValidCars(cars) {
  const carList = cars.split(",");

  const underFiveDigitCars = [];

  for (const car of carList) {
    const trimmedCarName = car.trim();

    if (trimmedCarName.length > 5)
      throw new Error(
        "[ERROR] 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능합니다."
      );

    underFiveDigitCars.push(trimmedCarName);
  }

  return underFiveDigitCars;
}

function isValidRound(round) {
  const roundNumber = Number(round);

  if (isNaN(round)) {
    throw new Error("[ERROR] 시도할 횟수는 숫자만 가능합니다.");
  }

  if (!Number.isInteger(roundNumber)) {
    throw new Error("[ERROR] 시도할 횟수는 자연수만 가능합니다.");
  }

  return roundNumber;
}
