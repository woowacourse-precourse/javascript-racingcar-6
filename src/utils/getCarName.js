import { Console } from "@woowacourse/mission-utils";
import { inputMessage } from "../messages/inputMessage.js";
import { checkEmptyValue, checkCarNameLength } from "../validators/carNameValidator.js";

export const getCarName = async () => {
  Console.print(inputMessage.CAR_MESSAGE);
  
  const carName = await Console.readLineAsync("");
  const carNameArray = carName.split(",");

  checkEmptyValue(carNameArray);
  checkCarNameLength(carNameArray);

  return carNameArray;
};
