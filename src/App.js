import { Console } from "@woowacourse/mission-utils";

export default class App {
  constructor() {
    this.player = "";
    this.race = "";
  }

  async play() {
    await this.getCarsName();
  }

  async getCarsName() {
    const cars = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    const validCars = isValidCars(cars);
    this.player = validCars;
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
