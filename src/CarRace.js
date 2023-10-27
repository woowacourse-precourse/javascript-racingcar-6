import { MissionUtils } from "@woowacourse/mission-utils";

class CarRace {
  #cars;

  async handleRace() {
    await this.handleCar();
    // 1. 시도 횟수를 입력 받습니다.
    this.readTryNumber();

    this.handleRaceResult();
  }

  async handleCar() {
    let carNames;
    try {
      carNames = await this.readCarsInput();
      // 2. 입력값을 토대로 car클래스를 만듭니다.
    } catch (error) {
      throw error;
    }
    const CAR_CLASSES = this.handleCarConvertedToClass(carNames);
    // 3. 그 값을 CarRace의 Cars변수에 할당합니다.
    this.setCars(CAR_CLASSES);
  }
  async readCarsInput() {
    let input;
    try {
      input = await MissionUtils.Console.readLineAsync();
    } catch (error) {
      throw error;
    }
    const CARS = input.split(",");
    this.validateCarsInput(CARS);
    return CARS;
  }

  validateCarsInput(cars) {
    const carsSet = new Set(cars);
    if (carsSet.size !== cars.length) {
      throw new Error("[ERROR] 자동차 이름에 중복이 있습니다.");
    }
    for (const car of cars) {
      const trimCarName = car.trim();
      if (car.length > 5) {
        throw new Error("[ERROR] 자동차 이름의 길이는 5를 넘어선 안됩니다.");
      }
      if (trimCarName !== car) {
        throw new Error(
          "[ERROR] 자동차 이름의 앞 뒤에는 공백이 있어선 안됩니다."
        );
      }
    }
  }
  setCars(carClasses) {
    this.#cars = [...carClasses];
  }

  handleRaceResult() {
    // 2. 시도 횟수를 토대로 실행 결과를 출력합니다.
    // 3. 우승자를 출력합니다.
  }
}

export default CarRace;
