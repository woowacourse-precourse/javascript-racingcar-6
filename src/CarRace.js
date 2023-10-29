import { MissionUtils } from "@woowacourse/mission-utils";
import carHandler from "./utils/carHandler";
import numberHandler from "./utils/numberHandler";

class CarRace {
  #cars;

  #tryNumber;

  async handleRace() {
    await this.handleCar();

    await this.handleTryNumber();

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

  async handleTryNumber() {
    const TRY_NUMBER = await numberHandler.readTryNumber();
    this.setTryNumber(TRY_NUMBER);
  }

  setTryNumber(number) {
    this.#tryNumber = number;
  }

  handleRaceResult() {
    MissionUtils.Console.print("실행 결과");

    const STRINGTOPRINT = this.getResultString();
    MissionUtils.Console.print(STRINGTOPRINT);

    const WINNER = this.getWinner(this.#cars);
    this.printWinner(WINNER);
  }

  getResultString() {
    let stringToPrint = "";

    for (let tryOrder = 0; tryOrder < this.#tryNumber; tryOrder += 1) {
      let string = "";
      this.#cars.forEach((carClass) => {
        const RANDOM = this.getRandomeNumberInRange(0, 9);
        if (RANDOM >= 4) carClass.setDistancePlusOne();
        string += `${carClass.getName()} : ${carClass.getDistanceString()}\n`;
      });
      stringToPrint += string;
      stringToPrint += "\n";
    }

    return stringToPrint;
  }

  getRandomeNumberInRange(min, max) {
    return MissionUtils.Random.pickNumberInRange(min, max);
  }

  getWinner(cars) {
    const CAR_OBJECTS = cars.map((carClass) => {
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
