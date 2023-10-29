import { MissionUtils } from "@woowacourse/mission-utils";
import carHandler from "./utils/carHandler";

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
    const INPUT = await carHandler.readCarsInput();

    const CAR_NAMES = INPUT.split(",");
    const CAR_CLASSES = carHandler.handleCarConvertedToClass(CAR_NAMES);
    this.setCars(CAR_CLASSES);
  }

  setCars(carClasses) {
    this.#cars = [...carClasses];
  }

  async readTryNumber() {
    const INPUT =
      await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?");

    this.validTryNumber(INPUT);
    return Number(INPUT);
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
    // 2. 출력합니다.
    let tryOrder = 0;
    let stringToPrint = "";

    while (tryOrder < this.#tryNumber) {
      let string = "";
      this.#cars.forEach((carClass) => {
        const RANDOM = MissionUtils.Random.pickNumberInRange(0, 9);
        if (RANDOM >= 4) carClass.setDistancePlusOne();
        string += `${carClass.getName()} : ${carClass.getDistanceString()}\n`;
      });
      stringToPrint += string;
      stringToPrint += "\n";
      tryOrder += 1;
    }

    MissionUtils.Console.print(stringToPrint);
    // 3. 우승자를 출력합니다.
    const WINNER = this.getWinner();
    this.printWinner(WINNER);
  }

  getWinner() {
    const CAR_OBJECTS = this.#cars.map((carClass) => {
      const CAR_OBJECT = {
        name: carClass.getName(),
        distance: carClass.getDistanceString().length,
      };
      return CAR_OBJECT;
    });

    CAR_OBJECTS.sort(
      (carObject1, carObject2) => carObject2.distance - carObject1.distance
    );

    const WIN_DISTANCE = CAR_OBJECTS[0].distance;
    const winner = [];
    CAR_OBJECTS.forEach(({ name, distance }) => {
      if (distance === WIN_DISTANCE) winner.push(name);
    });
    return winner;
  }

  printWinner(winner) {
    const WINNER_STRING = winner.join(", ");
    MissionUtils.Console.print(`최종 우승자 : ${WINNER_STRING}`);
  }
}

export default CarRace;
