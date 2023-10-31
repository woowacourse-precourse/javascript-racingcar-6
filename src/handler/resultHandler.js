import { getRandomeNumberInRange, printOutput } from "../utils/missionUtils";
import { RESULT_MESSAGES } from "../utils/messages";

function getResultStringOneLine(cars) {
  let string = "";
  const NEW_CARS = cars.map((carClass) => {
    const RANDOM = getRandomeNumberInRange(0, 9);
    if (RANDOM >= 4) carClass.setDistancePlusOne();
    string += `${carClass.getName()} : ${carClass.getDistanceString()}\n`;
    return carClass;
  });
  return [string, NEW_CARS];
}

const resultHandler = {
  getResultString: ({ tryNumber, cars }) => {
    let stringToPrint = `${RESULT_MESSAGES.OUTPUT.RESULT}\n`;
    let currentCars = cars;
    for (let tryOrder = 0; tryOrder < tryNumber; tryOrder += 1) {
      const [STRING_ONE_LINE, NEW_CARS] = getResultStringOneLine(currentCars);
      stringToPrint += STRING_ONE_LINE;
      stringToPrint += "\n";
      currentCars = NEW_CARS;
    }
    return [stringToPrint, currentCars];
  },

  getWinner: (cars) => {
    const winner = [];
    const SORTED_CARS = [...cars].sort(
      (car1, car2) => car2.getDistanceLength() - car1.getDistanceLength()
    );
    const WIN_DISTANCE = SORTED_CARS[0].getDistanceLength();
    SORTED_CARS.forEach((car) => {
      if (car.getDistanceLength() === WIN_DISTANCE) winner.push(car.getName());
    });
    return winner;
  },

  printWinner: (winner) => {
    const WINNER_STRING = winner.join(", ");
    printOutput(`${RESULT_MESSAGES.OUTPUT.WINNER} ${WINNER_STRING}`);
  },
};

export default resultHandler;
