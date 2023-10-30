import { ERROR_MESSAGE } from "../constant/message.js";
import consoleControl from "./consoleControl.js";

export default async function getCarNameAndCheck() {
  const userInput = await consoleControl.readCarName();
  const carList = initializecarList(userInput);

  inputValidation(carList);

  return carList;
}
function inputValidation(carList) {
  for (const carName in carList) {
    const name = carList[carName];
    if (name.length > 5 || name.length === 0) {
      throw new Error(ERROR_MESSAGE.CAR_LENGTH);
    }
  }
}

function initializecarList(userInput) {
  const carList = {};
  const carNames = userInput.split(",");

  for (const name of carNames) {
    carList[name] = 0;
  }

  return carList;
}
