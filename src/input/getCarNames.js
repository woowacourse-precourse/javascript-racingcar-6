import { Console } from "@woowacourse/mission-utils";
import { messages } from "../output/messages.js";

export default async function getCarNames(){
  let userInput;
  try {
    userInput = await Console.readLineAsync(messages.CAR_NAMES_QUESTION);
  } catch (error) {
    throw new Error(messages.INPUT_ERROR);
  }    
  const carNames = userInput.split(",");

  if (isValidCarName(carNames)) {
    return carNames;
  }
};

const isValidCarName = (carNames) => {
  const validCarNames = carNames.filter((carName) => 
    carName.length <= 5 && 
    carName.length >= 1 && 
    /^[a-zA-Z]*$/.test(carName)
  );

  if (validCarNames.length !== carNames.length) {
    throw new Error(messages.CAR_NAMES_ERROR);
  }

  return true;
};