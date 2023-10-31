import Car from "../Car";
import { CAR_MESSAGES } from "../utils/messages";
import { readInput } from "../utils/missionUtils";

function validateCarsInput(input) {
  const CARS = input.split(",");
  const carsSet = new Set(CARS);

  if (CARS.length < 2) throw new Error(CAR_MESSAGES.ERROR.MUST_OVER_2);
  if (carsSet.size !== CARS.length)
    throw new Error(CAR_MESSAGES.ERROR.NOT_DUPLICATION);

  CARS.forEach((CAR) => {
    const TRIM_CAR_NAME = CAR.trim();
    if (CAR.length > 5) throw new Error(CAR_MESSAGES.ERROR.NOT_OVER_5);
    if (TRIM_CAR_NAME !== CAR) throw new Error(CAR_MESSAGES.ERROR.NOT_SPACE);
    if (TRIM_CAR_NAME === "") throw new Error(CAR_MESSAGES.ERROR.MUST_INPUT);
  });
}

const carHandler = {
  readCarsInput: async () => {
    const INPUT = await readInput(CAR_MESSAGES.INPUT);
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
