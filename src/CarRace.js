import { MissionUtils } from "@woowacourse/mission-utils";
import Car from "./Car.js";
class CarRace {
  #cars;
  #tryNumber;

  async handleRace() {
    await this.handleCar();

    const TRY_NUMBER = await this.readTryNumber();
    this.setTryNumber(TRY_NUMBER);

    this.handleRaceResult();
  }

  async handleCar() {
    let input;
    try {
      input = await this.readCarsInput();
    } catch (error) {
      throw error;
    }

    const CAR_NAMES = input.split(",");
    const CAR_CLASSES = this.handleCarConvertedToClass(CAR_NAMES);
    this.setCars(CAR_CLASSES);
  }
  async readCarsInput() {
    let input;
    try {
      input = await MissionUtils.Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
      );
      if (input === "")
        throw new Error("[ERROR] 자동차 이름을 입력하지 않으셨습니다.");
    } catch (error) {
      throw error;
    }
    this.validateCarsInput(input);
    return input;
  }

  validateCarsInput(input) {
    const CARS = input.split(",");
    const carsSet = new Set(CARS);
    if (carsSet.size !== CARS.length) {
      throw new Error("[ERROR] 자동차 이름에 중복이 있습니다.");
    }
    for (const CAR of CARS) {
      const trimCarName = CAR.trim();
      if (CAR.length > 5) {
        throw new Error("[ERROR] 자동차 이름의 길이는 5를 넘어선 안됩니다.");
      }
      if (trimCarName !== CAR) {
        throw new Error(
          "[ERROR] 자동차 이름의 앞 뒤에는 공백이 있어선 안됩니다."
        );
      }
    }
  }
  handleCarConvertedToClass(cars) {
    const carClasses = cars.map((car) => {
      const carClass = new Car(car);
      return carClass;
    });
    return carClasses;
  }

  setCars(carClasses) {
    this.#cars = [...carClasses];
  }

  async readTryNumber() {
    let input;
    try {
      input = await MissionUtils.Console.readLineAsync(
        "시도할 횟수는 몇 회인가요?"
      );
    } catch (error) {
      throw error;
    }
    this.validTryNumber(input);
    return Number(input);
  }

  validTryNumber(input) {
    const trimInput = input.trim();
    if (trimInput === "")
      throw new Error("[ERROR] 시도 횟수를 입력하지 않으셨습니다.");
    if (Number.isNaN(Number(trimInput)))
      throw new Error("[ERROR] 시도 횟수는 숫자 값만 입력해주세요.");
  }

  setTryNumber(number) {
    this.#tryNumber = number;
  }

  handleRaceResult() {
    MissionUtils.Console.print("실행 결과");
    // 1. 시도 횟수만큼 전진 혹은 정지 합니다. 이 값은 랜덤으로 정합니다.
    let tryOrder = 0;
    let printString = "";

    while (tryOrder < this.#tryNumber) {
      this.#cars.forEach((carClass) => {
        const RANDOM = MissionUtils.Random.pickNumberInRange(0, 9);
        if (RANDOM >= 4) carClass.setDistancePlusOne();
        printString += `${carClass.getName()} : ${carClass.getDistanceString()}\n`;
      });
      printString += "\n";
      tryOrder += 1;
    }

    MissionUtils.Console.print(printString);
    // 3. 우승자를 출력합니다.
  }
}

export default CarRace;
