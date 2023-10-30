import { ERROR_MESSAGE } from "../constant/message.js";
import consoleControl from "./consoleControl.js";

export default async function getCarNameAndCheck() {
  const userInput = await consoleControl.readCarName();
  const carList = userInput.split(",");

  inputValidation(carList);

  return carList;
}
function inputValidation(carList) {
  for (let car of carList) {
    if (car.length > 5 || car.length === 0) {
      throw new Error(ERROR_MESSAGE.CAR_LENGTH);
    }
  }
}
