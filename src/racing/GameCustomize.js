import { Console } from "@woowacourse/mission-utils";
import { GAME_MESSEAGE } from "../constants/Messeage.js";
import Error from "../error/Error.js";

export const getPlayersName = async () => {
  const playersArray = await Console.readLineAsync(`${GAME_MESSEAGE.inputName}\n`);

  const checkError = new Error();
  checkError.name(playersArray);

  return playersArray.split(',');
}

export const getAttemptNumber = async () => {
  const attemptNumber = await Console.readLineAsync(`${GAME_MESSEAGE.inputAttempt}\n`);
  
  const checkError = new Error();
  checkError.attempt(attemptNumber);
  
  Console.print('');

  return Number(attemptNumber);
}

