import { MissionUtils } from "@woowacourse/mission-utils";

class CarRace {
  #cars = [];

  async handleRace() {
    await this.handleCar();

    this.handleRace();
  }

  async handleCar() {
    try {
      const RACING_CARS = await this.readCarsInput();
    } catch (error) {
      throw error;
    }
    // 2. 입력값을 토대로 car클래스를 만듭니다.
    // 3. 그 값을 CarRace의 Cars변수에 할당합니다.
  }
  async readCarsInput() {
    let input;
    try {
      input = await MissionUtils.Console.readLineAsync();
    } catch (error) {
      throw error;
    }
    const RACING_CARS = input.split(",");
    this.validateCarsInput(RACING_CARS);
    return RACING_CARS;
  }

  validateCarsInput(racingCars) {
    const racingCarsSet = new Set(racingCars);
    if (racingCarsSet.size !== racingCars.length) {
      throw new Error("[ERROR] 자동차 이름에 중복이 있습니다.");
    }
    for (const racingCar of racingCars) {
      const trimCarName = racingCar.trim();
      if (racingCar.length > 5) {
        throw new Error("[ERROR] 자동차 이름의 길이는 5를 넘어선 안됩니다.");
      }
      if (trimCarName !== racingCar) {
        throw new Error(
          "[ERROR] 자동차 이름의 앞 뒤에는 공백이 있어선 안됩니다."
        );
      }
    }
  }
  handleRace() {
    // 1. 시도 횟수를 입력 받습니다.
    // 2. 시도 횟수를 토대로 실행 결과를 출력합니다.
    // 3. 우승자를 출력합니다.
  }
}

export default CarRace;
