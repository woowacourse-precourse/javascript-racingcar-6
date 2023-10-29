import { MissionUtils } from "@woowacourse/mission-utils";
import Car from "../Car";

function validateCarsInput(input) {
  const CARS = input.split(",");
  const carsSet = new Set(CARS);
  if (carsSet.size !== CARS.length) {
    throw new Error("[ERROR] 자동차 이름에 중복이 있습니다.");
  }
  CARS.forEach((CAR) => {
    const trimCarName = CAR.trim();
    if (CAR.length > 5) {
      throw new Error("[ERROR] 자동차 이름의 길이는 5를 넘어선 안됩니다.");
    }
    if (trimCarName !== CAR) {
      throw new Error(
        "[ERROR] 자동차 이름의 앞 뒤에는 공백이 있어선 안됩니다."
      );
    }
  });
}

const carHandler = {
  readCarsInput: async () => {
    const INPUT = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    if (INPUT === "")
      throw new Error("[ERROR] 자동차 이름을 입력하지 않으셨습니다.");

    validateCarsInput(INPUT);
    return INPUT;
  },

  handleCarConvertedToClass: (cars) => {
    const carClasses = cars.map((car) => {
      const carClass = new Car(car);
      return carClass;
    });
    return carClasses;
  },
};

export default carHandler;
