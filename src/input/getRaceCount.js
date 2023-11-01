import { Console } from "@woowacourse/mission-utils";
import { messages } from "../output/messages.js";

export default async function getRaceCount(){
  let userInput;
  try {
    userInput = await Console.readLineAsync(messages.TOTAL_RACE_COUNT_QUESTION);
  } catch (error) {
    throw new Error(messages.INPUT_ERROR);
  }

  if (isValidRaceCount(userInput)) {
    return userInput;
  }    
};

const isValidRaceCount = (userInput) => {
  if (!/^[1-9]+$/.test(userInput)) {
    throw new Error(messages.TOTAL_RACE_COUNT_ERROR);
  }
  
  return true;
};