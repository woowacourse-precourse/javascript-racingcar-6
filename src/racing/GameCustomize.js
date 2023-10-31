import { Console } from "@woowacourse/mission-utils";
import { GAME_MESSEAGE } from "../constants/Messeage.js";
import Exception from "../exception/Exception.js";

export const getPlayersName = async () => {
  const playersArray = await Console.readLineAsync(`${GAME_MESSEAGE.inputName}\n`);

  const checkError = new Exception();
  checkError.name(playersArray);

  return playersArray.split(',');
};

export const getAttemptNumber = async () => {
  const attemptNumber = await Console.readLineAsync(`${GAME_MESSEAGE.inputAttempt}\n`);
  
  const checkError = new Exception();
  checkError.attemptNumber(attemptNumber);
  
  Console.print('');

  return Number(attemptNumber);
};
